import {useNavigate} from "react-router-dom";

const AnimeMangaRecommendation = ({animeDetail, category}) => {
    const navigate = useNavigate();

    return (
        <div className="recommendation">
            <span className="heading">Recommendation for you</span>
            <div className="recommendation-container">
                {animeDetail.recommendations.length > 0 ? animeDetail.recommendations.map(res => <div onClick={()=>navigate(`/home/${category}/${res.node.id}`)} style={{cursor: 'pointer'}} className="recommendation-card">
                    <img src={res.node.main_picture.large} alt="main_anime"/>
                    <div className="overlay">
                        <div className="overlay-top">
                            <div className="watchlist">
                                +
                            </div>
                        </div>
                        <div className="overlay-bottom">
                            <span  className="title">{res.node.title}</span>
                        </div>
                    </div>
                </div>) : <p style={{color:'#636262'}}>No recommendations found!</p>}
            </div>
        </div>
    );
};

export default AnimeMangaRecommendation;