import { createAction } from '@reduxjs/toolkit'

export interface Field {
  input: ''
  typeRouterVersion: 'v1'
  type: 'INPUT_ADDRESS'
}

export const typeInput = createAction<{ input: string }>('input/typeInput')
export const priceInput = createAction<{ price: string }>('input/priceInput')
export const setIsInput = createAction<{ isInput: boolean }>('input/setIsInput')
export const typeRouterVersion = createAction<{ routerVersion: string }>('input/typeRouterVersion')
export const resetMintState = createAction<void>('input/resetState')
