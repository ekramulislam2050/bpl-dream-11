import { data } from "autoprefixer";


const Mains = ({allData}) => {
    // console.log(data)
    
    return (
        <div>
            <div className="flex justify-between w-10/12 mx-auto mt-20">
                <div>
                    <h2 className="text-3xl font-bold">Available Players</h2>
                </div>
                <div>
                    <button className="px-4 py-2 bg-green-300 border rounded">Available</button>
                    <button className="px-4 py-2 border rounded">Selected</button>
                </div>
            </div>
            <div className="w-10/12 mx-auto border">
             
               {allData.map((data,index)=>  
               <div key={index}></div>
            )}
               
            </div>
        </div>
    );
};

export default Mains;