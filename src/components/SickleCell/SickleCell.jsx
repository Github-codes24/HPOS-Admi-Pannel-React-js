import React from 'react'
import HeaderSickel from './HeaderSickel'
import TopStatImages from './TopStatImages'
import Sidebar from '../Sidebar'
import PatientVisitChart from '../VisitGraph'
import CenterCountSickel from './CenterCountSickel'
import ScreeningDataSickel from './ScreeningDataSickel'
import CandidateVisitChartSickel from './CandidateVisitChartSickel'
import ReportSickel from './ReportSickel'

const SickleCell = () => {
  return (
    <>
      <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gray-100 p-4">
                <HeaderSickel/>
                <div className="flex justify-between">
                    <div className=' w-[40rem]'>
                       <TopStatImages/>
                       <ReportSickel/>
                       <CandidateVisitChartSickel/>
                      
                        
                    </div>
                   

                    <CenterCountSickel/>
                    {/* <ScreeningStatusPieChart /> */}
                </div>
              
                <ScreeningDataSickel/>
            </div>
        </div>
  
    
    </>
  )
}

export default SickleCell