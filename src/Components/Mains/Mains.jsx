

import { useState } from "react";
import Main from "../Main/Main";
import PropTypes from 'prop-types';
 
const Mains = ({ allData,handleChoosePlayerBtn  }) => {
    // console.log(data)
       const [hidden,setHidden]=useState(false)
    return (
        <div>
            <div className="flex justify-between w-10/12 mx-auto mt-20">
                <div>
                    <h2 className="text-3xl font-bold">Available Players</h2>
                </div>
                <div>
                    <button className="px-4 py-2 bg-green-300 border rounded"  >Available</button>
                    <button className="px-4 py-2 border rounded" onClick={()=>setHidden(!hidden)} >Selected</button>
                </div>
            </div>
            <div className="w-10/12 mx-auto border pb-[25vh]">

                <div className={`grid justify-center grid-cols-3 ${hidden?"hidden": ' '}` }>
                    {allData.map((data, index) =>
                        <Main data={data} key={index}  handleChoosePlayerBtn={handleChoosePlayerBtn}></Main>
                    )}
                </div>

            </div>
        </div>
    );
};

Mains.propTypes = {
    allData: PropTypes.array.isRequired,
    handleChoosePlayerBtn:PropTypes.func.isRequired
}
export default Mains;