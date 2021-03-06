const { nextISSTimesForMyLocation } = require('./iss');
/**
 * All the codes below ought to be deleted but I have left them here intentionally for future reference. In a production environment, lines 5 to 35 below would be commented out.
 */

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
      //  return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates);
// };
// fetchCoordsByIP('199.126.227.229', callback);

// let lat = 50.9899;
// let lon = -114.1574;

// const coords = { latitude: lat, longitude: lon };

// fetchISSFlyOverTimes(coords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn\'t work:", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', passTimes);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log("Yay! It worked!", passTimes);
});