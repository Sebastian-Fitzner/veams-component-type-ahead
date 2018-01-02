/**
 * This module offers type-ahead functionality for input fields.
 *
 * @module TypeAhead
 * @version v5.1.0
 *
 * @author José Medina
 */

// Imports
import { Veams } from 'app.veams';
import VeamsComponent from 'veams/lib/common/component';
import AjaxService from 'veams/lib/services/http';
import Toggler from '../../../components/toggler/scripts/toggler';

// Variables
const $ = Veams.$;

class TypeAhead extends VeamsComponent {

	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			currentValueClass: "type-ahead__current-value",
			inputSel: '[data-js-item="type-ahead__input"]',
			minLength: 2,
			minLoadTime: 0,
			suggestionItemSel: '[data-js-item="suggestion-item"]',
			suggestionListSel: '[data-js-item="type-ahead__list"]',
			templates: {
				tplSuggestionsA11y: "SUGGESTIONS__A11Y",
				tplSuggestionsOpt: "SUGGESTIONS__OPTIONS"
			}
		};

		super(obj, options);
	}


	/**
	 * Get module information
	 */
	static get info() {
		return {
			version: '5.1.0',
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}


	/**
	 * Subscribe handling
	 */
	get subscribe() {
		return {}
	}


	/**
	 * Initialize the view
	 *
	 */
	initialize() {
		this.$suggestionList = this.$el.find(this.options.suggestionListSel);
		this.$input = this.$el.find(this.options.inputSel);
		this.currentValue = this.$input.val();

		this.suggestionList = new Toggler({
			el: this.$suggestionList[0],
			namespace: 'Toggler',
			appInstance: Veams
		});

		this.suggestionList.close();

		this.service = new AjaxService(this.options.serviceOptions);

		this.service.requestDidOpen = (request, obj) => {
			if (this.options.serviceOptions.contentType) {
				request.setRequestHeader("Content-type", this.options.serviceOptions.contentType);
			}
			request.setRequestHeader("X-CSRFToken", this.options.serviceOptions["X-CSRFToken"]);
		}
	}


	/**
	 * Bind Vent events for the resize events and the load more button
	 */
	bindEvents() {
		this.$input.on(Veams.EVENTS.keyup, this.onKeyup.bind(this));
		$(window).on(Veams.EVENTS.keydown, this.onWindowKeydown.bind(this));
		this.$input.on(Veams.EVENTS.blur, this.onItemBlur.bind(this));
	}


	/**
	 * Set focus when needed
	 *
	 * @param {Object} obj - CTA event object
	 */
	setFocus(obj) {

		if (obj.isActive) {

			setTimeout(() => {
				this.$input[0].focus();
			}, 1000);
		}
	}


	/**
	 * Handle window key down event to control the module with arrow keys, enter and escape
	 *
	 * @param {Object} event - Event object
	 */
	onWindowKeydown(event) {
		if (this.el.contains(event.target)) {
			let getFocusableElements = () => {
				return Array.prototype.slice.call($("a, input", this.$el));
			};
			let focusableEls, index;

			switch (event.keyCode) {
				case 38:
					event.preventDefault();
					focusableEls = getFocusableElements();
					index = focusableEls.indexOf(document.activeElement);

					if (index > -1 && index - 1 >= 0) {
						focusableEls[index - 1].focus();
					}
					break;
				case 40:
					event.preventDefault();
					focusableEls = getFocusableElements();
					index = focusableEls.indexOf(document.activeElement);

					if (index > -1 && index + 1 < focusableEls.length) {
						focusableEls[index + 1].focus();
					}
					break;
				case 27:
					this.closeSuggestionList();
					break;
				case 13:
					this.triggerChosenSuggestion(event.target);
					this.closeSuggestionList();
					break;
			}
		}
	}


	/**
	 * Handle input key up event to control the module with arrow keys, enter and escape
	 *
	 * @param {Object} event - Event object
	 */
	onKeyup(event) {
		switch (event.keyCode) {
			case 38:
			case 40:
			case 27:
			case 13:
				event.preventDefault();
				break;
			default:
				this.currentValue = this.$input.val();
				this.render(this.generateTimeOfRequest());
		}
	}


	/**
	 * Bind filter items events as soon as render occurs
	 *
	 */
	bindItemEvents() {
		this.$suggestionList.find(this.options.suggestionItemSel)
			.on(Veams.EVENTS.touchstart + ' ' + Veams.EVENTS.click, this.onChosenSuggestion.bind(this))
			.on(Veams.EVENTS.blur, this.onItemBlur.bind(this))
			.on(Veams.EVENTS.focus, this.onItemFocus.bind(this))
			.on(Veams.EVENTS.mouseenter, this.onItemMouseEnter.bind(this))
			.on(Veams.EVENTS.mouseleave, this.onItemMouseLeave.bind(this));
	}


	/**
	 * Handle touch and click event
	 *
	 * @param {Object} event - Event object
	 * @param {object} [currentTarget] - Target to which listener was attached (used in VeamsQuery).
	 */
	onChosenSuggestion(event, currentTarget) {
		let target = currentTarget || event.currentTarget;

		event.preventDefault();

		this.triggerChosenSuggestion(target);

		this.closeSuggestionList();
	}


	/**
	 * Handle item focus event
	 *
	 * @param {Object} event - Event object
	 */
	onItemFocus(event) {
		this.$input.val($(event.target).closest(this.options.suggestionItemSel).attr('data-value'));
	}


	/**
	 * Handle item mouse enter event
	 *
	 * @param {Object} event - Event object
	 */
	onItemMouseEnter(event) {
		this.onItemFocus.apply(this, arguments);
	}


	/**
	 * Handle item mouse leave event
	 */
	onItemMouseLeave() {
		this.$input.val(this.currentValue);
	}


	/**
	 * Handle item blur event
	 *
	 * @param {Object} event - Event object
	 */
	onItemBlur(event) {
		this.$input.val(this.currentValue);

		if (!!event.relatedTarget && !this.$suggestionList[0].contains(event.relatedTarget) &&
			event.relatedTarget !== this.$input[0]) {
			this.closeSuggestionList();
		}
	}


	/**
	 * Helper function that looks for the current input value and transmit it
	 *
	 * @param {Object} target - DOM Node
	 */
	triggerChosenSuggestion(target) {
		this.currentValue = $(target).attr('data-value') || $(target).val();
		this.$input.val(this.currentValue);

		this.$el.trigger(Veams.EVENTS.typeAhead.suggestionChoosen, {
			search: this.currentValue
		});
	}


	/**
	 * Render class
	 *
	 * Perform and server request to get the suggestions to a given value
	 *
	 * @param {Number} timeOfRequest - Time of request
	 */
	render(timeOfRequest) {
		if (this.currentValue.length < this.options.minLength || !this.$el[0].contains(document.activeElement)) {
			this.closeSuggestionList();
			return false;
		}

		return new Promise((resolve, reject) => {
			this.service[this.options.serviceOptions.method]({
				data: JSON.stringify({}),
				url: this.options.serviceOptions.url + "?type-ahead=" + this.currentValue
			}).then((data) => {
				setTimeout(() => {
					if (timeOfRequest !== this.timeOfRequest) {
						return false;
					}

					this.$suggestionList.html(Veams.templater.render(this.options.templates.tplSuggestionsA11y,
						this.formatResponseDataHelper(data)));

					this.bindItemEvents();

					this.suggestionList.open();

					resolve();
				}, Math.max(this.options.minLoadTime - (Date.now() - timeOfRequest), 0));
			}, (error) => {
				reject();
				throw new Error("Typeahead render() :: could not resolve server request :: ", error);
			});
		});
	}


	/**
	 * Cache the current timestamp to figure out which was the last request
	 *
	 * If 2 delta time between request is less than minLoadTime, they will be rejected
	 * and the one with the latest timestamp will be sent
	 *
	 * @return {Number} - Time of request
	 */
	generateTimeOfRequest() {
		this.timeOfRequest = Date.now();

		return this.timeOfRequest;
	}


	/**
	 * Data formatter that prepares the data for the template to render
	 *
	 * @param {Object} data - Data to be prepared for rendering
	 * @return {Object} - Prepared data (ready for rendering)
	 */
	formatResponseDataHelper(data) {
		data.suggestions = data.suggestions.map((item) => {
			item.suggestionText = this.getSuggestionTextHelper(item.name);
			item.searchVal = this.currentValue;

			return item;
		});

		return data;
	}


	/**
	 * Data formatter that prepares the data for the template to render
	 *
	 * @param {String} name - Item name
	 * @return {String} - Modified data
	 */
	getSuggestionTextHelper(name) {
		let currentValueCaseInsensitive = new RegExp(this.currentValue, "ig");

		return name.replace(currentValueCaseInsensitive, '<em class="' + this.options.currentValueClass + '">$&</em>');
	}


	/**
	 * Close the suggestion list and empty the list
	 *
	 */
	closeSuggestionList() {
		this.suggestionList.close();
		this.$suggestionList.empty();
	}
}

export default TypeAhead;
