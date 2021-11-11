import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button, ChevronUpIcon, useMatchBreakpoints } from '@sphynxswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Pool } from 'state/types'
import PoolRow from './PoolRow'

interface PoolsTableProps {
  pools: Pool[]
  userDataLoaded: boolean
  account: string
}

const StyledTable = styled.div`
  background-color: transparent;
`

const StyledTableBorder = styled.div<{isMobile?: boolean}>`
  padding: ${({ isMobile }) => isMobile? '10px' : '5px 40px 20px 40px'};
  background-color: transparent;
`

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`

const PoolsTable: React.FC<PoolsTableProps> = ({ pools, userDataLoaded, account }) => {
  const { t } = useTranslation()
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl

  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <StyledTableBorder isMobile={isMobile}>
      <StyledTable role="table" ref={tableWrapperEl}>
        {pools.map((pool) => (
          <PoolRow
            key={pool.isAutoVault ? 'auto-cake' : pool.sousId}
            pool={pool}
            account={account}
            userDataLoaded={userDataLoaded}
          />
        ))}
        {/* <ScrollButtonContainer>
          <Button variant="text" onClick={scrollToTop} style={{ color: 'white' }}>
            {t('To Top')}
            <ChevronUpIcon color="white" />
          </Button>
        </ScrollButtonContainer> */}
      </StyledTable>
    </StyledTableBorder>
  )
}

export default PoolsTable
