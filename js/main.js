import Person from './modules/DataObject.js'; 

// this is an INFE -> Immediately Invoked Function Expresstion
// this is the JavaScript Module Pattern
(() => {
    console.log('working!');
    console.log(Person);
})();