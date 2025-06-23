// pure
function add(x,y){
    return x + y;
}

add(1,2)

// impure
function add2(x,y){
    console.log(x + y); // external side effect
    return x + y;
}

add2(1,2);

// impure
let flag = 0;
function incrementflag() {
    flag++;
}
incrementflag();
console.log(flag); 