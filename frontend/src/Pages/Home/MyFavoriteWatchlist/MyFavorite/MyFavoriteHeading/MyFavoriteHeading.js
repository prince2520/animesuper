import React from "react";

const MyFavoriteHeading = () => {

    return (
        <div className="favorite-table-heading">
            <span style={{width: "5%"}}>#</span>
            <span style={{width: "15%"}}>Image</span>
            <span style={{width: "24%", alignItems: "flex-start"}}>Title</span>
            <span style={{width: "8%"}}>Score</span>
            <span style={{width: "8%"}}>Type</span>
            <span style={{width: "10%"}}>Year</span>
            <span style={{width: "20%"}}>No. of Episode</span>
            <span style={{width: "10%"}}>Delete</span>
        </div>
    );
};

export default  MyFavoriteHeading;