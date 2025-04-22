import { useNavigate } from "react-router-dom";

import randomColor from "randomcolor";

import "./SearchResult.css";
import { uid } from "uid";

const SearchResult = ({ results, closeSearchHandler }) => {
  const navigate = useNavigate();

  return (
    <div className="shadow search-result-box">
      {results.map((res) => {
        let ratingCircleColor = randomColor({
          luminosity: "dark",
          hue: "random",
        });
        return (
          <div
            key={uid(8)}
            className="search-result-item"
            onClick={() => navigate(`anime/${res.node.id}`)}
          >
            <div className="flex-center search-result-item-left">
              <div className="search-result-img-container">
                <img alt="search-result" src={res.node.main_picture.large} />
              </div>
            </div>

            <div className="search-result-item-middle">
              <h5 className="color-text">{res.node.title}</h5>
              <ul className="search-result-detail">
                {[
                  res.node.media_type.toUpperCase(),
                  res.node.status,
                  res.node.start_date,
                ].map((data) => (
                  <li key={uid(8)}>
                    <h6>{data.toUpperCase()}</h6>
                  </li>
                ))}
              </ul>
              <div className="genres">
                <ul>
                  {res.node.genres.map((g) => {
                    let color = randomColor({
                      luminosity: "light",
                      hue: "random",
                    });
                    return (
                      <li
                        key={uid(8)}
                        className="genre-list"
                        style={{
                          border: `1px ${color} solid`,
                        }}
                        id={g.id}
                      >
                        <h6 style={{ color: `${color}` }}>{g.name}</h6>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="search-result-item-right">
              <div
                className="flex-center rating"
                style={{ border: `0.25rem ${ratingCircleColor} solid` }}
              >
                <p className="color-text">{res.node.mean}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div
        className="flex-center cursor-btn view-all"
        onClick={() => closeSearchHandler()}
      >
        <p className="color-text">Close</p>
      </div>
    </div>
  );
};

export default SearchResult;
