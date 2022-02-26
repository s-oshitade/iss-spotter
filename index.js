const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// const callback = function (error, ip) {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip)
// }

// fetchMyIP(callback)



// const callback = function(error, coordinates) {
//   if (error) {
//     console.log('It didn\'t work:', error);
//   }
//   console.log('It worked! Returned coordinates:', coordinates);
// };
// fetchCoordsByIP('199.126.227.229', callback);