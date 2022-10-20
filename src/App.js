import React, { useState } from "react";
import Category from "./components/Category";
import Menu from "./components/Menu";
import menuApi from "./components/menuApi";

const categoryList = [
  ...new Set(
    menuApi.map((currEle) => {
      return currEle.category;
    })
  ),
  "All",
];
function App() {
  const [menuCard, setMenuCard] = useState(menuApi);
  const category = categoryList;
  const filterItem = (category) => {
    if (category === "All") {
      setMenuCard(menuApi);
      return;
    }
    const updatedMenu = menuApi.filter((currEle) => {
      return currEle.category === category;
    });
    setMenuCard(updatedMenu);
  };

  return (
    <>
      <Category categoryList={category} filterItem={filterItem} />
      <Menu menu={menuCard} />
    </>
  );
}

export default App;
