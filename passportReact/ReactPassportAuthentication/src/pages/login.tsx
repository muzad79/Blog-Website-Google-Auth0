import Facebook from '../img/facebook.png'
import Google from '../img/google.png'
import GitHub from '../img/github.png'



function Login(){
    function google(){

        window.open("http://localhost:3000/auth/google","_self")

    }

    return(
        <>
        <div className='login'>
            <h1 className="loginTitle">Choose a method to login</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={GitHub} alt="" className="icon" />
                        GitHub
                    </div>
                </div>
                    <div className="center">
                        <div className="line"></div>
                        <div className="or">OR</div>
                    </div>
                <div className="right">
                    <input type="text" placeholder='username' />
                    <input type="text" placeholder='password' />
                    <button className="submit">Login</button>
                </div>

            </div> 


        </div>
        </>
    )
}
export default Login