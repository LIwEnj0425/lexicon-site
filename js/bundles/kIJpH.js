var pageComponent=webpackJsonppageComponent([67],{340:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),s=i(a),u=l(1),p=i(u);l(4),l(5),l(3),l(7),l(2),l(8),l(6),l(9),l(10),l(11),l(12),l(13),l(14);var d=l(341),c=i(d),f=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(s.default);p.default.register(f,c.default),t.default=f},341:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.kIJpH=void 0;var a,s=l(0),u=i(s),p=l(1),d=i(p);goog.loadModule(function(e){function t(e,t,i){var a=function(){n("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&r(t),o("div"),n("h3",null,null,"id","partial-validation"),r("Partial validation"),o("h3"),n("p"),r("This type of validation occurs on the fly, while the user fills in the form. It doesn't require the user to fill in the entire form or the form to be submitted to see it."),o("p"),n("h4"),r("Inline validation"),o("h4"),n("p"),r("Forms have inline validation. All "),n("a",null,null,"href","./text_input.hmtl"),r("form fields"),o("a"),r(" that can be checked against a set of rules while filling them in must show success or error state to the user."),o("p"),n("p"),n("img",null,null,"srcset","../../../images/InputHelpTextError@2x.jpg 2x","src","../../../images/InputHelpTextError.jpg","alt","default error state"),o("img"),o("p"),n("h4"),r("At least one field required"),o("h4"),n("p"),r("There may be a case when only one indeterminate field is required in a form or fieldset. In this case, follow these guidelines:"),o("p"),n("ol"),n("li"),n("p"),r("Set a mandatory mark in the fieldset title."),o("p"),o("li"),n("li"),n("p"),r('It is recommended to include a short help text below the title. Ex: "Please enter at least one of the following fields."'),o("p"),o("li"),n("li"),n("p"),r("All fields must be marked with the corresponding validation color."),o("p"),n("ol"),n("li"),r("Only one validation message is shown for one of the input fields in the group, preferably the first. A good help message specifies the error to the user and explains how to solve it."),o("li"),o("ol"),n("p"),n("img",null,null,"srcset","../../../images/FormAtLeastOneField@2x.jpg 2x","src","../../../images/FormAtLeastOneField.jpg","alt","Form At Least One Field"),o("img"),o("p"),n("ol",null,null,"start","2"),n("li"),r("Once the validation conditions are met, the alert message disappears."),o("li"),o("ol"),n("p"),n("img",null,null,"srcset","../../../images/FormAtLeastOneFieldValidation@2x.jpg 2x","src","../../../images/FormAtLeastOneFieldValidation.jpg","alt","Form At Least One Field Validation"),o("img"),o("p"),n("ol",null,null,"start","3"),n("li"),r("Losing focus triggers validation, unless a field in the group is already focused."),o("li"),o("ol"),n("p"),n("img",null,null,"srcset","../../../images/FormAtLeastOneFieldSuccess@2x.jpg 2x","src","../../../images/FormAtLeastOneFieldSuccess.jpg","alt","Form At Least One Field Validation"),o("img"),o("p"),o("li"),o("ol"),n("h3",null,null,"id","full-validation"),r("Full validation"),o("h3"),n("p"),r('Forms are validated when they are submitted via the "Save" action. When a form is completely validated, it first runs partial validation on all of the mandatory fields. If this is successful, a service is called.'),o("p"),n("p"),r("The example below communicates the return of that service call with an "),n("a",null,null,"href","../alerts.html"),r("embedded alert"),o("a"),r("."),o("p"),n("p"),n("img",null,null,"srcset","../../../images/AlertEmbeddedExample@2x.jpg 2x","src","../../../images/AlertEmbeddedExample.jpg","alt","push alert example. Placed right below the last horizontal navigation label"),o("img"),o("p"),n("input",null,null,"type","hidden","value",e.page.title),o("input"),n("input",null,null,"type","hidden","value",e.site.title),o("input")};s(l.$$assignDefaults({content:a},e),null,i)}goog.module("kIJpH.incrementaldom");var l=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var i=goog.require("incrementaldom"),n=i.elementOpen,o=i.elementClose,r=(i.elementVoid,i.elementOpenStart,i.elementOpenEnd,i.text),s=(i.attr,d.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="kIJpH.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=a=e,e});var c=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(u.default);d.default.register(c,a),t.kIJpH=c,t.templates=a,t.default=a}},[340]);