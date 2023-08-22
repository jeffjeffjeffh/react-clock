import "./Hands.css";

export default function HourHand({ hours }) {
  return (
    <div
      className="hourContainer"
      style={{ transform: `rotate(${hours * 30 - 90}deg)` }}
    >
      <div className="hourHand"></div>
    </div>
  );
}
