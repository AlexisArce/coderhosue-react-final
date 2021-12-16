import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map((item, i) => (
        <div className="col-3" key={i}>
          <Item item={item} key={i} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
