# path-extract

[![NPM version](https://img.shields.io/npm/v/path-extract.svg?style=flat)](https://npmjs.com/package/path-extract) [![NPM downloads](https://img.shields.io/npm/dm/path-extract.svg?style=flat)](https://npmjs.com/package/path-extract) [![Build Status](https://img.shields.io/circleci/project/egoist/path-extract/master.svg?style=flat)](https://circleci.com/gh/egoist/path-extract) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add path-extract
```

## Usage

```js
const extract = require('path-extract')

extract('/user/:username/post/:id', '/user/egoist/post/1')
//=> params:
{
  username: 'egoist',
  id: '1'
}

extract('/user/*', '/user/egoist/post/1')
//=> params:
{
  '*': 'egoist/post/1'
}

extract('/user/:id', '/list/foo')
//=> null
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**path-extract** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/path-extract/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
