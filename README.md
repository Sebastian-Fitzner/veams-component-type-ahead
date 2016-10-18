# Type Ahead

This component is based on the blueprint of Veams-Components.

## Version
Latest version is ```v3.0.0```

### JavaScript
- `Veams-JS >= v4.0.0`

## Usage

### Options:

#### url
`Type: string` | `Default: false`

Url to fetch auto suggest data from

#### appendTarget
`Type: string` | `Default: false`

Append list to another element (default: element for which type ahead was initialized)

#### contextClass
`Type: string` | `Default: 'search'`

Context class for type ahead instance

#### modifierClass
`Type: string` | `Default: false`

Modifier class for type ahead instance

#### threshold
`Type: number` | `Default: 4`

Minimum length of user input needed before auto suggest data can be fetched

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import
import TypeAhead from './modules/type-ahead/views/type-ahead-view';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 
/**
 * Init TypeAhead
 */
Helpers.loadModule({
	el: '[data-js-module="type-ahead"]',
	module: TypeAhead,
	context: context,
	render: false
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3  
/**
 * Init TypeAhead
 */
Helpers.loadModule({
	domName: 'type-ahead',
	module: TypeAhead,
	context: context,
	render: false
});
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events TypeAhead
 */
EVENTS.typeAhead = {
	search: 'typeAhead:search'
};
// @INSERT :: END
```
