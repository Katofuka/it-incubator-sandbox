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

function meeting(x, need) {
    let chairArray = [];
    if (need === 0) return "Game On"
    else {
        for (let i = 0; i < x.length; i++) {
            let tookInRoom = 0;

            let chairOccupied = x[i][0].split('');

            if (chairOccupied.length < x[i][1]) {
                const free = x[i][1] - chairOccupied.length;
                if (free <= need) {
                    tookInRoom += free;
                } else {
                    tookInRoom += need;
                }
                need -= tookInRoom;
                chairArray.push(tookInRoom);

            } else {
                chairArray.push(0);
            }
            if (need === 0) return chairArray;
        }
        if (need > 0) return "Not enough!"

        return chairArray;

    }
}


const factorial = n => {
    let countFactorial = 1;
    return n === 0 ? 1 : n > 1 ? countFactorial = n * (factorial(n - 1)) : countFactorial
}


function incrementString(strng) {
    // return incrementedString
    const arrayStr = strng.split('');
    if (/^-?[\d.]+(?:e-?\d+)?$/.test(arrayStr[arrayStr.length - 1])) {
        arrayStr[arrayStr.length - 1]++;
        return arrayStr.join("")
    } else {
        arrayStr.push("0");
        return arrayStr.join("");
    }
}

console.log(incrementString("foobar000"));
console.log(incrementString("foobar00b"));