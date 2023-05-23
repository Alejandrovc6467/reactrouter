import { useState, useEffect } from 'react'
import "../assets/css/blog.css"
import { buscar } from '../api/api'
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'
import SubCategoria from './SubCategoria'
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom'

const Categoria = () => {
    
    const [subcategorias, setSubcategorias] = useState([])
    const { id } = useParams()

    //este useResolvedPath es necesario cunado se trabaja con rutas anidadas como lo es este caso, por eso de hecho estan las ROUTER abajo en ele codigo  
    const url = useResolvedPath("").pathname
    // es como para darle una ruta inicial a todas las subrutas


    //lo mismo aqui lo que es setear el setSubCategorias, entonces le digo vaya busqueme las categorias por su id de eso voy a obtener una respuesta de todas esas respuestas deme las subcategorias por eso es que esta reponse[0].subcategorias
    useEffect(() => {
        buscar(`/categorias?id=${id}`, (response) => {
            setSubcategorias(response[0].subcategorias)
        })
    }, [id])//nuevamente este id es para que vaya itereando en todas la categorias


    return (
        <>
            <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories />
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            
            <Routes>
                <Route path='/' element={<ListPosts url={`/posts?categoria=${id}`} />} />
                <Route path='/:subcategoria' element={<SubCategoria />} />
            </Routes>

        </>
    )
}

export default Categoria