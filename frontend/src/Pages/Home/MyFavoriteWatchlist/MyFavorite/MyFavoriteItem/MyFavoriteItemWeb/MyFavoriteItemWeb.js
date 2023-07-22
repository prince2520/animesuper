import {OverlayActions} from "../../../../../../store/overlay";
import {Icon} from "@iconify/react";
import React from "react";
import {MyFavoriteActions} from "../../../../../../store/myFavorite";
import {useDispatch} from "react-redux";

const MyFavoriteItemWeb = ({res, index}) => {
    const dispatch = useDispatch();

    return (
        <div className="favorite-table-item">
            <span style={{width: "5%"}} className="item-no">{index + 1}</span>
            <span style={{width: "15%"}} className="item-img"><img alt='main_picture' width="100%"
                                                                   src={res.fields.img_url}/></span>
            <span style={{width: "24%", alignItems: "flex-start"}}
                  className="item-title">{res.fields.title}</span>
            <span style={{width: "8%"}} className="item-score">{res.fields.score}</span>
            <span style={{width: "8%"}} className="item-type">{res.fields.type}</span>
            <span style={{width: "10%"}} className="item-year">{res.fields.year}</span>
            <span style={{width: "20%"}}
                  className="item-no-episodes">{res.fields.num_episode_chapter}</span>
            <span style={{width: "10%"}} className="item-delete" onClick={() => {
                dispatch(MyFavoriteActions.removeFavoriteItem({
                    category: res.fields.type,
                    categoryId: res.fields.category_id
                }))
                dispatch(OverlayActions.showRemoveFavoriteHandler())
            }}>
                                <Icon
                                    icon="material-symbols:delete-outline-rounded"
                                    style={{fontSize: '2rem'}}
                                />
                            </span>
        </div>
    );

};

export default MyFavoriteItemWeb;