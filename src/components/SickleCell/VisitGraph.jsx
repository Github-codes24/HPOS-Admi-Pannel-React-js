import React, { useEffect, useState } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import useSickleCell from '../../hooks/useSickleCell';

const VisitGraph = () => {
    const [showGraph, setShowGraph] = useState(true);
    const { fetchGraphData, sickleCellVisit, loading, errors} = useSickleCell();
    console.log('sickleCellVisit', sickleCellVisit);
    const [graphData, setGraphData] = useState([]);
    const [timeFrame, setTimeFrame] = useState("monthly"); 
    useEffect(() => {
        if (showGraph) {
            console.log('Fetching data for timeFrame:', timeFrame);
            fetchGraphData(timeFrame);
        }
    }, [timeFrame, showGraph]);

    const getWeeklyData = (data) => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const weeklyData = daysOfWeek.map(day => {
            const found = data.find(entry => entry.dayName === day);
            return {
                dayName: day,
                totalCount: found ? found.totalCount : 0,
            };
        });
        return weeklyData;
    };

    const getMonthlyData = (data) => {
        const monthsOfYear = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
            'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        
        const monthlyData = monthsOfYear.map(month => {
            const found = data.find(entry => entry.time === month);
            return {
                month,
                totalCount: found ? found.totalCount : 0 // Use totalCount from the data, or set 0 if not found
            };
        });
        return monthlyData;
    };

    const getDailyData = (data) => {
        const hoursOfDay = [
            "12AM", "1", "2", "3", "4", "5", "6", "7", 
            "8", "9", "10", "11", "12PM", "1", "2", "3", 
            "4", "5", "6", "7", "8", "9", "10", "11", "12AM"
        ];
        const dailyData = hoursOfDay.map(hour => {
            const found = data.find(entry => entry.time === hour);
            return {
                time: hour,
                totalCount: found ? found.totalCount : 0
            };
        });
        return dailyData;
    };

    useEffect(() => {
        if (sickleCellVisit.length > 0) {
            if (timeFrame === 'weekly') {
                setGraphData(getWeeklyData(sickleCellVisit));
            } else if (timeFrame === 'monthly') {
                setGraphData(getMonthlyData(sickleCellVisit));
            } else if (timeFrame === 'daily') {
                setGraphData(getDailyData(sickleCellVisit));
            }
        }
    }, [sickleCellVisit, timeFrame]);

    const handleGraphToggle = (e) => {
        const selectedValue = e.target.value;
        console.log('Selected graph toggle option:', selectedValue);
        setShowGraph(selectedValue === "View Graph");
    };

    const handleSortChange = (e) => {
        const selectedTimeFrame = e.target.value.toLowerCase();  
        console.log('Selected sort option:', selectedTimeFrame);  
        setTimeFrame(selectedTimeFrame);
    };

    return (
        <div className="bg-white p-4 shadow rounded mt-6">
            <div className="flex items-center mt-5 justify-between mb-7 gap-2 h-2">
                <h1 className="text-lg flex">Candidate Visit</h1>
                <div className="flex gap-2">
                    <select
                        className="select select-sm select-bordered w-32 text-blue-600 font-bold"
                        onChange={handleGraphToggle}
                    >
                        <option>View Graph</option>
                        <option>Hide Graph</option>
                    </select>
                </div>
            </div>

            {showGraph && (
                <>
                    <h2 className="text-md flex mb-4">Candidate Visit</h2>
                    <div className="flex gap-2 mb-4">
                        <h1 className="flex items-center">Sort By</h1>
                        <select
                            className="select select-sm select-bordered w-32 text-blue-600 font-bold"
                            onChange={handleSortChange}
                        >
                            <option value="monthly">Monthly</option>
                            <option value="weekly">Weekly</option>
                            <option value="daily">Daily</option>
                        </select>
                    </div>

                    {loading ? (
                        <p>Loading...</p>
                    ) : errors ? (
                        <p>Error fetching data: {errors}</p>
                    ) : (
                        <AreaChart
                            width={600}
                            height={250}
                            data={graphData} // Use transformed data
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey={timeFrame === 'weekly' ? 'dayName' : timeFrame === 'monthly' ? 'month' : 'time'} 
                            interval={0}
                            />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="totalCount" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        </AreaChart>
                    )}
                </>
            )}
        </div>
    );
};

export default VisitGraph;
