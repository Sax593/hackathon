import PlanetCard from "@components/PlanetCard/PlanetCard";
import { useState } from "react";
import { Canvas, Arc } from "react-canva";
import Modal from "react-modal";
import "./style.css";

export default function Map() {
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
          stroke="grey"
          fill="grey"
          onClick={openModal}
        />
        <Arc
          x={500}
          y={450}
          radius={15}
          startAngle={0}
          endAngle={180}
          stroke="orange"
          fill="orange"
          onClick={openModal}
        />
        <Arc
          x={690}
          y={300}
          radius={15}
          startAngle={0}
          endAngle={180}
          stroke="blue"
          fill="blue"
          onClick={openModal}
        />
        <Arc
          x={705}
          y={200}
          radius={17}
          startAngle={0}
          endAngle={180}
          stroke="red"
          fill="red"
          onClick={openModal}
        />
        <Arc
          x={400}
          y={50}
          radius={28}
          startAngle={0}
          endAngle={180}
          stroke="#dfb740"
          fill="#dfb740"
          onClick={openModal}
        />
        <Arc
          x={780}
          y={95}
          radius={25}
          startAngle={0}
          endAngle={180}
          stroke="#d4b457"
          fill="#d4b457"
          onClick={openModal}
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
          onClick={openModal}
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
