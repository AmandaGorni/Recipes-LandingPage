import styled from "styled-components";

export const Container = styled.section`
    background-image: url(${props => props.backgroundImg});
    background-position: center center;
    background-size: cover;
    height: calc(100vh - 3rem);
    
`

export const MenuBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin:auto;
    padding-top: 5vh;
    
`
export const Menu = styled.div`
    width: 420px;   
    display: flex;
    justify-content: space-evenly;
`
export const MenuItens = styled.button`
    background: transparent;
    border: 0;
    width: 33.33%;
    font-size: 1em;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 3px;
  &:hover {
  border: solid 3px #000;
}
`
export const TitleBox = styled.div` 
    height: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    h1{
        font-weight:600;
        font-size: 6em;
        letter-spacing: 10px;
    }
`
