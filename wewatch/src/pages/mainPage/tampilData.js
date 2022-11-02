export default function KasihData(props) {
  const {dataToko,nomorTampil} = props;


  return (
    <>
      {dataToko.slice(nomorTampil, nomorTampil + 1).map((anggota, index) =>
        anggota.map((item, i) => (
          <div className="item" key={index + i}>
            <div className="item-img">
            <img
                src={item.img}
                alt="new"
              />
            </div>
            <div className="item-name">{item.nama}</div>
            <div className="item-price">{item.harga}</div>
            <div className="item-date">{item.date}</div>
          </div>
        ))
      )}
    </>
  );
}
