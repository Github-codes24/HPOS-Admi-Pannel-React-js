// allCandidateDataAtom
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import { allCandidateDataAtom, allCandidatesCountAtom } from '../state/candidateData';
import useFetch from './useFetch';

const useCandidates = () => {
  const [fetchData] = useFetch();
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useRecoilState(allCandidateDataAtom);
  // const [totalCount, setTotalCount] = useRecoilState(0)
  const [candidateCount, setCandidateCount] = useRecoilState(allCandidatesCountAtom);

  const fetchCandidateCount = async () => {
    setLoading(true);
    try {
      await fetchData({ method: 'GET', url: `${conf.apiBaseUrl}admin/getAllPatientsCount` })
        .then((res) => {
          if (res) {
            setCandidateCount(res);
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error fetching getAllPatients:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchAllCandidates = async () => {
    setLoading(true);
    try {
      // Send a GET request to fetch the getAllPatients dropdown data
      await fetchData({ method: 'GET', url: `${conf.apiBaseUrl}admin/getAllPatients` })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log('res', res);
          if (res) {
            setCandidates(res?.totalData);
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Error fetching getAllPatients:', error);
        })
        .finally(() => {
          // Set loading state to false to indicate that the asynchronous operation is complete.
          setLoading(false);
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchFilterData = async (filters) => {
    try {
      // Ensure filters are defined
      if (!filters) {
        throw new Error('No filters provided');
      }
      // Construct query parameters from filters
      const params = new URLSearchParams(filters).toString();
      const url = `${conf.apiBaseUrl}admin/getAllPatients?${params}`;

      const response = await fetch(url, {
        method: 'GET', // Ensure the method is GET
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setCandidates(data?.totalData); // Ensure you have setCandidates properly defined
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching filter data:', error);
    }
  };

  return {
    fetchAllCandidates,
    fetchFilterData,
    candidates,
    loading,
    fetchCandidateCount,
    candidateCount
  };
};
export default useCandidates;
