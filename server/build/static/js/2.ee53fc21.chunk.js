(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[2],{598:function(e,t,n){"use strict";n.d(t,"b",(function(){return C})),n.d(t,"d",(function(){return R})),n.d(t,"c",(function(){return S}));var r=n(539),a=n.n(r),i=n(548),o=n.n(i),u=n(553),c=n.n(u),l=n(554),s=n.n(l),f=n(555),p=n.n(f),d=n(556),v=n.n(d),h=n(541),b=n.n(h),m=n(1),y=n(114),g=n.n(y),x=n(565),O=n(805),w=n(580),j=n(576),z=n(545);function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v()(e);if(t){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}function C(e){return"undefined"===typeof e||null===e?"":e}function R(e,t,n){if(n){var r=t;if("click"===t.type){(r=Object.create(t)).target=e,r.currentTarget=e;var a=e.value;return e.value="",n(r),void(e.value=a)}n(r)}}function S(e,t,n,r){var a;return g()(e,(a={},b()(a,"".concat(e,"-sm"),"small"===t),b()(a,"".concat(e,"-lg"),"large"===t),b()(a,"".concat(e,"-disabled"),n),b()(a,"".concat(e,"-rtl"),"rtl"===r),a))}var E=function(e){s()(n,e);var t=A(n);function n(e){var r;o()(this,n),(r=t.call(this,e)).direction="ltr",r.focus=function(){r.input.focus()},r.saveClearableInput=function(e){r.clearableInput=e},r.saveInput=function(e){r.input=e},r.onFocus=function(e){var t=r.props.onFocus;r.setState({focused:!0},r.clearPasswordValueAttribute),t&&t(e)},r.onBlur=function(e){var t=r.props.onBlur;r.setState({focused:!1},r.clearPasswordValueAttribute),t&&t(e)},r.handleReset=function(e){r.setValue("",(function(){r.focus()})),R(r.input,e,r.props.onChange)},r.renderInput=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.props,o=i.className,u=i.addonBefore,c=i.addonAfter,l=i.size,s=i.disabled,f=Object(x.a)(r.props,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","inputType"]);return m.createElement("input",a()({autoComplete:n.autoComplete},f,{onChange:r.handleChange,onFocus:r.onFocus,onBlur:r.onBlur,onKeyDown:r.handleKeyDown,className:g()(S(e,l||t,s,r.direction),b()({},o,o&&!u&&!c)),ref:r.saveInput}))},r.clearPasswordValueAttribute=function(){r.removePasswordTimeout=setTimeout((function(){r.input&&"password"===r.input.getAttribute("type")&&r.input.hasAttribute("value")&&r.input.removeAttribute("value")}))},r.handleChange=function(e){r.setValue(e.target.value,r.clearPasswordValueAttribute),R(r.input,e,r.props.onChange)},r.handleKeyDown=function(e){var t=r.props,n=t.onPressEnter,a=t.onKeyDown;13===e.keyCode&&n&&n(e),a&&a(e)},r.renderComponent=function(e){var t=e.getPrefixCls,n=e.direction,i=e.input,o=r.state,u=o.value,c=o.focused,l=t("input",r.props.prefixCls);return r.direction=n,m.createElement(j.b.Consumer,null,(function(e){return m.createElement(O.a,a()({size:e},r.props,{prefixCls:l,inputType:"input",value:C(u),element:r.renderInput(l,e,i),handleReset:r.handleReset,ref:r.saveClearableInput,direction:n,focused:c,triggerFocus:r.focus}))}))};var i="undefined"===typeof e.value?e.defaultValue:e.value;return r.state={value:i,focused:!1,prevValue:e.value},r}return c()(n,[{key:"componentDidMount",value:function(){this.clearPasswordValueAttribute()}},{key:"componentDidUpdate",value:function(){}},{key:"getSnapshotBeforeUpdate",value:function(e){return Object(O.b)(e)!==Object(O.b)(this.props)&&Object(z.a)(this.input!==document.activeElement,"Input","When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"),null}},{key:"componentWillUnmount",value:function(){this.removePasswordTimeout&&clearTimeout(this.removePasswordTimeout)}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"setValue",value:function(e,t){void 0===this.props.value&&this.setState({value:e},t)}},{key:"render",value:function(){return m.createElement(w.a,null,this.renderComponent)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevValue,r={prevValue:e.value};return void 0===e.value&&n===e.value||(r.value=e.value),r}}]),n}(m.Component);E.defaultProps={type:"text"},t.a=E},666:function(e,t,n){"use strict";var r=n(539),a=n.n(r),i=n(548),o=n.n(i),u=n(553),c=n.n(u),l=n(554),s=n.n(l),f=n(555),p=n.n(f),d=n(556),v=n.n(d),h=n(1),b=n(844),m=n(565),y=n(805),g=n(580),x=n(598);function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v()(e);if(t){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var w=function(e){s()(n,e);var t=O(n);function n(e){var r;o()(this,n),(r=t.call(this,e)).focus=function(){r.resizableTextArea.textArea.focus()},r.saveTextArea=function(e){r.resizableTextArea=null===e||void 0===e?void 0:e.resizableTextArea},r.saveClearableInput=function(e){r.clearableInput=e},r.handleChange=function(e){r.setValue(e.target.value),Object(x.d)(r.resizableTextArea.textArea,e,r.props.onChange)},r.handleReset=function(e){r.setValue("",(function(){r.focus()})),Object(x.d)(r.resizableTextArea.textArea,e,r.props.onChange)},r.renderTextArea=function(e){return h.createElement(b.a,a()({},Object(m.a)(r.props,["allowClear"]),{prefixCls:e,onChange:r.handleChange,ref:r.saveTextArea}))},r.renderComponent=function(e){var t=e.getPrefixCls,n=e.direction,i=r.state.value,o=t("input",r.props.prefixCls);return h.createElement(y.a,a()({},r.props,{prefixCls:o,direction:n,inputType:"text",value:Object(x.b)(i),element:r.renderTextArea(o),handleReset:r.handleReset,ref:r.saveClearableInput,triggerFocus:r.focus}))};var i="undefined"===typeof e.value?e.defaultValue:e.value;return r.state={value:i},r}return c()(n,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return h.createElement(g.a,null,this.renderComponent)}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),n}(h.Component);t.a=w},667:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(821))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},709:function(e,t,n){"use strict";var r=n(62),a=n(549),i=n(550),o=n(564),u=n(562),c=n(563),l=n(1),s=n(694),f=n(574),p=n(148),d=n(597),v=n(793);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var y=function(){var e=function(e){Object(o.a)(n,e);var t=m(n);function n(){var e;return Object(a.a)(this,n),(e=t.apply(this,arguments)).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0},e.onResize=function(t){var n=e.props.onResize,r=t[0].target,a=r.getBoundingClientRect(),i=a.width,o=a.height,u=r.offsetWidth,c=r.offsetHeight,l=Math.floor(i),s=Math.floor(o);if(e.state.width!==l||e.state.height!==s){var f={width:l,height:s};e.setState(f),n&&n(b(b({},f),{},{offsetWidth:u,offsetHeight:c}))}},e.setChildNode=function(t){e.childNode=t},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=Object(s.a)(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new v.a(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=Object(f.a)(e);if(t.length>1)Object(p.a)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return Object(p.a)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(l.isValidElement(n)&&Object(d.b)(n)){var r=n.ref;t[0]=l.cloneElement(n,{ref:Object(d.a)(r,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!l.isValidElement(e)||"key"in e&&null!==e.key?e:l.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}]),n}(l.Component);return e.displayName="ResizeObserver",e}();t.a=y},805:function(e,t,n){"use strict";n.d(t,"b",(function(){return A}));var r=n(541),a=n.n(r),i=n(548),o=n.n(i),u=n(553),c=n.n(u),l=n(554),s=n.n(l),f=n(555),p=n.n(f),d=n(556),v=n.n(d),h=n(1),b=n(114),m=n.n(b),y=n(667),g=n.n(y),x=n(568),O=n(598),w=n(581);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v()(e);if(t){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}var z=Object(x.a)("text","input");function A(e){return!!(e.prefix||e.suffix||e.allowClear)}var C=function(e){s()(n,e);var t=j(n);function n(){var e;return o()(this,n),(e=t.apply(this,arguments)).containerRef=h.createRef(),e.onInputMouseUp=function(t){var n;(null===(n=e.containerRef.current)||void 0===n?void 0:n.contains(t.target))&&(0,e.props.triggerFocus)()},e}return c()(n,[{key:"renderClearIcon",value:function(e){var t=this.props,n=t.allowClear,r=t.value,i=t.disabled,o=t.readOnly,u=t.inputType,c=t.handleReset;if(!n)return null;var l=!i&&!o&&r,s=u===z[0]?"".concat(e,"-textarea-clear-icon"):"".concat(e,"-clear-icon");return h.createElement(g.a,{onClick:c,className:m()(s,a()({},"".concat(s,"-hidden"),!l)),role:"button"})}},{key:"renderSuffix",value:function(e){var t=this.props,n=t.suffix,r=t.allowClear;return n||r?h.createElement("span",{className:"".concat(e,"-suffix")},this.renderClearIcon(e),n):null}},{key:"renderLabeledIcon",value:function(e,t){var n,r=this.props,i=r.focused,o=r.value,u=r.prefix,c=r.className,l=r.size,s=r.suffix,f=r.disabled,p=r.allowClear,d=r.direction,v=r.style,b=r.readOnly,y=this.renderSuffix(e);if(!A(this.props))return Object(w.a)(t,{value:o});var g=u?h.createElement("span",{className:"".concat(e,"-prefix")},u):null,x=m()(c,"".concat(e,"-affix-wrapper"),(n={},a()(n,"".concat(e,"-affix-wrapper-focused"),i),a()(n,"".concat(e,"-affix-wrapper-disabled"),f),a()(n,"".concat(e,"-affix-wrapper-sm"),"small"===l),a()(n,"".concat(e,"-affix-wrapper-lg"),"large"===l),a()(n,"".concat(e,"-affix-wrapper-input-with-clear-btn"),s&&p&&o),a()(n,"".concat(e,"-affix-wrapper-rtl"),"rtl"===d),a()(n,"".concat(e,"-affix-wrapper-readonly"),b),n));return h.createElement("span",{ref:this.containerRef,className:x,style:v,onMouseUp:this.onInputMouseUp},g,Object(w.a)(t,{style:null,value:o,className:Object(O.c)(e,l,f)}),y)}},{key:"renderInputWithLabel",value:function(e,t){var n,r,i=this.props,o=i.addonBefore,u=i.addonAfter,c=i.style,l=i.size,s=i.className,f=i.direction;if(!o&&!u)return t;var p="".concat(e,"-group"),d="".concat(p,"-addon"),v=o?h.createElement("span",{className:d},o):null,b=u?h.createElement("span",{className:d},u):null,y=m()("".concat(e,"-wrapper"),(n={},a()(n,p,o||u),a()(n,"".concat(p,"-rtl"),"rtl"===f),n)),g=m()(s,"".concat(e,"-group-wrapper"),(r={},a()(r,"".concat(e,"-group-wrapper-sm"),"small"===l),a()(r,"".concat(e,"-group-wrapper-lg"),"large"===l),a()(r,"".concat(e,"-group-wrapper-rtl"),"rtl"===f),r));return h.createElement("span",{className:g,style:c},h.createElement("span",{className:y},v,Object(w.a)(t,{style:null}),b))}},{key:"renderTextAreaWithClearIcon",value:function(e,t){var n=this.props,r=n.value,i=n.allowClear,o=n.className,u=n.style,c=n.direction;if(!i)return Object(w.a)(t,{value:r});var l=m()(o,"".concat(e,"-affix-wrapper"),a()({},"".concat(e,"-affix-wrapper-rtl"),"rtl"===c),"".concat(e,"-affix-wrapper-textarea-with-clear-btn"));return h.createElement("span",{className:l,style:u},Object(w.a)(t,{style:null,value:r}),this.renderClearIcon(e))}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.inputType,r=e.element;return n===z[0]?this.renderTextAreaWithClearIcon(t,r):this.renderInputWithLabel(t,this.renderLabeledIcon(t,r))}}]),n}(h.Component);t.a=C},821:function(e,t,n){"use strict";var r=n(540),a=n(542);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1)),o=r(n(822)),u=r(n(543)),c=function(e,t){return i.createElement(u.default,Object.assign({},e,{ref:t,icon:o.default}))};c.displayName="CloseCircleFilled";var l=i.forwardRef(c);t.default=l},822:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"}},844:function(e,t,n){"use strict";var r,a,i=n(549),o=n(550),u=n(564),c=n(562),l=n(563),s=n(1),f=n(62),p=n(709),d=n(565),v=n(114),h=n.n(v),b="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",m=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"],y={};function g(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&y[n])return y[n];var r=window.getComputedStyle(e),a=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),i=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),o=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),u=m.map((function(e){return"".concat(e,":").concat(r.getPropertyValue(e))})).join(";"),c={sizingStyle:u,paddingSize:i,borderSize:o,boxSizing:a};return t&&n&&(y[n]=c),c}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}!function(e){e[e.NONE=0]="NONE",e[e.RESIZING=1]="RESIZING",e[e.RESIZED=2]="RESIZED"}(a||(a={}));var j=function(e){Object(u.a)(n,e);var t=w(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).saveTextArea=function(e){o.textArea=e},o.handleResize=function(e){var t=o.state.resizeStatus,n=o.props,r=n.autoSize,i=n.onResize;t===a.NONE&&("function"===typeof i&&i(e),r&&o.resizeOnNextFrame())},o.resizeOnNextFrame=function(){cancelAnimationFrame(o.nextFrameActionId),o.nextFrameActionId=requestAnimationFrame(o.resizeTextarea)},o.resizeTextarea=function(){var e=o.props.autoSize;if(e&&o.textArea){var t=e.minRows,n=e.maxRows,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;r||((r=document.createElement("textarea")).setAttribute("tab-index","-1"),r.setAttribute("aria-hidden","true"),document.body.appendChild(r)),e.getAttribute("wrap")?r.setAttribute("wrap",e.getAttribute("wrap")):r.removeAttribute("wrap");var i=g(e,t),o=i.paddingSize,u=i.borderSize,c=i.boxSizing,l=i.sizingStyle;r.setAttribute("style","".concat(l,";").concat(b)),r.value=e.value||e.placeholder||"";var s,f=Number.MIN_SAFE_INTEGER,p=Number.MAX_SAFE_INTEGER,d=r.scrollHeight;if("border-box"===c?d+=u:"content-box"===c&&(d-=o),null!==n||null!==a){r.value=" ";var v=r.scrollHeight-o;null!==n&&(f=v*n,"border-box"===c&&(f=f+o+u),d=Math.max(f,d)),null!==a&&(p=v*a,"border-box"===c&&(p=p+o+u),s=d>p?"":"hidden",d=Math.min(p,d))}return{height:d,minHeight:f,maxHeight:p,overflowY:s}}(o.textArea,!1,t,n);o.setState({textareaStyles:i,resizeStatus:a.RESIZING},(function(){cancelAnimationFrame(o.resizeFrameId),o.resizeFrameId=requestAnimationFrame((function(){o.setState({resizeStatus:a.RESIZED},(function(){o.resizeFrameId=requestAnimationFrame((function(){o.setState({resizeStatus:a.NONE}),o.fixFirefoxAutoScroll()}))}))}))}))}},o.renderTextArea=function(){var e=o.props,t=e.prefixCls,n=void 0===t?"rc-textarea":t,r=e.autoSize,i=e.onResize,u=e.className,c=e.disabled,l=o.state,v=l.textareaStyles,b=l.resizeStatus,m=Object(d.a)(o.props,["prefixCls","onPressEnter","autoSize","defaultValue","onResize"]),y=h()(n,u,Object(f.a)({},"".concat(n,"-disabled"),c));"value"in m&&(m.value=m.value||"");var g=O(O(O({},o.props.style),v),b===a.RESIZING?{overflowX:"hidden",overflowY:"hidden"}:null);return s.createElement(p.a,{onResize:o.handleResize,disabled:!(r||i)},s.createElement("textarea",Object.assign({},m,{className:y,style:g,ref:o.saveTextArea})))},o.state={textareaStyles:{},resizeStatus:a.NONE},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.resizeTextarea()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.nextFrameActionId),cancelAnimationFrame(this.resizeFrameId)}},{key:"fixFirefoxAutoScroll",value:function(){try{if(document.activeElement===this.textArea){var e=this.textArea.selectionStart,t=this.textArea.selectionEnd;this.textArea.setSelectionRange(e,t)}}catch(n){}}},{key:"render",value:function(){return this.renderTextArea()}}]),n}(s.Component);function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var A=function(e){Object(u.a)(n,e);var t=z(n);function n(e){var r;Object(i.a)(this,n),(r=t.call(this,e)).focus=function(){r.resizableTextArea.textArea.focus()},r.saveTextArea=function(e){r.resizableTextArea=e},r.handleChange=function(e){var t=r.props.onChange;r.setValue(e.target.value,(function(){r.resizableTextArea.resizeTextarea()})),t&&t(e)},r.handleKeyDown=function(e){var t=r.props,n=t.onPressEnter,a=t.onKeyDown;13===e.keyCode&&n&&n(e),a&&a(e)};var a="undefined"===typeof e.value||null===e.value?e.defaultValue:e.value;return r.state={value:a},r}return Object(o.a)(n,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return s.createElement(j,Object.assign({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),n}(s.Component);t.a=A}}]);
//# sourceMappingURL=2.ee53fc21.chunk.js.map