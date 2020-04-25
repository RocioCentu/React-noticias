import React,{Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';

function App() {
  //definir la categoria y noticia
  const [categoria,actualizarCategoria]=useState('');
  //resultado de la busqueda
  const [resultados,guardarResultado]=useState([]);

  useEffect(()=>{
// consultarlaapi
const consultarApi=async()=>{

   const url=`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a872aafd8f2d494683c217c470b35c63`;
   const  respuesta= await fetch(url);
   const noticias=await respuesta.json();
   guardarResultado(noticias.articles);
   
}
consultarApi();
  },[categoria]);
  
  return (
    <Fragment>
      <Header
      titulo="buscador de noticias"
      />
      <div className="container white">
            <Formulario 
            actualizarCategoria={actualizarCategoria}
            />
            <ListaNoticias
            resultados={resultados}
            />
      </div>
    </Fragment>

  );
}

export default App;
