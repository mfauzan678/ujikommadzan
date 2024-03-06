import React from "react";
import { useEffect } from "react";
import loginHandler from "../Api/LoginHandler";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState();
  const formRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    loginHandler.get().then((result) => setData(result));
  }, []);
  function submit(e) {
    e.preventDefault();
    // if (checkUser) return alert("Anda telah login!");
    const { [0]: username, [1]: password } = formRef.current;

    if (username.value.length <= 0 || password.value.length <= 0) return alert("input tidak boleh kosong!");

    const matchUsername = data.find((i) => i.username == username.value);
    const matchPassword = matchUsername?.password == password.value;

    if (matchUsername && matchPassword) {
      console.log("test");
      localStorage.setItem("username", username.value);
      navigate("/");
      window.location.reload();
    } else {
      return alert("akun tidak terdaftar");
    }
  }
  return (
    <div className="login">
      <form class="form-login" ref={formRef}>
        Sign Up
        <input type="text" class="input" placeholder="Name" />
        <input type="password" class="input" placeholder="Password" />
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}
