(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});a(49);var n=a(0),r=a.n(n),i=a(146),l=a(141),o="2540086043";t.default=function(e){var t=e.data;return r.a.createElement(i.a,{title:"Blog"},r.a.createElement("h1",null,"Recent Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Link,{key:t.id,to:t.frontmatter.path,style:{textDecoration:"none"}},r.a.createElement("div",null,r.a.createElement("h3",{style:{marginBottom:0}},t.frontmatter.title),r.a.createElement("h5",null,t.frontmatter.date),r.a.createElement("p",null,t.excerpt))),r.a.createElement("hr",null))}))}},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(140),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var m=a(142),u=a.n(m);a.d(t,"PageRenderer",function(){return u.a});var s=a(34);a.d(t,"parsePath",function(){return s.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},142:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Logan Stucki"}}}}},144:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(48),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},145:function(e,t,a){},146:function(e,t,a){"use strict";var n=a(143),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(148),m=a.n(c),u=a(141),s=function(e){var t=e.title;return i.a.createElement("header",{style:{background:"rgba(0, 126, 167, 1)",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",alignItems:"center",justifyContent:"space-between"}},i.a.createElement("h1",{style:{margin:0,color:"rgba(0, 23, 31, 1)"}},t),i.a.createElement("div",{style:{alignSelf:"flex-end",display:"flex",justifyContent:"space-around"}},i.a.createElement("h2",{style:{margin:0,paddingRight:"1rem"}},i.a.createElement(u.Link,{to:"/",style:{color:"rgba(0, 52, 89, 1)",textDecoration:"none"}},"Home")),i.a.createElement("h2",{style:{margin:0}},i.a.createElement(u.Link,{to:"/blog",style:{color:"rgba(0, 52, 89, 1)",textDecoration:"none"}},"Blog")))))},d=(a(149),a(150),a(151)),g=function(){var e=(new Date).getFullYear().toString();return i.a.createElement("footer",{style:{backgroundColor:"rgba(0, 23, 31, 1)",color:"rgba(0, 168, 232, 1)"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("div",{style:{flex:1}},i.a.createElement(d.SocialIcon,{style:{maxWidth:"1.75rem",maxHeight:"1.75rem",margin:".25rem"},url:"https://github.com/Smarticles101"}),i.a.createElement(d.SocialIcon,{style:{maxWidth:"1.75rem",maxHeight:"1.75rem",margin:".25rem"},url:"https://www.linkedin.com/in/loganstucki/"}),i.a.createElement(d.SocialIcon,{style:{maxWidth:"1.75rem",maxHeight:"1.75rem",margin:".25rem"},url:"https://twitter.com/Smarticles101"}),i.a.createElement(d.SocialIcon,{style:{maxWidth:"1.75rem",maxHeight:"1.75rem",margin:".25rem"},url:"mailto:loganstucki@gmail.com"})),i.a.createElement("div",{className:"copy"},"© Logan Stucki ","2018"+("2018"!==e?" - "+e:"")),i.a.createElement("div",{style:{flex:1,textAlign:"right"}},":)")))},p=(a(145),function(e){var t=e.children,a=e.title;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(s,{title:a}),i.a.createElement("div",{style:{flex:1,paddingBottom:"2rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t)),i.a.createElement(g,null))},data:n})});p.propTypes={children:o.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-blog-js-ccb70b1112ed2838f477.js.map