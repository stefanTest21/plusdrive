(window.blocksyJsonP=window.blocksyJsonP||[]).push([[3],{10:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return o}));var o=function(t){return t&&r(t.querySelectorAll('[class*="ct-image-container"].ct-lazy')).map((function(t){t.querySelector("img")&&(Array.from(t.parentNode.querySelectorAll('[class*="ct-image-container"] > img')).map((function(t){t.setAttribute("src",t.dataset.ctLazy),t.dataset.ctLazySet&&t.setAttribute("srcset",t.dataset.ctLazySet)})),t.classList.remove("ct-lazy"),t.classList.add("ct-lazy-loaded"))}))}},37:function(t,e,n){"use strict";n.r(e),n.d(e,"mount",(function(){return k})),n.d(e,"mountSimpleGallery",(function(){return R}));var r=n(1),i=n.n(r);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(t,e){return"vertical"===e.options.orientation?t.top+t.height:t.right},h=function(t,e){return"vertical"===e.options.orientation?t.top:t.left},m=function(t,e){return"vertical"===e.options.orientation?t.height:t.width},y=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"left",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"container",i=t.sliderContainer,o=0;if("left"===n){var a=f(i.children).reduce((function(e,n){var r=h(v(e,t.options.nullifyTransformEl),t);return h(v(n,t.options.nullifyTransformEl),t)<r?n:e}),{getBoundingClientRect:function(){return{left:1e11,bottom:1e11,top:1e11,right:1e11}}});h(v(a,t.options.nullifyTransformEl),t)>("container"===r?h(v(i,t.options.nullifyTransformEl),t):0)&&(o=-1*m(v(i.firstElementChild,t.options.nullifyTransformEl),t),e=e===i.children.length?1:e+1)}if("right"===n){var s=f(i.children).reduce((function(e,n){return p(v(e,t.options.nullifyTransformEl),t)>p(v(n,t.options.nullifyTransformEl),t)?e:n}),{getBoundingClientRect:function(){return{left:-1,bottom:-9999999999999,top:-1,right:-1}}});p(v(s,t.options.nullifyTransformEl),t)<("container"===r?p(v(i,t.options.nullifyTransformEl),t):window.innerWidth)&&(o=m(v(i.firstElementChild,t.options.nullifyTransformEl),t),e=1===e?i.children.length:e-1)}return{relativeDelta:o,elementsOnBehind:e}};function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return null;if(t.getBoundingClientRect&&!t.firstElementChild)return t.getBoundingClientRect();e||(e=t);var n=t.getBoundingClientRect(),r=n.top,i=n.left,o=n.right,a=n.width,s=n.height,l=window.getComputedStyle(e).transform.split(/\(|,|\)/).slice(1,-1).map((function(t){return parseFloat(t)}));if(6!=l.length)return t.getBoundingClientRect();var u=l,f=u[0]*u[3]-u[1]*u[2];return{width:a/u[0],height:s/u[3],left:(i*u[3]-r*u[2]+u[2]*u[5]-u[4]*u[3])/f,right:(o*u[3]-r*u[2]+u[2]*u[5]-u[4]*u[3])/f,top:(-i*u[1]+r*u[0]+u[4]*u[1]-u[0]*u[5])/f}}var g=function(t){if(t.options.pillsContainerSelector&&(t.options.pillsContainerSelector.querySelector(".active")&&t.options.pillsContainerSelector.querySelector(".active").classList.remove("active"),t.options.pillsContainerSelector.children[t.state.previousCurrentIndex].classList.add("active"),t.options.pillsFlexyInstance)){var e=t.options.pillsFlexyInstance.flexy,n=f(t.options.pillsContainerSelector.children),r=f(e.sliderContainer.children).indexOf(f(e.sliderContainer.children).reduce((function(t,n){var r=h(v(t,e.options.nullifyTransformEl),e),i=h(v(n,e.options.nullifyTransformEl),e);return Math.abs(i-h(v(e.sliderContainer,e.options.nullifyTransformEl),e))<Math.abs(r-h(v(e.sliderContainer,e.options.nullifyTransformEl),e))?n:t}),{getBoundingClientRect:function(){return{left:1e11,top:1e11}}})),i=0;"horizontal"===e.options.orientation?(t.state.previousCurrentIndex>2&&(i=t.state.previousCurrentIndex-2),n.length-1-t.state.previousCurrentIndex<3&&(i=n.length-5)):i=t.state.previousCurrentIndex;var o=Math.abs(i-r),a=Math.min(r,i)+(n.length-Math.max(r,i)),s=Math.min(o,a)*(a>=o?r>i?1:-1:r>i?-1:1),u=100*Math.round(100*e.state.positionX/m(v(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)/100)*m(v(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)/100+m(v(e.sliderContainer.firstElementChild,e.options.nullifyTransformEl),e)*s;e.state=l(l({},e.state),{},{positionTarget:u})}},C=function(t){if(t.options.pillsContainerSelector){var e=f(t.options.pillsContainerSelector.children);e.map((function(n){return n.addEventListener("click",(function(r){r.preventDefault();var i=f(t.sliderContainer.children).indexOf(f(t.sliderContainer.children).reduce((function(e,n){var r=h(v(e,t.options.nullifyTransformEl),t),i=h(v(n,t.options.nullifyTransformEl),t);return Math.abs(i-h(v(t.sliderContainer,t.options.nullifyTransformEl),t))<Math.abs(r-h(v(t.sliderContainer,t.options.nullifyTransformEl),t))?n:e}),{getBoundingClientRect:function(){return{left:1e11}}})),o=e.indexOf(n);t.options.pillsContainerSelector.querySelector(".active")&&t.options.pillsContainerSelector.querySelector(".active").classList.remove("active"),n.classList.add("active");var a=Math.abs(o-i),s=Math.min(i,o)+(e.length-Math.max(i,o)),u=Math.min(a,s)*(s>=a?i>o?1:-1:i>o?-1:1),c=100*Math.round(100*t.state.positionX/m(v(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100)*m(v(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100+m(v(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)*u;t.state=l(l({},t.state),{},{positionTarget:c})}))}))}},b=function(t,e){var n=f(t.sliderContainer.children).indexOf(f(t.sliderContainer.children).reduce((function(e,n){var r=h(v(e,t.options.nullifyTransformEl),t),i=h(v(n,t.options.nullifyTransformEl),t);return Math.abs(i-h(v(t.sliderContainer,t.options.nullifyTransformEl),t))<Math.abs(r-h(v(t.sliderContainer,t.options.nullifyTransformEl),t))?n:e}),{getBoundingClientRect:function(){return{left:1e11,top:1e11}}})),r=e(n);r<0&&(r=t.sliderContainer.children.length-1),r>t.sliderContainer.children.length-1&&(r=0);var i=Math.abs(r-n),o=Math.min(n,r)+(t.sliderContainer.children.length-Math.max(n,r)),a=Math.min(i,o)*(o>i?n>r?1:-1:n>r?-1:1),s=100*Math.round(100*t.state.positionX/m(v(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100)*m(v(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)/100+m(v(t.sliderContainer.firstElementChild,t.options.nullifyTransformEl),t)*a;t.state=l(l({},t.state),{},{positionTarget:s})},E=function(t){t.options.leftArrow&&t.options.leftArrow.addEventListener("click",(function(e){e.preventDefault(),b(t,(function(t){return t-1}))})),t.options.rightArrow&&t.options.rightArrow.addEventListener("click",(function(e){e.preventDefault(),b(t,(function(t){return t+1}))}))},w=function(t){var e=t.sliderContainer;t.options.autoplay&&(e.addEventListener("mouseenter",(function(){return t.options=l(l({},t.options),{},{autoplay:!1,_autoplay:t.options.autoplay})})),e.addEventListener("mouseleave",(function(){t.options=l(l({},t.options),{},{autoplay:t.options._autoplay,_autoplay:!1}),t.state=l(l({},t.state),{},{lastTimeAnimated:(new Date).getTime()})})))},T=function(t){if(t.options.adjustHeight){var e=t.sliderContainer.children[t.state.previousCurrentIndex];t.sliderContainer.style.setProperty("--sliderHeight","".concat((e.firstElementChild||e).getBoundingClientRect().height,"px"))}},A=function(t,e,n){if(t.options.hasDragAndDrop){var r=t.sliderContainer,i=function(i){if(e().sliderActivated&&!t.options.elementsThatDoNotStartDrag.reduce((function(t,e){return!!t||(i.target.matches(e)||i.target.closest(e))}),!1)){i.stopPropagation(),"touchstart"!==i.type&&i.preventDefault(),t.options.onDragStart(i),n(l(l({},e()),{},{startX:i.pageX||i.touches[0].pageX,endX:i.pageX||i.touches[0].pageX,mouseDown:!0,downScrollPosition:{x:window.pageXOffset,y:window.pageYOffset},positionSnapshot:e().positionX}));var o=function i(o){if(e().mouseDown){o.stopPropagation(),n(l(l({},e()),{},{mouseDown:!1})),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",i);var s=e(),u=100*s.positionX/v(r.firstElementChild,t.options.nullifyTransformEl).width;n(l(l({},e()),{},{positionTarget:v(r.firstElementChild,t.options.nullifyTransformEl).width*(Math.abs(s.endX-s.startX)>50?s.endX-s.startX<0?100*Math.floor(u/100):100*Math.ceil(u/100):100*Math.round(u/100))/100}))}},a=function(t){var r=t.pageX;if(r||(r=t.touches[0].pageX),e().mouseDown){var i=e();n(l(l({},i),{},{endX:r})),(Math.abs(i.downScrollPosition.x-i.scrollPosition.x)>3||Math.abs(i.downScrollPosition.y-i.scrollPosition.y)>5)&&o(t)}};document.addEventListener("mousemove",a),document.addEventListener("mouseup",o),document.addEventListener("touchmove",a),document.addEventListener("touchend",o)}};r.addEventListener("mousedown",i),r.addEventListener("touchstart",i)}},O=function(t,e,n){return Math.min(Math.max(t,e),n)},S="__DESTROYED__",x=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,t),d(this,"getDefaultState",(function(){return{elementsOnBehind:1,positionSnapshot:0,positionX:0,positionTarget:0,velocity:0,containerInnerWidth:n.sliderContainer?m(v(n.sliderContainer,n.nullifyTransformEl),n):0,slideWidth:n.sliderContainer?m(v(n.sliderContainer.firstElementChild,n.sliderContainer),n):0,previousCurrentIndex:0,startX:0,endX:0,mouseDown:!1,lastTimeAnimated:1/0}})),d(this,"state",this.getDefaultState()),d(this,"options",{onDragStart:function(){},autoplay:!1,scaleRotateEffect:!1,pillsContainerSelector:null,pillsFlexyInstance:null,flexyAttributeEl:null,adjustHeight:!1,wrapAroundMode:"container",orientation:"horizontal",nullifyTransformEl:null,elementsThatDoNotStartDrag:[],hasDragAndDrop:!0}),d(this,"sliderContainer",null),d(this,"drawLoop",(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?1/0:n.state.positionX;if(n.state.sliderActivated!==S){var r,i;if(n.state.containerInnerWidth!==v(n.sliderContainer,n.nullifyTransformEl).width&&n.refreshActivation(),n.state=l(l(l(l({},n.state),n.state.sliderActivated?(r=n.state.velocity+(n.state.mouseDown?n.state.positionSnapshot+(n.state.endX-n.state.startX)-n.state.positionX-n.state.velocity:.02*(n.state.positionTarget-n.state.positionX)),{velocity:.72*(i=r),positionX:n.state.positionX+i}):{}),n.state.sliderActivated&&Math.abs(n.state.containerInnerWidth-m(v(n.sliderContainer,n.nullifyTransformEl),n))>1?{positionX:Math.round(m(v(n.sliderContainer.firstElementChild,n.options.nullifyTransformEl),n)*(100*Math.round(n.state.positionX/n.state.slideWidth))/100),positionTarget:Math.round(m(v(n.sliderContainer.firstElementChild,n.options.nullifyTransformEl),n)*(100*Math.round(n.state.positionX/n.state.slideWidth))/100)}:{}),{},{scrollPosition:{x:window.pageXOffset,y:window.pageYOffset},containerInnerWidth:m(v(n.sliderContainer,n.nullifyTransformEl),n),slideWidth:m(v(n.sliderContainer.firstElementChild,n.options.nullifyTransformEl),n)}),(e!==n.state.positionX||Math.abs(n.state.positionX-n.state.positionTarget)>.1)&&!t&&n.state.sliderActivated){var o=y(n,n.state.elementsOnBehind,n.state.mouseDown?n.state.endX<=n.state.startX?"right":"left":n.state.positionX>=n.state.positionTarget?"right":"left",n.options.wrapAroundMode),a=o.relativeDelta,s=o.elementsOnBehind;n.state=l(l({},n.state),{},{elementsOnBehind:s,positionTarget:n.state.positionTarget+a,positionX:n.state.positionX+a,positionSnapshot:n.state.positionSnapshot+a})}if(n.options.autoplay&&n.state.sliderActivated&&Math.abs(n.state.positionX-n.state.positionTarget)<.5&&(new Date).getTime()/1e3-n.state.lastTimeAnimated/1e3>(parseFloat(n.options.autoplay,10)?parseFloat(n.options.autoplay,10):3)&&(n.state=l(l({},n.state),{},{positionTarget:n.state.positionX-m(v(n.sliderContainer.firstElementChild,n.options.nullifyTransformEl),n)})),!n.state.mouseDown&&n.state.sliderActivated){Math.abs(n.state.positionX-n.state.positionTarget)<.2&&(n.state=l(l({},n.state),{},{positionX:n.state.positionTarget,velocity:0}));var u=n.state.previousCurrentIndex;n.state=l(l({},n.state),{},{previousCurrentIndex:O(n.state.elementsOnBehind>Math.round(Math.abs(n.state.positionTarget)/m(v(n.sliderContainer.firstElementChild,n.options.nullifyTransformEl),n))?Math.round(Math.abs(n.state.positionTarget)/m(v(n.sliderContainer.firstElementChild,n.options.nullifyTransformEl),n))+(n.sliderContainer.children.length-n.state.elementsOnBehind):Math.abs(Math.round(Math.abs(n.state.positionTarget)/m(v(n.sliderContainer.firstElementChild,n.options.nullifyTransformEl),n))-n.state.elementsOnBehind),0,n.sliderContainer.children.length-1)}),u!==n.state.previousCurrentIndex&&(g(n),T(n))}n.state.positionX!==e&&n.state.sliderActivated&&(n.render(),n.state=l(l({},n.state),{},{lastTimeAnimated:(new Date).getTime()})),requestAnimationFrame((function(){return n.drawLoop()}))}})),this.options=l(l({},this.options),{},{flexyAttributeEl:e,nullifyTransformEl:e},r),this.sliderContainer=e,C(this),E(this),w(this),A(this,(function(){return n.state}),(function(t){return n.state=t})),f(this.sliderContainer.children).map((function(t){return t.addEventListener("click",(function(t){return Math.abs(n.state.startX-n.state.endX)>3&&t.preventDefault()}))})),this.state=l(l({},this.state),{},{elementsOnBehind:1,positionX:-1*m(v(this.sliderContainer.firstElementChild,this.options.nullifyTransformEl),this),positionTarget:-1*m(v(this.sliderContainer.firstElementChild,this.options.nullifyTransformEl),this),containerInnerWidth:m(v(this.sliderContainer,this.nullifyTransformEl),this),slideWidth:m(v(this.sliderContainer.firstElementChild,this.options.nullifyTransformEl),this)}),this.refreshActivation(),requestAnimationFrame((function(){return n.drawLoop(!0)})),T(this)}var e,n,r;return e=t,(n=[{key:"destroy",value:function(){this.state=l(l({},this.state),{},{sliderActivated:S})}},{key:"refreshActivation",value:function(){var t=m(v(this.sliderContainer.children[0],this.options.nullifyTransformEl)||{width:0,height:0},this)*this.sliderContainer.children.length;this.state=l(l({},this.state),{},{sliderActivated:!!this.sliderContainer&&-1===getComputedStyle(this.sliderContainer,":after").content.indexOf("no-flexy")&&t>m(v(this.sliderContainer,this.options.nullifyTransformEl),this)+10}),this.state.sliderActivated?this.options.flexyAttributeEl.dataset.flexy="":(this.options.flexyAttributeEl.removeAttribute("data-flexy"),f(this.sliderContainer.children).map((function(t){return t.removeAttribute("style")})))}},{key:"render",value:function(){var t=this;f(this.sliderContainer.children).map((function(e){"vertical"===t.options.orientation?e.style.transform="translate3d(0, ".concat(t.state.positionX,"px, 0)"):e.style.transform="translate3d(".concat(t.state.positionX,"px, 0, 0)")})),this.state.mouseDown?this.options.flexyAttributeEl.dataset.flexyDragging="":this.options.flexyAttributeEl.removeAttribute("data-flexy-dragging"),this.state.elementsOnBehind>0?(f(this.sliderContainer.children).slice(0,-1*this.state.elementsOnBehind).map((function(t){return t.style.order=2})),f(this.sliderContainer.children).slice(-1*this.state.elementsOnBehind).map((function(t){return t.style.order=1}))):f(this.sliderContainer.children).map((function(t){return t.style.order=1}))}}])&&a(e.prototype,n),r&&a(e,r),t}(),M=n(10),X=n(0),D=n.n(X),j=n(3);function P(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){q(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=function(t){if(!t.flexy){Object(M.a)(t.querySelector(".flexy-items"));var e=new x(t.querySelector(".flexy-items"),B({flexyAttributeEl:t,elementsThatDoNotStartDrag:[".twentytwenty-handle"],adjustHeight:!!t.querySelector(".flexy-items").dataset.height,autoplay:!!(Object.keys(t.dataset).indexOf("autoplay")>-1&&parseInt(t.dataset.autoplay,10))&&t.dataset.autoplay,pillsContainerSelector:t.querySelector(".flexy-pills").firstElementChild,leftArrow:t.querySelector(".flexy .flexy-arrow-prev"),rightArrow:t.querySelector(".flexy .flexy-arrow-next"),scaleRotateEffect:!1,onDragStart:function(t){Array.from(t.target.closest(".flexy-items").querySelectorAll(".zoomImg")).map((function(t){i()(t).stop().fadeTo(120,0)}))},wrapAroundMode:"viewport"===t.dataset.wrap?"viewport":"container"},t.querySelector(".flexy-pills [data-flexy]")?{pillsFlexyInstance:t.querySelector(".flexy-pills [data-flexy]")}:{}));t.flexy=e}},R=function(t){if(!t.flexy){var e=new x(t,B({elementsThatDoNotStartDrag:[".twentytwenty-handle"],wrapAroundMode:"viewport"===t.dataset.wrap?"viewport":"container",leftArrow:t.parentNode.querySelector(".flexy-arrow-prev"),rightArrow:t.parentNode.querySelector(".flexy-arrow-next"),hasDragAndDrop:!1},t.closest(".thumbs-left")&&"mobile"!==Object(j.a)({withTablet:!0})?{orientation:"vertical"}:{}));t.flexy=e}};D.a.on("ct:flexy:update-height",(function(){P(document.querySelectorAll(".flexy-container")).map((function(t){t.flexy&&T(t.flexy)}))}))}}]);