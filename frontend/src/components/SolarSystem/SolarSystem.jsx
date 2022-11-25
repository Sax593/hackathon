import PlanetCard from "@components/PlanetCard/index";
import { useState } from "react";
import { Canvas, Arc } from "react-canva";
import Modal from "react-modal";
import "./style.css";

export default function SolarSystem() {
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
          fill="grey"
          onClick={() => {
            setId(9);
            openModal();
          }}
        />
        <Arc
          x={500}
          y={450}
          radius={15}
          startAngle={0}
          endAngle={180}
          stroke="orange"
          fill="orange"
          onClick={() => {
            setId(10);
            openModal();
          }}
        />
        <Arc
          x={690}
          y={300}
          radius={15}
          startAngle={0}
          endAngle={180}
          stroke="blue"
          fill="blue"
          onClick={() => {
            setId(11);
            openModal();
          }}
        />
        <Arc
          x={705}
          y={200}
          radius={17}
          startAngle={0}
          endAngle={180}
          stroke="red"
          fill="red"
          onClick={() => {
            setId(1);
            openModal();
          }}
        />
        <Arc
          x={400}
          y={50}
          radius={28}
          startAngle={0}
          endAngle={180}
          stroke="#dfb740"
          fill="#dfb740"
          onClick={() => {
            setId(12);
            openModal();
          }}
        />
        <Arc
          x={780}
          y={95}
          radius={25}
          startAngle={0}
          endAngle={180}
          stroke="#d4b457"
          fill="#d4b457"
          onClick={() => {
            setId(13);
            openModal();
          }}
        />
        <Arc
          x={780}
          y={95}
          radius={30}
          startAngle={0}
          endAngle={180}
          stroke="#babec2"
          fill="transparent"
        />
        <Arc
          x={90}
          y={395}
          radius={22}
          startAngle={0}
          endAngle={180}
          stroke="#23edd5"
          fill="#23edd5"
          onClick={() => {
            setId(14);
            openModal();
          }}
        />
        <Arc
          x={90}
          y={395}
          radius={30}
          startAngle={0}
          endAngle={180}
          stroke="#babec2"
          fill="transparent"
        />
        <Arc
          x={975}
          y={425}
          radius={22}
          startAngle={0}
          endAngle={180}
          stroke="#0066cc"
          fill="#0066cc"
          onClick={() => {
            setId(15);
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
          radius={190}
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
          radius={230}
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
          radius={350}
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
          radius={420}
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
