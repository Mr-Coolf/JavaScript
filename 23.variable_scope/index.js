// local vs global
let x = 1;
console.log(x);
function fn1() {
    let x = 2;
    console.log(x);
}
function fn2() {
    let x = 3;
    console.log(x);
}
fn1();
fn2();