// allCandidateDataAtom
import { useState, useCallback } from 'react';
import useFetch from './useFetch';
import conf from "../config/index";
import { useRecoilState } from 'recoil';
import { allCandidateDataAtom, allCandidatesCountAtom } from '../state/candidateData';

const useCandidates = () => {
  const [fetchData] = useFetch();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useRecoilState(allCandidateDataAtom);
  // const [totalCount, setTotalCount] = useRecoilState(0)
  const [candidateCount, setCandidateCount] = useRecoilState(allCandidatesCountAtom)

  const fetchCandidateCount = async () => {
    setLoading(true);
    try {
      await fetchData({ method: "GET", url: `${conf.apiBaseUrl}admin/getAllPatientsCount` })
        .then((res) => {
          console.log('Count res', res)
          if (res) {
            setCandidateCount(res);
          }
        })
        .catch((error) => {
          console.error("Error fetching getAllPatients:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error("Error fetching getAllPatients:", error);
    }
  }

  const fetchAllCandidates = async () => {
    setLoading(true);
    try {
      // Send a GET request to fetch the getAllPatients dropdown data
      await fetchData({ method: "GET", url: `${conf.apiBaseUrl}admin/getAllPatients` })
        .then((res) => {
          console.log('res', res)
          if (res) {
            // setTotalCount(res?.totalCount)
            setCandidates(res?.totalData);
          }
        })
        .catch((error) => {
          // If there is an error fetching the getAllPatients, log the error
          console.error("Error fetching getAllPatients:", error);
        })
        .finally(() => {
          // Set loading state to false to indicate that the asynchronous operation is complete.
          setLoading(false);
        });
    } catch (error) {
      // If there is an error fetching the getAllPatients, log the error
      console.error("Error fetching getAllPatients:", error);
    }
  }

  return { fetchAllCandidates, candidates, error, loading, fetchCandidateCount, candidateCount}
}
export default useCandidates;