
import second from '../../assets/2.png'
import third from '../../assets/3.png'

 const TopStatImages = () => {
    const stats = [
        { img: `${second}`, title: 'Total', value: '23,425', color: 'bg-white' },
        { img: `${second}`, title: 'Male', value: '15,424', color: 'bg-white' },
        { img: `${third}`, title: 'Female', value: '8,001', color: 'bg-white' },
        // { img: `${fourth}`, title: 'Cervical Cancer', value: '8,001', color: 'bg-white' }
    ];

    return (
        <div className="flex grid-cols-3 gap-4 mt-6">
            {stats.map((stat, index) => (
                <div key={index} className={`p-4 ${stat.color} rounded shadow w-48`}>
                    <img className='my-2' src={stat.img} alt="" />
                    <h2 className="text-md text-slate-400 my-2 font-semibold">{stat.title}</h2>
                    <p className="text-3xl my-2">{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default TopStatImages