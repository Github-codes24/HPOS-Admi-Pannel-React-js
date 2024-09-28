import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './MainDashboard'
import Header, { TopStats } from './Header'
import PatientVisitChart from './VisitGraph'
// import ScreeningStatusPieChart from './PieChart'
import PatientData from './DataTable'
import CenterCount from './CenterCount'

const Home = () => {
    return <>
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-gray-100 p-4">
                <Header />
                <div className="flex justify-between">
                    <div className=''>
                        <TopStats />
                        <PatientVisitChart />
                    </div>
                    <CenterCount />
                </div>
                <PatientData />
            </div>
        </div>
    </>
}

export default Home