import { TbCoinBitcoinFilled } from "react-icons/tb";
import logo from "../../assets/image/logo.png"

const Headers = () => {
    return (
        <div className="">
            <div className="bg-white opacity-85">
                <div className="flex items-center justify-between w-10/12 py-5 mx-auto">
                    <div >
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="flex items-center">
                        <li className="mr-8 ">Home</li>
                        <li className="mr-8 ">Picture</li>
                        <li className="mr-8 ">Team</li>
                        <li className="mr-8 ">Schedules</li>
                        <li className="mr-8"><button className="flex items-center gap-2 px-8 py-2 mx-4 border rounded">Coin <span className="text-xl text-orange-400"> <TbCoinBitcoinFilled /></span></button></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Headers;
