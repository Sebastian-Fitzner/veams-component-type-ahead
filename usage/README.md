# Type Ahead

This component is based on the blueprint of Veams-Components.

## Usage

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import 
import TypeAhead from './modules/type-ahead/type-ahead';
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
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3  
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
