import React, {useEffect, useState} from "react";

import {categoryType} from "../../common";

import './ChangeCategory.css'

const ChangeCategory = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(categoryType[0]);

    useEffect(() => {
        return () => setSelectedCategory(categoryType[0]);
    }, [])

    return (
        <div className="anime-manga-button">
            {categoryType.map(name =>
                <span
                    style={{cursor: 'pointer'}}
                    className={selectedCategory === name && 'selected'}
                    onClick={() => {
                        props.eventHandler(name)
                        setSelectedCategory(name)
                    }}>{name}</span>)}
        </div>
    );
};

export default ChangeCategory;