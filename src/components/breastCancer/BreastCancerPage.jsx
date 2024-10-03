import React from 'react';
import TableBreastCancer from './TableBreastCancer';
import VisitGraph from './Visitgraph';
import CountingData from './CountingData';
import CenterCount from './CenterCount'

const BreastCancerPage = () => {

    return (
        <div className="flex bg-gray-100 p-8">
            {/* Main content section */}
            <div className="flex-1">
                <CountingData />
                <VisitGraph />
                <CenterCount/>
                <TableBreastCancer />
            </div>
        </div>
    );
};

export default BreastCancerPage;