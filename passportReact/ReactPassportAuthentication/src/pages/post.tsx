import {posts} from '../data'
import {useParams} from 'react-router-dom'
function Post(){
    const location=useParams()
    const post=posts.find((p)=>{
        return p.id.toString() == location.id;
    })
    console.log(post)

    return(
        <div className="post">
            <img src={post.img} alt="" className="posyImg" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>



        </div>



    )
}
export default Post;