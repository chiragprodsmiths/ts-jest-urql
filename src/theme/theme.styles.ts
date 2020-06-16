import fontFaces from './theme.fontface';

const Styles = {
  root: {
    ...fontFaces,
    fontFamily: 'body',
    fontWeight: 'regular',
    fontSize: 2,
    lineHeight: 'body',
    WebkitFontSmoothing: 'antialiased',
    p: {
      fontFamily: 'regular',
      color: 'text',
    },
    input: {
      fontFamily: 'regular',
      '&[type="checkbox"]': {
        '& ~ svg': {
          background: 'none !important',
          fill: '#CFDBE9',
          strokeWidth: '1px',
        },
        '&:checked ~ svg': {
          color: 'link',
          fill: 'link',
        },
      },
      '&[type="radio"]': {
        '& ~ svg': {
          fill: '#CFDBE9',
          background: 'none !important',
          strokeWidth: '1px',
        },
        '&:checked ~ svg': {
          color: 'link',
          fill: 'link',
        },
      },
    },
    textarea: {
      fontFamily: 'regular',
    },
    h1: {
      fontSize: 5,
      color: 'text',
    },
    h2: {
      fontSize: 4,
      color: 'text',
    },
    h3: {
      fontSize: 3,
      color: 'text',
    },
    h4: {
      fontSize: 2,
      color: 'text',
    },
    h5: {
      fontSize: 1,
      color: 'text',
    },
    h6: {
      fontSize: 0,
      color: 'text',
    },
    button: {
      fontFamily: 'regular',
      outline: 'none',
      cursor: 'pointer',
      position: 'relative',
      '&:focus': {
        outline: 'none',
      },
    },
    div: {
      color: 'text',
    },
    a: {
      fontFamily: 'regular',
      textDecoration: 'none',
      color: 'link',
    },
    img: {
      maxWidth: '100%',
    },
    form: {
      width: '100%',
      mb: 0,
    },
    table: {
      borderSpacing: 0,
      border: '1px solid black',
      tr: {
        '&:last-child': {
          td: {
            borderBottom: 0,
          },
        },
      },
      th: {
        margin: 0,
        padding: '0.5rem',
        borderBottom: '1px solid black',
        borderRight: '1px solid black',
        '&:last-child': {
          borderRight: 0,
        },
      },
      td: {
        margin: 0,
        padding: '0.5rem',
        borderBottom: '1px solid black',
        borderRight: '1px solid black',
        '&:last-child': {
          borderRight: 0,
        },
      },
    },
    '@keyframes placeHolderShimmer': {
      '0%': { backgroundPosition: '-468px 0' },
      '100%': { backgroundPosition: '468px 0' },
    },
  },
};

export default Styles;
