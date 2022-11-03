// function recursive(n) {
//     if(n=0) {
//         return 0;
//     }
//     return n + recursive(n-1)
// }


// console.log(recursive(5));

const arr = [1, 25, 7, -7, -3, 12, -22, 0]

console.log(arr.sort(function (a, b) {
    return a - b;
}));

console.log(arr.sort(function (a, b) {
    if (Math.abs(a) - Math.abs(b) === 0) {
        return a - b;
    };
    return Math.abs(a) - Math.abs(b);
}))


// Khái niệm vùng (Scope)

function addNewcomment(newComment) {
    if (newComment === "") {
        console.log('new comment is empty');
        return;
    } else {
        console.log('new comment is:', newComment)
    }
}

let newComment = 'Dog'; // Thay đổi kiểu dữ liệu sang obj, arr...
function addNewcomment(newComment) {
    newComment = 'Cat';
};

addNewcomment(newComment);
console.log(newComment);

const ages = [3, 5, 44, 7, 33, 33, 17, 90, 8, 12, 3, 24,
    120, 7, 100];

const ranges = [
    [7, 15],
    [4, 40],
    [11, 125]
];

// Đếm số phần tử thỏa mãn của mảng ages với từng phần tử trong mảng ranges
// output [ 4,9,9];

// let output = [];
// let output1 = ages.filter(function(element) {if (element >= ranges[0][0] && element <= ranges[0][1]) return element}).length
// let output2 = ages.filter(function(element) {if (element >= ranges[1][0] && element <= ranges[1][1]) return element}).length
let output3 = ages.filter(function(element) {if (element >= ranges[2][0] && element <= ranges[2][1]) return element})
// console.log(output.concat(output1).concat(output2).concat(output3));

let output = ranges.map(a => ages.filter(function(element) {if (element >= a[0] && element <= a[1]) return element}).length)
let output1 = ranges.map(function (a) { return (ages.filter(function(element) {if (element >= a[0] && element <= a[1]) return element}).length)})
console.log(output)
console.log(output1)
// let output = ranges.map(function(value) )

function agesFilter(element, rangesItem){
    if(element >= rangesItem[0] && element <= rangesItem[1]) return element
}

function rangesMap(rangesItem){
    return ages.filter(e => agesFilter(e, rangesItem)).length
    // return ages.filter(function (e) {if})
}

let output2 = ranges.map(e => rangesMap(e))


// A = ages.filter(function (element) { if (element >= a[0] && element <= a[1]) return element }).length

console.log(output2)

// for (i=0; i<ages.length; i++) {
//     if(ages[i] >= ranges[0][0] && ages[i] <= ranges[0][1]) {  
//         output = output.concat(ages[i])
       
//         output.push(ages[i]);
//     }   
// }

// console.log(output);   

let ketqua = ranges.map(function(rangesItem) {return ages.filter(function(agesItem) {if(agesItem >= rangesItem[0] && agesItem <= rangesItem[1] ) return agesItem}).length})
    console.log(ketqua)
// let out = ranges.map(function(rangesItem) {return ages.filter(function(agesItem, rangesItem) {if(agesItem >= rangesItem[0] && agesItem <= rangesItem[1]) return agesItem}).length;})
// let out1 = ages.filter(function(agesItem, rangesItem) {if(agesItem >= rangesItem[0] && agesItem <= rangesItem[1]) return agesItem}).length;

// console.log(out1)
 


