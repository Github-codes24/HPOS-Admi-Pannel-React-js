import React, {useState} from 'react'
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import useFetch from './useFetch';
import { allCandidateDataAtom, allSickleCellCountAtom } from '../state/sickleCellState';

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
              console.log('sickleCell res', res);
              if (res) {
                setSickleCellData(res?.data);
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

    return{fetchAllSickleCell, sickleCellData, loading, sickleCellCount, fetchSickleCellCount }
}

export default useSickleCell