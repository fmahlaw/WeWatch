import modalAddStore from "./modalAddStore.module.css";
import { port } from "./mainPage";
import axios from "axios";
import { useState } from "react";

let nameContainer = [];

export default function ModalAddStore(props) {
  const [name, setName] = useState("");
  let nameParse = name
    .slice(26)
    .trim()
    .replace(/[0-9]/g, "")
    .replace(/['/-[\]']+/g, "");


  const {setNomorTampil,setShowAddStore,setDataToko,setListToko} = props

  const handleClose = () => {
    setShowAddStore(false);
  };

  async function postStoreName(e) {
    e.preventDefault();
    setShowAddStore(false);

    try {
      await axios
        .post(`http://localhost:${port}/post_name_toped`, {
          name,
        })
        .then(async function (response) {
          if (!nameContainer.includes(nameParse)) {
            nameContainer.push(nameParse);
            setDataToko((values) => [response.data, ...values]);
            setListToko((values) => [nameParse, ...values]);
            console.log(nameContainer);

            await axios
              .post(`http://localhost:${port}/post_add_data`, {
                name,
              })
              .then(function (response) {
                setDataToko((values) => {
                  values[0] = response.data;
                  return [...values];
                });
              });
          } else {
            alert("sudah anda cari");
          }
        });
    } catch (error) {
      alert("masukan salah");
      console.error(error);
    }

    setNomorTampil(0);
  }

  return (
    <>
      <div id="close" className={modalAddStore.modalAddStore}>
        <div className={modalAddStore.mainBodyModal}>
          <div className={modalAddStore.textBody}>
            <p>Masukan toko yang diinginkan</p>
            <span onClick={handleClose} className={modalAddStore.closeButton}>
              &times;
            </span>
          </div>
          <form onSubmit={postStoreName}>
            <div className={modalAddStore.inputBody}>
              <div className={modalAddStore.siteNameDropdown}>
                <h2>None</h2>
                <div className={modalAddStore.dropdownContent}>
                  <h3>TOKOPEDIA</h3>
                  <h3>SHOPEE</h3>
                </div>
              </div>
              <div className={modalAddStore.storeName}>
                <label>
                  Link toko
                  <p className={modalAddStore.contohLink}>
                    {" "}
                    Contoh: https://www.tokopedia.com/namatoko
                  </p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={modalAddStore.inputBox}
                  />
                </label>
              </div>
              <div className={modalAddStore.addButtonCont}>
                <button
                  id="add-store-button"
                  type="submit"
                  className={modalAddStore.addButton}>
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
