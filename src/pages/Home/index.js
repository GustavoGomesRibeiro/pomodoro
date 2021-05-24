import React, { useState, useEffect } from "react";
import {
  Container,
  Content,
  Title,
  Session,
  Timer,
  Text,
  Control,
  ControlBreak,
  ControlSession,
} from "./styles";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          const minute = message ? 24 : 4;
          const second = 59;

          setSeconds(second);
          setMinutes(minute);
          setMessage(!message);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <Container>
      <Title>Pomodoro Clock</Title>
      <Content>
        {message && <div>It's Over! Take a Break</div>}
        <Session>
          <div>
            <Timer>
              {timerMinutes}:{timerSeconds}
            </Timer>
            <Text>Session</Text>
          </div>
        </Session>

        <Control>
          <ControlBreak>
            - 5 +<div>Break</div>
          </ControlBreak>
          <ControlSession>
            - 25 + <div>Session</div>
          </ControlSession>
        </Control>
      </Content>
    </Container>
  );
}
