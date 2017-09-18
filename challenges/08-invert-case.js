import * as strings from './strings';

// BEGIN (write your solution here)
export const invertCase = (srt) => {
  let result = "";
  for (let i = 0; i < strings.length(srt); i++) {
    result+=(strings.toUpperCase(srt[i]) === srt[i]) ? strings.toLowerCase(srt[i]) : strings.toUpperCase(srt[i]);
  }
  return result;
}
// END
