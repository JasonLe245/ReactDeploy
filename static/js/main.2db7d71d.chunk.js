(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,a){e.exports=a(607)},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},607:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a.n(n),c=a(163),i=a.n(c),r=(a(175),a(164)),d=a(165),o=a(168),u=a(166),s=a(169),h=(a(176),a(177),function(e){return l.a.createElement("div",{className:"button-wrapper ".concat((t=e.children,isNaN()&&"."!==t&&"="!==t?"operator":null)),onClick:function(){return e.handleClick(e.children)}},e.children);var t}),m=(a(178),function(e){return l.a.createElement("div",{className:"input"},e.input)}),p=(a(179),function(e){return l.a.createElement("div",{className:"clear-btn",onClick:e.handleClear},e.children)}),E=a(167),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addToInput=function(e){a.setState({input:a.state.input+e})},a.handleEqual=function(){a.setState({input:E.eval(a.state.input)})},a.state={input:""},a}return Object(s.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"calc-wrapper"},l.a.createElement(m,{input:this.state.input}),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToInput},"7"),l.a.createElement(h,{handleClick:this.addToInput},"8"),l.a.createElement(h,{handleClick:this.addToInput},"9"),l.a.createElement(h,{handleClick:this.addToInput},"/")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToInput},"4"),l.a.createElement(h,{handleClick:this.addToInput},"5"),l.a.createElement(h,{handleClick:this.addToInput},"6"),l.a.createElement(h,{handleClick:this.addToInput},"X")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToInput},"1"),l.a.createElement(h,{handleClick:this.addToInput},"2"),l.a.createElement(h,{handleClick:this.addToInput},"3"),l.a.createElement(h,{handleClick:this.addToInput},"+")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToInput},"."),l.a.createElement(h,{handleClick:this.addToInput},"0"),l.a.createElement(h,{handleClick:function(){return e.handleEqual()}},"="),l.a.createElement(h,{handleClick:this.addToInput},"-")),l.a.createElement("div",{className:"row"},l.a.createElement(p,{handleClear:function(){return e.setState({input:""})}},"Clear"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[170,1,2]]]);
//# sourceMappingURL=main.2db7d71d.chunk.js.map