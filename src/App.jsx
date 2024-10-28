import Favicon from "react-favicon";
import './App.css'
import { useEffect, useState } from "react";
import Headers from "./Components/Headers/Headers";
import Banners from "./Components/Banners/Banners";
import Mains from "./Components/Mains/Mains";
import Footers from "./Components/Footers/Footers";




function App() {
  // states here-------------------
  const [allData, setAllData] = useState([])


  // all data fetch ---------------------
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("playersData.json")
      const data = await res.json()
      // console.log(data)
      setAllData(data)
    }
    dataFetch()
  }, [])
  // handle Credit Btn------------------
  const handleCreditBtn = () => {
         let x = 0
        if(allData.length <12){
            console.log(x+1)
        }
}




return (
  <>
    <Favicon url="https://i.ibb.co.com/KGdk8wg/cricket-1.png"></Favicon>

    <div className="sticky top-0 z-50">
      <Headers></Headers>
    </div>

    <Banners handleCreditBtn={handleCreditBtn}></Banners>

    <Mains allData={allData} ></Mains>


    <Footers></Footers>







  </>
)
}

export default App
