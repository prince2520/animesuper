import React, { useEffect, useState } from "react";

import { categoryType } from "../../constants/constants";

import "./ChangeCategory.css";
import { uid } from "uid";

const ChangeCategory = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(categoryType[0]);

  useEffect(() => {
    return () => setSelectedCategory(categoryType[0]);
  }, []);

  return (
    <div className="flex-center anime-manga-button">
      {categoryType.map((name) => (
        <span
          key={uid(8)}
          className={`cursor-btn ${selectedCategory === name && "selected"}`}
          onClick={() => {
            props.eventHandler(name);
            setSelectedCategory(name);
          }}
        >
          <p>{name}</p>
        </span>
      ))}
    </div>
  );
};

export default ChangeCategory;
