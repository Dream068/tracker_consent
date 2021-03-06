import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTranslation } from 'react-i18next';
import { CookiesProvider, useCookies } from 'react-cookie';
import BottomDialog from './components/BottomDialog';
import theme from './theme/Theme';
import './i18n';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
}));
function App(props) {
  const classes = useStyles();
  const [initial, setInitial] = useState(true);
  const [cookies, setCookie] = useCookies(['personalization', 'analytical', 'marketing', 'socialMedia']);
  const isCookieSet = Object.keys(cookies).length > 0;
  const { language, trackers } = props;
  const { t } = useTranslation();
  const settingCookies = () => {
    setInitial(false);
  };

  useEffect(() => {
    localStorage.setItem('language', language);
  }, []);

  const handleSelectedCookie = (state) => {
    if (state.personalization) {
      setCookie('personalization', true);
    } else {
      setCookie('personalization', false);
    }
    if (state.analytical) {
      setCookie('analytical', true);
    } else {
      setCookie('analytical', false);
    }
    if (state.advertising) {
      setCookie('marketing', true);
    } else {
      setCookie('marketing', false);
    }
    if (state.social) {
      setCookie('socialMedia', true);
    } else {
      setCookie('socialMedia', false);
    }
  };

  const handleAllCookie = () => {
    setCookie('personalization', true);
    setCookie('analytical', true);
    setCookie('marketing', true);
    setCookie('social', true);
  };

  const handleOnlyNecessary = () => {
    setCookie('personalization', false);
    setCookie('analytical', false);
    setCookie('marketing', false);
    setCookie('socialMedia', false);
  };

  return (
    <CookiesProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {!isCookieSet && (
          <div className={classes.root}>
            {initial
              ? (
                <BottomDialog
                  settingCookies={settingCookies}
                  leftButton={t('cookies_settings')}
                  rightButton={t('accept_all')}
                  centerButton={t('accept_only_necessary')}
                  height="25vh"
                  initial={initial}
                  handleCookie={handleAllCookie}
                  handleOnlyNecessary={handleOnlyNecessary}
                  trackers={trackers}
                />
              )
              : (
                <BottomDialog
                  settingCookies={handleSelectedCookie}
                  leftButton={t('accept_selected')}
                  rightButton={t('accept_all')}
                  centerButton={t('accept_only_necessary')}
                  height="60vh"
                  initial={initial}
                  handleCookie={handleAllCookie}
                  handleOnlyNecessary={handleOnlyNecessary}
                  trackers={trackers}
                />
              )}
          </div>
        )}
      </MuiThemeProvider>
    </CookiesProvider>
  );
}

App.defaultProps = {
  language: 'en',
  trackers: {
    personalization: undefined,
    analytical: undefined,
    marketing: undefined,
    socialMedia: undefined,
  },
};

App.propTypes = {
  language: PropTypes.string,
  trackers: PropTypes.shape({
    personalization: PropTypes.func,
    analytical: PropTypes.func,
    marketing: PropTypes.func,
    socialMedia: PropTypes.func,
  }),
};
export default App;
