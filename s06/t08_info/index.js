const express = require("express");
const path = require("path");
const os = require("os");

const options = {
    host: '192.168.3.28',
    port: 8000
};

const app = express();

app.get("/", (req, res) => {
    console.log("A name of file of the executed script: " + path.basename(__filename));

    process.argv.forEach((value, index) => {
        console.log("Arguments passed to the script: " + index + ": " + value);
    });
    
    console.log("IP address of the server: " + req.socket.remoteAddress);
    console.log("A name of host that invokes the current script: " + os.hostname());
    console.log(req.protocol); // protocol information
    console.log(req.headers); // query method
    console.log(req.headers["user-agent"]); // User-Agent information
    console.log(req.ip); // IP address of the client
    console.log(JSON.stringify(req.headers)); // a list of parameters passed by URL

    res.send("");
});

app.listen(options.port, options.host, () => {
    console.log(`Server is running on http://${options.host}:${options.port}`);
});