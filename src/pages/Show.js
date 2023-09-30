import {Link, useLoaderData, Form} from 'react-router-dom';

function Show (props){
    const movie = useLoaderData()

    return(
        <div className='showPage'>
             <Link className='homeLink' to='/'>Home</Link>
            <div>
                <div className='showPicDescription'>
                    <div className='showPic'>
                        <img src={movie.image} alt ={movie.name}/>
                    </div>
                    <div className='showDescription'>
                        <h2 className="description">Movie Name:{movie.name}</h2>
                        <h4 className="description">Genre: {movie.genre}</h4>
                        <h4 className="description">Make: {movie.year}</h4>
                        <h4 className="description">Directed By:{movie.director}</h4>
                        <h4 className="description">Country: {movie.country}</h4>
                    </div>
                </div>
                <div className='updateMovie'>
                    <div className='updateMovie-sub'>
                        <h2>Update Movie</h2>
                        <div className='updatede'>
                            <div>
                                <Form method="POST" action={`/update/${movie.id}`}>
                                    <input class="form-control"  type = "text" name="name" placeholder="Movie Name" defaultValue={movie.name}/>
                                    <input class="form-control"  type = "text" name="genre" placeholder="Genre" defaultValue={movie.genre}/>
                                    <input class="form-control"  type = "text" name="year" placeholder="Year" defaultValue={movie.year}/>
                                    <input class="form-control"  type = "text" name="image" placeholder="Image" defaultValue={movie.image}/>
                                    <input class="form-control"  type = "text" name="director" placeholder="Director" defaultValue={movie.director}/>
                                    <input class="form-control"  type = "text" name="country" placeholder="Country" defaultValue={movie.country}/>
                                    <button class="btn btn-secondary"><span className="updatedeleteButton up-mar">Update Movie</span></button>
                                </Form>
                            </div>
                            <div>
                                <Form method='post' action={`/delete/${movie.id}`}>
                                <button class="btn btn-secondary"> <span className="updatedeleteButton">Delete Movie</span></button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )

}

export default Show