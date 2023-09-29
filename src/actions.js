import url from "./url";
import { redirect } from "react-router-dom";

export const createAction = async({request})=>{
    const formData = await request.formData()
    const movie = {
        name: formData.get("name"),
        genre: formData.get("genre"),
        year: formData.get("year"),
        image: formData.get("image"),
        director: formData.get("director"),
        country: formData.get("country")

    } 
    await fetch(url, {
        method: "post",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(movie)
    })

    return redirect("/")
}



export const updateAction = async({request, params}) =>{
    const id = params.id
    const formData = await request.formData()

    const updatedMovie = {
        name: formData.get("name"),
        genre: formData.get("genre"),
        year: formData.get("year"),
        image: formData.get("image"),
        director: formData.get("director"),
        country: formData.get("country")

    } 

    await fetch(url+id, {
        method: "put",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(updatedMovie)
    })
    return redirect(`/movie/${id}`)
}



export const deleteAction = async({params})=>{
    const id = params.id
    await fetch(url+id,{
        method:"delete"
    })
    return redirect("/")
}