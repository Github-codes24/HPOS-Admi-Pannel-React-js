import first from '../assets/1.png'
import second from '../assets/2.png'
import third from '../assets/3.png'
import fourth from '../assets/4.png'
const Header = () => {
    return (
        <div className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div>
                <h1 className="text-lg">Generate Dashboard</h1>
                <div className="flex gap-2 mt-2">
                    <h1 className="font-bold my-1">To</h1>
                    <input
                        className="bg-gray-200 border-2 h-8 border-gray-300 rounded-lg" type="date" placeholder="" />
                    <h1 className="font-bold my-1">From</h1>
                    <input
                        className="bg-gray-200 border-2 h-8 border-gray-300 rounded-lg"
                        type="date" placeholder="" />

                    <h1 className="text-sm bg-blue-100 ml-2 rounded-lg p-1">Export Info PDF</h1>
                </div>
            </div>
        </div>
    );
};

export const TopStats = () => {
    const stats = [
        { img: `${first}`, title: 'Total', value: '23,425', color: 'bg-white' },
        { img: `${second}`, title: 'Sickle Cell', value: '15,424', color: 'bg-white' },
        { img: `${third}`, title: 'Breast Cancer', value: '8,001', color: 'bg-white' },
        { img: `${fourth}`, title: 'Cervical Cancer', value: '8,001', color: 'bg-white' }
    ];

    return (
        <div className="flex grid-cols-4 gap-5 mt-6">
            {stats.map((stat, index) => (
                <div key={index} className={`p-4 ${stat.color} rounded shadow w-36`}>
                    <img className='my-2' src={stat.img} alt="" />
                    <h2 className="text-md text-slate-400 my-2 font-semibold">{stat.title}</h2>
                    <p className="text-3xl my-2">{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default Header