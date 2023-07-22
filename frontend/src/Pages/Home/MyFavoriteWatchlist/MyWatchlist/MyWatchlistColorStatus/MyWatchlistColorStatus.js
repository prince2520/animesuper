import React from "react";

const  MyWatchlistColorStatus = () => {
    return (
        <div className="anime-status-color">
            <div className="completed color-title"><span className="circle"
                                                         style={{backgroundColor: "#1877F2"}}/><span>completed</span>
            </div>
            <div className="dropped color-title"><span className="circle" style={{backgroundColor: "#B42323"}}/><span>dropped</span>
            </div>
            <div className="on-hold color-title"><span className="circle" style={{backgroundColor: "#D3A913"}}/><span>on hold</span>
            </div>
            <div className="currently-watching color-title"><span className="circle"
                                                                  style={{backgroundColor: "#178D14"}}/><span>currently watching</span>
            </div>
            <div className="plan-watch color-title"><span className="circle"
                                                          style={{backgroundColor: "#636262"}}/><span>plan to watch</span>
            </div>
        </div>

    );
};

export default MyWatchlistColorStatus;