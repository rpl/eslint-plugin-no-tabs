ESLint no-tabs checks
========================================

[![Build Status](https://travis-ci.org/rpl/eslint-plugin-no-tabs.svg?branch=master)](https://travis-ci.org/rpl/eslint-plugin-no-tabs)
[![NPM version](https://img.shields.io/npm/v/eslint-plugin-no-tabs.svg)](https://www.npmjs.org/package/eslint-plugin-no-tabs)

Using this [eslint](http://eslint.org/) plugin you can prevents tabs whitespaces in source code.

install:

```bash
npm install eslint-plugin-no-tabs --save
```

Then update `.eslintrc` from instruction below.


no-tabs/at-all rule
-----------


Config example (yaml):

```yaml
# acivate plugin

plugins:
  - no-tabs

# enable rules

rules:
  no-tabs/at-all: 2

```

Authors
-------

- Luca Greco [github/rpl](https://github.com/rpl)

Barely based on [eslint-plugin-noveca](https://github.com/nodeca/eslint-plugin-nodeca) and the standard eslint rules *no-mixed-spaces-and-tabs*.

License
-------

[MIT](https://github.com/rpl/eslint-plugin-no-tabs/blob/master/LICENSE)
