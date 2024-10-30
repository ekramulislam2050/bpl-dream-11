import PropTypes from "prop-types"
import SelectPlayer from "../SelectPlayer/SelectPlayer";
 
const SelectPlayers = ({ data,handleDeleteBtn }) => {
    //   console.log(data)
 
    return (
        <div id="visible" >

          <SelectPlayer data={data} handleDeleteBtn={handleDeleteBtn}></SelectPlayer>
     
        
    

        </div>
    );
};
SelectPlayers.propTypes = {
    data: PropTypes.object.isRequired,
    handleDeleteBtn:PropTypes.func.isRequired
}
export default SelectPlayers;