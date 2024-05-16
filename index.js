// create server by using express

const express = require("express");
const app = express();
const data ={
    status :true,
    img_url : null,
}
const gettingDataForimage = async()=>{
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const convertData = await response.json();
    data.img_url = convertData.message;

}
app.get("/get-image",(req,res)=>{
    gettingDataForimage();
    res.json(data);
})
app.listen(9080,()=>{
    console.log("server is connected");
})