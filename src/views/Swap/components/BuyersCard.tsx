/* eslint-disable no-console */
import { isAddress } from '@ethersproject/address'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'state'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'contexts/Localization'
import { Spinner } from '../../LotterySphx/components/Spinner'
import { topTrades } from '../../../utils/apiServices'

const fontSize = window.screen.width > 768 ? "14px" : "10px"

const TableWrapper = styled.div`
  background: ${({ theme }) => theme.isDark ? "#0E0E26": "#2A2E60"};
  border-radius: 8px;
  height: 100%;
  max-height: 500px;
  overflow: auto;
  overflow-x: hidden;
  & table {
    background: transparent;
    width: 100%;
    & tr {
      background: transparent;
    }
    & td {
      padding: 8px;
    }
    & thead {
      & td {
        color: white;
        font-size: 16px;
        vertical-align: middle;
        background: ${({ theme }) => theme.isDark ? "#219653": "#77BF3E"};
        padding: 16px 8px;
        font-weight: 700;
        & > div > div {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    & tbody {
      & tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        & h2 {
          font-size: ${fontSize};
          line-height: 16px;
          word-break: break-word;
          font-weight: 600;
          &.success {
            color: ${({ theme }) => theme.isDark ? "#219653": "#77BF3E"};
          }
          &.error {
            color: ${({ theme }) => theme.isDark ? "#EB5757": "#F84364"};
          }
        }
      }
    }
  }
`

const BuyersCard = (props) => {
  const [tableData, setTableData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const input = useSelector<AppState, AppState['inputReducer']>((state) => state.inputReducer.input)
  const { t } = useTranslation()
  const result = isAddress(input)
  const { pairAddress } = props
  // eslint-disable-next-line no-console

  const getTableData = async (pair) => {
    setLoading(true)
    const address = input
    const from = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString()
    const to = new Date().toISOString()
    try {
      if (result && address && from && to) {
        const topBuyers = await topTrades(address, 'buy', pair);
        if (topBuyers) {
          setTableData(topBuyers);
        }
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getTableData(pairAddress)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, pairAddress])
  return (
    <>
      {!isLoading ? (
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <td>{t('Wallet')}</td>
                <td>{t('Total Bought')}</td>
              </tr>
            </thead>
            <tbody>
              {tableData?.map(item => ({
                ...item,
                id: uuidv4()
              })).map((td) => {
                return (
                  <tr key={td.id}>
                    <td style={{ color: '#fff', width: '80%' }}>
                      <a href={`https://bscscan.com/token/${input}?a=${td.wallet}`} target="_blank" rel="noreferrer">
                        <h2>{td.wallet}</h2>
                      </a>
                    </td>
                    <td style={{ color: '#04ab1d', width: '20%' }}>
                      <h2>$ {td.usdAmount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$&,')}</h2>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </TableWrapper>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default BuyersCard
