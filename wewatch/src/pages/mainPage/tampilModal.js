import ModalAddStore from "./modalAddStore";

export default function TampilModal(props) {
  const {setNomorTampil,showAddStore,setShowAddStore ,setDataToko ,setListToko } = props
  
  return (
    <>
      {
        showAddStore ? 
        <ModalAddStore setNomorTampil={setNomorTampil} setListToko={setListToko}
          setDataToko={setDataToko} setShowAddStore={setShowAddStore}
        ></ModalAddStore>
      : null}
    </>
  );
}
