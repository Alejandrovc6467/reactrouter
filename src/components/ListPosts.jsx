import { useState, useEffect } from "react"

import "../assets/css/componentes/card.css"
import { buscar } from "../api/api"
import { Link } from "react-router-dom"




const ListPosts = ({ url }) => {

    const [posts, setPosts] = useState([])
    
    
    useEffect(() => {
        buscar(url, setPosts)
       
    }, [url])
    //ese parametro del url, cada vez que cambie la url se ejecute la funcion


    //lo que hago es porcada objecto que se cargo en mi useState posts creo un article
    // el metodo setPOpst lo envie por parametro y en la api se llena 
    return (
        <section className="posts container">

            {
                posts.map(post => {
                    const { id, title, metadescription, categoria } = post;
                    return <Link to={`/posts/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                        <article >
                            <h3 className="post-card__title">
                                {title}
                            </h3>
                            <p className="post-card__meta">{metadescription}</p>
                        </article>
                    </Link>
                })
            }

        </section>
    )
}

export default ListPosts