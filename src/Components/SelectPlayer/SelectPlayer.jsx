import PropTypes from "prop-types"
import { MdDeleteForever } from "react-icons/md";
const SelectPlayer = ({data,handleDeleteBtn}) => {
          const {imageUrl,id}=data
    //   console.log(imageUrl)
    return (
        <div>
            
            <div className="flex items-center justify-between w-10/12 p-5 mx-auto mt-20 rounded-xl bg-slate-200">
                <div className="w-[100px] h-[100px] my-auto ">
                    <img src={imageUrl} alt="" className="w-full h-full rounded-full" />
                </div>
                <div>
                    <button className="text-4xl text-red-400" onClick={()=>handleDeleteBtn(id)}><MdDeleteForever /></button>
                </div>
            </div>
        </div>
    );
};
SelectPlayer.propTypes = {
    data: PropTypes.object.isRequired,
    handleDeleteBtn:PropTypes.func.isRequired
}
export default SelectPlayer;