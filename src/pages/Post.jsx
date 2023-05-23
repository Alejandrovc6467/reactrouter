import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { buscar } from "../api/api"

//importacion para que se encarga de devolverme un objecto con el id del componente presionado en la pagina, esto para saber cual es el componente que debo de crear aqui para retornar
import { useParams, useNavigate } from "react-router-dom"


const Post = ({url}) => {

const [post, setPost] = useState({})

const { id } = useParams()

const navigate = useNavigate()

//estoy cargando el setPost en el metodo buscar, entonces mi array de post ya quedaria cargado
useEffect(() => {
  buscar(`/posts/${ id }`, setPost).catch(() => {
    navigate("/not-found")//este catch despues del set post es por si alguien pone una url de un post que no existe tambien lo redireccione a la pagina 404 error
  })
}, [id])
//ese id del parametro useEfecct es porque quiero ir iterando por el id en los objectos en el archivo db.json



 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{post.title}</h2>
       <p className = "text__card">{post.body}</p>
     </article>
   </main>
 )
}

export default Post