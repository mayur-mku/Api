// require('dotenv').config();
// const http = require('http');
// const express = require('express');
// const userRouter = require('./routes/user');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser')

// //db connection string
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/organisation');
//     console.log('db connection success..')
//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// //by using express server
// const server = express()
// server.use(express.json());
// server.use(express.urlencoded({ extended: false }));
// server.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// server.use(bodyParser.json({limit: "50mb"}))
// // server.use(express.urlencoded());
// server.use('/user', userRouter);
// console.log(process.env.DB_PASSWORD,"++DB_PASSWORD==")
// server.listen(6000, ()=>{
//     console.log('port is listening to 6000 port.')
// })



require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/user');
const mongoose = require('mongoose');

//db connection string
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/organisation');
  console.log('db connection success..');
}

//by using express server
const server = express();

// Parse incoming requests with JSON payloads
server.use(express.json({ limit: "50mb" }));

// Parse incoming requests with urlencoded payloads
server.use(express.urlencoded({ limit: "50mb", extended: true }));

// Define routes
server.use('/user', userRouter);

console.log(process.env.DB_PASSWORD, "++DB_PASSWORD==");

server.listen(6000, () => {
  console.log('port is listening to 6000 port.');
});
