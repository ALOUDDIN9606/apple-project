import React from "react";
import "./Main.scss";
import MainData from "../Main_data/Main_Item";
import { PRODUCT_ITEMS } from "../../static";

const Main = () => {
  const productItems = PRODUCT_ITEMS.map((product) => (
    <MainData
      url={product.url}
      title={product.title}
      descf={product.desc1}
      descs={product.desc2}
      buttons={product.buttons}
      top={product.top}
      cl={product.cl}
    />
  ))
  return (
    <div className="category">
      <div className="main">
        {productItems}
      </div>
    </div>
  )
}

export default Main;