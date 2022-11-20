// // Tìm hiểu Promise, async/await

// // Các trạng thái của Promise

// const myPromise = new Promise((resolve, reject) => {
//     // resolve('My promise is successed!');
//     throw Error('My promise is error');
// });
// myPromise.then(
//     (data) => console.log(data),
//     (error) => console.log(error)
// );


// const promise1 = Promise.resolve("foo");
//       promise2 = Promise.reject("Error promise");
//       promise3 = 45;
// Promise.allSettled([promise1, promise2, promise3])
//     .then((values) => {
//         console.log("values", values);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     })

// import axios from "axios";
// import fetch from "node-fetch";

// const fetchAPI = () => {
//     const myApi = new Promise((resolve, reject) => {
//         const data = fetch("https://jsonplaceholder.typicode.com/todos/1");
//         // return data.then((res) => res.json);
//         resolve(data);
//     });
//     return myApi.then((data) => data.json()).then((json) => console.log(json));
// }

// fetchAPI();
// .then((data) => console.log(data.data))
// .catch((error) => console.log(error));

// import axios from "axios";

// const fetchAPI = () => {
//     const myApi = new Promise((resolve, reject) => {
//         const data = axios.get("https://api.publicapis.org/entries1")
//         resolve(data); // Tìm hiểu lỗi
//         reject(data);
//     });
//     return myApi
//     .then((json) => console.log(json.data))
//     .catch(error => console.log(error.message));
// };

// fetchAPI();

// async function fetchAPI() {
//     console.log("Keep running without await")
// }

// const fetchAPI2 = async () => {
//     await console.log("Cannot run without async")
// }

import fetch from "node-fetch"

const fetchAPI = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    data.json().then((response) => {
        console.log("response",response);
    });
    // const res = await data.json();
    // console.log("res", res);
}

fetchAPI();