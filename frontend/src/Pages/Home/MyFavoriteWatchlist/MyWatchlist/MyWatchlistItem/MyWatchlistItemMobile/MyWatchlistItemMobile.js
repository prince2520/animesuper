import {Icon} from "@iconify/react";
import React from "react";
import {useDispatch} from "react-redux";
import {OverlayActions} from "../../../../../../store/overlay";
import {MyWatchlistActions} from "../../../../../../store/myWatchlist";

import './MyWatchlistItemMobile.css';

const MyWatchlistItemMobile = ({res, index}) => {
    const dispatch = useDispatch();

    return (
        <div className={'my-watchlist-table-item-mobile'}>
            <div className='my-watchlist-table-item-mobile-left'>
                <span className="item-no" style={{borderLeft: `${res.color}`}}/>
                <span className="item-img">
                    <img alt='main_picture'
                         width="100%"
                         src={res.fields.img_url}/></span>
            </div>

            <div className='my-watchlist-table-item-mobile-right'>
                <div className="item-title-mobile">{res.fields.title}</div>
                <div
                    className="item-type-mobile">
                    <span>Type: </span>
                    <span>{res.fields.type.charAt(0).toUpperCase() + res.fields.type.slice(1)}</span>
                </div>
                <span className="item-progress">
                    <div className={'progress-bar-title'}>Progress :</div>
                    <div className="progress-bar-detail">
                        {res.fields.progress_read_watched} / {res.fields.num_episode_or_chapter ? res.fields.num_episode_or_chapter : 'N/A'}
                    </div>
                    <div className='progress-bar'
                         >
                        <div className='progress-bar-completed'
                             style={{width: `${res.fields.num_episode_or_chapter ? (res.fields.progress_read_watched / res.fields.num_episode_or_chapter) * 100 : ''}%`}}/>
                    </div>
                </span>

                <div className='my-watchlist-table-item-mobile-btn'>
                    <div style={{cursor:'pointer'}} className="item-edit-mobile" onClick={() => {
                        dispatch(OverlayActions.showEditWatchlistHandler())
                        dispatch(MyWatchlistActions.selectedWatchlistItemHandler({...res.fields}))
                    }}>
                        <Icon
                            style={{fontSize:"1.5rem"}}
                            icon="ri:edit-line"
                        />
                        <span>Edit</span>
                    </div>
                    <div className="item-delete-mobile cursor-btn"
                         onClick={() => {
                             dispatch(OverlayActions.showRemoveWatchlistHandler());
                             dispatch(MyWatchlistActions.removeWatchlistItem({
                                     category: res.fields.category,
                                     categoryId: res.fields.category_id
                                 }
                             ))
                         }}>
                        <Icon
                            style={{fontSize:"1.5rem"}}
                            icon="material-symbols:delete-outline-rounded"
                        />
                        <span>Delete</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWatchlistItemMobile;