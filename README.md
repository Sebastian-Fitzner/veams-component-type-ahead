<p align='right'>
    <a href='https://badge.fury.io/bo/veams-utility-type-ahead'><img src='https://badge.fury.io/bo/veams-utility-type-ahead.svg' alt='Bower version' height='20'></a>
    <a href='https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge'><img src='https://badges.gitter.im/Sebastian-Fitzner/Veams.svg' alt='Gitter Chat' /></a>
</p>

# TypeAhead

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

## Fields

### u-type-ahead.hbs

#### Settings

- settings.typeAheadClasses {`String`} - _Modifier classes._
- settings.typeAheadJsOptions {`Object`} - _Options object which gets stringified._
- settings.height {`Number`} - _Height of suggestion list._

-------------

## JavaScript Options

The module gives you the possibility to override default options:

- currentValueClass {`String`} ['type-ahead__current-value'] - _Current value class._
- inputSel {`String`} [[data-js-item="type-ahead__input"]] - _Element selector for input._
- minLength {`Number`} [2] - _Minimal length of input value before suggestions will be shown._
- minLoadTime {`Number`} [0] - _Minimal time that must have passed before new request is sent to server._
- suggestionItemSel {`String`} [[data-js-item="suggestion-item"]] - _Element selector for suggestion item._
- suggestionItemSel {`String`} [[data-js-item="type-ahead__list"]] - _Element selector for type-ahead list._
- templates.tplSuggestionsA11y {`String`} ['SUGGESTIONS__A11Y'] - _Template name for suggestion (list item)._
- templates.tplSuggestionsOpt {`String`} ['SUGGESTIONS__OPTIONS'] - _Template name for option._