
console.log(`//////// Binary Gap Calculator ////////`)


// CALCULATE Binary GAP https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Insert number to calculate binary gap => ', number => {
    countGaps(number * 1)
    readline.close();
});

const countGaps = (N) => {

    let biggestGap = 0

    let newGap = 0

    let arrGap = []

    let isAgap = false

    let stringN = N.toString(2)

    console.log('binary number is = ',stringN)

    for (i = 0; i < stringN.length; i++) {


        if (stringN[i - 1] == '1' && stringN[i] == '0') {
            isAgap = true
        }

        if (isAgap && stringN[i] == '0') {
            newGap++
        } else {

            isAgap = false
            arrGap.push(newGap)
            newGap = 0
        }

    }

    arrGap.forEach(num => {
        if (num > biggestGap) {
            biggestGap = num
        }
    })


    console.log('biggest gap = ',biggestGap)

    return biggestGap

}


