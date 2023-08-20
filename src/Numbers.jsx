import "./Number.css";

export default function Numbers() {
  const numbers = generateNumbers(12);
  return numbers;
}

function generateNumbers(num) {
  const numbers = [];
  let x = 435;
  let y = 90;

  for (let i = 1; i <= num; i++) {
    if (i >= 1 && i <= 6) {
      y += 110;
    } else if (i >= 7 && i <= 12) {
      y -= 110;
    }

    if ((i > 9 && i <= 12) || (i >= 1 && i <= 3)) {
      x += 110;
    } else if (i >= 4 && i <= 9) {
      x -= 110;
    }

    numbers.push(<Number num={i} x={x} y={y} />);
  }

  return numbers;
}

function Number({ num, x, y }) {
  return (
    <div className="number" style={{ left: `${x}px`, top: `${y}px` }}>
      {num}
    </div>
  );
}
