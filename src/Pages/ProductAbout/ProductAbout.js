import React, { useContext } from "react";
import "../ProductAbout/ProductAbout.css";
import { useParams } from "react-router-dom";
import { Context } from "../../Context/Context";
import { Rating, Stack, CircularProgress } from "@mui/material";
import Zoom from "react-img-zoom";

function ProductAbout(props) {
  const { id } = useParams();
  const { data } = useContext(Context);
  console.log(data);
  const res = data.find((element) => element.id === parseInt(id));
  return (
    <div className="ProductAbout">
      {res ? (
        <div className="boxs">
          <div className="img">
            <Zoom img={res.image} zoomScale={3} width={400} height={400} />
          </div>
          <div className="text">
            <h1>{res ? res.title : null}</h1>
            <p className="nan">
              <h3>Maxsulot haqida</h3> 
              <span>{res ? res.description : null}</span>
            </p>
            <p className="narx">
              <h3>Mahsulotning narxi:</h3>{" "}
              {res.price
                ? res.price.toLocaleString("uz-Uz", {
                    style: "currency",
                    currency: "UZS",
                  })
                : null}
            </p>
            <div className="end">
              <p className="uno">
                    {res.rating.rate > 0 ? (
                      <Rating name="size-medium" defaultValue={2} />
                    ) : (
                      <Rating name="size-medium" defaultValue={2} />
                    )}
                  </p>
              <h4>
                Mahsulotning miqdori: <p>{res.price}</p>
              </h4>
              <h4>
                Kategpry: <p>{res.category}</p>
              </h4>
            </div>
            <div className="addCard">
            Add to card
          </div>
          </div>
        </div>
      ) : (
        <Stack
          sx={{
            color: "grey.500",
            textAlign: "center",
            margin: "auto",
            justifyContent: "center",
          }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="success" />
        </Stack>
      )}
    </div>
  );
}

export default ProductAbout;
