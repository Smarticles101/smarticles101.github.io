(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),l=a(146),i=a(142),c="290912234";t.default=function(e){var t=e.data;return r.a.createElement(l.a,{title:"Blog"},r.a.createElement("h1",null,"Recent Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{key:t.id,to:t.fields.slug,style:{textDecoration:"none"}},r.a.createElement("div",null,r.a.createElement("h3",{style:{marginBottom:0}},t.frontmatter.title),r.a.createElement("h5",null,t.frontmatter.date),r.a.createElement("p",null,t.excerpt))),r.a.createElement("hr",null))}))}},142:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(28),m=a.n(c);a.d(t,"a",function(){return m.a});a(143);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Logan Stucki"}}}}},145:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(51),m=a(2),o=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},146:function(e,t,a){"use strict";var n=a(144),r=a(0),l=a.n(r),i=a(4),c=a.n(i),m=a(147),o=a.n(m),u=a(142),d=function(e){var t=e.title;return l.a.createElement("header",{style:{background:"rgba(0, 126, 167, 1)",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",alignItems:"center",justifyContent:"space-between"}},l.a.createElement("h1",{style:{margin:0,color:"rgba(0, 23, 31, 1)"}},t),l.a.createElement("div",{style:{alignSelf:"flex-end",display:"flex",justifyContent:"space-around"}},l.a.createElement("h2",{style:{margin:0,paddingRight:"1rem"}},l.a.createElement(u.a,{to:"/",style:{color:"rgba(0, 52, 89, 1)",textDecoration:"none"}},"Home")),l.a.createElement("h2",{style:{margin:0}},l.a.createElement(u.a,{to:"/blog",style:{color:"rgba(0, 52, 89, 1)",textDecoration:"none"}},"Blog")))))},s=(a(149),a(30),a(150)),g=function(){var e=(new Date).getFullYear().toString();return l.a.createElement("footer",{style:{backgroundColor:"rgba(0, 23, 31, 1)",color:"rgba(0, 168, 232, 1)"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{style:{flex:1}},l.a.createElement(s.SocialIcon,{style:{maxWidth:"1.75rem",maxHeight:"1.75rem",margin:".25rem"},url:"https://github.com/Smarticles101"}),l.a.createElement(s.SocialIcon,{style:{maxWidth:"1.75rem",maxHeight:"1.75rem",margin:".25rem"},url:"https://www.linkedin.com/in/loganstucki/"}),l.a.createElement(s.SocialIcon,{style:{maxWidth:"1.75rem",maxHeight:"1.75rem",margin:".25rem"},url:"https://twitter.com/Smarticles101"}),l.a.createElement(s.SocialIcon,{style:{maxWidth:"1.75rem",maxHeight:"1.75rem",margin:".25rem"},url:"mailto:loganstucki@gmail.com"})),l.a.createElement("div",null,"© Logan Stucki ","2018"+("2018"!==e?" - "+e:"")),l.a.createElement("div",{style:{flex:1,textAlign:"right"}},l.a.createElement("a",{href:"/resume.pdf"},"Resume"))))},f=(a(136),function(e){var t=e.children,a=e.title;return l.a.createElement(u.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:e.site.siteMetadata.title},l.a.createElement("html",{lang:"en"})),l.a.createElement(d,{title:a}),l.a.createElement("div",{style:{flex:1,paddingBottom:"2rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t)),l.a.createElement(g,null))},data:n})});f.propTypes={children:c.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-14e29c1d4831ae61b6f7.js.map