import Navbar from "./components/Navbar";
import './app.css';
import Home from "./pages/Home";
import Post from "./pages/post";
import Login from "./pages/login";
import {BrowserRouter,Routes,Route,Link,Navigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'

function App(){
  
  const[user,setUser]=useState(null)

// useEffect(()=>{
//   axios.get('http://localhost:3000/auth/login/success')
//   .then((res)=>{
//     setUser(res.user)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })


// },[])

useEffect(() => {
  const getUser = () => {
    fetch("http://localhost:3000/auth/login/success", 
    {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
  })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        setUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getUser();
}, []);
console.log(user)
  
  return(
    <BrowserRouter>
     <div>
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={user ? <Navigate to='/'/>:<Login/>}></Route>
        <Route path='/post/:id' element={user ? <Post/> : <Navigate to='/login'/>}></Route>
      </Routes>
    </div>

    </BrowserRouter>


   

  )



  
}

export default App;