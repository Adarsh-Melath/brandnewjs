let sum = 0;
let num = 1;

// outerloop: while (true) {
//     num = 1;
//     innerloop: while (num < 3) {
//         sum += num;
//         if (sum > 12) {
//             break outerloop;
//         }

//         console.log(sum);
//         num++;
//     }
// }

outerloop: while (sum < 12) {
    num = 1;
    innerloop: while (num < 3) {
        sum += num;
        if (a === 2 && sum < 12) {
            continue outerloop;
        }
        console.log('sum = ' + sum + ' num = ' + num);
        num++;
    }
}
