const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let Contacts=[]
function addContact(){
// Prompt the user for their name
rl.question('Hi user please enter your name ! ', (name) => { 
    //prompt for user name 
  rl.question('Please enter your phonenumber' ,(phone) =>{
  //console.log(`Hello, ${name}, Your phone number is ${phone}!`);
  
  Contacts.push({
    Username:name,
    phonenumber:phone

  });
    rl.question('Do you want to create another contact? (yes/no)',(answer)=>{
        if (answer.toLowerCase() === 'yes' ){
            addContact()
        }
        else{
            console.log(" \n allContacts : ");
            console.log(Contacts);
        rl.question('Serch by the user name  :' ,(searchedName)=>{
        const result = Contacts.find(contact => contact.Username === searchedName);
        if (result) {
          console.log('\n Contact found:', result);
        } else {
          console.log('\n Contact not found.');
        } 
        rl.close(); 
    });
        }
    });
    
 });
});
}
addContact()



   

