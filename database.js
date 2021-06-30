const mysql = require("mysql");

const parameters = {
    host: "34.126.172.116",
    user: "root",
    password: "fintechsglab",
    port: 3306,
    database: "market",
};

let connection = mysql.createConnection(parameters); 

// connection.connect((error) => { 
//     if (error) {
//         console.log(error);
//       } else {
//         console.log("great");
//       }
// });

connection.connect((error) => {
    if (error) {
      console.log("Connection to MySQL failed! \n" + error);
    } else {
      console.log("hello...Connected to MySQL!");
    }
  });
  

module.exports = {
    connection,
  };
  


// connection.query(
//     `select * from products
//     where market_price > 50
//     order by market_price ASC`, // mysql query in string format
//     (error, result) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(result[2].name);
//       }
//     }
//   );