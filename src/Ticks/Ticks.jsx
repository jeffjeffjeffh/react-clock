import "./Ticks.css";

export default function Ticks() {
  const ticks = generateTicks(6);
  return ticks;
}

function generateTicks(num) {
  const ticks = [];
  let rotation = 0;

  for (let i = 1; i <= num; i++) {
    rotation += 30;

    ticks.push(<Tick rotation={rotation} />);
  }
  return ticks;
}

function Tick({ rotation }) {
  return (
    <div
      className="tickContainer"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="tick" style={{ marginRight: "400px" }}></div>
      <div className="tick" style={{ marginLeft: "400px" }}></div>
    </div>
  );
}