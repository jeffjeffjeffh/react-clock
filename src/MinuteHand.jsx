import "./MinuteHand.css";

export default function MinuteHand({ minute }) {
  return (
    <div
      className="minuteContainer"
      style={{ transform: `rotate(${minute * 6}deg)` }}
    >
      <div className="minuteHand"></div>
    </div>
  );
}
