import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { ReactComponent as BSCIcon } from 'assets/svg/icon/BSCTokenIcon.svg'

import Select from './Select'

const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
`
const TokenLabel = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;
  margin: 20px;
`

export default function TokenCard({ isFrom = false }) {
  const { t } = useTranslation()
  return (
    <Container>
      <TokenLabel>{isFrom ? `From Chain` : 'To Chain'}</TokenLabel>
      <BSCIcon />
      <Select
        options={[
          {
            label: t('BSC'),
            value: 'bsc',
          },
          {
            label: t('ETH'),
            value: 'eth',
          },
        ]}
        onChange={null}
      />
    </Container>
  )
}
