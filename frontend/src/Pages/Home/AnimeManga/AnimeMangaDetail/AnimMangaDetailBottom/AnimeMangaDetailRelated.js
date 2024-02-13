import { useNavigate } from "react-router-dom";

const AnimeMangaDetailRelated = ({ animeDetail, category }) => {
    
  const navigate = useNavigate();

  return (
    <div className={"related-container"} style={{width:'100%'}}>
      <h3 className="heading">Related Anime</h3>

      <div className={"related-container-scroll"}>
        <div className="flex-center related-anime">
          {animeDetail?.related_anime.length > 0 ? (
            animeDetail.related_anime.map((res) => (
              <p style={{ color: "white" }}>
                {res.relation_type_formatted} :{" "}
                <span
                  style={{ cursor: "pointer" }}
                  className="related-anime-link"
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
