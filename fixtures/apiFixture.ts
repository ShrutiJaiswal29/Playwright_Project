import {test as base} from '@playwright/test'
const baseUrl='https://parabank.parasoft.com/parabank/services/bank'

export const test=base.extend({
    baseUrl:async({},use)=>{
    await use(baseUrl)
}})

export {expect} from '@playwright/test'