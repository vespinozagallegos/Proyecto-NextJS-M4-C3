// vendors
import React from 'react';

// components
import { Card } from '../../components/card'    //como se llama index, no se indica el archivo

// Creacion del COMPONENTE
const Demo: React.FC = () => {
    // se retorna el componente CARD
    // se RETUTILIZA el componente CARD
    // se vuelve a RETUTILIZAR el componente CARD per sin descripcion ---> aparece en consola la etique vacía p
    //? SE debe agregar un renderizado CONDICIONAL en CARD index.tsx 
    return(
        <div>
            <h1>Hola Mundo!</h1>
            <Card title='Card 1' description='This is card 1'/>
            <Card title='Card 2' description='This is card 2'/>
            <Card title='Card 3' />

        </div>
    );
}

export default Demo;