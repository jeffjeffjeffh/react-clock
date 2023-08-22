import "./Hands.css";

export default function SecondHand({ seconds }) {
  return (
    <div
      className="secondContainer"
      style={{ transform: `rotate(${seconds * 6 - 90}deg)` }}
    >
      <div className="secondHand"></div>
    </div>
  );
}
