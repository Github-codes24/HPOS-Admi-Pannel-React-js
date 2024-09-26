import { useState, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import conf from "../config/index";
import { candidateDataAtom } from '../state/candidateData';
import useFetch from './useFetch';

export const useCandidate = () => {
  const [fetchData] = useFetch();
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState < boolean > (true);
  const [error, setError] = useState < string > ('');

  const fetchCandidates = useCallback(async => {
    setLoading(true);

    try {
      const res = await fetchData({
        method: "GET",
        url: `${conf.apiBaseUrl}`
      });

      if (res) {
        setLoading(false);
      } else {
        setError("No data found");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching:", error);
      setLoading(false);
    }
  }, [fetchData]);

  return { fetchCandidates, loading, error };

};