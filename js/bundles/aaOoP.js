var pageComponent=webpackJsonppageComponent([66],{324:function(e,t,l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=l(0),s=o(r),u=l(1),p=o(u);l(4),l(5),l(3),l(7),l(2),l(8),l(6),l(9),l(10),l(11),l(12),l(13),l(14);var d=l(325),c=o(d),f=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);p.default.register(f,c.default),t.default=f},325:function(e,t,l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.aaOoP=void 0;var r,s=l(0),u=o(s),p=l(1),d=o(p);goog.loadModule(function(e){function t(e,t,o){var r=function(){n("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&a(t),i("div"),n("h3",null,null,"id","partial-validation"),a("Partial validation"),i("h3"),n("p"),a("This type of validation is done even if the form is not complety full and without the need of submitting the form."),i("p"),n("h4"),a("Inline validation"),i("h4"),n("p"),a("Forms have inline validation. All "),n("a",null,null,"href","./text_input.hmtl"),a("form fields"),i("a"),a(" that can be checked against a set of rules while filling them must show success or error state to the user."),i("p"),n("p"),n("img",null,null,"srcset","../../../images/InputHelpTextError@2x.jpg 2x","src","../../../images/InputHelpTextError.jpg","alt","default error state"),i("img"),i("p"),n("h4"),a("At least one field required"),i("h4"),n("p"),a("It can be the case that inside a form or a fieldset only one of the input fields is required without a concrete decision on which of them must be required. In that case:"),i("p"),n("ol"),n("li"),n("p"),a("Set mandatory mark in the fieldset title."),i("p"),i("li"),n("li"),n("p"),a('It is recommended to include a short help text below the title. "Please enter at least one of the following fields."'),i("p"),i("li"),n("li"),n("p"),a("All fields must be marked with the validation color as it corresponds."),i("p"),n("ol"),n("li"),a("The only validation message is shown for just one (better the first) input in the fields group. A good help message allows the user identifying the error and how to solve it."),i("li"),i("ol"),n("p"),n("img",null,null,"srcset","../../../images/FormAtLeastOneField@2x.jpg 2x","src","../../../images/FormAtLeastOneField.jpg","alt","Form At Least One Field"),i("img"),i("p"),n("ol",null,null,"start","2"),n("li"),a("Once the validation conditions are met, the alert message disappears."),i("li"),i("ol"),n("p"),n("img",null,null,"srcset","../../../images/FormAtLeastOneFieldValidation@2x.jpg 2x","src","../../../images/FormAtLeastOneFieldValidation.jpg","alt","Form At Least One Field Validation"),i("img"),i("p"),n("ol",null,null,"start","3"),n("li"),a("Losing focus triggers validation unless one field in the group field is focused."),i("li"),i("ol"),n("p"),n("img",null,null,"srcset","../../../images/FormAtLeastOneFieldSuccess@2x.jpg 2x","src","../../../images/FormAtLeastOneFieldSuccess.jpg","alt","Form At Least One Field Validation"),i("img"),i("p"),i("li"),i("ol"),n("h3",null,null,"id","full-validation"),a("Full validation"),i("h3"),n("p"),a('Forms are validated on submit action through the "Save" action. When a form is completely validated it will first do the partial validation of all mandatory fields. If this is successful, a service will be called.'),i("p"),n("p"),a("In this section we focus on the return of that service call, that we reflect as an "),n("a",null,null,"href","../alerts.html"),a("alert embedded"),i("a"),a("."),i("p"),n("p"),n("img",null,null,"srcset","../../../images/AlertEmbeddedExample@2x.jpg 2x","src","../../../images/AlertEmbeddedExample.jpg","alt","push alert example. Placed right below the last horizontal navigation label"),i("img"),i("p"),n("input",null,null,"type","hidden","value",e.page.title),i("input"),n("input",null,null,"type","hidden","value",e.site.title),i("input")};s(l.$$assignDefaults({content:r},e),null,o)}goog.module("aaOoP.incrementaldom");var l=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),n=o.elementOpen,i=o.elementClose,a=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),s=(o.attr,d.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="aaOoP.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=r=e,e});var c=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(u.default);d.default.register(c,r),t.aaOoP=c,t.templates=r,t.default=r}},[324]);