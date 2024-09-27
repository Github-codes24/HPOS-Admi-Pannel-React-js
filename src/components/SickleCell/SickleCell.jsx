import React from 'react'
import HeaderSickel from './HeaderSickel'
import TopStatImages from './TopStatImages'
import Sidebar from '../Sidebar'
import PatientVisitChart from '../VisitGraph'
import PatientData from '../DataTable'
import ScreeningDataSickel from './ScreeningDataSickel'

const SickleCell = () => {
  return (
    <>
      <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gray-100 p-4">
                <HeaderSickel/>
                <div className="flex justify-between">
                    <div className=''>
                       <TopStatImages/>
                        <PatientVisitChart />
                    </div>
                    {/* <CenterCount /> */}
                    {/* <ScreeningStatusPieChart /> */}
                </div>
                {/* <PatientData /> */}
                <ScreeningDataSickel/>
            </div>
        </div>
  
    
    </>
  )
}

export default SickleCell