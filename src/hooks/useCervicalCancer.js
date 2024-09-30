import { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import {
  allCervicalCancerCountAtom,
  allCervicalCancerDataAtom
} from '../state/cervicalCancerState';
import useFetch from './useFetch';

const useCervicalCancer = () => {
  const [fetchData] = useFetch();
  const [loading, setLoading] = useState(true);
  const [cervicalCancerData, setCervicalCancerData] = useRecoilState(allCervicalCancerDataAtom);
  const [cervicalCancerCount, setCervicalCancerCount] = useRecoilState(allCervicalCancerCountAtom);

  const fetchCervicalCancerCount = async (fromDate, toDate) => {
    // eslint-disable-next-line no-console
    console.log('params', fromDate, toDate);
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}cervical/getAllPatientsCount?fromDate=${fromDate}&toDate=${toDate}`
      });
      // eslint-disable-next-line no-console
      console.log('cervical count', res);

      if (res) {
        setCervicalCancerCount(res);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllCervicalCancer = async () => {
    setLoading(true);
    try {
      await fetchData({ method: 'GET', url: `${conf.apiBaseUrl}cervical/getAllPatients` })
        .then((res) => {
          if (res) {
            setCervicalCancerData(res?.data);
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
      const url = `${conf.apiBaseUrl}cervical/getAllPatients?${params}`;

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
      setCervicalCancerData(data?.data); // Ensure you have setCandidates properly defined
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching filter data:', error);
    }
  };

  return {
    fetchAllCervicalCancer,
    cervicalCancerData,
    fetchFilterData,
    loading,
    cervicalCancerCount,
    fetchCervicalCancerCount
  };
};

export default useCervicalCancer;
