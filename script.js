const  myhttp = require('http');
const routes = require("./routes");

routes.testFun();
const myServer = myhttp.createServer(routes.handler);

myServer.listen(3000,()=>{
  console.log('Server is running at port 3000');  
})
