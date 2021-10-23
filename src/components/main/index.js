import React from 'react'
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby'


export default function Header() {

  const data = useStaticQuery(graphql`
    query {
      alldata{
        mains {
            title
            cakeImg {
              url
            }
            cakeParagraph
            pizzaImg {
              url
            }
            pizzaParagraph
            saltImg {
              url
            }
            saltTitle
            saltParagraph
            smoothieImg {
              url
            }
            smoothieParagraph
            newsletter
            subscribe
            btnSubmit
          }
         
        }
    }
    
    `)

  const { title, 
    cakeImg, 
    cakeParagraph, 
    pizzaImg, 
    pizzaParagraph, 
    smoothieImg, 
    smoothieParagraph, 
    saltTitle ,
    saltImg, 
    saltParagraph,
    newsletter,
    subscribe,
    btnSubmit } = data.alldata.mains[0]
  console.log(data)
  return (
    <>
     <S.Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>

        <S.Content>        
            <S.Recipe>
              <S.RecipeImg src={cakeImg.url}/>                
              <S.Description>
                <p>{cakeParagraph}</p>
              </S.Description>
            </S.Recipe>
            <S.Recipe>
              <S.RecipeImg src={pizzaImg.url}/>                
              <S.Description>
              <p>{pizzaParagraph}</p>
              </S.Description>
            </S.Recipe>
            <S.Recipe>
              <S.RecipeImg src={smoothieImg.url}/>                
              <S.Description>
              <p>{smoothieParagraph}</p>
              </S.Description>
            </S.Recipe>           
        </S.Content>
        <S.BoxAbout>
                <img src={saltImg.url}></img>
                <span>
                    <h2>{saltTitle}</h2>
                    <p>{saltParagraph}</p>
                </span>
        </S.BoxAbout>
        <S.BoxSubscribe>
          <h2>{subscribe}</h2>
          <p>{newsletter}</p>
          <input type='email' placeholder="Your email"/>
          <S.ButtonSub>{btnSubmit}</S.ButtonSub>
        </S.BoxSubscribe>

      </S.Wrapper>
    </S.Container>
    </>
  )
}

