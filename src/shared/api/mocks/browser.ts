import { setupWorker } from 'msw/browser'
import { productsHandlers } from './handlers/products'

export const worker = setupWorker(...productsHandlers);