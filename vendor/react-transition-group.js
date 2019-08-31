!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","react-dom"],t):t((e=e||self).ReactTransitionGroup={},e.React,e.ReactDOM)}(this,function(e,t,n){"use strict";var r="default"in t?t.default:t,i="default"in n?n.default:n;function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e,t){return e(t={exports:{}},t.exports),t.exports}var u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function h(){}var E=c(function(e){e.exports=function(){function e(e,t,n,r,i,o){if(o!==f){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=h,n.PropTypes=n,n}()}),m=(E.object,E.oneOfType,E.element,E.bool,E.func,c(function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}}}));l(m);var x=c(function(e,t){t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default});l(x);var v=l(c(function(e,t){t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,n.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var n=m(x);e.exports=t.default}));function y(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var g={disabled:!1},b=r.createContext(null),C="unmounted",O="exited",S="entering",N="entered",k=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=O,r.appearStatus=S):i=N:i=t.unmountOnExit||t.mountOnEnter?C:O,r.state={status:i},r.nextCallback=null,r}s(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===C?{status:O}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==S&&n!==N&&(t=S):n!==S&&n!==N||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.findDOMNode(this);t===S?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===O&&this.setState({status:C})},n.performEnter=function(e,t){var n=this,r=this.props.enter,i=this.context?this.context.isMounting:t,o=this.getTimeouts(),a=i?o.appear:o.enter;!t&&!r||g.disabled?this.safeSetState({status:N},function(){n.props.onEntered(e)}):(this.props.onEnter(e,i),this.safeSetState({status:S},function(){n.props.onEntering(e,i),n.onTransitionEnd(e,a,function(){n.safeSetState({status:N},function(){n.props.onEntered(e,i)})})}))},n.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n&&!g.disabled?(this.props.onExit(e),this.safeSetState({status:"exiting"},function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,function(){t.safeSetState({status:O},function(){t.props.onExited(e)})})})):this.safeSetState({status:O},function(){t.props.onExited(e)})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===C)return null;var t=this.props,n=t.children,i=a(t,["children"]);if(delete i.in,delete i.mountOnEnter,delete i.unmountOnExit,delete i.appear,delete i.enter,delete i.exit,delete i.timeout,delete i.addEndListener,delete i.onEnter,delete i.onEntering,delete i.onEntered,delete i.onExit,delete i.onExiting,delete i.onExited,"function"==typeof n)return r.createElement(b.Provider,{value:null},n(e,i));var o=r.Children.only(n);return r.createElement(b.Provider,{value:null},r.cloneElement(o,i))},t}(r.Component);function T(){}k.contextType=b,k.propTypes={},k.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:T,onEntering:T,onEntered:T,onExit:T,onExiting:T,onExited:T},k.UNMOUNTED=0,k.EXITED=1,k.ENTERING=2,k.ENTERED=3,k.EXITING=4;var j=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=y(n.className,r):n.setAttribute("class",y(n.className&&n.className.baseVal||"",r)));var n,r})},P=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){t.removeClasses(e,"exit"),t.addClass(e,n?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=n?"appear":"enter";t.addClass(e,r,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=n?"appear":"enter";t.removeClasses(e,r),t.addClass(e,r,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),t.addClass(e,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){t.addClass(e,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){t.removeClasses(e,"exit"),t.addClass(e,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,i=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:i,activeClassName:r?i+"-active":n[e+"Active"],doneClassName:r?i+"-done":n[e+"Done"]}},t}s(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"];"appear"===t&&"done"===n&&(r+=" "+this.getClassNames("enter").doneClassName),"active"===n&&e&&e.scrollTop,this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach(function(t){return v(e,t)})}(e,r)},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,o=n.done;this.appliedClasses[t]={},r&&j(e,r),i&&j(e,i),o&&j(e,o)},n.render=function(){var e=this.props,t=(e.classNames,a(e,["classNames"]));return r.createElement(k,o({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(r.Component);function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,n){var r=Object.create(null);return e&&t.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=function(e){return n&&t.isValidElement(e)?n(e):e}(e)}),r}function L(e,t,n){return null!=n[t]?n[t]:e.props[t]}function M(e,n,r){var i=w(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var s={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var c=i[l][r];s[i[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(n,i);return Object.keys(o).forEach(function(a){var s=o[a];if(t.isValidElement(s)){var l=a in n,c=a in i,u=n[a],p=t.isValidElement(u)&&!u.props.in;!c||l&&!p?c||!l||p?c&&l&&t.isValidElement(u)&&(o[a]=t.cloneElement(s,{onExited:r.bind(null,s),in:u.props.in,exit:L(s,"exit",e),enter:L(s,"enter",e)})):o[a]=t.cloneElement(s,{in:!1}):o[a]=t.cloneElement(s,{onExited:r.bind(null,s),in:!0,exit:L(s,"exit",e),enter:L(s,"enter",e)})}}),o}P.defaultProps={classNames:""},P.propTypes={};var D=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},R=function(e){function n(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(_(_(r)));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}s(n,e);var i=n.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var r,i,o=n.children,a=n.handleExited;return{children:n.firstRender?(r=e,i=a,w(r.children,function(e){return t.cloneElement(e,{onExited:i.bind(null,e),in:!0,appear:L(e,"appear",r),enter:L(e,"enter",r),exit:L(e,"exit",r)})})):M(e,o,a),firstRender:!1}},i.handleExited=function(e,t){var n=w(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=o({},t.children);return delete n[e.key],{children:n}}))},i.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=a(e,["component","childFactory"]),o=this.state.contextValue,s=D(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r.createElement(b.Provider,{value:o},s):r.createElement(b.Provider,{value:o},r.createElement(t,i,s))},n}(r.Component);R.propTypes={},R.defaultProps={component:"div",childFactory:function(e){return e}};var A,V,I=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}s(t,e);var i=t.prototype;return i.handleLifecycle=function(e,t,i){var o,a=this.props.children,s=r.Children.toArray(a)[t];s.props[e]&&(o=s.props)[e].apply(o,i),this.props[e]&&this.props[e](n.findDOMNode(this))},i.render=function(){var e=this.props,t=e.children,n=e.in,i=a(e,["children","in"]),o=r.Children.toArray(t),s=o[0],l=o[1];return delete i.onEnter,delete i.onEntering,delete i.onEntered,delete i.onExit,delete i.onExiting,delete i.onExited,r.createElement(R,i,n?r.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},t}(r.Component);I.propTypes={};var F="out-in",U="in-out",q=function(e,t,n){return function(){var r;e.props[t]&&(r=e.props)[t].apply(r,arguments),n()}},G=((A={})[F]=function(e){var t=e.current,n=e.changeState;return r.cloneElement(t,{in:!1,onExited:q(t,"onExited",function(){n(S,null)})})},A[U]=function(e){var t=e.current,n=e.changeState,i=e.children;return[t,r.cloneElement(i,{in:!0,onEntered:q(i,"onEntered",function(){n(S)})})]},A),W=((V={})[F]=function(e){var t=e.children,n=e.changeState;return r.cloneElement(t,{in:!0,onEntered:q(t,"onEntered",function(){n(N,r.cloneElement(t,{in:!0}))})})},V[U]=function(e){var t=e.current,n=e.children,i=e.changeState;return[r.cloneElement(t,{in:!1,onExited:q(t,"onExited",function(){i(N,r.cloneElement(n,{in:!0}))})}),r.cloneElement(n,{in:!0})]},V),$=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={status:N,current:null},t.appeared=!1,t.changeState=function(e,n){void 0===n&&(n=t.state.current),t.setState({status:e,current:n})},t}s(t,e);var n=t.prototype;return n.componentDidMount=function(){this.appeared=!0},t.getDerivedStateFromProps=function(e,t){return null==e.children?{current:null}:t.status===S&&e.mode===U?{status:S}:!t.current||(n=t.current,i=e.children,n===i||r.isValidElement(n)&&r.isValidElement(i)&&null!=n.key&&n.key===i.key)?{current:r.cloneElement(e.children,{in:!0})}:{status:"exiting"};var n,i},n.render=function(){var e,t=this.props,n=t.children,i=t.mode,o=this.state,a=o.status,s=o.current,l={children:n,current:s,changeState:this.changeState,status:a};switch(a){case S:e=W[i](l);break;case"exiting":e=G[i](l);break;case N:e=s}return r.createElement(b.Provider,{value:{isMounting:!this.appeared}},e)},t}(r.Component);$.propTypes={},$.defaultProps={mode:F},e.CSSTransition=P,e.ReplaceTransition=I,e.SwitchTransition=$,e.Transition=k,e.TransitionGroup=R,e.config=g,Object.defineProperty(e,"__esModule",{value:!0})});