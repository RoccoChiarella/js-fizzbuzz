var fizz = "";

var buzz = "";

var fizzbuzz = "";

for (var i = 3; i <= 100 ; i++) {
    if ((i % 5 == 0) && (i % 3 == 0)) {
        fizzbuzz = fizzbuzz + '<span>FizzBuzz <span class="numero">'+ i +'</span></span>';
        console.log(i);
    } else if (i % 3 == 0) {
        fizz = fizz + '<span>Fizz <span class="numero">'+ i +'</span></span>';
        console.log(i);
    } else if (i % 5 == 0) {
        buzz = buzz + '<span>Buzz <span class="numero">'+ i +'</span></span>';
        console.log(i);
    }
}

document.getElementById('fizz').innerHTML = fizz;

document.getElementById('buzz').innerHTML = buzz;

document.getElementById('fizzbuzz').innerHTML = fizzbuzz;
