var x = "";

for (var i = 0; i <= 100 ; i++) {
    if ((i % 5 == 0) && (i % 3 == 0)) {
        x = x + '<span class="fizzbuzz">FizzBuzz </span>';
        console.log(i);
    } else if (i % 3 == 0) {
        x = x + '<span class="fizz">Fizz </span>';
        console.log(i);
    } else if (i % 5 == 0) {
        x = x + '<span class="buzz">Buzz </span>';
        console.log(i);
    }
}

document.getElementById('FizzBuzz').innerHTML = x;
