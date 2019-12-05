const server = require("./server");

let port = process.env.PORT;

server.listen(port || 4000, () => {
  console.log(`server listening on http://localhost:${port || 4000}`);
});
