import initialReducer from '../reducers/initialReducer';
import mainScreenReducer from '../reducers/mainScreenReducer';
import navReducer from '../reducers/navReducer';
import weatherReducer from '../reducers/weatherReducer';

const reducers = {
  auth: initialReducer,
  nav: navReducer,
  mainScreen: mainScreenReducer,
  weather: weatherReducer,
};

export { reducers };
