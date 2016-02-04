# Type Ahead

This component is based on the blueprint of Veams-Components.

## Usage

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @id: js-import, @tag: component
import TypeAhead from './modules/type-ahead/type-ahead';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @id: js-init-v2, @tag: component
/**
 * Init TypeAhead
 */
Helpers.loadModule({
	el: '[data-js-module="type-ahead"]',
	module: TypeAhead,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @id: js-init-v3, @tag: component
/**
 * Init Form
 */
Helpers.loadModule({
	domName: 'type-ahead',
	module: TypeAhead,
	context: context
});
// @INSERT :: END
```
