const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const name = 'Jovita 😀'
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
    // Handle successful connection event
  conn.on('connect', () => {
      // code that does something when the connection is first established
    console.log("Successfully connected to game server");  
    conn.write('Name: Jov');//code that writes to the connection
    /*conn.write("Move: up");
    conn.write("Move: down");
    conn.write("Move: left");
    conn.write("Move: right");*/
  });
    

  conn.on('data', (data) => {
    console.log(data.toString());
    
  });

 

  return conn;
};

//console.log("Connecting ...");
//connect();
module.exports = connect;

