import "./Number.css";

export default function Numbers() {
  const numbers = generateNumbers(6);
  return numbers;
}

function generateNumbers(num) {
  const numbers = [];
  for (let i = 1; i <= num; i++) {
    numbers.push(<Number num={i} />);
  }
  return numbers;
}

function Number({ num }) {
  return (
    <div
      className="numberContainer"
      style={{ transform: `rotate(${num * 30 + 90}deg)` }}
    >
      <div
        className="number"
        style={{
          transform: `rotate(${num * 330 - 90}deg)`,
          marginRight: "550px",
        }}
      >
        {num}
      </div>
      <div
        className="number"
        style={{ transform: `rotate(${num * 330 - 90}deg)` }}
      >
        {6 + num}
      </div>
    </div>
  );
}
