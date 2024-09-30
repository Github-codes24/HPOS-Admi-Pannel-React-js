import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import useFetch from './useFetch';
import { allBreastCancerCountAtom, allBreastCancerAtom } from '../state/breastCancerState'; // Ensure correct import of atoms

const useBreastCancer = () => {
  const [fetchData] = useFetch(); // Custom fetch hook
  const [loading, setLoading] = useState(true); // Loading state
  const [breastCancerCount, setBreastCancerCount] = useRecoilState(allBreastCancerCountAtom); // Correct atom for count
  const [breastCancerData, setBreastCancerData] = useRecoilState(allBreastCancerAtom); // Correct atom for data

  // Fetch Breast Cancer Patient Count
  const fetchBreastCancerCount = async () => {
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}breastCancer/getAllPatientsCount`, // Correct URL with template literal
      });
      if (res) {
        setBreastCancerCount(res); // Set the count from response
      }
    } catch (error) {
      console.error('Error fetching getAllPatientsCount:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch All Breast Cancer Data
  const fetchAllBreastCancerPatients = async () => {
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}breastCancer/getAllPatients`, // Correct URL for fetching data
      });
      if (res) {
        setBreastCancerData(res?.data); // Set the fetched patient data
      }
    } catch (error) {
      console.error('Error fetching getAllPatients:', error);
    } finally {
      setLoading(false);
    }
  };

  // Return values and functions
  return {
    fetchAllBreastCancerPatients, // Fetch data function
    breastCancerData,             // Breast Cancer patient data
    loading,                      // Loading state
    breastCancerCount,            // Breast Cancer count
    fetchBreastCancerCount        // Fetch count function
  };
};

export default useBreastCancer;