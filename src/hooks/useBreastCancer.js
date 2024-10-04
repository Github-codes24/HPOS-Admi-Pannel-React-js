import { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import {
  allBreastCancerCountAtom,
  allBreastCancerAtom,
  breastCancerDetailIDAtom,
  breastCancerVisitAtom,
  breastCancerCenterCountAtom,
  submittedBreastCancerAtom
} from '../state/breastCancerState'; // Ensure correct import of atoms
import { toastState } from '../state/toastState';
import useFetch from './useFetch';

const useBreastCancer = () => {
  const [fetchData] = useFetch(); // Custom fetch hook
  const [loading, setLoading] = useState(true); // Loading state
  const [errors, setErrors] = useState('');
  const [breastCancerCount, setBreastCancerCount] = useRecoilState(allBreastCancerCountAtom); // Correct atom for count
  const [breastCancerData, setBreastCancerData] = useRecoilState(allBreastCancerAtom); // Correct atom for data
  const [submittedBreastCancer, setSubmittedBreastCancer] = useRecoilState(submittedBreastCancerAtom); // Correct atom for data
  const [modifyBreastCancer, setModifyBreastCancer] = useRecoilState(toastState);
  const [breastCancerDetails, setBreastCancerDatails] = useRecoilState(breastCancerDetailIDAtom);
  const [breastCancerVisit, setBreastCancerVisit] = useRecoilState(breastCancerVisitAtom);
  const [deletePatientData, setDeletePatientData] = useRecoilState(toastState);
  const [centerCountData, setCenterCountData] = useRecoilState(breastCancerCenterCountAtom);

  // Fetch Breast Cancer Patient Count
  const fetchBreastCancerCount = async (fromDate, toDate) => {
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}breastCancer/getAllPatientsCount?fromDate=${fromDate}&toDate=${toDate}` // Correct URL with template literal
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

  const fetchBreastCancerCenterCount = async () => {
    setLoading(true);
    try {
      // Send a GET request to fetch the getAllPatients dropdown data
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}breastCancer/getCenterCountsForBreastCancer`
      }).then((res) => {
        if (res) {
          setCenterCountData(res?.totalData);
        }
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

  const fetchSubmiitedBreastCancer = async () => {
    setLoading(true);
    try {
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}breastCancer/getAllPatientsForSubmittedForBreastCancer`
      }).then((res) => {
        if (res) {
          setSubmittedBreastCancer(res?.totalData);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchSubmittedFilterData = async (filters) => {
    try {
      if (!filters) {
        throw new Error('No filters provided');
      }
      const params = new URLSearchParams(filters).toString();
      const url = `${conf.apiBaseUrl}breastCancer/getAllPatientsForSubmittedForBreastCancer?${params}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSubmittedBreastCancer(data?.totalData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching filter data:', error);
    }
  };

  const fetchBreastCancerById = async (id) => {
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}breastCancer/getBreastCancerPatientById/${id}`
      });
      if (res) {
        setBreastCancerDatails(res?.data);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching branches :', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBreastCancer = async (id, updateData) => {
    setLoading(true);
    try {
      fetchData({
        method: 'PUT',
        url: `${conf.apiBaseUrl}breastCancer/updateBreastCancerPatient/${id}`,
        data: updateData
      }).then((res) => {
        if (res) {
          setModifyBreastCancer(res?.message);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error updating email template:', error);
      setLoading(false);
    }
  };

  const fetchGraphData = async (timeFrame) => {
    try {
      setLoading(true);
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}breastCancer/getPatientCountsForGraphBreastCancer?timeFrame=${timeFrame}`
      });

      if (res) {
        setBreastCancerVisit(res?.totalData);
      } else {
        setErrors('No data found');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching :', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePatient = async (id) => {
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'POST',
        url: `${conf.apiBaseUrl}breastCancer/deleteBreastCancerPatient/${id}`
      });
      if (res) {
        setDeletePatientData(res?.message);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error deleting:', error);
    }
  };

  // Return values and functions
  return {
    fetchAllBreastCancerPatients,submittedBreastCancer, fetchSubmiitedBreastCancer,
    fetchFilterData, fetchSubmittedFilterData,
    breastCancerData, // Breast Cancer patient data
    loading, // Loading state
    breastCancerCount,
    fetchBreastCancerCount, // Fetch count function
    fetchBreastCancerById,
    updateBreastCancer,
    centerCountData,
    breastCancerDetails,
    modifyBreastCancer,
    fetchBreastCancerCenterCount,
    fetchGraphData,
    breastCancerVisit,
    errors,
    deletePatient,
    deletePatientData
  };
};

export default useBreastCancer;
