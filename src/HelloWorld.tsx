import React from "react";

class HelloWorld extends React.Component {
    render() {
        return (
        <div>
             {/* tagi <p> domyslnie wyswietalaja sie w nastepnych liniach, zmienilem to poprzez atrybut "display:inline-block" w pliku css*/}
            <p className='HelloWorld-text HelloWorld-firstWord'>Hello<br/></p>
            <p className='HelloWorld-text'>World!</p>
        </div>);
    }
}

export default HelloWorld;