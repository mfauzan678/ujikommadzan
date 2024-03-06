import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { apiHandler } from "../Api/apiHandler";
import Card from "./Card";
import Footer from "./Footer";

export default function Makanan() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();
  const [select, setSelect] = useState("");
  useEffect(() => {
    apiHandler.get().then((result) => setData(result));
  }, []);

  const sortener = (a, b) => {
    if (select == "asceding") return a.nama.localeCompare(b.nama);
    else if (select == "desceding") return b.nama.localeCompare(a.nama);
  };

  const deleteHandling = async (id) => {
    setData(data.filter((data) => data.id != id));
    await apiHandler.delete(id);
  };
  return (
    <>
      <div className="makanan" id="makanan">
        <div className="container">
          <center>
            <input className="search" placeholder="Search.." onChange={(e) => setInput(e.target.value)} type="text" />
            <select className="sortener" onChange={(e) => setSelect(e.target.value)}>
              <option value="asceding">A-Z</option>
              <option value="desceding">Z-A</option>
            </select>
          </center>
          <div className="box-makanan">
            {data
              ?.filter((i) => i.nama.toLowerCase().indexOf(input) > -1)
              .sort((a, b) => sortener(a, b))
              .map((item, i) => (
                <Card key={i} {...{ item, deleteHandling }} setAllData={setData} allData={data} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
