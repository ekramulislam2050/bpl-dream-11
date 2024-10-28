import img from "../../assets/image/bg-shadow.png"
import logo from "../../assets/image/logo-footer.png"

const Footers = () => {
    return (
        <div className="">

            <div className="w-10/12 mx-auto bg-black pt-[25vh] ">
                <div className="">
                    <img src={logo} alt="" className="mx-auto " />
                </div>
                <div className="flex justify-between px-5 py-10">
                    <div>
                        <h5 className="font-bold text-white">About Us</h5>
                        <p className="text-white opacity-70">We are passionate team dedicated to providing the best serving to our customer</p>
                    </div>
                    <div>
                        <h5 className="font-bold text-white">Quick Links</h5>
                        <ul  >
                            <li className="text-white opacity-70">Home</li>
                            <li className="text-white opacity-70">Service</li>
                            <li className="text-white opacity-70">About</li>
                            <li className="text-white opacity-70">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-white">Subscribe</h5>
                        <p className="text-white opacity-70">Subscribe to our News latter for the latest updates</p>
                        <input type="text" name="" id="" className="px-2 py-1 rounded bg-slate-100" />
                        <button className="px-2 py-1 bg-green-400 border rounded">Subscribe</button>
                    </div>
                </div>

            </div>
            <div className="w-3/5 h-[400px] text-center" style={{ position: "absolute", top: "342vh", left: "20%", transform: "translateX(-50%,-50%)" }}>
                <img src={img} alt="" className="w-full h-full bg-white rounded-2xl" />
                <div className="" style={{ position: "absolute", top: "20%", left: "35%", transform: "translateX(-50%,-50%)" }}>
                    <h6 className="text-xl font-bold">Subscribe to our Newsletter</h6>
                    <p>Get the latest updates and news right in your inbox !</p>
                    <input type="text" name="" id="" className="px-4 py-3 rounded bg-slate-100" />
                    <button className="px-4 py-3 bg-green-400 border rounded mt-[120px]">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footers;