import axios from "axios"; 
// import cors from 'cors';
// import express from 'express';

// const app = express();
// app.use(cors());

export default axios.create({

     baseURL:"http://localhost:8080/api",
     //baseURL:"https://reactnotesbackend-stasy.herokuapp.com/api",
     
     headers:{
      "Content-type":"application/json"
    }
})
