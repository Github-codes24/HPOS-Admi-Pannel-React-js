// import { PieChart, Pie, Cell } from 'recharts';

// const ScreeningStatusPieChart = () => {
//     const data = [
//         { name: 'Sickle Cell', value: 15424 },
//         { name: 'Breast Cancer', value: 8001 },
//         { name: 'Cervical Cancer', value: 8001 }
//     ];

//     const COLORS = ['#FFBB28', '#00C49F', '#FF8042'];

//     return (
//         <div className="bg-white p-4 shadow rounded mt-6">
//             <PieChart width={400} height={400}>
//                 <Pie data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" dataKey="value">
//                     {data.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                 </Pie>
//             </PieChart>
//         </div>
//     );
// };

// export default ScreeningStatusPieChart