"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var Theme = (0, _styles.createMuiTheme)({
  typography: {
    htmlFontSize: 16,
    fontFamily: 'sans-serif',
    fontSize: 12,
    fontWeight: 600,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1: {
      fontFamily: 'Helvetica',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.3,
      letterSpacing: '0.00938em'
    }
  },
  overrides: {
    MuiDialog: {
      paper: {
        margin: 0,
        position: 'absolute',
        bottom: 0,
        height: '27vh'
      },
      paperFullWidth: {
        width: '100%',
        padding: '0px 100px'
      }
    },
    MuiButton: {
      root: {
        marginRight: '50px',
        fontWeight: 'bold',
        textTransform: 'unset',
        marginBottom: '20px'
      }
    },
    MuiTypography: {
      colorTextSecondary: {
        color: '#000'
      }
    }
  }
});
var _default = Theme;
exports["default"] = _default;