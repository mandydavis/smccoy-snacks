(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(161),c=a(163),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(s.a,{location:this.props.location,title:e},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=l;var u="1097489062"},159:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},160:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(34),c=a.n(s);a.d(t,"a",function(){return c.a});a(159);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(160);t.a=function(e){var t=e.title,a=e.children,n=r.a.useState(!1),o=n[0];n[1];return r.a.createElement("div",{className:"site-wrapper "+(o?"site-head-open":"")},r.a.createElement("header",{className:"site-head"},r.a.createElement("div",{className:"site-head-container"},r.a.createElement("div",{className:"site-head-center"},r.a.createElement(i.a,{className:"site-head-logo",to:"/"},t)),r.a.createElement("div",{className:"site-head-right"}))),r.a.createElement("main",{id:"site-main",className:"site-main"},r.a.createElement("div",{id:"swup",className:"transition-fade"},a)),r.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",r.a.createElement(i.a,{to:"/"},t)," — Built with"," ",r.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")))}},162:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(58),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(165),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Smccoy's Snacks",description:"A short recipe book in honor of Smccoy's 21st birthday!",author:"Mandy Davis"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-7e7949df1668d38afb65.js.map