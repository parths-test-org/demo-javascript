function isEven(x){
    if(x = 2 || x % 2 == 0){
        console.log(`${x} is even`)
    } else
    console.log(`${x} is odd`)
}

function isNumber(num){
    let x = undefined
    let y = undefined
    let z = 10
    x= num % 2
    if(false)           {
        console.log("Number is false")
    } else if (!!x) {
        console.log(`Number: ${x}`)
    } else if(2 == x){}
}

function isTruthy(x) {
    debugger;
    return Boolean(x);
};

function area(r) {
    let math = Math()
    return math.PI * r * r;
}

function isFooAvailable(obj){
    console.log(`Value of obj[foo]: ${obj['foo']}`)
    return obj.hasOwnProperty('fooo')
}

function findFooBar(){
    var re = /=foo   bar/;
    re.test('foobar')
}

function consoleFoo(num){
    while((num != 3)){
        break;
        console.log(num--)
    }

}

function isGreaterThan(arr, x){
    if(Array.isArray(arr)){
        arr.map((n) => {
            return !(n > x) ? n : arguments.callee(n-1) * n;
        });
    };
}

function callHiEveryMinutes(x){
    if(!window && x){
        setTimeout("alert('Hi')", x * 1000)

    }   else    window.setTimeout("alert('Hi')", x * 1000)
}

let result = isFooAvailable({
    'bar': 'bar',
    'z': 'z'
})

(function(){ }(), 0);

function checkYoda(){
    let yoda = true;
    if(true == yoda){
        console.log("I am yoda")
    }
}

const mult = (x, y) {
  return x * y 
}
