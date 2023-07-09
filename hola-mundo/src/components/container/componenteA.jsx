import React from 'react';
import ComponenteB from '../pure/forms/componenteB'
import { Contacto } from '../../models/contactos';

const ComponenteA = () => {
    const defaultContact = new Contacto('Marco','Aurelio','marcoAurelio@gmail.com',true)

    return (
        <div>
            <div>
                <h1>
                    Contacto:
                </h1>
            </div>
            <ComponenteB contacto={defaultContact}></ComponenteB>
        </div>
    );
};


export default ComponenteA;