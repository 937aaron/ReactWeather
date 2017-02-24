// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Dayton', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   }
//   else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Durham').then(function(temp){
//   console.log('Promise success', temp)
// }, function(err){
//   console.log('promise error', err)
// });

function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }
    else {
      reject('these were not both numbers');
    }
  });
}

addPromise(6, 8).then(function(result){
  console.log('Promise Success! Your formula returned ' + result)
}, function(err){
  console.log('promise error' , err)
});
addPromise("nut", 8).then(function(result){
  console.log('Promise Success! Your formula returned ' + result)
}, function(err){
  console.log('promise error' , err)
});
