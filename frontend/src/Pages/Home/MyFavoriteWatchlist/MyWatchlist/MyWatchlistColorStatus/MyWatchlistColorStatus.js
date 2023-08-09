import React from "react";

import './MyWatchlistColorStatus.css';

const watchlistColorData = [
    {
        className:'completed',
        title:'completed'
    },
    {
        className:'dropped',
        title:'dropped'
    },
    {
        className:'on-hold',
        title:'on hold'
    },
    {
        className:'currently-watching',
        title:'currently watching'
    },
    {
        className:'plan-watch',
        title:'plan to watch'
    },
]

const MyWatchlistColorStatus = () => {
    return (
        <div className="anime-status-color">
            {watchlistColorData.map(data=>{
                return (
                    <div className={`${data.className} color-title`}>
                        <span className="circle"/>
                        <span>{data.title}</span>
                    </div>
                );
            })}
        </div>

    );
};

export default MyWatchlistColorStatus;