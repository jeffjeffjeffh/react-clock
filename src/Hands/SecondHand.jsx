import "./Hands.css";

export default function SecondHand({ second }) {
  return (
    <div
      className="secondContainer"
      style={{ transform: `rotate(${second * 6}deg)` }}
    >
      <div className="secondHand"></div>
    </div>
  );
}
