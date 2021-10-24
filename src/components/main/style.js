import styled from "styled-components";

export const Container = styled.section`
  background: #f2f4f1;
`;

export const Wrapper = styled.div` 
  padding: 10rem 0 0;
`;

export const Title = styled.h2`
  position: relative;
  margin: 0 auto 6rem;
  width: 16rem;
  letter-spacing: 5px;
  text-align: center;
  text-transform: uppercase;
  
  &:after {
    content: '';
    position: absolute;
    left: 31%;
    bottom: -1.5rem;
    background: #373737;
    width: 5rem;
    height: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between; 
  margin: auto;
  flex-wrap: wrap;
  padding-bottom: 10rem;
`;

export const Recipe = styled.figure`
  display: flex; 
  flex-direction: column;
  margin: 20px auto 20px;
  width: 30%;
  height: 34rem;
  box-shadow: 0 8px 6px #ccc;
  transition: .4s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px #bbb;
  }
`;

export const RecipeImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const Description = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  background: #fff;
  font-size: 1.2rem;
  letter-spacing: 3px;

  p{
    
    &:before {
      content: "";
        width: 50px;
        height: 5px;
        background: #000;
        display: block;
        position: relative;
        bottom: 30px;
        left: 75px;
    }
  }
  
`;

export const BoxAbout =styled.div`
    display: flex;
    background: #fff;
    img{
        width: 50%;
    }
    span{
        
        display: flex;
        flex-direction: column;
        justify-content:space-around ;
        width: 30%;
        height: 24rem;
        margin:auto;
        text-align: center;
       p{
        text-align: left;
        line-height: 3vh;
       }         
    }

`
export const BoxSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0 5rem 0;
  height: 30rem;
  font-size: 1.3rem;

  input{
    width: 29rem;
    height: 4.5rem;
    padding: 1.5rem;
    font-family:DM Sans;
    font-size: 1.2rem;
    border:none;
    box-shadow: 0 10px 20px #bbb;
  }
  `
export const ButtonSub = styled.button`
background: transparent;
border: 0;
width: 10rem;
height: 3rem;
font-size: 1em;
text-transform: uppercase;
cursor: pointer;
border: solid 3px #000;
letter-spacing: 3px;
&:hover {
background:#000;
color:#fff;
transform: scale(1.1);
}
`