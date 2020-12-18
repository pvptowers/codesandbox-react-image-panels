import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const panelHeadings2 = [
    {
      title: "By the coast",
      url:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "In the woods",
      url:
        "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Next to the ocean",
      url:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
    },
    {
      title: "Looking at the harbour",
      url:
        "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
    },
    {
      title: "By the Mountains",
      url:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="App">
      <div class="container">
        {panelHeadings2.map((el) => (
          <PanelDiv myStyle={{ backgroundImage: `url(${el.url})` }}>
            <h3>{el.title}</h3>
          </PanelDiv>
        ))}
      </div>
    </div>
  );
}

const PanelDiv = (props) => {
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setActive((prev) => !prev);
  };

  return (
    <div
      className={`${active ? "panel active" : "panel"}`}
      onClick={handleClick}
      style={props.myStyle}
    >
      {props.children}
    </div>
  );
};
