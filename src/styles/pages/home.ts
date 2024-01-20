import { styled } from "..";

export const HomeContainer = styled('main', {
  position: 'relative',
  display: 'flex',
  width: '100%',
  minHeight: 656,
  //maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
})

export const ProductSlider = styled('div', {
  variants: {
    origin: {
      true: {
        "a:first-child > div": {
          marginLeft: 'calc((-1180px + 696px) / 2)'
        },
      }
    }
  },

  paddingLeft: 'calc((100vw - 1180px) / 2)',
})

export const Product = styled('div', {
  variants: {
    active: {
      true: {
        footer: {
          transform: 'translateY(0%)',
          opacity: 1
        }
      },
    },
  },

  minWidth: '43.5rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem 2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      display: 'block',
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
      marginTop: 4
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})

export const ProductButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '12px',
  border: 'none',
  borderRadius: 6,
  background: '$green500',

  cursor: 'pointer',

  '&:hover': {
    background: '$green300',
    transition: 'background 200ms ease-out'
  },

  svg: {
    color: '$white',
  }
})

export const ArrowButtonOverlay = styled('div', {
  variants: {
    side: {
      left: { 
        justifyContent: 'flex-start',
        left: 0, 
        background: 'linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0.00) 100%)',
      },
      right: { 
        justifyContent: 'flex-end',
        right: 0, 
        background: 'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
      }
    }
  },

  minWidth: 136,
  height: '100%',
  position: 'absolute',
  top: 0,
  
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',

  transition: 'all 200ms ease-out',

  '&:has(button:disabled)': {
    width: 0,
    opacity: 0,
  },

  button: {
    width: 48,
    height: 48,
    border: 0,
    background: 'transparent',
    color: '$gray300',
    cursor: 'pointer',
  }
})