import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #F2F4F1;
    padding-bottom: 5rem;
`
export const ImgBox = styled.div`
    width: 20em;
    display: flex;
    justify-content: space-between;
`

export const Btn = styled.button`
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

export const BtnBox = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
`

export const BoxInfo = styled.div`
display: flex;
justify-content: center;
background-color: #446061;
`
    
export const Info = styled.p`
    color: #fff;
    opacity: 0.5;
    font-size: .8rem;
`