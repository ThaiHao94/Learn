// product: {
// 	id: ,
// 	image: 'https://',
// 	title: 'Product title',
// 	space_for_description: 'abc',
// 	price: 48.56,
// 	discount: 10%,
// }

// Màn hình sign in.

// Email: 
// 	+ Không được để rỗng.
// 	+ đúng định dạng email (regex)
// Password
// 	+ Không được để rỗng.
// 	+ Nhiều hơn 8 ký tự.
// 	+ Có ít nhất 1 ký tự in hoa, 1 ký tự đặc biệt, 1 ký tự in thường.

// Màn hình index.
// + thiết kế dữ liệu.
// + Thực hiện render giao diện với dữ liệu vừa tạo
// var modal = document.getElementById('id01');
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
const regexEmail =/\w+@\w+\.com/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]/;

const errorValidateEmail = document.getElementById('validateEmail');
const errorValidatePassword = document.getElementById('validatePassword');
const emailElem = document.getElementById('emailInput');
const passwordElem = document.getElementById('passwordInput');

function handleSubmit() {
    if (emailElem.value === "") {
        errorValidateEmail.innerHTML = 'Email is not empty';
    } else if(!regexEmail.test(emailElem.value)) {
        errorValidateEmail.innerHTML = 'Email is invalid';
    } else {
        errorValidateEmail.innerHTML = 'Email is valid';
    }

    if (passwordElem.value === "") {
        errorValidatePassword.innerHTML = 'Password is not empty'
    } 
    if (passwordElem.value.length < 8) {
        errorValidatePassword.innerHTML = 'Password must be more than 8 characters '   
    } else if (!regexPassword.test(passwordElem.value)) {
        errorValidatePassword.innerHTML = 'Password is invalid'
    } else {
        errorValidatePassword.innerHTML = 'Password is valid'
    }
}        