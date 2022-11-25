import PlanetCard from "@components/PlanetCard/PlanetCard";
import { useState } from "react";
import { Canvas, Arc } from "react-canva";
import Modal from "react-modal";
import "./style.css";

export default function StantonSystem() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen}>
        <button type="button" onClick={closeModal}>
          X
        </button>
        <PlanetCard />
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
          onClick={openModal}
        />
        <Arc
          x={400}
          y={300}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="blue"
          fill="blue"
          onClick={openModal}
        />
        <Arc
          x={500}
          y={450}
          radius={15}
          startAngle={0}
          endAngle={180}
          stroke="Yellow"
          fill="Yellow"
          onClick={openModal}
        />
        <Arc
          x={400}
          y={50}
          radius={28}
          startAngle={0}
          endAngle={180}
          stroke="#73b0ee"
          fill="#73b0ee"
          onClick={openModal}
        />
        <Arc
          x={975}
          y={425}
          radius={22}
          startAngle={0}
          endAngle={180}
          stroke="#fefefe"
          fill="#fefefe"
          onClick={openModal}
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
