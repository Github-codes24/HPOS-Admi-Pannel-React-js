import React from 'react';
import TableBreastCancer from './TableBreastCancer';
import VisitGraph from './Visitgraph';
import CountingData from './CountingData';

const BreastCancerPage = () => {

    return (
        <div className="flex bg-gray-100 p-8">
            {/* Main content section */}
            <div className="flex-1">
                <CountingData />
                <VisitGraph />
                <TableBreastCancer />
            </div>
        </div>
    );
};

export default BreastCancerPage;