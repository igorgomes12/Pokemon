import styled from "styled-components";


export const Tela = styled.main`
background-color: #1c1c1b;
border: 1px solid;
justify-items: center;
align-items: center;
flex-direction: column;
display: flex;
height: 100vh;
margin: 0 auto;
justify-content: center;
`

export const Logo = styled.img`
width: 200px;
height: 200px;
border-radius: 4px;
margin-top:10px;


`
export const Text = styled.p`

font-size: 15px;
font-weight: bold;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: #fff;
padding: 3px 10px;
display: flex;
margin:10px;
align-items: center;
justify-items: center;
justify-content: center;

`
export const Input = styled.input`
display: flex;
justify-content:center;
padding: 1em 0;
border-radius: 8px;
border: 5px solid;
border-color: #2b75bb;
width: 100%;
height: 10px;
background-color:#626e64;
margin-top: 10px;
color: #ffffffff;
font-size: 15px;
::placeholder{
  color: #ffffffff;
  justify-content: center;
  align-items: center;
  justify-items: center;
  display: flex;
  padding: 0 3px 0 0;
  overflow: hidden;
  text-align: center;

}

`
export const Botao = styled.button`
 background-color: #2b75bb;
  color: #fff;
  display:inline-flex;
  width: 50% ;
  border: 15px;
  border-radius:4px;  
  margin:20px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  display: flex;
  text-align: center;  
  float: right;
  height: 35px;
  transition: filter 0.2s;
  &:hover{
    cursor: pointer;
    filter:brightness(0.9) ;
  }


`
export const DivTable = styled.div`
display: table;
max-width:20em;
float:right;
display: flex;
align-items: center;
margin: 6px;
`
export const DivTableRow = styled.div`
display: table-row;
`
export const DivTableCell = styled.div`
border-radius: 6px;
border: 1px solid #999999;
display: table-cell;
padding: 8px 15px;
height:2px;
color: #fff;
margin-top:2px;
text-align: center;

`
export const Container = styled.div`
display:flex;
margin: 2px;
width:75vh;
opacity: 0.9;
border-radius:8px;
background-color: #99aaab;
justify-content: center;
`
export const DivTablebody = styled.div`
display: table-row-group;
`
export const Content = styled.div`
margin:0 auto;
align-items: center;
display: flex;
justify-content: space-between;
padding: 0 2rem;
height:30%;
justify-items: center;
text-align: center;


`