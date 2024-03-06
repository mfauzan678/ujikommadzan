import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
      navigate("/");
      window.location.reload();
    }, 1000);
  });
  return (
    <div className="logout">
      <h1>logout..</h1>
    </div>
  );
}
