const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
  let code = { 10: '.', 11: '-' },
    arr = expr.match(/.{10}/g),
    res = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != '**********') arr[i] = +arr[i];
  }
  
  let newArr = arr.map((a) => (a.toString().match(/.{2}/g)));
  
  for (let j = 0; j < newArr.length; j++) {
    let jj = newArr[j];
    for (let i = 0; i < jj.length; i++) {
      for (const [key, value] of Object.entries(code)) {
        if (jj[i] == key) {
          jj[i] = value;
        }
      }
    }
    res.push(jj.join(''));
  }
  
  for (let i = 0; i < res.length; i++) {
    for (const [key, value] of Object.entries(MORSE_TABLE)) {
      if (res[i] == key) {
        res[i] = value;
      }
    }
  }
return res.join('').replace(/\b\*\*\*\*\*\*\*\*\*\*\b/g, ' ')
}

module.exports = {
    decode
}
