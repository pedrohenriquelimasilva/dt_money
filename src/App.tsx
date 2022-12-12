import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionsProvider'
import { Transaction } from './pages/Transaction'
import { GlobalStyled } from './style/global'
import { defaultTheme } from './style/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />

      <TransactionProvider>
        <Transaction />
      </TransactionProvider>
    </ThemeProvider>
  )
}
