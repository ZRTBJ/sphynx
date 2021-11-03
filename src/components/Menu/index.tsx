/* eslint-disable */
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'state'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { Button, Link } from '@sphynxswap/uikit'
import { addToken, updateToken, deleteTokens } from 'state/wallet/tokenSlice'
import { useMenuToggle, useRemovedAssets } from 'state/application/hooks'
import { useWeb3React } from '@web3-react/core'
import MainLogo from 'assets/svg/icon/logo_new.svg'
import Illustration from 'assets/images/Illustration.svg'
import { v4 as uuidv4 } from 'uuid'
import CloseIcon from '@material-ui/icons/Close'
import Web3 from 'web3'
import ERC20ABI from 'assets/abis/erc20.json'
import ERC20ABIETH from 'assets/abis/erc20ETH.json'
import { isAddress } from 'utils'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { BITQUERY_NETWORK_LIST } from 'config/index'

import { ReactComponent as MenuOpenIcon } from 'assets/svg/icon/MenuOpenIcon.svg'
import { ReactComponent as WalletIcon } from 'assets/svg/icon/WalletIcon.svg'
import { ReactComponent as TwitterIcon } from 'assets/svg/icon/TwitterIcon.svg'
import { ReactComponent as SocialIcon2 } from 'assets/svg/icon/SocialIcon2.svg'
import { ReactComponent as TelegramIcon } from 'assets/svg/icon/TelegramIcon.svg'
import RefreshIcon from 'assets/images/refresh.png'
import ShowSomeIcon from 'assets/images/show-some.png'
import ShowAllIcon from 'assets/images/show-all.png'
import DiscordIcon from 'assets/images/discord.png'
import axios from 'axios'
import { BITQUERY_API, BITQUERY_API_KEY } from 'config/constants/endpoints'
import storages from 'config/constants/storages'
import addresses from 'config/constants/addresses'
import chainIds from 'config/constants/chainIds'
import { TOKEN_INTERVAL } from 'config/constants/info'
import { BalanceNumber } from 'components/BalanceNumber'
import { useTranslation } from 'contexts/Localization'
import { simpleRpcProvider } from 'utils/providers'
import { links } from './config'
import { Field, replaceSwapState } from '../../state/swap/actions'
import { getBNBPrice } from 'utils/priceProvider'

const abiBNB: any = ERC20ABI
const bnbProviderURL = 'https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/bsc/mainnet/archive'
const bnbWeb3 = new Web3(new Web3.providers.HttpProvider(bnbProviderURL))

const abiETH: any = ERC20ABIETH
const ethProviderURL = 'https://speedy-nodes-nyc.moralis.io/fbb4b2b82993bf507eaaab13/eth/mainnet/archive'
const ethWeb3 = new Web3(new Web3.providers.HttpProvider(ethProviderURL))

const MenuWrapper = styled.div<{ toggled: boolean }>`
  width: 320px;
  background: #1a1a27;
  border-right: 1px solid #afafaf;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: ${(props) => (props.toggled ? '-320px' : 0)};
  transition: left 0.5s;
  z-index: 2;
  height: 100vh;
  & img {
    width: 140px;
  }
  & p {
    font-size: 16px;
    line-height: 19px;
    color: white;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    left: 0;
    width: ${(props) => (props.toggled ? '100px' : '320px')};
    & p {
      font-size: ${(props) => (props.toggled ? '14px' : '16px')};
      line-height: ${(props) => (props.toggled ? '16px' : '19px')};
    }
  }
`

const MenuIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  & span {
    color: white;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
  }
  & button {
    background: transparent !important;
    padding: 10px;
    outline: none;
    & svg path {
      fill: white;
    }
  }
`

const MenuContentWrapper = styled.div<{ toggled: boolean }>`
  width: 100%;
  flex: 1;
  justify-content: center;
  overflow-y: auto;
  padding: 0 24px 32px;
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: ${(props) => (props.toggled ? '0 8px' : '0 24px')};
  }
`

const WalletHeading = styled.div<{ toggled: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.toggled ? 'center' : 'space-between')};
  align-items: center;
  background: #8b2a9b;
  width: 100%;
  // height: 56px;
  padding: ${(props) => (props.toggled ? '0' : '0 48px')};
  padding-top: 12px;
  padding-bottom: 12px;
  & div {
    display: flex;
    align-items: center;
    & svg {
      margin: -2px 10px 0 0;
    }
  }
`
const TokenItemWrapper = styled.div<{ toggled: boolean }>`
  background: #5e5d62;
  border-radius: 8px;
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.toggled ? '4px' : '8px 24px 8px 12px')};
  position: relative;
  cursor: pointer;
  & > div:first-child {
    width: ${(props) => (props.toggled ? '100%' : '66%')};
  }
  & > div:last-child {
    width: ${(props) => (props.toggled ? '100%' : '32%')};
  }
  & div p:last-child {
    margin-top: ${(props) => (props.toggled ? '0px' : '8px')};
  }
  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    font-size: ${(props) => (props.toggled ? '10px' : '14px')};
  }
`

const ButtonWrapper = styled.div`
  background: #8b2a9b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 10px 0;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  & p {
    width: calc(100% - 32px);
  }
`

const MenuItem = styled.a`
  display: none;
  ${({ theme }) => theme.mediaQueries.xl} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    margin: 8px 0;
    border-radius: 10px;
    text-decoration: none !important;
    & p {
      width: calc(100% - 32px);
    }
    &:hover,
    &.active {
      background: #8b2a9b;
    }
  }
`

const MenuItemMobile = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin: 8px 0;
  border-radius: 10px;
  text-decoration: none !important;
  & p {
    width: calc(100% - 32px);
  }
  &:hover,
  &.active {
    background: #8b2a9b;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    display: none;
  }
`

const SocialWrapper = styled.div`
  margin: 10px 0 32px;
  & p {
    margin-left: 12px;
    margin-bottom: 10px;
  }
`

const TokenListWrapper = styled.div`
  overflow-y: auto;
  max-height: 330px;
`

const SocialIconsWrapper = styled.div<{ toggled: boolean }>`
  display: flex;
  height: ${(props) => (props.toggled ? 'auto' : '48px')};
  & div {
    display: flex;
    width: ${(props) => (props.toggled ? '100%' : 'auto')};
    flex-direction: ${(props) => (props.toggled ? 'column' : 'row')};
    align-items: center;
    background: rgba(159, 219, 236, 0.2);
    border-radius: 20px;
    & svg {
      margin: ${(props) => (props.toggled ? '11px 0' : '0 11px')};
    }
  }
`

const IllustrationWrapper = styled.div`
  width: 100%;
  margin-left: -24px;
  & img {
    width: 100%;
  }
`

const RemoveIconWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 20;
  border: 1px solid white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    width: 14px;
    height: 14px;
  }
  & svg path {
    fill: white;
  }
`

const TokenIconContainer = styled.div`
  position: relative;
`

const Menu = () => {
  const { account } = useWeb3React()
  const { menuToggled, toggleMenu } = useMenuToggle()
  const { removedAssets, setRemovedAssets } = useRemovedAssets()
  const [showAllToken, setShowAllToken] = useState(true)
  const { chainId } = useActiveWeb3React()

  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const realPath = `/#${pathname}`

  const [sum, setSum] = useState(0)
  const [getAllToken, setAllTokens] = useState([])
  const [updateFlag, setUpdateFlag] = useState(false)
  const tokens = useSelector<AppState, AppState['tokens']>((state) => state.tokens)

  const { t } = useTranslation()

  const isMobile = window.screen.width < 768

  useEffect(() => {
    if (isMobile && !menuToggled) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobile, menuToggled])

  const getDataQuery = `
  {
    ethereum(network: ${BITQUERY_NETWORK_LIST[chainId]}) {
      address(address: {is: "${account}" }){
        balances {
          value
          currency {
            address
            symbol
            tokenType
            decimals
          }
        }
      }
    }
  }`

  const getSphynxQuery = `
  {
  ethereum(network: ${BITQUERY_NETWORK_LIST[chainId]}) {
      dexTrades(
      options: {desc: ["block.height", "tradeIndex"], limit: 1, offset: 0}
      date: {till: null}
      smartContractAddress: {is: "0xe4023ee4d957a5391007ae698b3a730b2dc2ba67"}
      baseCurrency: {is: "0x2e121ed64eeeb58788ddb204627ccb7c7c59884c"}
      quoteCurrency:{is : "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
      ) {
      block {
        timestamp {
        time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      tradeIndex
      protocol
      exchange {
        fullName
      }
      smartContract {
        address {
        address
        annotation
        }
      }
      baseAmount
      baseCurrency {
        address
        symbol
      }
      quoteAmount
      quoteCurrency {
        address
        symbol
      }
      transaction {
        hash
      }
      buyCurrency {
        symbol
        address
        name
      }
      sellCurrency {
        symbol
        address
        name
        }
      price
      quotePrice
      }
    }
  }`

  const fetchData = async () => {
    if (account) {
      const bnbPrice = await getBNBPrice(simpleRpcProvider)
      let removedTokens = JSON.parse(localStorage.getItem(storages.LOCAL_REMOVED_TOKENS))
      if (removedTokens === null) {
        removedTokens = []
      }
      setRemovedAssets(removedTokens)

      const bitConfig = {
        headers: {
          'X-API-KEY': BITQUERY_API_KEY,
        },
      }
      const queryResult = await axios.post(BITQUERY_API, { query: getDataQuery }, bitConfig)
      if (queryResult.data.data) {
        let allsum: any = 0
        let balances = queryResult.data.data.ethereum.address[0].balances
        if (balances && balances.length > 0) {
          balances = balances.filter((balance) => balance.value !== 0)
          const promises = balances.map((elem) => {
            let address = elem.currency.address
            if (address === '-') {
              switch (chainId) {
                case chainIds.BNB_CHAIN_ID:
                  address = addresses.WBNB_ADDRESS
                  break
                case chainIds.ETH_CHAIN_ID:
                  address = addresses.WETH_ADDRESS
                  break
                default:
                  address = addresses.WBNB_ADDRESS
              }
            }
            return axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/price/${address}/${chainId}`,)
          })

          const prices: any = await Promise.all(promises)
          let i = 0

          // eslint-disable-next-line no-restricted-syntax
          for (const elem of balances) {
            const result = isAddress(elem.currency.address)
            if (result) {
              let contract
              switch (chainId) {
                case chainIds.BNB_CHAIN_ID:
                  contract = new bnbWeb3.eth.Contract(abiBNB, elem.currency.address)
                  break
                case chainIds.ETH_CHAIN_ID:
                  contract = new ethWeb3.eth.Contract(abiETH, elem.currency.address)
                  break
                default:
                  contract = new bnbWeb3.eth.Contract(abiBNB, elem.currency.address)
              }
              const tokenBalance = await contract.methods.balanceOf(account).call()
              elem.value = tokenBalance / Math.pow(10, elem.currency.decimals)
            }
            else if (elem.currency.symbol === 'BNB') {
              const bnbBalance = await bnbWeb3.eth.getBalance(account)
              elem.value = bnbWeb3.utils.fromWei(bnbBalance)
            }
            else if (elem.currency.symbol === 'ETH') {
              const ethBalance = await ethWeb3.eth.getBalance(account)
              elem.value = ethWeb3.utils.fromWei(ethBalance)
            }

            let sphynxPrice
            if (elem.currency.symbol === 'SPHYNX') {
              const queryResult1 = await axios.post(BITQUERY_API, { query: getSphynxQuery }, bitConfig)
              if (queryResult1.data.data && queryResult1.data.data.ethereum.dexTrades) {
                sphynxPrice = queryResult1.data.data.ethereum.dexTrades[0].quotePrice * bnbPrice
              }
              elem.currency.price = sphynxPrice
            }
            else {
              elem.currency.price = prices[i].data.price
            }

            const dollerprice: any = elem.currency.price * elem.value
            elem.dollarPrice = dollerprice
            i++
            if (removedTokens.indexOf(elem.currency.symbol) === -1) {
              allsum += dollerprice
            }

            if (elem.dollarPrice > 0) {
              let flag = false
              const token = { symbol: elem.currency.symbol, value: elem.value }
              tokens.forEach((cell) => {
                if (cell.symbol === token.symbol) {
                  dispatch(updateToken(token))
                  flag = true
                  return
                }
              })

              if (!flag) dispatch(addToken(token))
            }
          }
          balances = balances.filter((balance) => balance.dollarPrice !== 0)
        } else {
          dispatch(deleteTokens())
        }
        setSum(allsum)
        setAllTokens(balances ? balances : [])
      }
    } else {
      dispatch(deleteTokens())
    }
  }

  const updateWallet = () => {
    let allsum = 0
    getAllToken.forEach((elem) => {
      if (removedAssets.indexOf(elem.currency.symbol) === -1) {
        allsum += elem.dollarPrice
      }
    })

    setSum(allsum)
  }

  const updateData = async () => {
    let allsum: any = 0
    let balances = getAllToken

    if (balances && balances.length > 0 && account) {
      // eslint-disable-next-line no-restricted-syntax
      const sessionData = JSON.parse(sessionStorage.getItem(storages.SESSION_LIVE_PRICE))
      for (const elem of balances) {
        const result = isAddress(elem.currency.address)
        if (result) {
          let contract
          switch (chainId) {
            case chainIds.BNB_CHAIN_ID:
              contract = new bnbWeb3.eth.Contract(abiBNB, elem.currency.address)
              break
            case chainIds.ETH_CHAIN_ID:
              contract = new ethWeb3.eth.Contract(abiETH, elem.currency.address)
              break
            default:
              contract = new bnbWeb3.eth.Contract(abiBNB, elem.currency.address)
          }
          const tokenBalance = await contract.methods.balanceOf(account).call()
          elem.value = tokenBalance / Math.pow(10, elem.currency.decimals)
        }
        else if (elem.currency.symbol === 'BNB') {
          const bnbBalance = await bnbWeb3.eth.getBalance(account)
          elem.value = bnbWeb3.utils.fromWei(bnbBalance)
        }
        else if (elem.currency.symbol === 'ETH') {
          const ethBalance = await ethWeb3.eth.getBalance(account)
          elem.value = ethWeb3.utils.fromWei(ethBalance)
        }

        if (sessionData && elem.currency.address === sessionData.input) {
          elem.currency.price = sessionData.price
        }

        const dollerprice: any = elem.currency.price * elem.value
        elem.dollarPrice = dollerprice
        if (removedAssets.indexOf(elem.currency.symbol) === -1) {
          allsum += dollerprice
        }

        if (elem.dollarPrice > 0) {
          let flag = false
          const token = { symbol: elem.currency.symbol, value: elem.value }
          tokens.forEach((cell) => {
            if (cell.symbol === token.symbol) {
              dispatch(updateToken(token))
              flag = true
              return
            }
          })

          if (!flag) dispatch(addToken(token))
        }
      }

      balances = balances.filter((balance) => balance.dollarPrice !== 0)
    } else {
      dispatch(deleteTokens())
    }
    setSum(allsum)
    setAllTokens(balances ? balances : [])
  }

  const checkTokens = () => {
    setUpdateFlag(false)
    setUpdateFlag(true)
  }

  useEffect(() => {
    if (!updateFlag) return
    updateData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateFlag])

  useEffect(() => {
    const intervalId = setInterval(checkTokens, TOKEN_INTERVAL)
    return () => {
      clearInterval(intervalId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId])

  useEffect(() => {
    updateWallet()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removedAssets])

  const removeAsset = (asset: any) => {
    const assets = removedAssets.map((val) => val)
    assets.push(asset.currency.symbol)
    setRemovedAssets(assets)
    localStorage.setItem(storages.LOCAL_REMOVED_TOKENS, JSON.stringify(assets))
  }

  const tokenData = getAllToken
    .filter((val) => removedAssets.findIndex((item) => item === val.currency.symbol) === -1)
    .sort((a, b) => (Number(a.dollarPrice) < Number(b.dollarPrice) ? 1 : -1))
    .map((item) => ({
      ...item,
      id: uuidv4(),
    }))
    .map((elem: any) => {
      const { currency, value, dollarPrice, id } = elem

      const handleTokenItem = () => {
        dispatch(
          replaceSwapState({
            outputCurrencyId: 'BNB',
            inputCurrencyId: currency.address,
            typedValue: '',
            field: Field.OUTPUT,
            recipient: null,
          }),
        )
      }

      const handleRemoveAsset = () => {
        removeAsset(elem)
      }
      return (
        <TokenIconContainer key={id}>
          <ReactLink to={`/swap/${currency.address}`}>
            <a>
              <TokenItemWrapper toggled={menuToggled} onClick={handleTokenItem}>
                {menuToggled ? (
                  <>
                    <div>
                      <p>
                        <b>{currency.symbol}</b>
                      </p>
                      <p>
                        <BalanceNumber prefix="$" value={Number(dollarPrice).toFixed(2)} />
                      </p>
                      <p>
                        <BalanceNumber prefix="" value={Number(value).toFixed(2)} />
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <p>
                        <b>{currency.symbol}</b>
                      </p>
                      <p>
                        <BalanceNumber prefix="$" value={Number(dollarPrice).toFixed(2)} />
                      </p>
                    </div>
                    <div>
                      <p>
                        <BalanceNumber prefix="" value={Number(value).toFixed(2)} />
                      </p>
                      <p />
                    </div>
                  </>
                )}
              </TokenItemWrapper>
            </a>
          </ReactLink>
          {!menuToggled && (
            <RemoveIconWrapper onClick={handleRemoveAsset}>
              <CloseIcon />
            </RemoveIconWrapper>
          )}
        </TokenIconContainer>
      )
    })

  const showAllRemovedTokens = useCallback(() => {
    localStorage.setItem(storages.LOCAL_REMOVED_TOKENS, null)
    setRemovedAssets([])
  }, [setRemovedAssets])

  const handleToggleMenu = useCallback(() => {
    toggleMenu(!menuToggled)
  }, [menuToggled, toggleMenu])

  const handleShowAllToken = useCallback(() => {
    setShowAllToken(!showAllToken)
  }, [showAllToken])

  const handleMobileMenuItem = useCallback(() => {
    toggleMenu(false)
  }, [toggleMenu])

  return (
    <MenuWrapper toggled={menuToggled}>
      <Link external href="https://thesphynx.co">
        <img src={MainLogo} alt="Main Logo" width="159.118" height="151" />
      </Link>
      <MenuIconWrapper>
        {!menuToggled && <span>{t('Main Menu')}</span>}
        <Button onClick={handleToggleMenu} aria-label="menu toggle">
          {menuToggled ? (
            <svg viewBox="0 0 24 24" width="24px">
              <path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" />
            </svg>
          ) : (
            <MenuOpenIcon />
          )}
        </Button>
      </MenuIconWrapper>
      <WalletHeading toggled={menuToggled}>
        <div>
          <WalletIcon />
          {!menuToggled && <p>{t('Wallet')}</p>}
        </div>
        {!menuToggled && <p>{account ? <BalanceNumber prefix="$ " value={Number(sum).toFixed(2)} /> : ''}</p>}
      </WalletHeading>
      {account ? (
        <div style={{ width: '100%', padding: `${menuToggled ? '0px 16px' : '0px 24px'}` }}>
          <TokenListWrapper>{showAllToken ? tokenData : tokenData.slice(0, 3)}</TokenListWrapper>
          <ButtonWrapper style={menuToggled ? { justifyContent: 'center' } : {}} onClick={handleShowAllToken}>
            <img src={showAllToken ? ShowSomeIcon : ShowAllIcon} alt="refresh" style={{ height: '23px', width: '23px' }} />
            {!menuToggled && (
              <p>
                <b>{showAllToken ? t('Show Some Tokens') : t('Show All Tokens')}</b>
              </p>
            )}
          </ButtonWrapper>
          {removedAssets.length === 0 ? null : (
            <ButtonWrapper style={menuToggled ? { justifyContent: 'center' } : {}} onClick={showAllRemovedTokens}>
              <img src={RefreshIcon} alt="refresh" style={{ height: '23px', width: '23px' }} />
              {!menuToggled && (
                <p>
                  <b>{t('Refresh')}</b>
                </p>
              )}
            </ButtonWrapper>
          )}
        </div>
      ) : (
        ''
      )}
      <MenuContentWrapper toggled={menuToggled}>
        {links
          .map((item) => ({
            ...item,
            id: uuidv4(),
          }))
          .map((link) => {
            const Icon = link.icon
            return (
              <div key={link.id}>
                <MenuItem
                  className={realPath.indexOf(link.href) > -1 && link.href !== '/' ? 'active' : ''}
                  href={link.href}
                  target={link.newTab ? '_blank' : ''}
                  style={menuToggled ? { justifyContent: 'center' } : {}}
                  rel="noreferrer"
                >
                  <Icon />
                  {!menuToggled && (
                    <p>
                      <b>{t(`${link.label}`)}</b>
                    </p>
                  )}
                </MenuItem>
                <MenuItemMobile
                  className={realPath.indexOf(link.href) > -1 && link.href !== '/' ? 'active' : ''}
                  href={link.href}
                  target={link.newTab ? '_blank' : ''}
                  onClick={handleMobileMenuItem}
                >
                  <Icon />
                  <p>
                    <b>{t(`${link.label}`)}</b>
                  </p>
                </MenuItemMobile>
              </div>
            )
          })}
        <SocialWrapper>
          <p>
            <b>{t('Socials')}</b>
          </p>
          <SocialIconsWrapper toggled={menuToggled}>
            <div>
              <Link external href="https://twitter.com/sphynxswap?s=21" aria-label="twitter">
                <TwitterIcon />
              </Link>
              <Link external href="https://sphynxtoken.co" aria-label="social2">
                <SocialIcon2 />
              </Link>
              <Link external href="https://t.me/sphynxswap" aria-label="telegram">
                <TelegramIcon />
              </Link>
              <Link external href="https://discord.gg/ZEuDaFk4qz" aria-label="discord">
                <img src={DiscordIcon} alt="discord" style={{ height: '45px', width: '45px', padding: '8px' }} />
              </Link>
              {/* <Link external href="https://instagram.com/sphynxswap?utm_medium=copy_link">
                <img src={InstaIcon} alt="insta" style={{height: "45px", width: "45px", padding: "8px"}} />
              </Link> */}
            </div>
          </SocialIconsWrapper>
        </SocialWrapper>
        {!menuToggled && (
          <IllustrationWrapper>
            <img src={Illustration} width="321" height="501" alt="Illustration" />
          </IllustrationWrapper>
        )}
      </MenuContentWrapper>
    </MenuWrapper>
  )
}

export default Menu
