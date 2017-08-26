import * as bcrypt from './services/bcrypt';
let password;
async function a() {
    password = await bcrypt.hash('123admin');    
}
a();
setInterval(function() {
    console.log(password);
}, 5000)