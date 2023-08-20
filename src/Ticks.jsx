import "./Ticks.css";

export default function Ticks() {
  const ticks = generateTicks(12);
  return ticks;
}

function generateTicks(num) {
  const ticks = [];
  let x = 450;
  let y = 10;
  let rotation = 0;

  for (let i = 1; i <= num; i++) {
    rotation += 30;

    if (i >= 1 && i <= 6) {
      y += 138;
      
    } else if (i >= 7 && i <= 12) {
      y -= 138;
    }

    if ((i > 9 && i <= 12) || (i >= 1 && i <= 3)) {
      x += 138;
    } else if (i >= 4 && i <= 9) {
      x -= 138;
    }

    ticks.push(<Tick x={x} y={y} rotation={rotation} />);
  }
  return ticks;
}

function Tick({ x, y, rotation }) {
  return (
    <div
      className="tick"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    ></div>
  );
}
