import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import conf from '../config/index';
import { userAuthState } from '../state/isAuthenticatedAtom';
import { AlertContentState, AlertState } from '../state/toastState';
import useFetch from './useFetch';

export const useSignIn = () => {
  const navigate = useNavigate();
  const setAlertContent = useSetRecoilState(AlertContentState);
  const setAlertState = useSetRecoilState(AlertState);
  const [fetchData] = useFetch();
  const setUserInfo = useSetRecoilState(userAuthState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [signInResponse, setSignInResponse] = useState(null);
  // userName
  const signIn = async (userName, password) => {
    const data = { userName, password };
    setLoading(true);
    try {
      const url = new URL(`${conf.apiBaseUrl}admin/login`);
      const res = await fetchData({ method: 'POST', url: url.toString(), data });
      console.log('res', res);

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
    error,
    resetUserAndAdmin
  };
};
