import PlanetCard from "@components/PlanetCard/index";
import { useState } from "react";
import { Canvas, Arc } from "react-canva";
import Modal from "react-modal";
import "./style.css";

export default function StantonSystem() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
    },
  };
  return (
    <>
      <Modal isOpen={modalIsOpen} id={id} style={customStyles}>
        <button type="button" onClick={closeModal}>
          X
        </button>
        <PlanetCard id={id} />
      </Modal>
      <Canvas>
        <Arc
          x={500}
          y={300}
          radius={50}
          startAngle={0}
          endAngle={180}
          stroke="yellow"
          fill="yellow"
          onClick={() => {
            setId(20);
            openModal();
          }}
        />
        <Arc
          x={400}
          y={300}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="blue"
          fill="blue"
          onClick={() => {
            setId(16);
            openModal();
          }}
        />
        <Arc
          x={500}
          y={450}
          radius={15}
          startAngle={0}
          endAngle={180}
          stroke="Yellow"
          fill="Yellow"
          onClick={() => {
            setId(17);
            openModal();
          }}
        />
        <Arc
          x={400}
          y={50}
          radius={28}
          startAngle={0}
          endAngle={180}
          stroke="#73b0ee"
          fill="#73b0ee"
          onClick={() => {
            setId(18);
            openModal();
          }}
        />
        <Arc
          x={975}
          y={425}
          radius={22}
          startAngle={0}
          endAngle={180}
          stroke="#fefefe"
          fill="#fefefe"
          onClick={() => {
            setId(19);
            openModal();
          }}
        />
        <Arc
          x={500}
          y={300}
          radius={100}
          startAngle={0}
          endAngle={180}
          stroke="white"
          fill="transparent"
          lineCap="button"
          lineDashOffset={0.0}
          lineJoin="miter"
          lineWidth={1.0}
          miterLimit={10.0}
        />
        <Arc
          x={500}
          y={300}
          radius={150}
          startAngle={0}
          endAngle={180}
          stroke="white"
          fill="transparent"
          lineCap="button"
          lineDashOffset={0.0}
          lineJoin="miter"
          lineWidth={1.0}
          miterLimit={10.0}
        />
        <Arc
          x={500}
          y={300}
          radius={270}
          startAngle={0}
          endAngle={180}
          stroke="white"
          fill="transparent"
          lineCap="button"
          lineDashOffset={0.0}
          lineJoin="miter"
          lineWidth={1.0}
          miterLimit={10.0}
        />
        <Arc
          x={500}
          y={300}
          radius={490}
          startAngle={0}
          endAngle={180}
          stroke="white"
          fill="transparent"
          lineCap="button"
          lineDashOffset={0.0}
          lineJoin="miter"
          lineWidth={1.0}
          miterLimit={10.0}
        />
      </Canvas>
    </>
  );
}
