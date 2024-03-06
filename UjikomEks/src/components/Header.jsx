import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header id="home">
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="box-hero">
            <div className="box">
              <h1>
                Nikmati makanan nusantara <br />
                dengan rasa asli indonesia!
              </h1>
              <p>Dibuat dengan rempah asli Indonesia, Dijamin bikin nagih</p>
              <button>Selengkapnya</button>
            </div>
            <div className="box">
              <img src="/makananindo.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
