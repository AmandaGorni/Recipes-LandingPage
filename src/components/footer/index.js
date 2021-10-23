import React from 'react'
import * as S from './style'

import { graphql, useStaticQuery } from 'gatsby'

export default function Footer() {

  const data = useStaticQuery(graphql`
        query {
            alldata {
                footers {
                    btnAbout
                    btnRecipes
                    btnSubscribe
                    pinterest {
                      url
                    }
                    instagram {
                      url
                    }
                    facebook {
                      url
                    }
                    twitter {
                      url
                    }
                    ending
                  }
            }
        }
    `)

  const { btnAbout, btnRecipes, btnSubscribe, ending, twitter, pinterest, facebook, instagram } = data.alldata.footers[0]

  return (
    <>
      <S.Container>
        <S.ImgBox>
          <img src={instagram.url} alt="instagram" />
          <img src={twitter.url} alt="twitter" />
          <img src={facebook.url} alt="facebook" />
          <img src={pinterest.url} alt="pinterest" />
        </S.ImgBox>
        <S.BtnBox>
          <S.Btn>{btnAbout}</S.Btn>
          <S.Btn>{btnRecipes}</S.Btn>
          <S.Btn>{btnSubscribe}</S.Btn>
        </S.BtnBox>
      </S.Container>
      <S.BoxInfo>
        <S.Info>{ending}</S.Info>
      </S.BoxInfo>
    </>
  )
}