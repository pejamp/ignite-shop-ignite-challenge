import { keyframes, styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

const fadeIn = keyframes({
  '0%': { 
    opacity: 0,
    transform: 'translateX(110%)',
   },
  '100%': { 
    opacity: 1,
    transform: 'translateX(0%)',
   },
});

export const Content = styled(Dialog.Content, {
  minHeight: '100vh',
  minWidth: '480px',
  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',
  background: '$gray800',
  
  position: 'fixed',
  top: 0,
  right: 0,
  padding: 48,

  display: 'flex',
  flexDirection: 'column',
  
  h2: {
    fontSize: '$lg',
    color: '$gray100',
    marginTop: 24,
    marginBottom: 32,
  },

  '&[data-state="open"]': {
    animation: `${fadeIn} 300ms ease-out`,
  }
})

export const CloseButton = styled(Dialog.Close, {
  background: 'transparent',
  border: 0,
  lineHeight: 0,
  cursor: 'pointer',
  position: 'absolute',
  top: 24,
  right: 24,
  color: '$gray300',

  '&:hover': {
    color: '$gray100',
    transition: 'color 200ms ease-out'
  }
})

export const ProductList = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginBottom: 'auto',
})

export const ProductsInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 8,

  variants: {
    textSize: {
      lg: {
        span: {
          fontSize: '$xl',
          fontWeight: 'bold',
        }
      }
    }
  },

  span: {
    color: '$gray100'
  }
})

export const BuyButton = styled('button', {
  marginTop: 48,
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
    transition: 'all 200ms ease-out'
  }
})