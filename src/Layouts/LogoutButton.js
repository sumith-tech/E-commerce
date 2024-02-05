import React from "react";

const LogoutButton = (props) => {
  return (
    <button className="bg-red-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-red-400 duraion-500">
      {props.children}
    </button>
  );
};

export default LogoutButton;
