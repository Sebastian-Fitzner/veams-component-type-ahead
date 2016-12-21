### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import
import TypeAhead from './modules/type-ahead/views/type-ahead-view';
// @INSERT :: END

// @INSERT :: START @tag: js-self-contained-import //
import TypeAhead from '../templating/partials/utilities/type-ahead/js/views/type-ahead-view';
// @INSERT :: END //
```

#### Initializing
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