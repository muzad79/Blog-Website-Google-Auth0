const cookieSession = require('cookie-session');
const express=require('express');
const passport = require('passport');
const mongoose=require('mongoose')
const keys=require('./config/keys')
const passportSetup=require('./passport')
const authRoute=require('./routes/auth')
const cors=require('cors')
const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    mathods:"GET,POST,PUT,DELETE",
    credentials:true
}))

app.use(cookieSession({
    name:"session",
    keys:["bestdeveloper"],
    maxAge:24*60*60*100
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin:"http://localhost:5173",
    mathods:"GET,POST,PUT,DELETE",
    Credentials:true
}))
mongoose.connect(keys.mongoDb.dbURL)
app.use('/auth',authRoute)


app.listen(3000,()=>{

    console.log('server is running at http://localhost:3000 ')
})