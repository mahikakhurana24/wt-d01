function Fibonacci (){
    const number = parseInt(ent.value);
    let n1 = 0, n2 = 1, nextTerm;

    var e=document.getElementById("ent").value;
    var o=document.getElementById("out")
    o.innerHTML += n1 +"<br>"; 
    o.innerHTML += n2 +"<br>";

    // console.log('Fibonacci Series:');
    // document.write('Fibonacci Series: <br>');

    for (let i = 1; i <= number; i++) {
        // console.log(n1);
        o.innerHTML += n1 + "<br>"
        // document.write(n1 + "<br>")
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}