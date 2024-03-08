const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultOutput = document.getElementById('result');

checkButton.addEventListener("click", check);


function check() {
    const inputStr = textInput.value;
    if (inputStr ==""){
        alert("Please input a value");
        return false;
    } else {
        let newStr = inputStr.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // .split('');
        let reversedArr = newStr.split('').reverse();
        let reversedStr = reversedArr.join('');
        resultOutput.innerHTML += `${inputStr}, ${reversedStr}`;
        if (newStr === reversedStr) {
            resultOutput.innerHTML = `${inputStr} is a palindrome`;
        } else {
            resultOutput.innerHTML = `${inputStr} is not a palindrome`;
        }
    }

}
