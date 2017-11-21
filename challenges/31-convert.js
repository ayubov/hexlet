// BEGIN
const convert = items => items.reduce((acc, [key, value]) =>
({ ...acc, [key]: value instanceof Array ? convert(value) : value }), {});
export default convert;
// END