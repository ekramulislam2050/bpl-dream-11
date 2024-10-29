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
   const [updateIndx,setUpdateIndx]=useState(0)
   const [updateCoin,setUpdateCoin]=useState(0)
  const handleCreditBtn = () => {
          if(updateIndx<allData.length){
          
            const storeDataFromAllData = allData[updateIndx]
            if('coin' in storeDataFromAllData ){
              setUpdateCoin(updateCoin + storeDataFromAllData.coin)
            }
            setUpdateIndx(updateIndx + 1)
          }
          // console.log(updateIndx)
        
  }
 




return (
  <>
    <Favicon url="https://i.ibb.co.com/KGdk8wg/cricket-1.png"></Favicon>

    <div className="sticky top-0 z-50">
      <Headers updateCoin={updateCoin}></Headers>
    </div>

    <Banners handleCreditBtn={handleCreditBtn}></Banners>

    <Mains allData={allData} ></Mains>


    <Footers></Footers>







  </>
)
}

export default App
