const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();
// establishes a connection with the game server
/*const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Name: Jovita');

  });

  conn.on('data', (data) => {
    console.log(data.toString());
    
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

 

  return conn;
};*/

