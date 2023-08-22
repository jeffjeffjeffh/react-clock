import "./Hands.css";

export default function MinuteHand({ minutes }) {
  return (
    <div
      className="minuteContainer"
      style={{ transform: `rotate(${minutes * 6 - 90}deg)` }}
    >
      <div className="minuteHand"></div>
    </div>
  );
}
