function getCount(str) {
    //Возвращает количество (количество) гласных в заданной строке.
    //Мы будем рассматривать a, e, i, o, uкак гласные для этой Ката (но не y).
    //Входная строка будет состоять только из строчных букв и/или пробелов.

    const countStart = str.length;
    const newString = str.replace(/[aeiou]/gi, '');
    return countStart - newString.length;
}

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
            val = Math.pow(val, 2);
        } else if (arrayStr[i] === "o") {
            returnArray.push(val);
        }
    }
    return returnArray;
}

function gap(g, m, n) {
    // your code
    const primeArray = [];
    for (let i = m; i <= n; i++) {
        let flag = 1;
        if (i > 2 && i % 2 != 0) {
            for (let j = 3; j * j <= i; j = j + 2) {
                if (i % j == 0) {
                    flag = 0;
                    break;
                }
            }
        }
        else if (i != 2) flag = 0;
        if (flag == 1) primeArray.push(i)
    }
    for (let i = 0; i < primeArray.length; i++) {
        if (i + 1 < primeArray.length && primeArray[i + 1] - primeArray[i] === g)
            return [primeArray[i], primeArray[i + 1]]
    }
    return null;
}

