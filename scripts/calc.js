export function getTimeDatas(time) {
    //hr, min, sec, day, daytime, weekday, month, year, period
    const calcSeconds = Math.floor((time / 1000) % 60);
    const calcMinutes = Math.floor((time / (1000 * 60)) % 60);
    const calcHours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const calcDays = Math.floor(time / (1000 * 60 * 60 * 24));
    const calcWeeks = Math.floor(time / (1000 * 60 * 60 * 24 * 7));
    const calcMonths = Math.floor(time / (1000 * 60 * 60 * 24 * 30));

    let seconds = calcSeconds;
    let minutes = calcMinutes;
    let hours = calcHours;
    let days = calcDays;
    let weeks = calcWeeks;
    let months = calcMonths;
    let s = " secondes";
    let m = " minutes";
    let h = " heures";
    let d = " jours";

    if (calcMinutes < 1 && calcHours < 1 && calcDays < 1) {
      return `${seconds} secondes`;
      minutes = "";
      hours = "";
      days = "";
      m = "";
      h = "";
      d = "";
    }
    if (calcHours < 1 && calcDays < 1) {
      return `${minutes} minutes et ${seconds} secondes`;
      hours = "";
      days = "";
      h = "";
      d = "";
    }
    if (calcDays < 1) {
      return ` ${hours} heures et ${minutes} minutes`;
      days = "";
      d = "";
    }
    if (calcWeeks < 1) {
      return `${days} jours et ${hours} heures`;
    }
    if (calcMonths < 1) {
      return `${weeks} semaines et ${days} jours`;
    }
    const TIME = {
      seconds,
      s,
      minutes,
      m,
      hours,
      h,
      days,
      d,
    };
    // const TIME = minutes;
    return TIME;
  }