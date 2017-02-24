// var names = ['aaron','will','kevin','brian']
//
// names.forEach(function(name){
//   console.log('forEach', name)
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
//
// });
//
// names.forEach((name) => console.log(name));

//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Bob'));

// var person = {
//   name: 'Aaron',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' Says hi to ' + name )
//     })
//   }
// };
//
// person.greet();

function add (a, b) {
  return a + b;
}

var addStatement = (a,b) => {
  return a + b
}

var addExpression = (a, b)  => a + b;

console.log(addExpression(2,29));
console.log(addStatement(9, 9));
console.log(add(1,3));
console.log(add(0,9));
