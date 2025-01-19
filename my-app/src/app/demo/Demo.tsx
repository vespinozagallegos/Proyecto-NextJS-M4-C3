// vendors
import React from 'react';

// components
import { Card } from '../../components/card'    //como se llama index, no se indica el archivo

// Creacion del COMPONENTE
const Demo: React.FC = () => {
    return(
        <div>
            <h1>Hola Mundo!</h1>
            <Card title='Card 1' description='This is card 1'/>
        </div>
    );
}

export default Demo;