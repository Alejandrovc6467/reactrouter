import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home  from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from "./pages/Page404"
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';



//este import es vital para que funcione el react router y asi la SPA
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


//➡️  se simulando un API rest en este proyecto y se estan leyendo los datos de db.json qu este en esto en los archivos de este proyecto, se instalo un paquete json-server  de la pagina oficial https://www.npmjs.com/package/json-server   comando ejecutado en la terminal npm i -g json-server
// ahora una vez hecho eso se leventa un servidor aperte del proyecto (abro la terminal en el mismo la misma ruta del proyecto desde aqui visual code, no hay problema) que es que tiene los datos que necesito ese servidor es el que va a estar leyendo
// ejecuto el comando json-server --watch .\db.json --port=5000    y el puerto qeu desee y listo, mientras estoy ejecuntando la app tengo que tener el servidor levantado, si cierro la terminal o le doy control + c se cierra el servidor

// la carpeta y el arhico api.js dentro del src yo mismo las cree es el codigo de mi API


// si se le hace un enrredo enterderlo, borre todo lo de subcatehorias y deja solo lo de los post
function App() {


  
/*
  todo esto de aqui(este bloque que esta comentado) es de lo que se encarga el (react router)
  se encarga de las rutas del sitio, este solo un ejemplo sencillo e ineficaz de como se haria manualmente
  en este ejemplo si voy y escribo en el buscador de chorome  (http://localhost:3000/) el metodo router que hize retornaria mi pagina home,  claro para que funcione la funcion routerMia que cree se debe de llamar dentro del return solo esa funcion para que tenga sentido todo el cambio de paginas
  pero si escribiera (http://localhost:3000/sobre) o algo diferente a sobre pues me retornaria mi pagina (sobre)
  y de esta forma controlaria en cual direccion de pagina quisiera estar, pero como lo mencione, esto es una forma ineficaz para eso esta la libreria que nos ayudara en esto



  const location = window.location.pathname
  
  const routerMia = () => {
    if(location === "/"){
      return <Home />
    }else{
      return <Sobre />
    }
  }

  */

  // el Router es el primer elemento vital y dentro de el Routes y dentro de este pues todas las Routes que vendrian siendo las paginas
  return (
    <>

     <Router>

        <Header/>{/*todo lo que este dentro de Routes a ser lo dinamico "no va estar recargando la pagina, el Header esta fuera del Routes porque quiero que siempre se muestre en todas las variantes de la pagina siempre va a estar ahi presente"  dentro de este componente Header se utuliza el componente link de react que en conjunto con los Router son los que hacen la pagina SPA */}

        <Routes>

          <Route path='/' element={ <Home/> } />  {/*el path es la direcion que va a mostar el elemento Home que esta en el atributo element */}
          <Route path='/sobre' element={ <Sobre/> } />  {/*el path es la direcion que va a mostar el elemento Sobre que esta en el atributo element */}
          <Route path='/posts/:id' element={ <Post/> } />  {/*  aqui le estoy enviando a la pagina post/ mas el id especifico del elemento que se selecciono por eso el post/:id */}
          {/*importante, note que en el Route path categoria/:id hay un /*  despues, eso pasa porque como estoy utilizando un sistema de rutas anidadas entonces tengo que agregar tambien la pagina error por defecto, si no hiciera esto de me dejaria entrar a las rutas especificas de cada categoria y me entraria en la pagina 404 error, si quiero lo quito para probar lo que sucede por si no entiendo  */}
          <Route path='/categoria/:id/*' element={ <Categoria/> } />  {/*  */}
          <Route path='*' element={ <Page404/> } />  {/*   ese (*) del path es para la pagina 404 error por si alguin pone nuestro dominio y seguido de ello /unapaginaquenoesxiste  en ese caso retornaria esta pagina que yo mismo cree */}
      

        </Routes>

     </Router>
     
    </>
  );


}

export default App;
