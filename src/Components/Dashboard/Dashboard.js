import React from "react";
import Product from "../Product/Product";


function Dashboard(props) {
    console.log(props.inventory)
  return (
    <div>
      {props.inventory.map(e => {
        return (
          <Product
            inventory={props.inventory}
            getItems={props.getItems}
            addItems={props.addItems}
          />
        );
      })}
    </div>
  );
}

export default Dashboard;