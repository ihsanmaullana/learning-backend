//callback
function greetUser(name, callback){
  const message = `${name}, selamat datang!`;
  callback(message);
}

function printMessage(text){
  console.log(text);
}

greetUser("Ihsan", printMessage);
