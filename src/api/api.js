import axios from "axios" // axios es una libreria para hacer peticios al server hay que instalarla ya aqui esta instalada, se instala con el comando npm install axios



// esa base url le pongo la base del server que en este caso es mi localhost y mi puerto
export const api = axios.create({
    baseURL: "http://localhost:5000"
})


// esto es asincronico porque puede ser que tarde en obtener los datos de servidor entonces para que haga el proceso asincronico y la pagina siga funcionando y no se pegue, por eso esta await ahi abajo porque  se va a queadr esperando por la respuesta
export const buscar = async(url, setData) => {

    const respuesta = await api.get(url)
    setData(respuesta.data)
    console.log(respuesta)
    //lo que hago en este metodo es recibir la url y concaternarsela al setData a mi urlBase que es mi localhost
    // haria esto http://localhost:5000/url    la url que recibo por parametro
}

