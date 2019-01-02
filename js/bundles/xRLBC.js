var pageComponent=webpackJsonppageComponent([65],{340:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),a=r(s),p=o(1),c=r(p);o(4),o(5),o(3),o(7),o(2),o(8),o(6),o(9),o(10),o(11),o(12),o(13),o(14);var u=o(341),d=r(u),f=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),t}(a.default);c.default.register(f,d.default),t.default=f},341:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.xRLBC=void 0;var s,a=o(0),p=r(a),c=o(1),u=r(c);goog.loadModule(function(e){function t(e,t,r){var s=function(){i("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&n(t),l("div"),i("p"),i("img",null,null,"srcset","../../../images/Picker-color-field@2x.jpg 2x","src","../../../images/Picker-color-field.jpg","alt","Color picker field"),l("img"),l("p"),i("p"),n("This pattern has different variations for different use purposes. Please read "),i("a",null,null,"href","#variations"),n("Variations"),l("a"),n(" section to know more about them."),l("p"),i("h3",null,null,"id","usage"),n("Usage"),l("h3"),i("h4"),n("Field"),l("h4"),i("p"),i("img",null,null,"srcset","../../../images/Picker-color-field@2x.jpg 2x","src","../../../images/Picker-color-field.jpg","alt","Color picker field"),l("img"),l("p"),i("p"),n("This field has 2 differnet areas. The leftmost, or color square, allows the use to open the predefined palette panel. The rightmost, or field, allow the user to manually input a color by its hexadecimal code."),l("p"),i("h4"),n("Predefined palette panel"),l("h4"),i("p"),i("img",null,null,"srcset","../../../images/Picker-color-panel-predefined@2x.jpg 2x","src","../../../images/Picker-color-panel-predefined.jpg","alt","Color picker open at predefined panel"),l("img"),l("p"),i("p"),n("Predefined palette panel gives access to a set of predefined colors and the possibility of creating new colors to be defined in the “Custom color panel”."),l("p"),i("p"),n("This panel has a set of predefined color possible to be modified via API. Lexicon provides the color palette shown in the previous image."),l("p"),i("p"),n("The color palette can be as long as needed but we recommend to have a minimum of 7 colors."),l("p"),i("p"),i("img",null,null,"srcset","../../../images/Picker-color-predefined-colors@2x.jpg 2x","src","../../../images/Picker-color-predefined-colors.jpg","alt","3 predefined color picker palette panels with different lengths"),l("img"),l("p"),i("h4"),n("Custom color panel"),l("h4"),i("p"),i("img",null,null,"srcset","../../../images/Picker-color-panel-custom-desc@2x.jpg 2x","src","../../../images/Picker-color-panel-custom-desc.jpg","alt","Date picker with 6 points to describe the different elements. Explained below."),l("img"),l("p"),i("ol"),i("li"),n("Custom colors label"),l("li"),i("li"),n("Color drop button"),i("ul"),i("li"),n("Moves back to Predefined color panel applying the changes"),l("li"),i("li"),n("If changes were made, this action does not apply a selection of the color"),l("li"),l("ul"),l("li"),i("li"),n("Color cells set"),l("li"),i("li"),n("Color definition box"),l("li"),i("li"),n("RGB form set"),l("li"),i("li"),n("Color HUE slider"),l("li"),i("li"),n("Hexadecimal text field"),l("li"),l("ol"),i("p"),n("Inputs 4, 5, 6 and 7 update automatically everytime any of them is modified to show the exact same result."),l("p"),i("h3",null,null,"id","attributes"),n("Attributes"),l("h3"),i("p"),n("Predefined palette panel measures and distances."),l("p"),i("p"),i("img",null,null,"srcset","../../../images/Picker-color-panel-custom-measures@2x.jpg 2x","src","../../../images/Picker-color-panel-custom-measures.jpg","alt","Predefined palette panel measures and distances"),l("img"),l("p"),i("p"),n("Custom panel measures and distances."),l("p"),i("p"),i("img",null,null,"srcset","../../../images/Picker-color-panel-normal-measures@2x.jpg 2x","src","../../../images/Picker-color-panel-normal-measures.jpg","alt","Custom panel measures and distances"),l("img"),l("p"),i("h3",null,null,"id","variations"),n("Variations"),l("h3"),i("h4"),n("Not restricted"),l("h4"),i("p"),n("It provides users a wide possibility for color selection apart from a predefined palette."),l("p"),i("p"),i("img",null,null,"srcset","../../../images/Picker-color-not-restricted@2x.jpg 2x","src","../../../images/Picker-color-not-restricted.jpg","alt","Color picker at its restricted version where only a predefined color palette is shown"),l("img"),l("p"),i("h4"),n("Restricted"),l("h4"),i("p"),n("It only has the color square and a panel with predefined colors used to only offer a restricted set of values."),l("p"),i("p"),i("img",null,null,"srcset","../../../images/Picker-color-restricted@2x.jpg 2x","src","../../../images/Picker-color-restricted.jpg","alt","Color picker at its restricted version where only a predefined color palette is shown"),l("img"),l("p"),i("input",null,null,"type","hidden","value",e.page.title),l("input"),i("input",null,null,"type","hidden","value",e.site.title),l("input")};a(o.$$assignDefaults({content:s},e),null,r)}goog.module("xRLBC.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var r=goog.require("incrementaldom"),i=r.elementOpen,l=r.elementClose,n=(r.elementVoid,r.elementOpenStart,r.elementOpenEnd,r.text),a=(r.attr,u.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="xRLBC.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var d=function(e){function t(){return i(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return n(t,e),t}(p.default);u.default.register(d,s),t.xRLBC=d,t.templates=s,t.default=s}},[340]);