export default function ListStore(props) {
  const listToko = props.listToko;

  const setNomorTampil = props.setNomorTampil
  
  return (
    <>
      { 
        listToko.map((item, index) => 
        (
          <div onClick={() => setNomorTampil(index)} key={index} className="store-list-child">
          {item}
        </div>)
      )}
    </>
  );
}
