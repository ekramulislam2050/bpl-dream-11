 
import bannerImg from "../../assets/image/bg-shadow.png"
import bannerLogo from "../../assets/image/banner-main.png"
import PropTypes from "prop-types"
 


const Banners = ( {handleCreditBtn}) => {
   
    return (

        <div >
               <div  >
                    <div className="relative w-10/12 mx-auto mt-10">
                        <img src={bannerImg} alt="" className="w-full bg-black rounded-3xl" />
                        <div style={{ position: 'absolute', left: '50%', top: '20%', transform: "translate(-50%,-50%) " }} className="" >
                            <img src={bannerLogo} alt="" />
                        </div>

                    </div>
                    <div className="text-center " style={{ position: 'absolute', left: '50%', top: '50%', transform: "translate(-50%,-50%)" }}>
                        <h1 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="my-3 text-lg text-center text-white opacity-60">Beyond Boundaries Limit</p>

                        <button className="px-3 py-2 text-black bg-green-300 rounded-md" onClick={handleCreditBtn}  >Claim Free Credit</button>

                    </div>
                </div>
        
        </div>
    );
};
Banners.propTypes ={
    handleCreditBtn:PropTypes.func.isRequired
}
export default Banners;




