import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contactos';

const ComponenteB = ({contacto}) =>{
    return(
        <div>
            <h1>
                Nombre: {contacto.nombre}
            </h1>
            <h1>
                Apellido: {contacto.apellido}
            </h1>
            <h1>
                Email: {contacto.email}
            </h1>
            <h1>
                Conectado: {contacto.conectado ? 'Contacto En Línea':'Contacto No Disponible'}
            </h1>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto:PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
