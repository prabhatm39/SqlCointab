
const {Router}= require("express");
const { connect } = require("./db");
const mysql= require("mysql")

const userRouter= Router();

userRouter.get("/",async(req,res)=>{
    const {page,limit,filterby}= req.query;
    if(page && limit && !filterby){
        const skip= (page-1)*limit;
        connect.getConnection(async(err,connection)=>{
            if(err){
                console.log(err)
            }else{
                
                const query= await connection.query(`SELECT * FROM Cointab LIMIT ${skip},${limit}`,async(err,result)=>{
                    if(err){
                        console.log(err)
                    }else{
                       res.send(result);
                    }
                })
            } 
        })
    }
    else if(page && limit && filterby){
        const skip= (page-1)*limit;
        connect.getConnection(async(err,connection)=>{
            if(err){
                console.log(err);
            }else{
               
                const query= await connection.query(`SELECT * FROM Cointab WHERE gender=? LIMIT ${skip},${limit}`,[filterby],(err,result)=>{
                    if(err){
                        console.log(err)
                     }else{
                       res.send(result)
                     }   
                })
            }
        })
    }
    else{
        connect.connect();
        connect.query('SELECT * FROM Cointab',async function (error, results, fields) {
        if(error){
            console.log(error);
        }
        else{
            
                                res.status(200).send(results)
                            
                        
        }
        })
    
    }
});

userRouter.post("/add",(req,res)=>{
    const data= req.body;
    connect.getConnection(async(err,connection)=>{
        if(err){
            console.log(err);
        }else{
            const query= await connection.query(`INSERT INTO Cointab(id,first,last,age,phone,gender,email,username,name,value) VALUES ?`,[data.map((el) => [el.name,el,first,el.last,el.age,el,phone,el.gender,el.email,el.username,el.value])],(err,resp)=>{
                if(err){
                    console.log(err)
                 }else{
                    connection.release();
                    res.status(200).send(` Insert successfull!!`)
                 }   
            })
        }
    })
})

userRouter.delete("/removeall",(req,res)=>{
    connect.getConnection(async(err,connection)=>{
        if(err){
            console.log(err);
        }else{
            const query= await connection.query(`DELETE FROM Cointab`,(err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    res.status(200).send(`Table data deleted successfully`)
                }
            })
        }
    })
});

module.exports={userRouter} 