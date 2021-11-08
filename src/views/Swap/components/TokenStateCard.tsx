import React, { useEffect, useState, useRef, useCallback } from 'react'
import Column from 'components/Column'
import styled, { useTheme } from 'styled-components'
import { Flex, Text, useMatchBreakpoints } from '@sphynxswap/uikit'
import { useTranslation } from 'contexts/Localization'
import DefaultImg from 'assets/images/MainLogo.png'

interface TokenStateProps {
  tokenImg?: string
  cardTitle?: string
  cardValue?: string
  subPriceValue?: string
  variantFill?: boolean
  valueActive?: boolean
  flexGrow?: number
  CardIcon?: any
  fillColor?: string
}

const TokenTitleCard = styled(Column)<{ variantFill; flexGrow; fillColor }>`
  background: ${({ variantFill, fillColor }) =>
    fillColor ? `${fillColor}` : variantFill ? 'linear-gradient(90deg, #610D89 0%, #C42BB4 100%)' : ''};
  border: 1px solid ${({ theme, fillColor }) => (fillColor ? 'transparent' : theme.colors.primary)};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: ${({ flexGrow }) => flexGrow};
  height: 91px;
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #202342;
  margin-bottom: 12px;
`

const IconWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  height: ${({ size }) => (size ? `${size}px` : '32px')};
  width: ${({ size }) => (size ? `${size}px` : '32px')};
  span {
    height: ${({ size }) => (size ? `${size}px` : '32px')};
    width: ${({ size }) => (size ? `${size}px` : '32px')};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: flex-end;
  }
`

const TokenDescription = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div:nth-child(2) {
    width: 100%;
  }
  div:nth-child(3) {
    width: 100%;
  }
`

export default function TokenStateCard(props: TokenStateProps) {
  const { tokenImg, cardTitle, cardValue, subPriceValue, variantFill, valueActive, flexGrow, CardIcon, fillColor } =
    props
  const { t } = useTranslation()
  const theme = useTheme()

  const { isSm, isXs, isMd } = useMatchBreakpoints()
  const [isMobile, setMobile] = useState(false)

  React.useEffect(() => {
    if (isMd || isSm || isXs) {
      setMobile(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onImgLoadError = (event: any) => {
    const elem = event.target
    elem.src = DefaultImg
  }

  return theme.isDark ? (
    <TokenTitleCard variantFill={variantFill} flexGrow={flexGrow} fillColor={undefined}>
      <Flex>
        {tokenImg !== undefined ? (
          <IconWrapper size={60}>
            <img src={tokenImg} width="32" height="32" onError={onImgLoadError} alt="No icon yet" />
          </IconWrapper>
        ) : (
          ''
        )}
        <TokenDescription style={{ width: '100%' }}>
          <Text
            textAlign={tokenImg === undefined ? 'center' : 'unset'}
            color={tokenImg === undefined ? '#A7A7CC' : 'white'}
            fontSize="12px"
            bold
          >
            {t(`${cardTitle}`)}
          </Text>
          <Text
            textAlign={tokenImg === undefined ? 'center' : 'unset'}
            fontSize="16px"
            bold
            color={valueActive ? 'limegreen' : 'white'}
          >
            {cardValue}
          </Text>
          <Text textAlign={tokenImg === undefined ? 'center' : 'unset'} fontSize="16px" bold color="limegreen">
            {subPriceValue}
          </Text>
        </TokenDescription>
      </Flex>
    </TokenTitleCard>
  ) : (
    <TokenTitleCard
      variantFill={variantFill}
      flexGrow={flexGrow}
      fillColor={fillColor}
      style={isMobile ? {} : { height: '183px' }}
    >
      <Flex>
        {CardIcon !== undefined && isMobile ? (
          <IconWrapper style={{width: '42px', marginLeft: '8px'}}>
            <CardIcon width="32" height="32" />
          </IconWrapper>
        ) : (
          ''
        )}
        {tokenImg !== undefined && isMobile ? (
          <IconWrapper size={60}>
            <img src={tokenImg} width="32" height="32" onError={onImgLoadError} alt="No icon yet" />
          </IconWrapper>
        ) : (
          ''
        )}
        <TokenDescription style={{ width: '100%' }}>
          {tokenImg !== undefined && !isMobile ? (
            <ImgWrapper style={{ width: '80px', height: '80px' }}>
              <img src={tokenImg} width="52" height="52" onError={onImgLoadError} alt="No icon yet" />
            </ImgWrapper>
          ) : (
            ''
          )}
          {CardIcon !== undefined && !isMobile ? (
            <>
              <CardIcon />
              <br />
            </>
          ) : (
            ''
          )}
          <Text textAlign={tokenImg === undefined ? 'center' : 'unset'} color="white" fontSize="12px" bold>
            {t(`${cardTitle}`)}
          </Text>
          <Text textAlign={tokenImg === undefined ? 'center' : 'unset'} fontSize="16px" bold color="white">
            {cardValue}
          </Text>
          <Text textAlign={tokenImg === undefined ? 'center' : 'unset'} fontSize="16px" bold color="white">
            {subPriceValue}
          </Text>
        </TokenDescription>
      </Flex>
    </TokenTitleCard>
  )
}
