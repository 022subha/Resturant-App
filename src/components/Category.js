import React from "react";

export default function Category(props) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {props.categoryList.map((currEle) => {
            return (
              <button
                className="btn-group__item"
                key={currEle}
                onClick={() => props.filterItem(currEle)}
              >
                {currEle}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
