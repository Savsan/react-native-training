import { createAction } from 'redux-actions';

const toggleMainScreenModal = createAction('TOGGLE_MAINSCREEN_MODAL');
const recieveWeatherData = createAction('RECIEVE_WEATHER_DATA');

function getWeatherData(latitude, longitude) {
  return dispatch =>
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d076e4de27444c114a1bf65aae584ef5`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
}

export { toggleMainScreenModal, recieveWeatherData, getWeatherData };
