// // Xử lý trong Javascript. Thao tác tới DOM tree.
// const container = document.getElementById('container');
// console.log(container);
// container.style.height = '500px';
// container.style.backgroundColor = 'green';
// console.log(document.getElementById('inputElem').value);
// document.getElementById('inputElem').value = 'Thai Hao';

// console.log(document.getElementsByTagName('h1')[0]);

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// const handleShowLogin = () => {
//     document.getElementById('id01').style.display = 'block';
// }
// const handleHideLogin = () => {
//     document.getElementById('id01').style.display = 'none';
// }
// const handleCancel = () => {
//     document.getElementById('id01').style.display = 'none';
// }
// const handleLogin = () => {
//     const userName = document.getElementById('userName');
//     const password = document.getElementById('password');

//     if (!userName || !password) {
//         alert('Invalid input query');
//     }

//     if(userName.value === "") {
//         document.getElementById('validateUserName').style.display = 'block'
//     } else {
//         document.getElementById('validateUserName').style.display = 'none'
//     }

//     if(password.value === "") {
//         document.getElementById('validatePassword').style.display = 'block'
//     } else {
//         document.getElementById('validatePassword').style.display = 'none'
//     }
// }

const handleShowLogin = () => {
    document.getElementById("id01").style.display = "block";
  };
  
  const handleHideLogin = () => {
    document.getElementById("id01").style.display = "none";
  };
  
  const handleCancel = () => {
    document.getElementById("id01").style.display = "none";
  };
  
  const handleLogin = () => {
    const userName = document.getElementById("userName");
    const password = document.getElementById("password");
  
    if (!userName || !password) {
      alert("Invalid input query");
    }
  
    if (userName.value === "") {
      document.getElementById("validateUserName").style.display = "block";
    } else {
      document.getElementById("validateUserName").style.display = "none";
    }
  
    if (password.value === "") {
      document.getElementById("validatePassword").style.display = "block";
    } else {
      document.getElementById("validatePassword").style.display = "none";
    }

    if (userName.value === 'admin' && password.value === 'admin') {
      // window.location.href = 'https://youtube.com'
      window.location.assign('https://youtube.com')
    }
  };

  /**
 * userName === 'admin' and password === 'admin' => link to https://youtube.com
 */
    