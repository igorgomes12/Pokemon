import React from 'react';
import {servicePokemon} from '../services'
import {Tela,Text,Logo,Input,Botao,DivTable,DivTableRow,DivTableCell,Container,DivTablebody,Content} from './styles'


export const App: React.FC = () => {

  const [digitado, setDigitado] = React.useState("");
  const [pokemon, setPokemon] = React.useState("");
  const [url, setUrl] = React.useState ("");
  const [type, setType] = React.useState("");
  const [height,setHeight] = React.useState ("");
  const [weight, setWeight] = React.useState ("");
  const [base_experience, setBaseExperience] = React.useState ("");
  const [clicado, setClicado] = React.useState (false)
  
 

  const handlePokemon = async () => {
    const data = await servicePokemon(digitado);
    console.log("data",data.sprites)
    setPokemon(data.name);
    setUrl(data.sprites.front_default);
    setType(data.types.type);
    setHeight(data.height);
    setWeight(data.weight);
    setBaseExperience(data.base_experience);
    setClicado (true);
  }
  
  return (
    
    <Tela className='tela'>  

    <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="logo" />
    
    <Content>

    <Input type="text" onChange={(e)=> setDigitado(e.target.value)} placeholder="Qual é o seu Pokemon?"/>
    <Botao id="btn1" onClick={handlePokemon}>Buscar</Botao>
    </Content>
    {clicado ? (
      
        
        <Container className="container">
        <Text>{pokemon}</Text>
        <Logo src={url} alt='pokemon'></Logo>

        <DivTable >
          <DivTablebody >

          <DivTableRow >
          <DivTableCell >Tipo</DivTableCell>
          </DivTableRow>
          <DivTableCell >{type}</DivTableCell>

        <DivTableRow >
          <DivTableCell >Altura</DivTableCell>
        </DivTableRow>
          <DivTableCell >{height}</DivTableCell>

        <DivTableRow >
          <DivTableCell >Peso</DivTableCell>
        </DivTableRow>
        
          <DivTableCell >{weight}</DivTableCell>

        <DivTableRow >
          <DivTableCell >Numero de batalhas</DivTableCell>
        </DivTableRow>
          <DivTableCell >{base_experience}</DivTableCell>
          </DivTablebody>
        </DivTable>
      </Container>     
    ): (
      <div></div>
    )}
    

    </Tela>
  );
}


export default App;