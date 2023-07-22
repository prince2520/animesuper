import React from "react";

const MyWatchlistHeading = () => {
    return (
        <div className="my-watchlist-table-heading">
            <span style={{width: "5%"}}>#</span>
            <span style={{width: "15%"}}>Image</span>
            <span style={{width: "24%", alignItems: "flex-start"}}>Title</span>
            <span style={{width: "26%"}}>Progress/Episodes</span>
            <span style={{width: "10%"}}>Type</span>
            <span style={{width: "10%"}}>Delete</span>
            <span style={{width: "10%"}}>Edit</span>
        </div>
    );
};

export default MyWatchlistHeading;