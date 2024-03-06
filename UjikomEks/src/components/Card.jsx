import React from "react";
import { useEffect } from "react";
import { apiHandler } from "../Api/apiHandler";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Card({ item, deleteHandling, setAllData, allData }) {
  const [isEdit, setIsEdit] = useState(false);
  const formRef = useRef();
  const username = localStorage.getItem("username");

  const submit = (e) => {
    e.preventDefault();
    const { [0]: id, [1]: name, [2]: city, [3]: description, [4]: image } = formRef.current;

    if (name.value.length < 4) return alert("Name required");
    if (description.value.length == 0) return alert("desc required");
    if (image.value.length <= 100 && image.value.length > 0) return alert("image must link");

    const currentData = {};
    !image.value ? (currentData.image = item.image) : (currentData.image = image.value);
    currentData.id = id.id;
    currentData.nama = name.value;
    currentData.city = city.value;
    currentData.desc = description.value;

    apiHandler.edit(currentData);
    setIsEdit(false);
    setAllData(allData.map((p) => (p.id == currentData.id ? currentData : p)));
  };

  return (
    <>
      {!isEdit ? (
        <div className="box">
          <img src={item.image} alt={item.nama} />
          <Link to={"/item/" + item.id}>
            <h3>{item.nama}</h3>
          </Link>
          <h4>{item.city}</h4>
          <p>{item.desc.substring(0, 50) + "..."}</p>
          {username && (
            <>
              <button className="edit" onClick={() => setIsEdit(!isEdit)}>
                edit
              </button>
              <button className="delete" onClick={() => (confirm("are you sure?") ? deleteHandling(item.id) : null)}>
                Delete
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="makanan-item">
          <form className="edit-form" action="" ref={formRef}>
            <div className="input-container">
              <input type="hidden" id={item.id} />
              <label htmlFor="name">Destination Name*</label>
              <input type="text" name="name" defaultValue={item.nama} required />
            </div>
            <div className="input-container">
              <label htmlFor="city">Destination city*</label>
              <input type="text" name="city" required defaultValue={item.city} />
            </div>
            <div className="input-container">
              <label htmlFor="description">Destination description*</label>
              <textarea name="description" required defaultValue={item.desc} />
            </div>
            <div className="input-container">
              <label htmlFor="image">Destination image</label>
              <input type="text" name="image" defaultValue={""} />
              <p>*must image url</p>
            </div>

            <div className="input-group">
              <button className="edit" onClick={submit}>
                save
              </button>
              <button className="delete" onClick={() => setIsEdit(false)}>
                cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
