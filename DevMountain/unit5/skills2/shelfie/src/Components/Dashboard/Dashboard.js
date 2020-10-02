import React from "react";
import Product from "../Product/Product";


function Dashboard(props) {
    console.log(props.items)
  return (
    <div>
      {props.inventory.map(e => {
        return (
          <Product
            inventory={props.items}
            getItems={props.getItems}
            addItems={props.addItems}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;