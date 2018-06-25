var pageComponent=webpackJsonppageComponent([7],{218:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),a=n(s),p=o(1),u=n(p);o(4),o(5),o(3),o(2),o(7),o(6),o(8),o(9),o(10),o(11),o(12),o(13);var c=o(219),d=n(c),g=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(a.default);u.default.register(g,d.default),t.default=g},219:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.hudee=void 0;var s,a=o(0),p=n(a),u=o(1),c=n(u);goog.loadModule(function(e){function t(e,t,n){var s=function(){l("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&r(t),i("div"),l("h2",null,null,"id","popovers"),r("Popovers"),i("h2"),l("p"),l("img",null,null,"srcset","../../../images/Popover@2x.jpg 2x","src","../../../images/Popover.jpg","alt","four different popovers with the arrow to the left, or right or top or down"),i("img"),i("p"),l("h3",null,null,"id","usage"),r("Usage"),i("h3"),l("p"),r("Popovers are used together with the question mark icon as an affordance to let the user understand there is something to read that can be useful. Popovers contain information such as help to understand a context."),i("p"),l("p"),l("img",null,null,"srcset","../../../images/PopoverFromIcon@2x.jpg 2x","src","../../../images/PopoverFromIcon.jpg","alt","help icon"),i("img"),i("p"),l("h4"),r("Do's and Don'ts"),i("h4"),l("p"),r("Keep a distance of 8px between a text and the icon so it is easy to recognize and associate."),i("p"),l("div",null,null,"class","row"),l("div",null,null,"class","dodont col-lg"),l("img",null,null,"class","do","src","../../../images/PopoverTitleIconDo.jpg","alt","keep 8 pixel between title and help icon"),i("img"),l("p",null,null,"class","do"),r("Do"),i("p"),i("div"),l("div",null,null,"class","dodont col-lg"),l("img",null,null,"class","dont","src","../../../images/PopoverTitleIconDont.jpg","alt","dont place it nearer than 8 pixels"),i("img"),l("p",null,null,"class","dont"),r("Don't"),i("p"),i("div"),i("div"),l("p"),r("Similar to the previous case happens with sections, in this case the distance is 16px."),i("p"),l("div",null,null,"class","row"),l("div",null,null,"class","dodont col-lg"),l("img",null,null,"class","do","src","../../../images/PopoverSectionIconDo.jpg","alt","keep 16 pixel between section title and help icon"),i("img"),l("p",null,null,"class","do"),r("Do"),i("p"),i("div"),l("div",null,null,"class","dodont col-lg"),l("img",null,null,"class","dont","src","../../../images/PopoverSectionIconDont.jpg","alt","dont place it nearer than 16 pixels"),i("img"),l("p",null,null,"class","dont"),r("Don't"),i("p"),i("div"),i("div"),l("h3",null,null,"id","attributes"),r("Attributes"),i("h3"),l("p"),l("img",null,null,"srcset","../../../images/PopoverMetrics@2x.jpg 2x","src","../../../images/PopoverMetrics.jpg","alt","popover metrics"),i("img"),i("p"),l("h2",null,null,"id","tooltips"),r("Tooltips"),i("h2"),l("p"),r("Tooltips are brief pieces of information that appear on hover state over an element to clarify the meaning or use of an interaction element for the user."),i("p"),l("p"),l("img",null,null,"srcset","../../../images/Tooltip@2x.jpg 2x","src","../../../images/Tooltip.jpg","alt","the four different positions of a tooltip arrow in a tooltip, 4 tooltip cases"),i("img"),i("p"),l("h3",null,null,"id","usage-1"),r("Usage"),i("h3"),l("ul"),l("li"),r("Tooltips are used with icon buttons to help understanding the metaphor they transmit."),i("li"),l("li"),r("They can be also used with links or images."),i("li"),l("li"),r("Tooltips are thought to contain few text. Lexicon recommends a maximum of 280 characters. In case your description is longer, please use a popover."),i("li"),l("li"),r("The tooltip appears on hover state and disappears when hover ends. This pattern does not exist in mobile a hover is not a possible state."),i("li"),l("li"),r("Please make a right use of the arrow positioning as it could drive to misunderstandings when it doesn’t point to the correct interface element."),i("li"),l("li"),r("When possible, try to not overlap other interaction elements in the same component."),i("li"),i("ul"),l("h3",null,null,"id","attributes-1"),r("Attributes"),i("h3"),l("p"),l("img",null,null,"srcset","../../../images/TooltipMetrics@2x.jpg 2x","src","../../../images/TooltipMetrics.jpg","alt","tootip metrics"),i("img"),i("p"),l("input",null,null,"type","hidden","value",e.page.title),i("input"),l("input",null,null,"type","hidden","value",e.site.title),i("input")};a(o.$$assignDefaults({content:s},e),null,n)}goog.module("hudee.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),l=n.elementOpen,i=n.elementClose,r=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),a=(n.attr,c.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="hudee.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var d=function(e){function t(){return l(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(p.default);c.default.register(d,s),t.hudee=d,t.templates=s,t.default=s}},[218]);