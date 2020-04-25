import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';
const Formulario = ({actualizarCategoria}) => {

const OPCIONES = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]
const [categoria,SelectNoticias] =useSelect('general',OPCIONES);
  const buscarNoticias=e=>{
      e.preventDefault();
      actualizarCategoria(categoria);
      
  }    

return ( 
    <div className={`${styles.buscador} row`}>
       <div className="col s12 m8 offset-m2">
             <form
             onSubmit={buscarNoticias}>
                 <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                 <SelectNoticias
                 />
                     <div className="input field col s12"></div>
                     <input
                     className={`${styles.btn_block} btn-large amber darken-2`}
                     value="Buscar"
                     type="submit"
                     />
                 
             </form>
        </div>
    </div>
        );
}
 Formulario.prototypes={
     actualizarCategoria: PropTypes.func.isRequired
 }
export default Formulario;