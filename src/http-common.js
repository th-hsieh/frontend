import axios from "axios"; 
// import cors from 'cors';
// import express from 'express';

// const app = express();
// app.use(cors());

export default axios.create({

     baseURL:"http://159.89.196.20:8080/api",
     //baseURL:"http://localhost:8080/api",
     
     headers:{
      "Content-type":"application/json"
    }
})
