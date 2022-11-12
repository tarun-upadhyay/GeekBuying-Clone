import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Text, Flex, Spacer } from "@chakra-ui/react";
const Timer = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [timermiliSeconds, setTimerMiliseconds] = useState();
  let interval;
  const startTimer = () => {
    const countDownDate = new Date("Nov 15,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 100));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      const miliseconds = Math.floor(distance % 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        setTimerMiliseconds(miliseconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
  }, []);
  return (
    <Flex gap={"10"} mt={"3"} paddingRight={"2"}>
      <Text color={"red"}>
        Ends in {timerDays}:{timerHours}:{timerMinutes}:{timerSeconds}:{timermiliSeconds}
      </Text>
    </Flex>
  );
};

export default Timer;
