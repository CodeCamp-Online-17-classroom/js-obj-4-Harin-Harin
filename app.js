let username = prompt('Username')
let email = prompt('E-mail')
let password = prompt('Password')

let user = {
  Username : username,
  Email : email,
  Password : password
};
console.log(user)
alert(`Username: ${user.Username}\nEmail: ${user.Email}\nPassword: ${user.Password}`);
