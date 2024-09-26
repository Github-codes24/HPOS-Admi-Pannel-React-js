// Assuming you are using TypeScript, add proper return types for these functions
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import conf from '../config/index';
import { userAuthState } from '../state/isAuthenticatedAtom';
import { AlertContentState, AlertState } from '../state/toastState';
import useFetch from './useFetch';

// @typescript-eslint/explicit-function-return-type
export const useSignIn = () => {
  const navigate = useNavigate();
  const setAlertContent = useSetRecoilState(AlertContentState);
  const setAlertState = useSetRecoilState(AlertState);
  const [fetchData] = useFetch();
  const setUserInfo = useSetRecoilState(userAuthState);
  const [loading, setLoading] = useState(false);
  const [signInResponse, setSignInResponse] = useState(null);

  const signIn = async (userName, password) => {
    const data = { userName, password };
    setLoading(true);
    try {
      const url = new URL(`${conf.apiBaseUrl}admin/login`);
      const res = await fetchData({ method: 'POST', url: url.toString(), data });

      if (res) {
        setSignInResponse(res);

        // Store the token and user info
        sessionStorage.setItem('token', res?.data?.token);

        setUserInfo({
          isAuthenticated: true
        });

        setAlertContent({
          type: 'success',
          title: 'Success',
          message: res?.message
        });
        setAlertState(true);

        // Navigate to the dashboard
        navigate('/dashboard');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching Sign in:', error);
      setLoading(false);
    }
  };

  const resetUserAndAdmin = () => {
    setSignInResponse(null);
  };

  return {
    signIn,
    signInResponse,
    loading,
    resetUserAndAdmin
  };
};
