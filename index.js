// import json-server package
const jsonServer = require('json-server');
// create json server
const mediaplayerServer=jsonServer.create();
// create a connection to db.json file
const router=jsonServer.router('db.json');
// create a middleware :intermediate function inorder to use all this created object
const middleware=jsonServer.defaults()
// use the middleware
mediaplayerServer.use(middleware)
mediaplayerServer.use(router)

const port=5000;
mediaplayerServer.listen(port,()=>{
    console.log("json server is up and running in port 5000 ");
})
