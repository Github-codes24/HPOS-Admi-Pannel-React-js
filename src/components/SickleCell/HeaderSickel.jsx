
const HeaderSickel = () => {
    return (
        <div className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Sickle Cell</h1>
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


export default HeaderSickel