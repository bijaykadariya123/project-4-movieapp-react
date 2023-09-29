import { Link } from "react-router-dom"

function Post ({movie}){

    return <div>
                <Link to={`/movie/${movie.id}`}>
                    <img src={movie.image} alt ={movie.name}/>
                    <h1>{movie.name}</h1>
                    <h3>{movie.year}</h3>
                </Link>

            </div>
}

export default Post