import React, { useEffect } from 'react'
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'
import useSickleCell from '../../hooks/useSickleCell'
import { useNavigate } from 'react-router-dom'

const CountingData = () => {
  const { fetchSickleCellCount, sickleCellCount } = useSickleCell();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSickleCellCount( '', '');
}, []);

const onView = () => {
  navigate('/view-sickle-cell');
}

  const stats = [
    { img: `${first}`, title: 'Total', value: sickleCellCount?.totalCount, color: 'bg-white' },
    { img: `${second}`, title: 'Male', value: sickleCellCount?.allMalePatientsCount, color: 'bg-white' },
    { img: `${third}`, title: 'Female', value: sickleCellCount?.allFemalePatientCount, color: 'bg-white' },
    // { img: `${fourth}`, title: 'Cervical Cancer', value: '8,001', color: 'bg-white' }
];
  return (
    <div className="flex grid-cols-4 gap-5 mt-6">
    {stats.map((stat, index) => (
        <div key={index} className={`p-4 ${stat.color} rounded shadow w-36`}
        onClick={stat.title === 'Total' ? onView : null}
        >
            <img className='my-2' src={stat.img} alt="" />
            <h2 className="text-md text-slate-400 my-2 font-semibold">{stat.title}</h2>
            <p className="text-3xl my-2">{stat.value}</p>
        </div>
    ))}
</div>
  )
}

export default CountingData