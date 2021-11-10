import React from 'react'
import { Flex, Text, Button, Heading, useModal, Skeleton } from '@sphynxswap/uikit'
import BigNumber from 'bignumber.js'
import { Token } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance, getBalanceNumber, formatNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'
import CollectModal from '../Modals/CollectModal'

interface HarvestActionsProps {
  earnings: BigNumber
  earningToken: Token
  sousId: number
  earningTokenPrice: number
  isBnbPool: boolean
  isLoading?: boolean
}

const HarvestActions: React.FC<HarvestActionsProps> = ({
  earnings,
  earningToken,
  sousId,
  isBnbPool,
  earningTokenPrice,
  isLoading = false,
}) => {
  const { t } = useTranslation()
  const earningTokenBalance = getBalanceNumber(earnings, earningToken.decimals)
  const formattedBalance = formatNumber(earningTokenBalance, 3, 3)

  const earningTokenDollarBalance = getBalanceNumber(earnings.multipliedBy(earningTokenPrice), earningToken.decimals)

  const fullBalance = getFullDisplayBalance(earnings, earningToken.decimals)
  const hasEarnings = earnings.toNumber() > 0
  const isCompoundPool = sousId === 0

  const [onPresentCollect] = useModal(
    <CollectModal
      formattedBalance={formattedBalance}
      fullBalance={fullBalance}
      earningToken={earningToken}
      earningsDollarValue={earningTokenDollarBalance}
      sousId={sousId}
      isBnbPool={isBnbPool}
      isCompoundPool={isCompoundPool}
    />,
  )

  const buttonStyle = {
    borderRadius: '5px',
    border: 'none',
    width: '230px',
    height: '34px',
    fontSize: '13px',
    background: '#0E0E26'
  }

  return (
    <Flex justifyContent="space-between" alignItems="center" mb="16px" flexDirection="column">
      <Flex flexDirection="row">
        {isLoading ? (
          <Skeleton width="80px" height="48px" />
        ) : (
          <>
            {hasEarnings ? (
              <>
                {/* <Balance bold fontSize="20px" decimals={5} value={earningTokenBalance} /> */}
                {earningTokenPrice > 0 && (
                  <Balance
                    display="inline"
                    fontSize="20px"
                    color="textSubtle"
                    decimals={2}
                    prefix="$"
                    value={earningTokenDollarBalance}
                  />
                )}
              </>
            ) : (
              <>
                {/* <Heading color="textDisabled">0</Heading> */}
                <Text fontSize="20px" color="textDisabled">
                  $0
                </Text>
              </>
            )}
          </>
        )}
      </Flex>
      <Button disabled={!hasEarnings} onClick={onPresentCollect} style={buttonStyle}>
        {isCompoundPool ? t('Collect') : t('Harvest')}
      </Button>
    </Flex>
  )
}

export default HarvestActions
