import styled from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;

  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  @media (max-width: 720px) {
    display: block;
    overflow: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  td {
    background: ${(props) => props.theme['gray-700']};
    padding: 1.25rem 2rem;
    color: ${(props) => props.theme['gray-300']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    .trashIcon {
      transition: color 0.2s;
    }

    .trashIcon:hover {
      color: ${(props) => props.theme['red-500']};
      cursor: pointer;
    }
  }
`

interface PriceHeightProps {
  status: 'income' | 'outcome'
}

export const PriceHeight = styled.span<PriceHeightProps>`
  color: ${(props) =>
    props.status === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
