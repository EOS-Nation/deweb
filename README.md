# `deweb`

[![Build Status](https://travis-ci.org/EOS-Nation/deweb.svg?branch=master)](https://travis-ci.org/EOS-Nation/deweb)
[![npm version](https://badge.fury.io/js/deweb.svg)](https://badge.fury.io/js/deweb)
[![Try on RunKit](https://badge.runkitcdn.com/deweb.svg)](https://npm.runkit.com/deweb)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/EOS-Nation/deweb/master/LICENSE)

> **deWeb** common library used for Typescript

## Installation

Using Yarn:

```bash
yarn add deweb
```

or using NPM:

```bash
npm install --save deweb
```

## Quick Start

```ts
import { stringToHash } from "deweb"

const id = stringToHash("deniscarrier@deweb.eosnation.io");
//=> 8945370747656800747
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [stringToHash](#stringtohash)
    -   [Parameters](#parameters)
    -   [Examples](#examples)

### stringToHash

String to Id

#### Parameters

-   `str` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** string account name

#### Examples

```javascript
import { string_to_id } from "deweb"

const id = stringToHash("deniscarrier@deweb.eosnation.io");
//=> "8945370747656800747"
```

Returns **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** uint64 account id
