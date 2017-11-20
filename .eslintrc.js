module.exports = {
    root: true,
    parser: 'babel-eslint',
    "extends": 'airbnb',
    "settings": {
    "import/resolver": {
      "babel-module": {
        "extensions": [".js"]
      }
    },
    "import/extensions": [".js"]
    },
    "plugins": [
      "react",
    ],
    "env": {
    "es6": true,
    "node": true
    },
    "parserOptions": {
      "ecmaFeatures": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "jsx": true
      }
    },
    'rules': {
      "indent": ["error", 2],
      "react/jsx-indent": [1, 'tab'|2],
      "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/forbid-prop-types": [0, { "forbid": false }],
      "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    }
}
