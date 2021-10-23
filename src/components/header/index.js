import React from 'react'
import * as S from './style'
import { graphql, useStaticQuery } from 'gatsby'


export default function Header() {

  const data = useStaticQuery(graphql`
    query {
      alldata{
          headers {
                brand {
                  url
                }
                btnAbout
                btnSubscribe
                btnRecipes
                backImg {
                  url
                }
                title
              }
        }
    }
    
    `)

  const { brand,
    btnAbout,
    btnSubscribe,
    btnRecipes,
    backImg,
    title } = data.alldata.headers[0]
  console.log(data)
  return (
    <S.Container backgroundImg={backImg.url}>
      <S.MenuBox>
        <img src={brand.url} alt='brand' />
        <S.Menu>         
            <S.MenuItens>{btnAbout}</S.MenuItens>
            <S.MenuItens>{btnRecipes}</S.MenuItens>
            <S.MenuItens>{btnSubscribe}</S.MenuItens>
        </S.Menu>
      </S.MenuBox>
      <S.TitleBox>
        <h1>{title}</h1>
      </S.TitleBox>
    </S.Container>
  )
}

