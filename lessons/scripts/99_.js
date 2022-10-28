function getCount(str) {
    //Возвращает количество (количество) гласных в заданной строке.
    //Мы будем рассматривать a, e, i, o, uкак гласные для этой Ката (но не y).
    //Входная строка будет состоять только из строчных букв и/или пробелов.

    const countStart = str.length;
    const newString = str.replace(/[aeiou]/gi, '');
    return countStart - newString.length;
}

console.log(getCount("abracadabra"));

function parse(data) {
    let val = 0
    const arrayStr = data.split('');
    let returnArray = [];

    for (let i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i] === "i") {
            val++;

        } else if (arrayStr[i] === "d") {
            val--;
        } else if (arrayStr[i] === "s") {
            val = Math.pow(val,2);
        } else if (arrayStr[i] === "o") {
            returnArray.push(val);
        }
    }
    return returnArray;
}

const rend = parse("iiisdoso");
console.log(rend);