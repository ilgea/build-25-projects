import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "fuchsia",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "lightblue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "coral",
      },
    },
  ];

  function handleScrollSection() {
    //? ilk önce mevcut pozisyonunu alıyoruz
    let position = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollSection}>Click To Scroll</button>
      {data.map((item, index) => (
        <div ref={index === 3 ? ref : null} style={item.style}>
          <h3 key={item.index}>{item.label}</h3>
        </div>
      ))}
    </div>
  );
}

//? belirli bir section'a gidebilmek için referans oluşturuyoruz.
