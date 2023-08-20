import "./Hands.css";

export default function HourHand({ hour }) {
  return (
    <div
      className="hourContainer"
      style={{ transform: `rotate(${hour * 30}deg)` }}
    >
      <div className="hourHand"></div>
    </div>
  );
}
