import {Link} from 'react-router-dom'
const Navbar=({user})=>{

    function logout(){

        window.open("http://localhost:3000/auth/logout","_self")

    }


    return(

        <div className="navbar">
            <span className="logo">
                <Link className="link" to='/'>AdnanApp</Link>
            </span>{
            user ? ( <ul className="list">
                <li className="listName">
                    <img src={user.photos[0]} className="avatar" />
                </li>
                <li className="listItem">{user.username}</li>
                <li className="listItem" onClick={logout}>logout</li>

            </ul>
            ) : (<Link className="link" to='/login'>login</Link>)}
           


        </div>


    )
}
export default Navbar;