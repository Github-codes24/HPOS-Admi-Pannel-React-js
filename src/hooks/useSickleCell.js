import { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import {
  allSickleCellCountAtom,
  sickleCellCenterCountAtom,
  sickleCellDataAtom,
  sickleCellDetailIDAtom,
  sickleCellReportAtom,
  sickleCelVisitAtom,
  submittedSickleCellAtom
} from '../state/sickleCellState';
import { toastState } from '../state/toastState';
import useFetch from './useFetch';

const useSickleCell = () => {
  const [fetchData] = useFetch();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');
  const [sickleCellData, setSickleCellData] = useRecoilState(sickleCellDataAtom);
  const [submittedSickleCell, setSubmittedSickleCell] = useRecoilState(submittedSickleCellAtom);
  const [sickleCellCount, setSickleCellCount] = useRecoilState(allSickleCellCountAtom);
  const [modifySickleCell, setModifySickleCell] = useRecoilState(toastState);
  const [sickleCellDetails, setSickleCellDatails] = useRecoilState(sickleCellDetailIDAtom);
  const [sickleCellReport, setSickleCellReport] = useRecoilState(sickleCellReportAtom);
  const [sickleCellVisit, setSickleCelVisit] = useRecoilState(sickleCelVisitAtom);
  const [deletePatientData, setDeletePatientData] = useRecoilState(toastState);
  const [centerCountData, setCenterCountData] = useRecoilState(sickleCellCenterCountAtom);

  const fetchSickleCellCount = async () => {
    setLoading(true);
    try {
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}sickleCell/getAllPatientsCount`
      }).then((res) => {
        if (res) {
          setSickleCellCount(res);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchAllSickleCell = async () => {
    setLoading(true);
    try {
      await fetchData({ method: 'GET', url: `${conf.apiBaseUrl}sickleCell/getAllPatients` }).then(
        (res) => {
          // eslint-disable-next-line no-console
          console.log('sickleCell res', res);
          if (res) {
            setSickleCellData(res?.data);
          }
        }
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchSickleCellCenterCount = async () => {
    setLoading(true);
    try {
      // Send a GET request to fetch the getAllPatients dropdown data
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}sickleCell/getCenterCountsForSickleCellCancer`
      }).then((res) => {
        if (res) {
          setCenterCountData(res);
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

  const fetchSubmiitedSickleCell = async () => {
    setLoading(true);
    try {
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}sickleCell/getAllPatientsForSubmittedForSickleCellCancer`
      }).then((res) => {
        if (res) {
          setSubmittedSickleCell(res?.totalData);
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
      const url = `${conf.apiBaseUrl}sickleCell/getAllPatientsForSubmittedForSickleCellCancer?${params}`;

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
      setSubmittedSickleCell(data?.totalData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching filter data:', error);
    }
  };


  const fetchSickleCellById = async (id) => {
    setLoading(true);
    try {
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}sickleCell/getSickleCellPatientById/${id}`
      });
      if (res) {
        setSickleCellDatails(res?.data);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching branches :', error);
    } finally {
      setLoading(false);
    }
  };

  const updateSickleCell = async (id, updateData) => {
    setLoading(true);
    try {
      fetchData({
        method: 'PUT',
        url: `${conf.apiBaseUrl}sickleCell/updateSickleCellPatient/${id}`,
        data: updateData
      }).then((res) => {
        if (res) {
          setModifySickleCell(res?.message);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error updating email template:', error);
      setLoading(false);
    }
  };

  const fetchSickleCellReport = async () => {
    setLoading(true);
    try {
      await fetchData({ method: 'GET', url: `${conf.apiBaseUrl}sickleCell/candidatesReport` }).then(
        (res) => {
          // eslint-disable-next-line no-console
          console.log('sickleCell res', res);
          if (res) {
            setSickleCellReport(res);
          }
        }
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  const fetchGraphData = async (timeFrame) => {
    try {
      setLoading(true);
      const res = await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}sickleCell/getPatientCountsForGraphForSickleCellCancer?timeFrame=${timeFrame}`
      });

      if (res) {
        setSickleCelVisit(res?.totalData);
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
        url: `${conf.apiBaseUrl}sickleCell/deleteSickleCellPatient/${id}`
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
    fetchAllSickleCell, fetchSubmittedFilterData, fetchSubmiitedSickleCell,
    fetchFilterData, submittedSickleCell,
    sickleCellData,
    loading,
    sickleCellCount,
    fetchSickleCellCount,
    updateSickleCell,
    modifySickleCell,
    sickleCellDetails,
    fetchSickleCellById,
    sickleCellReport,
    fetchSickleCellReport,
    sickleCellVisit,
    fetchGraphData,
    fetchSickleCellCenterCount,
    centerCountData,
    errors,
    deletePatient,
    deletePatientData
  };
};

export default useSickleCell;
