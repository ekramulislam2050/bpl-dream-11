import PropTypes from "prop-types"
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
 
 


const Main = ({data,handleChoosePlayerBtn}) => {
    // console.log(data)
    const { playerName, country, playerType, rating, handed, price, imageUrl,id } = data
    return (
      
        <div>
       
            <div className="p-5 m-4 border rounded-2xl">
                <div className="">
                    <img src={imageUrl} alt="" className="rounded-xl" />
                </div>
                <h3 className="flex items-center gap-2 pt-2 font-bold"><FaUser />{playerName}</h3>
                <div className="flex justify-between py-2 border-b-2">
                    <p className="flex items-center gap-2">{<IoFlagSharp />}{country}</p>
                    <button className="px-2 py-1 rounded bg-slate-100">{playerType}</button>
                </div>
                <div>
                    <div className="flex justify-between pt-3">
                        <h4>Rating</h4>
                        <span>{rating}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <h5>Left/Right hand</h5>
                        <p>{handed}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Price : ${price}</p>
                        <button className="px-2 py-1 border rounded" onClick={()=>handleChoosePlayerBtn(data,id)}>Choose Player</button>
                    </div>
                </div>
            </div>
           

        </div>
    );
};
Main.propTypes = {
    data: PropTypes.object.isRequired,
    handleChoosePlayerBtn:PropTypes.func.isRequired
}
export default Main;