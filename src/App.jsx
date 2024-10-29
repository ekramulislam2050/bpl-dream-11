import Favicon from "react-favicon";
import './App.css'
import { useEffect, useState } from "react";
import Headers from "./Components/Headers/Headers";
import Banners from "./Components/Banners/Banners";
import Mains from "./Components/Mains/Mains";
import Footers from "./Components/Footers/Footers";
import SelectPlayers from "./Components/SelectPlayers/SelectPlayers";
import { BsDatabaseDown } from "react-icons/bs";




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
            if('coin' in storeDataFromAllData  ){
             
              setUpdateCoin(updateCoin + storeDataFromAllData.coin)
               setTimeout(()=>{
                alert('added credit')  
               },0)
            }
           
            setUpdateIndx( updateIndx + 1)
         
          }
  }
  // handle Choose Player Btn--------------------------
      const [players,setPlayers]=useState([])
      // console.log(players)
  const handleChoosePlayerBtn=(data)=>{
         const newArr=[...players,data]
         setPlayers(newArr)
  }
 
// delete Btn-----------------------
const handleDeleteBtn =(id)=>{
     const remaining = players.filter(players=>players.id !==id)
      setPlayers(remaining)
}


return (
  <>
    <Favicon url="https://i.ibb.co.com/KGdk8wg/cricket-1.png"></Favicon>

    <div className="sticky top-0 z-50">
      <Headers updateCoin={updateCoin}></Headers>
    </div>

    <Banners handleCreditBtn={handleCreditBtn}></Banners>

    <Mains allData={allData} handleChoosePlayerBtn={handleChoosePlayerBtn}></Mains>


    <Footers></Footers>
      {
        players.map((data,index) => < SelectPlayers data={data} key={index} handleDeleteBtn={handleDeleteBtn}></ SelectPlayers>)
      }






  </>
)
}

export default App
