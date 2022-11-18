// Tìm hiểu về Callback, evenloop trong Javascript
const myDisplayer = (some) => {
    document.getElementById("demo").innerHTML = some;
};

const myCaculator = (num1, num2, callback) => {
    setTimeout(() => {
         callback(num1 + num2);
    }, 3000);
};

myCaculator(5,3,myDisplayer);
