 
 import logo from "../../assets/image/logo.png"

const Headers = () => {
    return (
        <div className="">
             <div className="flex justify-between items-center bg-white">
                <div className="">
                     <img src={logo} alt="logo" />
                </div>
                 <ul className="flex items-center">
                    <li className="mr-8 ">Home</li>
                    <li className="mr-8 ">Picture</li>
                    <li className="mr-8 ">Team</li>
                    <li className="mr-8 ">Schedules</li>
                    <li className="mr-8"><button className="mx-4 border rounded px-8 py-2">Coin</button></li>
                 </ul>
                
             </div>
        </div>
    );
};

export default Headers;
 