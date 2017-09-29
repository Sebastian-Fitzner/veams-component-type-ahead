## Usage

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

### Include: JavaScript

#### Initializing in Veams V5

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
// @INSERT :: END //
```