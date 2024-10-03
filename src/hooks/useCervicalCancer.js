import { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import {
  allCervicalCancerCountAtom,
  allCervicalCancerDataAtom,
  cervicalCancerCenterCountAtom,
  cervicalCancerDetailIDAtom,
  cervicalCancerVisitAtom
} from '../state/cervicalCancerState';
import { toastState } from '../state/toastState';
import useFetch from './useFetch';

const useCervicalCancer = () => {
  const [fetchData] = useFetch();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');
  const [cervicalCancerData, setCervicalCancerData] = useRecoilState(allCervicalCancerDataAtom);
  const [cervicalCancerCount, setCervicalCancerCount] = useRecoilState(allCervicalCancerCountAtom);
  const [modifyCervicalCancer, setModifyCervicalCancer] = useRecoilState(toastState);
  const [cervicalCancerDetails, setCervicalCancerDatails] = useRecoilState(
    cervicalCancerDetailIDAtom
  );
  const [cervicalCancerVisit, setCervicalCancerVisit] = useRecoilState(cervicalCancerVisitAtom);
  const [deletePatientData, setDeletePatientData] = useRecoilState(toastState);
  const [centerCountData, setCenterCountData] = useRecoilState(cervicalCancerCenterCountAtom);

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
      await fetchData({ method: 'GET', url: `${conf.apiBaseUrl}cervical/getAllPatients` }).then(
        (res) => {
          if (res) {
            setCervicalCancerData(res?.data);
          }
        }
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchCervicalCancerCenterCount = async () => {
    setLoading(true);
    try {
      // Send a GET request to fetch the getAllPatients dropdown data
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}cervical/getCenterCountsForCervicalCancer`
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

  const fetchCervicalCancerById = async (id) => {
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}cervical/getCervicalCancerPatientById/${id}`
      });
      if (res) {
        setCervicalCancerDatails(res?.data);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching branches :', error);
    } finally {
      setLoading(false);
    }
  };

  const updateCervicalCancer = async (id, updateData) => {
    setLoading(true);
    try {
      fetchData({
        method: 'PUT',
        url: `${conf.apiBaseUrl}cervical/updateCervicalCancerPatient/${id}`,
        data: updateData
      }).then((res) => {
        if (res) {
          setModifyCervicalCancer(res?.message);
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
        url: `${conf.apiBaseUrl}cervical/getPatientCountsForGraphForCervicalCancer?timeFrame=${timeFrame}`
      });

      if (res) {
        setCervicalCancerVisit(res?.totalData);
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
        url: `${conf.apiBaseUrl}cervical/deleteCervicalCancerPatient/${id}`
      });
      if (res) {
        setDeletePatientData(res?.message);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error deleting:', error);
    }
  };

  return {
    fetchAllCervicalCancer,
    cervicalCancerData,
    fetchFilterData,
    loading,
    cervicalCancerCount,
    fetchCervicalCancerCount,
    fetchCervicalCancerById,
    cervicalCancerDetails,
    modifyCervicalCancer,
    updateCervicalCancer,
    fetchGraphData,
    cervicalCancerVisit,
    centerCountData,
    errors,
    fetchCervicalCancerCenterCount,
    deletePatient,
    deletePatientData
  };
};

export default useCervicalCancer;
