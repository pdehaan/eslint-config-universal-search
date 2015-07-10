# eslint-config-universal-search

> ESLint shareable config for Universal Search.

## Installation:

```sh
$ npm i eslint eslint-config-universal-search -D
```

Then in your package.json file, add a custom script to invoke ESLint against whatever files you want linted:
```js
"scripts": {
  "lint": "eslint ."
}
```

## Usage:

Create an .eslintrc file and extend the custom `universal-search` shared config:

```yaml
extends: universal-search

rules:
  consistent-return: 0
  no-console: 0
```
&mdash; via [**universal-search-addon** .eslintrc](https://github.com/mozilla/universal-search-addon/blob/master/.eslintrc)


Or if you're using the [ES6 **babel-eslint**](https://github.com/babel/babel-eslint) parser:

```yaml
extends: universal-search

parser: babel-eslint

rules:
  no-console: 0
```
&mdash; via [**mozilla/universal-search-content** .eslintrc](https://github.com/mozilla/universal-search-content/blob/master/.eslintrc)
