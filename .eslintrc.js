module.exports = {
    "env": {
			"browser": true,
			"es6": true
    },
    "extends": [
			"eslint:recommended",
			"plugin:react/recommended"
		],
    "parserOptions": {
			"ecmaFeatures": {
				"jsx": true
			},
			"ecmaVersion": 2018,
			"sourceType": "module"
    },
    "plugins": [
			"react"
    ],
    "rules": {
			"indent": [
				"error",
				2
			],
			"linebreak-style": 0,
			"quotes": [
				"error",
				"single"
			],
			"semi": [
				"error",
				"always"
			],
			"no-console": [
				"off"
			],
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
    }
};