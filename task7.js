function CountingEvenOdd(arr)
{
    let even_cont = 0;
    let odd_count = 0;
    let zero_cont = 0;

    for(let i = 0; i<= arr.length-1; i++){
        if (arr[i] % 2 === 0 && arr[i] / 2 != 0 )
        even_cont++;
    else if (arr[i] / 2 === 0)
    zero_cont++;

    else
    odd_count++;
    }

    console.log("Even numbers : " +even_cont
    + '\n' + "Odd nubers : " +odd_count + '\n' +
     "Zero numbers : "+zero_cont);
}

let arr = [ 1, 5, 2, 0, 8, 0, 9, 6, 28];

CountingEvenOdd(arr);