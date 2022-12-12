import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface TransactionProps {
  id: number
  type: 'outcome' | 'income'
  description: string
  category: string
  price: number
  createdAt: string
}
interface CreateTransactionProps {
  type: 'outcome' | 'income'
  description: string
  category: string
  price: number
}

interface TransactionsContextProps {
  transactions: TransactionProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionProps) => Promise<void>
  deleteTransactions: (id: number) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }, [])

  const deleteTransactions = useCallback(
    async (id: number) => {
      await api.delete(`/transactions/${id}`)

      fetchTransactions()
    },
    [fetchTransactions],
  )

  const createTransaction = useCallback(
    async (data: CreateTransactionProps) => {
      const { category, description, price, type } = data

      const response = await api.post('/transactions', {
        category,
        description,
        type,
        price,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        deleteTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
