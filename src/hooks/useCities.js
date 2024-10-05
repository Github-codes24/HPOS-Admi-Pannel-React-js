import { useState } from 'react';
import { useRecoilState } from 'recoil';
import conf from '../config/index';
import { getAllCitiesAtom } from '../state/citiesState';
import useFetch from './useFetch';

const useCities = () => {
  const [fetchData] = useFetch();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState('');
  const [getCities, setGetCities] = useRecoilState(getAllCitiesAtom);

  const fetchCities = async () => {
    setLoading(true);
    try {
      // Send a GET request to fetch the getAllPatients dropdown data
      await fetchData({
        method: 'GET',
        url: `${conf.apiBaseUrl}admin/getCities`
      }).then((res) => {
        if (res) {
          setGetCities(res?.data);
        } else {
          setErrors(errors);
        }
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching getAllPatients:', error);
    }
  };

  return { getCities, fetchCities, loading, errors };
};

export default useCities;
