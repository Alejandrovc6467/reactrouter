import image from "../assets/img/doguito404.svg"
import '../assets/css/404.css'

//componente que se muetsra cuando especifican una ruta que no se encuentra en  nuestro dominio

// podria poner en gogle descargar css de 404 y en react  y saldrian muchas
// como en esta pagina https://codepen.io/tag/404-page
// en codepen siempre hay disenios de todo


const Page404 = () => {
    return (
        <main className="container flex flex--center flex--column">
            <img className="dog-image" src={image} alt="Doguito" />
            <p className="notfound-text">Esta página no existe</p>
            <p className="notfound-text">Designed by Alejandro Vasquez</p>
        </main>
    )
}

export default Page404
