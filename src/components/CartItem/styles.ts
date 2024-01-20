import { styled } from "@/styles";

export const CardContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 20
})

export const CardImage = styled('span', {
  maxWidth: 100,
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  display: 'flex',

  img: {
    objectFit: 'cover',
  }
})

export const CardInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  span: {
    fontSize: '$md',
    color: '$gray300',
    lineHeight: 1.6
  },

  strong: {
    fontSize: '$md',
    color: '$gray100',
    lineHeight: 1.6, 
    fontWeight: 'bold',
  },

  button: {
    border: 0,
    background: 'transparent',
    color: '$green500',
    lineHeight: 1.6,
    fontWeight: 'bold',
    marginTop: 8,
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
      transition: 'color 200ms ease-out'
    }
  }
})