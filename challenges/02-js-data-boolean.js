// BEGIN (write your solution here)
export const True = (a) => (b) => a;
export const False = (a) => (b) => b;
export const If = (a) => (b,c) => a(b,c);
// END
