import React from "react";
import "/public/css/form.css";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <form class="form">
          <div class="form-wrapper">
            <label>
              <input required="" placeholder="first name" type="text" class="input" />
            </label>

            <label>
              <input required="" placeholder="last name" type="text" class="input" />
            </label>
          </div>

          <label>
            <input required="" placeholder="email" type="email" class="input" />
          </label>

          <label>
            <input required="" type="tel" placeholder="contact number" class="input" />
          </label>
          <label>
            <textarea required="" rows="3" placeholder="message" class="input01"></textarea>
          </label>

          <button class="fancy" href="#">
            <span class="text">submit</span>
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
