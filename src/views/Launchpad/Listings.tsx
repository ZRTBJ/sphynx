import React, { useEffect, useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import axios from 'axios'
import * as ethers from 'ethers'
import { simpleRpcProvider } from 'utils/providers'
import { getPresaleContract } from 'utils/contractHelpers'
import ListIcon from 'assets/svg/icon/ListIcon.svg'
import { useMenuToggle } from 'state/application/hooks'
import TokenCard from './components/TokenCard'
import SearchPannel from './components/SearchPannel'
import { Spinner } from '../LotterySphx/components/Spinner'

import {
  Wrapper,
  HeaderWrapper,
  TitleWrapper,
  Title,
  LogoTitle,
  TokenListContainder,
  PaginationWrapper,
} from './ListingsStyles'

const presaleContract = getPresaleContract(simpleRpcProvider)

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Presale: React.FC = () => {
  const { t } = useTranslation()
  const { menuToggled } = useMenuToggle()
  const [tokenList, setTokenList] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      axios.get(`${process.env.REACT_APP_BACKEND_API_URL2}/getAllPresaleInfo`).then(async (response) => {
        if (response.data) {
          try {
            const list = await Promise.all(
              response.data.map(async (cell) => {
                const item = {
                  saleId: cell.sale_id,
                  ownerAddress: cell.owner_address,
                  tokenName: cell.token_name,
                  tokenSymbole: cell.token_symbol,
                  tokenLogo: cell.logo_link,
                  activeSale: 0,
                  totalCap: 0,
                  softCap: cell.soft_cap,
                  hardCap: cell.hard_cap,
                  minContribution: cell.min_buy,
                  maxContribution: cell.max_buy,
                  endTime: cell.end_time,
                  tokenState: 'active',
                }
                let temp = (await presaleContract.totalContributionBNB(cell.sale_id)).toString()
                const value = parseFloat(ethers.utils.formatUnits(temp, cell.decimal))
                item.totalCap = value
                item.activeSale = value / cell.hard_cap

                temp = await presaleContract.isDeposited(cell.sale_id.toString())
                temp = true
                if (temp) {
                  /* is deposited */
                  const now = Math.floor(new Date().getTime() / 1000)
                  if (parseInt(cell.start_time) < now && parseInt(cell.end_time) > now) {
                    if (item.totalCap < item.softCap) {
                      item.tokenState = 'failed'
                    } else {
                      item.tokenState = 'active'
                    }
                  } else if (now > parseInt(cell.end_time)) {
                    item.tokenState = 'ended'
                  } else if (now < parseInt(cell.start_time)) {
                    item.tokenState = 'pending'
                  }
                }
                return item
              }),
            )
            setTokenList(list)
            setIsLoading(false)
          } catch (error) {
            console.log('error', error)
            setIsLoading(false)
          }
        }
      })
    }

    fetchData()
  }, [])

  return (
    <Wrapper>
      <HeaderWrapper>
        <TitleWrapper>
          <img src={ListIcon} alt="listIcon" />
          <Title>
            <LogoTitle>LaunchPad Listings</LogoTitle>
          </Title>
        </TitleWrapper>
      </HeaderWrapper>
      <SearchPannel />
      {isLoading && (
        <LoadingWrapper>
          <Spinner />
        </LoadingWrapper>
      )}
      <TokenListContainder toggled={menuToggled}>
        {tokenList &&
          tokenList.map((item) => (
            <TokenCard
              saleId={item.saleId}
              ownerAddress={item.ownerAddress}
              tokenName={item.tokenName}
              tokenSymbole={item.tokenSymbole}
              tokenLogo={item.tokenLogo}
              activeSale={item.activeSale * 100}
              totalCap={item.totalCap}
              softCap={item.softCap}
              hardCap={item.hardCap}
              minContribution={item.minContribution}
              maxContribution={item.maxContribution}
              endTime={item.endTime}
              tokenState={item.tokenState}
            >
              <img src={item.tokenLogo} alt="token icon" />
            </TokenCard>
          ))}
      </TokenListContainder>
      <PaginationWrapper>
        <Pagination count={5} siblingCount={0} />
      </PaginationWrapper>
    </Wrapper>
  )
}

export default Presale
