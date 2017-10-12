import { blue500, lightBlue700, lightBlue800, lightBlue900,
        yellowA700, darkBlack, white } from 'material-ui/styles/colors'

const palette = {
  primary1Color: lightBlue700,
  primary2Color: lightBlue800,
  primary3Color: lightBlue900,
  primary4Color: blue500,
  accent1Color: blue500,
  accent2Color: blue500,
  accentYellow: yellowA700,
  textColor: darkBlack
}

const theme = {
  palette,
  fontFamily: 'Source Sans Pro, sans-serif',
  textField: {
    focusColor: palette.primary4Color
  },
  checkbox: {
    checkedColor: palette.primary4Color,
    requiredColor: palette.primary4Color
  },
  raisedButton: {
    primaryColor: palette.primary4Color,
    primaryTextColor: white
  },
  toolbar: {
    iconColor: darkBlack,
    backgroundColor: 'transparent'
  }
}

/** @private */
export default theme
