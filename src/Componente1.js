import React from 'react'

const Componente1 = () => {
  return (
    <section>
      
        <h2 className='classe'>Ciao1</h2>

        <h3>Secondo elemento</h3>

        <article>
            <h4>terzo elemento</h4>

            <div>
                <p>Non so scrivere</p>
            </div>
        </article>

        {/* <Persona></Persona>

        <Messaggio/> */}

        <Saluto></Saluto>

        <input type="text" />

    </section>
  )
}

const Persona = () => {

    return <h2>Mi chiamo Ciccio</h2>

};

const Messaggio = () => <h4>Son un messaggio</h4>

const Saluto = () => {

    return <React.Fragment>
        <Persona></Persona>
        <Messaggio/>
    </React.Fragment>

};

export default Componente1
