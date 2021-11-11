import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from '@sphynxswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectButtonWrapper = styled.div`
  button {
    color: white;
    border-radius: 5px;
    height: 34px;
    background: linear-gradient(90deg, #610D89 0%, #C42BB4 100%);
    font-weight: 600;
    font-size: 13px;
    width: 102px;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 176px;
    }
  }
`

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <ConnectButtonWrapper>
      <Button onClick={onPresentConnectModal} {...props}>
        {t('Connect')}
      </Button>
    </ConnectButtonWrapper>
  )
}

export default ConnectWalletButton
