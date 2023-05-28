const zam = document.getElementById("zamowienie");
const num = document.getElementById("number");
const r = document.getElementById("R");
const g = document.getElementById("G");
const b = document.getElementById("B");
const res = document.getElementById("res");
const kol = document.getElementById("kolor");
const cytryna = document.getElementById("x");
const lisc = document.getElementById("y");
const banan = document.getElementById("z");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const redinput = document.getElementById("redinput");
const greeninput = document.getElementById("greeninput");
const blueinput = document.getElementById("blueinput");

zam.addEventListener("click", () => {
    if(num.value == 1){
        res.innerHTML = "Twoje zamówienie to cukierek 'cytryna'";
        console.log("test1 " + num.value);
    } else if(num.value == 2){
        res.innerHTML = "Twoje zamówienie to cukierek 'liść'";
        console.log("test2 " + num.value);
    } else if(num.value == 3){
        res.innerHTML = "Twoje zamówienie to cukierek 'banan'";
        console.log("test3 " + num.value);
    } else{
        res.innerHTML = "Twoje zamówienie to cukierek 'inny'";
        console.log("test4 " + num.value);
    }
    kol.style.backgroundColor = "rgb(" + r.value + ", " + g.value + ", " + b.value + ")";
    console.log("rgb(" + r.value + ", " + g.value + ", " + b.value + ")");
})

kol.addEventListener("click", () => {
    location.reload()
})

cytryna.addEventListener("mouseover", () => {
    num.value = "1";
    console.log(num.value);
})

lisc.addEventListener("mouseover", () => {
    num.value = "2";
    console.log(num.value);
})

banan.addEventListener("mouseover", () => {
    num.value = "3";
    console.log(num.value);
})

setInterval(rgbinput, 50)

function rgbinput(){
    redinput.value = red.value;
    greeninput.value = green.value;
    blueinput.value = blue.value;
}