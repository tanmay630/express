const {createServer, request} = require('http');

const server = createServer((request, response) => {

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify({
        name: "tanmay",
        college: "mitcoe",
        year: "3rd year"
    }));
      
    return response.end();
});


server.listen(8080);