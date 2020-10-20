let person = "Lee"
// Global Scope


function greeting() {
  //function scope
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}


function greeting2() {
  //function scope
  let person = 'Robert';
  alert(`Good Morning, ${person}!`);
}

greeting();
alert(`Hi, ${person}`);
greeting2();