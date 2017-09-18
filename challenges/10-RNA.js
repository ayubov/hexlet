import * as strings from './strings';

// BEGIN (write your solution here)
export const toRna = (dna) => {
  let rna = "";
  for (let i = 0; i < strings.length(dna); i++) {
    switch(dna[i]) {
      case "G":
        rna+="C"
        break;
    case "C":
        rna+="G"
        break;
    case "T":
        rna+="A"
        break;
    case "A":
        rna+="U"
        break;
    }
  }
  return rna;
}
// END
