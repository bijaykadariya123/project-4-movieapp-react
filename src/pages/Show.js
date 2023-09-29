import {Link, useLoaderData, Form} from 'react-router-dom';

function Show (props){
    const movie = useLoaderData()

    return(
        <div>
            <img src={movie.image} alt ={movie.name}/>
            <h3>{movie.name}</h3>
            <h4>{movie.genre}</h4>
            <h4>{movie.year}</h4>
            <h4>{movie.director}</h4>
            <h4>{movie.country}</h4>
            <div>
                <h2>Update Movie</h2>
                    <Form method="POST" action={`/update/${movie.id}`}>
                    <input type = "text" name="name" placeholder="Movie Name" defaultValue={movie.name}/>
                    <input type = "text" name="genre" placeholder="Genre" defaultValue={movie.genre}/>
                    <input type = "text" name="year" placeholder="Year" defaultValue={movie.year}/>
                    <input type = "text" name="image" placeholder="Image" defaultValue={movie.image}/>
                    <input type = "text" name="director" placeholder="Director" defaultValue={movie.director}/>
                    <input type = "text" name="country" placeholder="Country" defaultValue={movie.country}/>
                    <button>Update Movie</button>
                </Form>

                <Form method='post' action={`/delete/${movie.id}`}>
                <button>Delete</button>
                </Form>
                </div>
            <Link to='/'>Back to Index</Link>
        </div>
    )

}

export default Show