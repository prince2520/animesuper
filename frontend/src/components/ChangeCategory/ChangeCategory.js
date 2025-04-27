import { uid } from "uid";
import React, { useEffect, useState } from "react";

import { categoryType } from "../../constants/constants";

import "./ChangeCategory.css";
import { useParams } from "react-router-dom";

const ChangeCategory = (props) => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || categoryType[0]);
  
  return (
    <div className="flex-center anime-manga-button">
      {categoryType.map((name) => (
        <span
          key={uid(8)}
          className={`cursor-btn ${selectedCategory.toLowerCase() === name.toLowerCase() && "selected"}`}
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
