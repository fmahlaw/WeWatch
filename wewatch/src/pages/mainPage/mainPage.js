import { useState } from "react";
import "./mainPage.css"

import KasihData from "../mainPage/tampilData";
import TampilModal from "../mainPage/tampilModal";
import Header from "../header";
import ListStore from "./listStore";

export const port = 4000;

export default function MainPage(props) {
  const [[listToko, setListToko],[dataToko, setDataToko]] = [useState([]), useState([])];
  const [nomorTampil, setNomorTampil] = useState(0)
  const [showAddStore, setShowAddStore] = useState(false);

  const {isLogin,setIsLogin} = props
 
  const handleAddButton = () => {
    setShowAddStore(true);
  };

  return (
    <>
      <Header login={isLogin} setIslogin={setIsLogin}> </Header>
      <div className="main-body">
        <div className="info-body-cont">
          <div className="add-store-cont">
            <button onClick={handleAddButton} className="add-store-button">
              <h1>+</h1>
            </button>
          </div>
          <div className="store-cont">
            <div className="store-list-parent">
              <h2>Tokopedia</h2>
              <ListStore setNomorTampil={setNomorTampil} listToko={listToko}> </ListStore>
            </div>
          </div>
        </div>

        <div className="item-cont">
          <KasihData nomorTampil={nomorTampil} dataToko={dataToko}></KasihData>   
        </div>
      </div>
      
      <TampilModal setNomorTampil={setNomorTampil} setListToko={setListToko} setDataToko={setDataToko} 
      setShowAddStore={setShowAddStore} showAddStore={showAddStore}>
       </TampilModal>
    </>
  );
}

