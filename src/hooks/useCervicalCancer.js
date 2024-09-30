import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import useFetch from './useFetch';
import { allCervicalCancerCountAtom, allCervicalCancerDataAtom } from '../state/cervicalCancerState';

const useCervicalCancer = () => {
  const [fetchData] = useFetch();
  const [loading, setLoading] = useState(true);
  const [cervicalCancerData, setCervicalCancerData] = useRecoilState(allCervicalCancerDataAtom);
  const [cervicalCancerCount, setCervicalCancerCount] = useRecoilState(allCervicalCancerCountAtom);

  const fetchCervicalCancerCount = async (fromDate, toDate) => {
    console.log('params', fromDate, toDate)
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}cervical/getAllPatientsCount?fromDate=${fromDate}&toDate=${toDate}`,
      });
      console.log('cervical count', res)

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

  return { fetchAllCervicalCancer, cervicalCancerData, loading, cervicalCancerCount, fetchCervicalCancerCount }
}

export default useCervicalCancer