import Post from "../components/Post"
import { useLoaderData, Form } from "react-router-dom"


function Index (props){
    const Movies = useLoaderData()
    return <>
    <div className='indexPage'>
            <div>
                <h3>Feature Movies</h3>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner" >
                        <div class="carousel-item active">
                            <img src="https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.hollywoodreporter.com/wp-content/uploads/2023/07/rev-1-BAR-07462_High_Res_JPEG-H-2023.jpg?w=1296" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/originals/d3/3c/4e/d33c4ef837ce642649d80bd0b9bbddd7.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2023/05/18/2208127043535/MIDR1_US_2023_SA_16x9_1920x1080_NB_2215190_1920x1080.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://npr.brightspotcdn.com/17/68/0e67a5244c879cdedda91045ff89/wick-2.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://images.thedirect.com/media/article_full/when-will-fast-furious-10-start-streaming.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>          

     
                <div>
                    <h3>Create Movie</h3>
                    <Form method="POST" action="/create">
                        <input class="form-control" type  = "text" name="name" placeholder="Movie Name"/>
                        <input class="form-control"type = "text" name="genre" placeholder="Genre"/>
                        <input class="form-control" type = "text" name="year" placeholder="Year"/>
                        <input class="form-control" type = "text" name="image" placeholder="Image"/>
                        <input class="form-control" type = "text" name="director" placeholder="Director"/>
                        <input class="form-control" type = "text" name="country" placeholder="Country"/>
                        <button>Add Movie</button>
                    </Form>
                </div>
            </div>
           
            <div className="indexAllItem">
           
                    {Movies.map((movie)=> {return <Post key = {movie.id} movie={movie}/>})} 
            </div>
    </div>
    
</>
}

export default Index