import { uid } from "uid";
import { useNavigate } from "react-router-dom";

const AnimeMangaDetailRelated = ({ animeDetail, category }) => {
  const navigate = useNavigate();

  return (
    <div className={"related-container"} style={{ width: "100%" }}>
      <h3 className="heading">Related Anime</h3>

      <div className={"related-container-scroll"}>
        <div className="flex-center related-anime">
          {animeDetail?.related_anime.length > 0 ? (
            animeDetail.related_anime.map((res) => (
              <p key={uid(8)} className="color-text">
                {res.relation_type_formatted} :{" "}
                <span
                  className=" cursor-btn related-anime-link"
                  onClick={() => navigate(`/home/${category}/${res.node.id}`)}
                >
                  {res.node.title}
                </span>
              </p>
            ))
          ) : (
            <p>No related anime found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeMangaDetailRelated;
