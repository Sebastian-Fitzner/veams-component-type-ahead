### Include: Page

``` hbs
{{! @INSERT :: START @id: type-ahead, @tag: utility-partial }}
{{#with type-ahead-bp.variations.default}}
   <div class="u-type-ahead{{#if settings.typeAheadClasses}} {{settings.typeAheadClasses}}{{/if}}"
        data-js-module="type-ahead"{{#if settings.typeAheadJsOptions}}
        data-js-options='{{stringify settings.typeAheadJsOptions}}'{{/if}}>
   	{{! WrapWith START:  }}
   	{{#wrapWith "c-form"}}
   		{{> c-form__input }}
   	{{/wrapWith}}
   	{{! WrapWith END:  }}
   	<ul class="type-ahead__list" role="listbox" data-js-item="type-ahead__list" data-js-height="{{ settings.height }}"></ul>
   </div>
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "utilities/_u-type-ahead";
// @INSERT :: END

// @INSERT :: START @tag: scss-self-contained-import // 
@import "../templating/partials/utilities/type-ahead/scss/_u-type-ahead";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import
import TypeAhead from './modules/type-ahead/js/type-ahead';
// @INSERT :: END

// @INSERT :: START @tag: js-self-contained-import //
import Typeahead from '../templating/mixed/utilities/type-ahead/js/type-ahead';
// @INSERT :: END //
```

#### Initializing
``` js
// @INSERT :: START @tag: js-init-v5 //
 	,
 	// Init TypeAhead
 	{
 		namespace: 'type-ahead',
 		module: TypeAhead
 	}
// @INSERT :: END //
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