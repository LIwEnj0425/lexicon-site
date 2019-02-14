var pageComponent=webpackJsonppageComponent([38],{214:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),s=a(l),g=n(1),d=a(g);n(4),n(5),n(3),n(7),n(2),n(8),n(6),n(9),n(10),n(11),n(12),n(13),n(14);var p=n(215),u=a(p),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);d.default.register(c,u.default),t.default=c},215:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.LZoWp=void 0;var l,s=n(0),g=a(s),d=n(1),p=a(d);goog.loadModule(function(e){function t(e,t,a){var l=function(){r("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),o("div"),r("h3",null,null,"id","events"),i("Events"),o("h3"),r("p"),i("Drag and drop interaction is composed of a series of six events:"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/DnDEvents@2x.jpg 2x","src","../../../images/DnDEvents.jpg","alt","the 6 drag and drop events"),o("img"),o("p"),r("ul"),r("li"),r("strong"),i("DragStart:"),o("strong"),i(" An element starts to drag when it is clicked or Tapped on while holding and Moving the pointer."),o("li"),r("li"),r("strong"),i("Drag:"),o("strong"),i(" The element is being dragged."),o("li"),r("li"),r("strong"),i("DragLeave:"),o("strong"),i(" The element leaves its original position or a valid target."),o("li"),r("li"),r("strong"),i("DragEnter:"),o("strong"),i(" The element enters a valid drop target."),o("li"),r("li"),r("strong"),i("Drop:"),o("strong"),i(" The element is released."),o("li"),r("li"),r("strong"),i("DragEnd:"),o("strong"),i(" The element has completed the drag and drop interaction. It is successful if it matches the conditions for a drop target."),o("li"),o("ul"),r("h3",null,null,"id","actors"),i("Actors"),o("h3"),r("p"),i("The drag and drop interaction involves the following actors:"),o("p"),r("h4"),i("Pointer"),o("h4"),r("p"),i("Although a standard element, you must consider the type of mouse pointer you use during dragging and dropping. Please follow these guidelines:"),o("p"),r("table"),r("thead"),r("tr"),r("th"),i("Type"),o("th"),r("th"),i("Usage"),o("th"),o("tr"),o("thead"),r("tbody"),r("tr"),r("td"),r("img",null,null,"srcset","../../../images/CursorPointer@2x.jpg 2x","src","../../../images/CursorPointer.jpg","alt","cursor pointer"),o("img"),o("td"),r("td"),r("strong"),i("Default:"),o("strong"),i(" the standard mouse cursor."),o("td"),o("tr"),r("tr"),r("td"),r("img",null,null,"srcset","../../../images/CursorHandOpen@2x.jpg 2x","src","../../../images/CursorHandOpen.jpg","alt","cursor hand open"),o("img"),o("td"),r("td"),r("strong"),i("Open hand:"),o("strong"),i(" used during the hover state of an element when it is possible to move it around, but selection is not allowed (e.g. a map or a zoomed image)"),o("td"),o("tr"),r("tr"),r("td"),r("img",null,null,"srcset","../../../images/CursorHandClosed@2x.jpg 2x","src","../../../images/CursorHandClosed.jpg","alt","cursor hand closed"),o("img"),o("td"),r("td"),r("strong"),i("Dragging:"),o("strong"),i(" always required as feedback for the dragging action when using a mouse"),o("td"),o("tr"),o("tbody"),o("table"),r("h4"),i("Handler"),o("h4"),r("p"),i("It can be hard to distinguish a draggable element from a standard element in the interface. To properly communicate that an element is draggable to the user, we recommend that you use the drag-dots icon in the element on hover."),o("p"),r("p"),r("img",null,null,"srcset","../../../images/IconDragDots@2x.jpg 2x","src","../../../images/IconDragDots.jpg","alt","6 dots icon for drag and drop affordance"),o("img"),o("p"),r("p"),i("A good example is a list of draggable items:"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/ListDnD@2x.jpg 2x","src","../../../images/ListDnD.jpg","alt","icon drag dots on the left side of a list item on hover"),o("img"),o("p"),r("h4"),i("Drag Element & Drag Feedback"),o("h4"),r("p"),i("Elements that are draggable must also offer feedback when they are being dragged. There are a couple scenarios to consider:"),o("p"),r("p"),r("strong"),i("Scale down the item while dragging a single element"),o("strong"),o("p"),r("p"),i("When dragging a single element, the element must be scaled down to 70% and accompany the cursor as shown in the image below:"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/DnDDragResize@2x.jpg 2x","src","../../../images/DnDDragResize.jpg","alt","a resize of the original drag element"),o("img"),o("p"),r("p"),r("strong"),i("Multiple elements dragging"),o("strong"),o("p"),r("p"),i("When dragging multiple elements, you may need to indicate how many elements are being dragged. For that we offer a badge to reflect this amount. Please remember the following while dragging multiple elements:"),o("p"),r("ul"),r("li"),i("The badge must always be placed at the top-right from the cursor."),o("li"),r("li"),i("Multiple selections are previewed together while grabbing the elements and moving them."),o("li"),o("ul"),r("p"),r("img",null,null,"srcset","../../../images/DnDDragMultiple@2x.jpg 2x","src","../../../images/DnDDragMultiple.jpg","alt","a badge appearing with the amount of elements being dragged"),o("img"),o("p"),r("h4"),i("Drag Source"),o("h4"),r("p"),i("The drag source indicates the original position of the dragged element. It is only visible when the element is being dragged away from its original position (event: DragLeave)."),o("p"),r("p"),i("There are two variants for showing feedback in the dragged element's source:"),o("p"),r("ul"),r("li"),r("p"),i("Default: setting its opacity to 40%, as shown in the image below."),o("p"),r("p"),r("img",null,null,"srcset","../../../images/DnDDragSourceOpacity@2x.jpg 2x","src","../../../images/DnDDragSourceOpacity.jpg","alt","the drag source gets an opacity of 40%"),o("img"),o("p"),o("li"),r("li"),r("p"),i("Simplified placeholder: For cases that require a simpler approach, you can use a placeholder that is the same size as the element. Transform the element's background color to #272833 with a 4% opacity. This may require modification depending on the use case."),o("p"),r("p"),r("img",null,null,"srcset","../../../images/DnDDragSourcePlaceholder@2x.jpg 2x","src","../../../images/DnDDragSourcePlaceholder.jpg","alt","the drag source is a grey placeholder"),o("img"),o("p"),o("li"),o("ul"),r("h4"),i("Valid Target"),o("h4"),r("p");i("A valid target is the possible drop area of a dragged element. An element can have multiple valid targets on the same page. A valid target changes appearance, depending on the event:"),o("p"),r("p"),r("strong"),i("Default: No interaction"),o("strong"),o("p"),r("p"),i("A valid target is initially indicated with a grey background and a grey dashed border."),o("p"),r("ul"),r("li"),i("This can be used in scenarios where files need to be dragged."),o("li"),r("li"),i("Please use text inside to valid target to improve readability."),o("li"),o("ul"),r("p"),r("img",null,null,"srcset","../../../images/DnDValidTargetDefault@2x.jpg 2x","src","../../../images/DnDValidTargetDefault.jpg","alt","valid target default gray area with dotted border"),o("img"),o("p"),r("p"),r("strong"),i("DragEnter: Dragging Interaction"),o("strong"),o("p"),r("p"),i("Dragging an element into a valid target area activates the target area. When a target is activated, the border line style must remain the same and it must be turned blue, as shown in the image below:"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/DnDValidTargetActive@2x.jpg 2x","src","../../../images/DnDValidTargetActive.jpg","alt","valid target active area "),o("img"),o("p"),r("p"),r("strong"),i("Drop and DropEnd: Dropping Result"),o("strong"),o("p"),r("p"),i("After dropping an element inside a valid target, the Drop and DropEnd event is triggered."),o("p"),r("p"),r("img",null,null,"srcset","../../../images/DnDDragMultiple@2x.jpg 2x","src","../../../images/DnDDragMultiple.jpg","alt","a badge appearing with the amount of elements draggind"),o("img"),o("p"),r("p"),r("strong"),i("Cards sorting example"),o("strong"),o("p"),r("p"),i("You can use the Drop/DragEnd event to magnetize the dragged element to the target. This improves the accuracy of the drag and drop action when the element changes position in the same page."),o("p"),r("p"),r("img",null,null,"src","../../../images/DnDCards.gif","alt","drag and drop to move cards, replace and move"),o("img"),o("p"),r("p"),r("strong"),i("Moving elements to a folder example"),o("strong"),o("p"),r("p"),i("Moving an element into another element to change its location (like a folder) will trigger an animation with a border that expands and hides. This indicates that the dropped element was moved. We also recommend that you show a success alert after the action is done. This will communicate that the elements were moved correctly and also give the user the possibility to undo the action, via a link."),o("p"),r("p"),r("img",null,null,"src","../../../images/DnDPlaceInside.gif","alt","drag and drop to move elements inside a folder"),o("img"),o("p"),r("p"),r("strong"),i("Sorting list items example"),o("strong"),o("p"),r("p"),i("Another way to define a valid target is to use a blue line of 4px between the elements. We recommend that you use fluid animations to provide a more natural feedback of moving elements."),o("p"),r("p"),r("img",null,null,"src","../../../images/DnDSort.gif","alt","sorting elements by the use of drag and drop"),o("img"),o("p"),r("input",null,null,"type","hidden","value",e.page.title),o("input"),r("input",null,null,"type","hidden","value",e.site.title),o("input")};s(n.$$assignDefaults({content:l},e),null,a)}goog.module("LZoWp.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var a=goog.require("incrementaldom"),r=a.elementOpen,o=a.elementClose,i=(a.elementVoid,a.elementOpenStart,a.elementOpenEnd,a.text),s=(a.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="LZoWp.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(g.default);p.default.register(u,l),t.LZoWp=u,t.templates=l,t.default=l}},[214]);