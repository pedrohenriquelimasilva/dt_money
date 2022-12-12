import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;

  min-width: 32rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 6px;
  padding: 2.5rem 3rem;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    bottom: 0;
    top: 75vh;
    font-size: 83.75%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      padding: 1rem;
      background: ${(props) => props.theme['gray-900']};
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme['gray-300']};

      ::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      background: ${(props) => props.theme['green-500']};
      border-radius: 6px;

      border: 0;
      padding: 0 1.25rem;
      height: 58px;
      font-weight: bold;
      color: ${(props) => props.theme.white};
      cursor: pointer;
      margin-top: 1.5rem;

      ::disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      :not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background: transparent;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-400']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.5rem;
  gap: 1rem;
`
interface TransactionButtonProps {
  varient: 'income' | 'outcome'
}

export const TransactionButton = styled(
  RadioGroup.Item,
)<TransactionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 6px;
  height: 58px;
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  background: ${(props) => props.theme['gray-700']};

  svg {
    color: ${(props) =>
      props.varient === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.varient === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
    transition: background-color 0.2s, color 0.2s;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
