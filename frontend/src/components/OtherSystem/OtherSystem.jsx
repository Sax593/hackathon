import PlanetCard from "@components/PlanetCard/index";
import { useState } from "react";
import { Canvas, Arc } from "react-canva";
import Modal from "react-modal";
import "./style.css";

export default function OtherSystem() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} id={id}>
        <button type="button" onClick={closeModal}>
          X
        </button>
        <PlanetCard id={id} />
      </Modal>
      <Canvas className="other">
        <Arc
          x={500}
          y={300}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="yellow"
          fill=""
          onClick={() => {
            setId(8);
            openModal();
          }}
        />
        <Arc
          x={400}
          y={300}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="grey"
          fill=""
          onClick={() => {
            setId(2);
            openModal();
          }}
        />
        <Arc
          x={500}
          y={450}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="orange"
          fill=""
          onClick={() => {
            setId(7);
            openModal();
          }}
        />
        <Arc
          x={690}
          y={300}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="blue"
          fill=""
          onClick={() => {
            setId(20);
            openModal();
          }}
        />
        <Arc
          x={705}
          y={200}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="red"
          fill=""
          onClick={() => {
            setId(6);
            openModal();
          }}
        />
        <Arc
          x={400}
          y={50}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="#dfb740"
          fill=""
          onClick={() => {
            setId(5);
            openModal();
          }}
        />
        <Arc
          x={780}
          y={95}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="#d4b457"
          fill=""
          onClick={() => {
            setId(3);
            openModal();
          }}
        />
        <Arc
          x={90}
          y={395}
          radius={10}
          startAngle={0}
          endAngle={180}
          stroke="#23edd5"
          fill=""
          onClick={() => {
            setId(4);
            openModal();
          }}
        />
      </Canvas>
    </>
  );
}
