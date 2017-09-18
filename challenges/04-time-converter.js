// BEGIN (write your solution here)
const timeConverter = (minutes) => {
  if (minutes < 10) {
    return `00:0${minutes}`;
  }
  else if (minutes < 60) {
    return `00:${minutes}`;
  }
  else if (Math.floor(minutes/60) < 10 && (minutes - Math.floor(minutes/60)*60) < 10) {
    return `0${Math.floor(minutes/60)}:0${minutes - Math.floor(minutes/60)*60}`
  }
  else if (Math.floor(minutes/60) < 10 && (minutes - Math.floor(minutes/60)*60) >= 10) {
    return `0${Math.floor(minutes/60)}:${minutes-Math.floor(minutes/60)*60}`
  }
  else if (Math.floor(minutes/60) > 10 && (minutes - Math.floor(minutes/60)*60) < 10) {
    return `${Math.floor(minutes/60)}:0${minutes-Math.floor(minutes/60)*60}`
  }
  return `${Math.floor(minutes/60)}:${minutes-Math.floor(minutes/60)*60}`
}
export default timeConverter;
// END
