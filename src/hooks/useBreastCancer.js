import { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import { allBreastCancerCountAtom, allBreastCancerAtom } from '../state/breastCancerState'; // Ensure correct import of atoms
import useFetch from './useFetch';

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
        url: `${conf.apiBaseUrl}breastCancer/getAllPatientsCount` // Correct URL with template literal
      });
      if (res) {
        setBreastCancerCount(res); // Set the count from response
      }
    } catch (error) {
      // eslint-disable-next-line no-console
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
        url: `${conf.apiBaseUrl}breastCancer/getAllPatients` // Correct URL for fetching data
      });
      if (res) {
        setBreastCancerData(res?.data); // Set the fetched patient data
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    } finally {
      setLoading(false);
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
      const url = `${conf.apiBaseUrl}breastCancer/getAllPatients?${params}`;

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
      setBreastCancerData(data?.data); // Ensure you have setCandidates properly defined
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching filter data:', error);
    }
  };

  // Return values and functions
  return {
    fetchAllBreastCancerPatients, // Fetch data function
    fetchFilterData,
    breastCancerData, // Breast Cancer patient data
    loading, // Loading state
    breastCancerCount, // Breast Cancer count
    fetchBreastCancerCount // Fetch count function
  };
};

export default useBreastCancer;
