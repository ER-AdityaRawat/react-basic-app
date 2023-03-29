import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/common/Spinner";
import "./style.css";
import Card from "../../components/common/Card";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 4;

  useEffect(() => {
    axios
      .get(
        `${"https://picsum.photos/v2/list?page="}${pageNumber}${"&limit="}${limit}`
      )
      .then((response) => {
        setData(response.data);
        setLoaded(true);
      });
  }, [pageNumber]);

  return (
    <>
      <div className="productsPage">
        {isLoaded ? (
          data.map((object) => {
            const { author, id, url, height, download_url } = object;
            return (
              <Card
                id={id}
                author={author}
                download_url={download_url}
                url={url}
              />
            );
          })
        ) : (
          <Spinner />
        )}

        <button
          onClick={() => {
            setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
            setLoaded(pageNumber > 1 ? false : true);
          }}
        >
          Previous page
        </button>

        <button
          onClick={() => {
            setPageNumber(pageNumber + 1);
            setLoaded(false);
          }}
        >
          Next page
        </button>
      </div>
    </>
  );
};
export default ProductsPage;
