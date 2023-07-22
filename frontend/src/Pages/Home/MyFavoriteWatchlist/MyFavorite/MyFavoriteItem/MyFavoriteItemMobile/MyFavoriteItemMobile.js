import {OverlayActions} from "../../../../../../store/overlay";
import {MyWatchlistActions} from "../../../../../../store/myWatchlist";
import {Icon} from "@iconify/react";
import React from "react";
import {useDispatch} from "react-redux";
import {MyFavoriteActions} from "../../../../../../store/myFavorite";

const MyFavoriteItemMobile = ({res, id}) => {
    const dispatch = useDispatch();

    return (
        <div className={'favorite-table-item-mobile'}>
            <div className='favorite-table-item-mobile-left'>
                <span className="item-img"><img alt='main_picture' width="100%"
                                                style={{width:"6rem", height:'100%'}}
                                                src={res.fields.img_url}/></span>
            </div>
            <div className='favorite-table-item-mobile-right'>
                <div className="item-title-mobile">{res.fields.title}</div>
                <div
                    className="item-type-mobile">
                    <span>Score: </span>
                    <span>{res.fields.score}</span>
                </div>

                <div
                    className="item-type-mobile">
                    <span>Types: </span>
                    <span>{res.fields.type}</span>
                </div>
                <div
                    className="item-type-mobile">
                    <span>Year: </span>
                    <span>{res.fields.year}</span>
                </div>
                <div className='favorite-table-item-mobile-btn'>
                    <div style={{ cursor: 'pointer', alignSelf:'flex-start'}} className="item-delete-mobile"
                         onClick={() => {
                             dispatch(MyFavoriteActions.removeFavoriteItem({
                                 category: res.fields.type,
                                 categoryId: res.fields.category_id
                             }))
                             dispatch(OverlayActions.showRemoveFavoriteHandler())
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

export  default  MyFavoriteItemMobile;