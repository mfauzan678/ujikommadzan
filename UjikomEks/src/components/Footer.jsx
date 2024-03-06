import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box-footer">
          <div className="box">
            <h2>makanan.</h2>
            <p>Di website ini anda dapat melihat berbagai jenis kriteria makanan di berbagai daerah yg sangat menarik dan wajib untuk dikunjungi</p>
          </div>
          <div className="box">
            <h3>Menu</h3>
            <a href="/">Home</a>
            <a href="/makanan">makanan</a>
            <a href="/contact">Pelayanan</a>
            <a href="/login">Login</a>
          </div>
          <div className="box">
            <p>
              &copy; Copyright by <span>Fauzan</span> All Rights Reserved 2024, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
