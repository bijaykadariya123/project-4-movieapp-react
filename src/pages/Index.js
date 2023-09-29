import Post from "../components/Post"
import { useLoaderData, Form } from "react-router-dom"

function Index (props){
    const Movies = useLoaderData()
    return <>
    <div className='indexPage'>
                    <div>
                <h2>Add Movie</h2>
                <Form method="POST" action="/create">
                    <input type = "text" name="name" placeholder="Movie Name"/>
                    <input type = "text" name="genre" placeholder="Genre"/>
                    <input type = "text" name="year" placeholder="Year"/>
                    <input type = "text" name="image" placeholder="Image"/>
                    <input type = "text" name="director" placeholder="Director"/>
                    <input type = "text" name="country" placeholder="Country"/>
                    <button>Add Movie</button>
                </Form>
            </div>
            <div>
            {Movies.map((movie)=> {return <Post key = {movie.id} movie={movie}/>})}
            </div>
    </div>
</>
}

export default Index