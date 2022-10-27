function digitalRoot(n) {
    // ...Цифровой корень — это рекурсивная сумма всех цифр числа.
    //Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры, 
    //продолжайте уменьшать таким образом, пока не будет получено однозначное число. 
    //Ввод будет неотрицательным целым числом.
    if (!Array.isArray(n)) {
        if (n < 10 && n > 0) {
            return n;
        }
        const num = n.toString().split('');
        n = num.map(Number);
    }

    if (n.length == 2) {
        const result = digitalRoot(n[0] + n[1]);
        return result;
    } else if (n.length > 2) {
        const subtotal = n[0] + n[1];
        n.shift();
        n[0] = subtotal;
        const result = digitalRoot(n);
        return result;
    }
}

dig = digitalRoot(2377771790541017)
console.log(dig);

dig = digitalRoot(16)
console.log(dig);

dig = digitalRoot(4569)
console.log(dig);
