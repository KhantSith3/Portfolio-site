import React, { useState } from "react";
import { menuItem } from "./data";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <div style={{ width: isOpen ? "240px" : "40px" }} className="sidebar">
        <div className="top-section">
          <h2 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Portofolio
          </h2>
          <div style={{ marginLeft: isOpen ? "auto" : "0px" }} className="bars">
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
        </div>
        {menuItem.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="link">
              <div className="icons">{item.icons}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link-text"
              >
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
      <main>{children}</main>
    </div>
  );
}
