import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { apiHandler } from "../Api/apiHandler";
import Footer from "./Footer";

export default function ItemDetail() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    apiHandler.find(id).then((response) => setData(response.data));
  }, []);

  if (!data) return <p>Loading..</p>;
  return (
    <>
      <div className="container-detail">
        <div className="item-detail">
          <div className="card-detail">
            <img src={data.image} alt="img" style={{ width: "450px" }} />
            <div className="destinasi-info">
              <h2 className="destinasi-title" style={{ color: "white" }}>
                {data.nama}
              </h2>
              <h5 style={{ color: "white" }}>{data.city}</h5>
              <p style={{ color: "white" }}>{data.desc}</p>
            </div>
            <div className="back-detail">
              <Link className="" to={"/makanan"}>
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
