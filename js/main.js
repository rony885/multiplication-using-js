/* document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('multiplicationForm');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the input values
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);

        // Check if the input values are valid numbers
        if (isNaN(num1) || isNaN(num2)) {
            resultElement.textContent = 'Please enter valid numbers.';
        } else {
            // Perform the multiplication
            const result = num1 * num2;
            resultElement.textContent = `Result: ${result}`;
        }
    });
}); */



/* let btn = document.getElementById("btn").addEventListener("click",function(){
let input = document.getElementById("my_input").value;
if(!isNaN(input)){
    for(let i = 1; i<=10; i++){
        let result = i*input;
        let display = document.getElementById("display");
        display.innerHTML += input + " x " +i + " = "+ result +"<br/>";
        document.getElementById("my_input").value = ""
    }
}else{
alert("ok")
}

});  */
 


//  document.getElementById("btn").addEventListener("click", function () {
//     let input = parseInt(document.getElementById("my_input").value);

//     if (!isNaN(input)) {
//         let display = document.getElementById("display");
//         display.innerHTML = ""; // Clear any previous content

//         for (let i = 1; i <= 10; i++) {
//             let result = input * i;
//             display.innerHTML += input + " x " + i + " = " + result + "<br>";
//         }

//         document.getElementById("my_input").value = "";
//     } else {
//         alert("Please enter a valid number.");
//     }
// }); 

// console.log(input);


 let btn = document.getElementById("btn").addEventListener("click",function(){
    let input = parseInt(document.getElementById("my_input").value);

    if(!isNaN(input)){
        let display = document.getElementById("display");
        display.innerHTML = "";

        for(let i = 1; i <= 10; i++){
            let result = i*input;
            display.innerHTML += input + " x " + i + " = " + result + " <br> "; 
            document.getElementById("my_input").value = "";
        }
    }
    else{
        alert("Please Enter Your Valid Number");
    }
}); 

