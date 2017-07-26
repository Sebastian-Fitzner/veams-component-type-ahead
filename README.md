<p align='right'>
    <a href='https://badge.fury.io/bo/veams-utility-type-ahead'><img src='https://badge.fury.io/bo/veams-utility-type-ahead.svg' alt='Bower version' height='20'></a>
    <a href='https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge'><img src='https://badges.gitter.im/Sebastian-Fitzner/Veams.svg' alt='Gitter Chat' /></a>
</p>

# Type Ahead

This utility offers a type-ahead function that can be applied to input elements.

It generates a list with keywords fetched from a server.

-----------

## Requirements
- `Veams >= v5.0.0` - Veams Framework.

-----------

## Installation

### Installation with Veams

`veams install vu type-ahead`

### Installation with Bower

`bower install veams-utility-type-ahead --save`

-------------

## JavaScript Options

The module gives you the possibility to override default options:

- appendTarget {`String`} [null] - _Append list to another element instead of element for which type ahead was initialized._
- contextClass {`String`} [null] - _Context class for the generated list._
- deleteBtn {`String`} ['[data-js-atom="delete-btn"]'] - _Delete button._
- form {`String`} ['[data-js-atom="form"]'] - _Surrounding form._
- url {`String`} [null] - _Url to fetch auto suggest data from._
- inputField {`String`} ['[data-js-atom="input-field"]'] - _Input field for which type ahead is triggered._
- item {`String`} ['[data-js-atom="type-ahead-item"]'] - _Single item._
- itemClass {`String`} ['type-ahead__item'] - _Item class._
- list {`String`} ['[data-js-atom="type-ahead-list"]'] - _Item list._
- modifierClass {`String`} [null] - _Modifier classes for the generated list._
- template {`Function`} [Template['TYPEAHEAD']] - _Precompiled template function._
- threshold {`Number`} [4] - Minimum count of characters needed to trigger type ahead list._