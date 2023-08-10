import {useNavigate} from "react-router-dom";

import randomColor from 'randomcolor'

import './SearchResult.css';

const SearchResult = (props) => {
    const navigate = useNavigate();

    return (
        <div className='search-result-container'>
            {props.results.map(res => {
                    let ratingCircleColor = randomColor({
                        luminosity: 'dark',
                        hue: 'random'
                    });
                    return <div key={res.toString()} className="search-result-item"
                                onClick={() => navigate(`anime/${res.node.id}`)}>
                        <div className="search-result-item-left">
                            <div className="search-result-img-container">
                                <img alt='search-result' src={res.node.main_picture.large}/>
                            </div>
                        </div>
                        <div className="search-result-item-middle">
                            <span style={{fontSize: '1rem', fontWeight: '600'}}>{res.node.title}</span>
                            <ul className="search-result-detail">
                                {[res.node.media_type.toUpperCase(), res.node.status, res.node.start_date]
                                    .map(data => <li key={data.toString()}>{res.node.media_type.toUpperCase()}</li>)}
                            </ul>
                            <div className='genres'>
                                <ul>
                                    {
                                        res.node.genres.map(g => {
                                            let color = randomColor({
                                                luminosity: 'light',
                                                hue: 'random'
                                            });
                                            return <li
                                                key={g.toString()}
                                                className="genre-list"
                                                style={{border: `2px ${color} solid`, color: `${color}`}}
                                                id={g.id}>{g.name}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='search-result-item-right'>
                            <div className='rating' style={{border: `0.25rem ${ratingCircleColor} solid`}}>
                                {res.node.mean}
                            </div>
                        </div>
                    </div>
                }
            )}
            <div className="view-all" onClick={() => props.closeSearchHandler()}><span>Close</span></div>
        </div>

    );
}

export default SearchResult;