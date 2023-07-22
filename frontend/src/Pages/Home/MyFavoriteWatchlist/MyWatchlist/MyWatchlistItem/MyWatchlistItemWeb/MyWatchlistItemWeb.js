import {OverlayActions} from "../../../../../../store/overlay";
import {MyWatchlistActions} from "../../../../../../store/myWatchlist";
import {Icon} from "@iconify/react";
import React from "react";
import {useDispatch} from "react-redux";

const MyWatchlistItemWeb = ({res, index}) => {
    const  dispatch = useDispatch();

    return(
        <div className="my-watchlist-table-item">
            <span style={{width: "5%", borderLeft: `0.25rem ${res.color} solid`}}
                  className="item-no">{index + 1}</span>
            <span style={{width: "15%"}} className="item-img"><img alt='main_picture' width="100%"
                                                                   src={res.fields.img_url}/></span>
            <span style={{width: "24%", alignItems: "flex-start"}}
                  className="item-title">{res.fields.title}</span>
            <span style={{width: "26%"}} className="item-progress">
                <div className="progress-bar-detail" style={{width: '80%', textAlign: 'right'}}>
                    {res.fields.progress_read_watched} / {res.fields.num_episode_or_chapter ? res.fields.num_episode_or_chapter : 'N/A'}
                </div>
                <div className='progress-bar'
                     style={{backgroundColor: '#2D3135', width: "80%", height: "0.5rem"}}>
                    <div className='progress-bar-completed'
                         style={{width: `${res.fields.num_episode_or_chapter ? (res.fields.progress_read_watched / res.fields.num_episode_or_chapter) * 100 : ''}%`}}/>
                </div>
            </span>
            <span style={{width: "10%"}}
                  className="item-type">{res.fields.type.charAt(0).toUpperCase() + res.fields.type.slice(1)}</span>
            <span style={{width: "10%", cursor: 'pointer'}} className="item-delete"
                  onClick={() => {
                      dispatch(OverlayActions.showRemoveWatchlistHandler());
                      dispatch(MyWatchlistActions.removeWatchlistItem({
                          category: res.fields.category,
                          categoryId: res.fields.category_id
                          }
                      ))
                  }}>
                <Icon
                    icon="material-symbols:delete-outline-rounded"
                    style={{fontSize: '2rem'}}
                />
            </span>
            <span style={{width: "10%", cursor:'pointer'}} className="item-edit" onClick={() => {
                dispatch(OverlayActions.showEditWatchlistHandler())
                dispatch(MyWatchlistActions.selectedWatchlistItemHandler({...res.fields}))
            }}>
                <Icon
                    icon="ri:edit-line"
                    style={{fontSize: '2rem'}}
                />
            </span>
        </div>
    )
};

export default MyWatchlistItemWeb;