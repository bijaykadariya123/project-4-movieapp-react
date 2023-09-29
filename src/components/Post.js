import { Link } from "react-router-dom"

function Post ({movie}){
    const post1={
        marginTop:'-22px'
    }

    return <div className="postIndex">
                <Link to={`/movie/${movie.id}`}>
                    <img src={movie.image} alt ={movie.name}/>
                    <h3>{movie.name}</h3>
                    <h4 style ={post1}>{movie.year}</h4>
                </Link>

            </div>
}

export default Post