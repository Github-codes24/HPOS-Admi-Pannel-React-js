import { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import { allCandidateDataAtom, allSickleCellCountAtom } from '../state/sickleCellState';
import useFetch from './useFetch';

const useSickleCell = () => {
  const [fetchData] = useFetch();
  const [loading, setLoading] = useState(true);
  const [sickleCellData, setSickleCellData] = useRecoilState(allCandidateDataAtom);
  const [sickleCellCount, setSickleCellCount] = useRecoilState(allSickleCellCountAtom);

  const fetchSickleCellCount = async () => {
    setLoading(true);
    try {
      await fetchData({ method: 'GET', url: `${conf.apiBaseUrl}sickleCell/getAllPatientsCount` })
        .then((res) => {
          if (res) {
            setSickleCellCount(res);
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

  const fetchAllSickleCell = async () => {
    setLoading(true);
    try {
      await fetchData({ method: 'GET', url: `${conf.apiBaseUrl}sickleCell/getAllPatients` })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log('sickleCell res', res);
          if (res) {
            setSickleCellData(res?.data);
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

  const fetchFilterData = async (filters) => {
    try {
      // Ensure filters are defined
      if (!filters) {
        throw new Error('No filters provided');
      }
      // Construct query parameters from filters
      const params = new URLSearchParams(filters).toString();
      const url = `${conf.apiBaseUrl}sickleCell/getAllPatients?${params}`;

      const response = await fetch(url, {
        method: 'GET', // Ensure the method is GET
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json(); // Define 'data' here
      setSickleCellData(data?.data); // Ensure you have setCandidates properly defined
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching filter data:', error);
    }
  };

  return {
    fetchAllSickleCell,
    fetchFilterData,
    sickleCellData,
    loading,
    sickleCellCount,
    fetchSickleCellCount
  };
};

export default useSickleCell;
