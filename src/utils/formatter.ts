// formatação de data nativa
export const dateFormatter = new Intl.DateTimeFormat('pt-br')

// formatação de preço nativo do node
export const priceFormatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})
