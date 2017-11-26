// BEGIN (write your solution here)
export default (text) => {
    let result = [];
    let currentWord = '';
    let state = 'inside'; 
    for (let i = 0; i <= text.length; i++) {
      switch(state) {
        case 'inside':
          if (text[i] === ' ') {
            state = 'outside';
            break;
          }  
          if (text[i] === '\n') {
            if (currentWord.length > 0) {
              result = [...result, currentWord];  
            } 
            currentWord = '';
            break;            
          }
            currentWord += text[i];          
        case 'outside':
          if (text[i] === ' ') {
            break;
          }
          if (text[i] === '\n') {
            if (currentWord.length > 0) {
              result = [...result, currentWord];  
            }
            state = 'inside';
            currentWord = '';
            break;
          } 
          if (currentWord.length === 0) {
            currentWord += text[i];
            state = 'inside';
          }
        }
      }
    return result;
  }
// END
