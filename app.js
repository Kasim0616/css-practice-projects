// traffic rules

let light1 = false;
let light2 = false; 


if (light1 && light2) {
    console.log("yellow");
} else if ( light1 || light2) {
    console.log("red");
}else {
    console.log("green");
}