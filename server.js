const express= require("express");
const app =express();
app.use(express.static("./index"))
let axios=require("axios")
app.get('/api/v1/proxy',(req,res)=>{
    //axios 只是一个请求的库  反向代理跟axios没有关系
    let menu=encodeURI("沙拉")
    console.log(menu)
    axios.get(`https://apis.juhe.cn/cook/query.php?menu=${menu}&key=fd075da6f7c344cbbb8948ce659312ff&dtype=json`)
    .then(result =>{
        res.send({msg:result.data})
    })
})
app.listen(2333,res=>{
    console.log('server running at http://127.0.0.1:2333')
})