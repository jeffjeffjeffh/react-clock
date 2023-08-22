import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";

export default function Hands({ time }) {
  let hours;
  let minutes;
  let seconds;

  if (time.hours) {
    hours = time.hours;
    minutes = time.minutes;
    seconds = time.seconds;
  } else {
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
  }

  return (
    <>
      <HourHand hours={hours} />
      <MinuteHand minutes={minutes} />
      <SecondHand seconds={seconds} />
    </>
  );
}
