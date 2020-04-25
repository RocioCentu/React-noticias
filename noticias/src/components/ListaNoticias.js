import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';
const ListaNoticias = ({resultados}) => {
    return ( 
        <div className="row">
            {resultados.map(noticia=> (
              <Noticia
              key={noticia.url}
              noticia={noticia}
              />
            ))}
         
        </div>
     );
}
 ListaNoticias.propTypes={
     resultados: PropTypes.array.isRequired
 }
export default ListaNoticias;