import React from "react";

onclick=()=>{
  // window.location.href="/contact";
}
const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onclick={onclick}>
    Grow With Us
  </button>
);

export default Button;
