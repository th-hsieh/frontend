import axios from "axios"; 
// import cors from 'cors';
// import express from 'express';

// const app = express();
// app.use(cors());

export default axios.create({

     baseURL:"http://159.223.52.208:8080/api",
     
     headers:{
      "Content-type":"application/json"
    }
})
