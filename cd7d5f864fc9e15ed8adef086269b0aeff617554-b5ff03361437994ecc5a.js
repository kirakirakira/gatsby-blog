(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("f3/d"),a("0mN4");var r=a("xQSe"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s),d=a("p3AD");t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a.name)," ",a.summary," ",n.a.createElement("p",null,"You should follow her on ",n.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"Twitter")," but she never tweets, so 🐌.")))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function A(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?A(e,!0):"")+A(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(I,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),I=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,A=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,W=(0,d.default)({opacity:L?1:0,transition:O?"opacity "+v+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,N={transitionDelay:v+"ms"},M=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&N,o,f),z={title:t,alt:this.state.isVisible?"":a,style:M,className:g,itemProp:S};if(h){var V=h,P=p(h);return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&N)}),P.base64&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:z,imageVariants:V,generateSources:R}),P.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:z,imageVariants:V,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,w(V),l.default.createElement(I,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:A})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:E},P,{imageVariants:V}))}}))}if(m){var H=m,q=p(m),j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},T&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},O&&N)}),q.base64&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:z,imageVariants:H,generateSources:R}),q.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:z,imageVariants:H,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,w(H),l.default.createElement(I,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:A})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,d.default)({alt:a,title:t,loading:E},q,{imageVariants:H}))}}))}return null},t}(l.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var W=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});O.propTypes={resolutions:W,sizes:T,fixed:u.default.oneOfType([W,u.default.arrayOf(W)]),fluid:u.default.oneOfType([T,u.default.arrayOf(T)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=O;t.default=N},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),g=!i.ActiveXObject&&"ActiveXObject"in i,p=o.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=p(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",b,v,l,!0,!0);f&&g&&(d((r=l.getConstructor(b,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),g=l(6),p=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=r&&d(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},xQSe:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEzklEQVQ4y3WUa2yTVRjHy4bgYBDuJICIgAgENhegG+zKoN3a2svarfeysq5ld9ptXdt1F3YfFLawwS5dt3GdgkTjFxI/+Eli0EQd0Y/EaNCoJCYagxH29vw9T+kGxniSN+95z3ue33M5/+eIRHzkpGgT8BgJNF+etDKv8NCJ3wsOWmdfW7/Lmpy0SpK1X/2e6ogT+9443C+KjxbrNdq/iObrV20R/d/I0GXX/tZ18g6C1iuoLRpEpeos/KYIOuy3UKMewM7NqX6+b/FLNov+Q9n7uthZKD7xpV3aJrjUnTBL64XGknCUgwSfMcL8pknBqehipUovq1ZfgCar8tHhvYowN11D9jyLf0GT1ZkVT7vL7sCrm2TNteeit+/MwHysiUDMZ5pgDkkfuxgax43rM6xCfj7aefIWTmsvYsemFCMB3t6Zm/gycKkms/KboPUq3JpRocHZDT5YR7CfjOE3TsGh9cXWPvrgLhzSXsbLITjknVi9YkMuAbZueCth2dIVL4gysf1+q+0GvPoJoVzVxu59eg8dgRAqFRfgM07CpWvB/c/vo63+POrUwwSEvaBtjpumkP0riUsSFmAbV28tKufeKD2vfpw5CrshF5fBWdBPa/AaxlCvG4NSfArGow1wF12GzxSZ8xrGkbFHNkmMJuPEi5Rl6fbHrbbraDKEow75Gbx7833MPpiFu7Rr3hjlik7cnvkQX89+hRprO+PrLGi5EnW904PN63ZkEceQ53l+8vlphm8pBW9JRHDo/Pjr6Z+YuhJBe6CHpzzAazjN4d0YHArhu+8fYjp8E+WSs9FW2zWedquwbePeDI5Z+/KhbCvKqvqxxXodLkVv9HzvJfR09cGhDqJOMwSXvI/rcQA1rkaExyOoMnQwb8kEq1KHcHDXcTOVMHu/5tf0PYWDC0S+MEz14pp7dkoeAm1u0IZRZ+2CpzqAWtUwPMWX4JT1wqMdiZIirMf9D0khcXsPNcDWDbubY8C0N4/eJSAJmdL3myPwaEbR6h7AyKVxVCi4fMyTIJDPOMHrdxWazIq/SYLxmFaXFrT+UJJ7GrH2lRww/2KTBKDPc0f5g4aSETTqx5C5TwmeCo8mAN67MOV7aQ99P+MRgkdmjQOXmPIbH7h1wzHgGpuk+QmdZn3JCOOeWMEhG/gbZbIzcCp6YDnug0xcCl5r1BdfRoN+dI72y8X2qrj0dHW8c7RZ1U9iEXJvP1MajfrRKOmxQtkPefrJ2MNlBXLAncYkxPXHSIdU011b0my8Q5QnpEHhlLIPm9Zu18Ti5bl/TCk1GcNzAfMUAuZpRsKl6KjFyPj5oU0wrlc6PHL6TJ5uf0SlcSq66RayLJyyeLfUTht5wwul0hZWqTqHgGmKQ6YIAnJC/2m9RjPAW4/q2RhzqM2u+WzlsjVHiOPVjy204CLpQcsnxTl1lJrAI2aqIy64dUMxGNWSvnnrMV12Dc3/SN2e7Vn+6spD8wB+Oz1vv5TtWYvjN4a70TCK9tKZuRbbNWY65uW1s0Ydsg6hOKeWepo1W6YF/g9pO/O+mAfxW0iUuiMnYX4ushe0J8ZbcKxaOQhn4dmntaohZskPCrmpOigyylAhD0XpKquUX+DvECQHLD9xk3Vkl5iwOHa5Ji1NFiUtSRb9A8TxmboLzF+hAAAAAElFTkSuQmCC","width":50,"height":50,"src":"/gatsby-blog/static/c99d450899672008e6188f8e8091963f/8ba1e/profile-pic.png","srcSet":"/gatsby-blog/static/c99d450899672008e6188f8e8091963f/8ba1e/profile-pic.png 1x,\\n/gatsby-blog/static/c99d450899672008e6188f8e8091963f/f937a/profile-pic.png 1.5x,\\n/gatsby-blog/static/c99d450899672008e6188f8e8091963f/71eb7/profile-pic.png 2x"}}},"site":{"siteMetadata":{"author":{"name":"Kira","summary":"who lives and works in her house and basically never leaves anymore."},"social":{"twitter":"kirahartlage"}}}}}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-b5ff03361437994ecc5a.js.map