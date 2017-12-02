// BEGIN (write your solution here)
export default (list) => {
  const iter = ([car, ...rest], r) => {
    if (!car) return r;
    const { year } = car;
    return iter(rest, { ...r, [year]: !r[year] ? 1 : r[year] + 1 });
  };
  return iter(list, {});
};
// END

