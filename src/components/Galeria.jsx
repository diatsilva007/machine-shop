import React from "react";

import CarService from "../assets/car-service.jpeg";
import carroOficinaNeon from "../assets/carro-oficina-neon.jpeg";
import mecanicService from "../assets/mecanic-service.jpeg";
import Mecanic from "../assets/mecanic.jpeg";

const imagens = [CarService, carroOficinaNeon, mecanicService, Mecanic];

const Galeria = () => (
  <section id="galeria" style={{ padding: "60px 0", background: "#f7f7f7" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <h2>Galeria</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {imagens.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Peça ${idx + 1}`}
            style={{
              width: "200px", // largura fixa
              height: "150px", // altura fixa
              objectFit: "cover", // recorta a imagem para preencher o espaço
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Galeria;
