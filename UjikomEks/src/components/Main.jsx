import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import { apiHandler } from "../Api/apiHandler";

export default function Main() {
  const [data, setData] = useState();
  useEffect(() => {
    apiHandler.get().then((result) => setData(result));
  }, []);

  if (!data) return "loading...";
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
