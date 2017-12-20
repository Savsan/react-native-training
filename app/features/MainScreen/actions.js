import { createAction } from 'redux-actions';

const toggleMainScreenModal = createAction('TOGGLE_MAINSCREEN_MODAL');
const recieveWeatherData = createAction('RECIEVE_WEATHER_DATA');

function requestWeather(latitude, longitude) {
  return (dispatch) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d076e4de27444c114a1bf65aae584ef5`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((weatherData) => {
        dispatch(recieveWeatherData(weatherData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export { toggleMainScreenModal, recieveWeatherData, requestWeather };
