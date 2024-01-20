import { styled } from "@/styles"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  width: 48,
  height: 48,
  padding: 12,
  borderRadius: 6,
  background: '$gray800',
  border: 0,
  color: '$gray300',
  cursor: 'pointer',
  position: 'relative',

  '&:hover': {
    transition: 'color 200ms ease-out',
    color: '$gray100'
  },

  span: {
    width: 27,
    height: 27,
    position: 'absolute',
    top: -7,
    right: -7,
    background: '$green300',
    border: '3px solid $gray900',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '$white',
    fontSize: 14,
    fontWeight: 700,
  }
})