import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
    const data = [
        { name: 'Jan', visits: 100 },
        { name: 'Feb', visits: 120 },
        { name: 'Mar', visits: 80 },
        { name: 'Apr', visits: 150 },
        { name: 'May', visits: 170 },
    ];

    const pieData = [
        { name: 'Sickle Cell', value: 15424 },
        { name: 'Breast Cancer', value: 8001 },
        { name: 'Cervical Cancer', value: 8001 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <div className="p-8 bg-gray-100 flex-1">
            <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold">Total</h2>
                    <p className="text-3xl">23,425</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold">Sickle Cell</h2>
                    <p className="text-3xl">15,424</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold">Breast Cancer</h2>
                    <p className="text-3xl">8,001</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h2 className="text-lg font-bold">Cervical Cancer</h2>
                    <p className="text-3xl">8,001</p>
                </div>
            </div>

            <div className="bg-white p-4 shadow rounded mb-8">
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="visits" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 shadow rounded">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieData}
                            cx={200}
                            cy={200}
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>

            </div> */}
        </div>
    );
};

export default Dashboard;
