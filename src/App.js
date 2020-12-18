import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const panelHeadings = [
    "Heading One",
    "Heading Two",
    "Heading Three",
    "Heading Four"
  ];

  const panelHeadings2 = [
    {
      title: "Heading One",
      url:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Heading One",
      url:
        "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Heading One",
      url:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
    },
    {
      title: "Heading One",
      url:
        "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
    },
    {
      title: "Mountains",
      url:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="App">
      <div class="container">
        {/* {panelHeadings.map((t) => (
          <PanelDiv>{t}hi</PanelDiv>
        ))} */}
        {panelHeadings2.map(
          (t) => (
            console.log(t.url),
            (
              <PanelDiv myStyle={{ backgroundImage: `url(${t.url})` }}>
                {t.title}
              </PanelDiv>
            )
          )
        )}
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
