(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var i=n(3038),r=n(862);t.default=void 0;var o=r(n(7294)),a=n(1689),s=n(2441),d=n(5749),l={};function p(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var c=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.asPath||"/",c=o.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=i(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,a.resolveHref)(r,e.as):s||o}}),[r,e.href,e.as]),m=c.href,u=c.as,f=e.children,x=e.replace,h=e.shallow,g=e.scroll,b=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var y=o.Children.only(f),w=y&&"object"===typeof y&&y.ref,j=(0,d.useIntersection)({rootMargin:"200px"}),v=i(j,2),k=v[0],_=v[1],C=o.default.useCallback((function(e){k(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,k]);(0,o.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(m),i="undefined"!==typeof b?b:n&&n.locale,r=l[m+"%"+u+(i?"%"+i:"")];e&&!r&&p(n,m,u,{locale:i})}),[u,m,_,b,t,n]);var I={ref:C,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,s,d){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:o,locale:d,scroll:s}))}(e,n,m,u,x,h,g,b)},onMouseEnter:function(e){(0,a.isLocalURL)(m)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),p(n,m,u,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var N="undefined"!==typeof b?b:n&&n.locale,z=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(u,N,n&&n.locales,n&&n.domainLocales);I.href=z||(0,a.addBasePath)((0,a.addLocale)(u,N,n&&n.defaultLocale))}return o.default.cloneElement(y,I)};t.default=c},5749:function(e,t,n){"use strict";var i=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,d=(0,r.useRef)(),l=(0,r.useState)(!1),p=i(l,2),c=p[0],m=p[1],u=(0,r.useCallback)((function(e){d.current&&(d.current(),d.current=void 0),n||c||e&&e.tagName&&(d.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&m(e)}),{rootMargin:t}))}),[n,t,c]);return(0,r.useEffect)((function(){if(!a&&!c){var e=(0,o.requestIdleCallback)((function(){return m(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[c]),[u,c]};var r=n(7294),o=n(8391),a="undefined"!==typeof IntersectionObserver;var s=new Map},1737:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var i=n(5893),r=(n(7294),n(9163)),o="#1BA098",a="#DEB992",s=r.default.section.withConfig({displayName:"GlobalComponents__Section",componentId:"sc-6qzy6y-0"})(["display:",";flex-direction:",";padding:",";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ","{padding:24px 48px 0;flex-direction:column;}@media ","{padding:",";width:calc(100vw - 32px);flex-direction:column;}"],(function(e){return e.grid?"grid":"flex"}),(function(e){return e.row?"row":"column"}),(function(e){return e.nopadding?"0":"32px 48px 0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.nopadding?"0":"16px 16px 0"})),d=r.default.h2.withConfig({displayName:"GlobalComponents__SectionTitle",componentId:"sc-6qzy6y-1"})(["font-weight:800;font-size:",";line-height:",";width:max-content;max-width:100%;background:linear-gradient( 121.57deg,"," 18.77%,#67a8a4 100% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-top:60px;margin-bottom:60px;padding:",";@media ","{font-size:",";line-height:",";margin-bottom:12px;padding:",";}@media ","{font-size:32px;line-height:40px;font-size:",";line-height:",";margin-bottom:8px;padding:",";max-width:100%;}"],(function(e){return e.main?"65px":"56px"}),(function(e){return e.main?"72px":"56px"}),o,(function(e){return e.main?"58px 0 16px":"0"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"56px":"48px"}),(function(e){return e.main?"40px 0 12px":"0"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.main?"28px":"32px"}),(function(e){return e.main?"32px":"40px"}),(function(e){return e.main?"16px 0 8px":"0"})),l=r.default.p.withConfig({displayName:"GlobalComponents__SectionText",componentId:"sc-6qzy6y-2"})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:#deb992;@media ","{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ","{font-size:16px;line-height:24px;padding-bottom:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),p=r.default.div.withConfig({displayName:"GlobalComponents__SectionDivider",componentId:"sc-6qzy6y-3"})(["width:1280px;height:3px;border-radius:10px;background-color:#fff;background:#deb992;margin:",";@media ","{width:48px;height:4px;}@media ","{width:32px;height:2px;}"],(function(e){return e.divider?"4rem 0":""}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),c=(r.default.p.withConfig({displayName:"GlobalComponents__SectionSubText",componentId:"sc-6qzy6y-4"})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ","{max-width:672px;font-size:16px;line-height:25px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),r.default.button.withConfig({displayName:"GlobalComponents__SecondaryBtn",componentId:"sc-6qzy6y-5"})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ","{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),r.default.div.withConfig({displayName:"GlobalComponents__ButtonBack",componentId:"sc-6qzy6y-6"})(["width:",";height:",";border-radius:50px;font-size:",";font-weight:600;display:flex;align-items:center;justify-content:center;margin:",";color:#fff;background:",";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:",";@media ","{width:",";height:",";font-size:",";margin-bottom:",";}@media ","{width:100%;height:32px;font-size:14px;margin-bottom:",";}"],(function(e){return e.alt?"150px":"262px"}),(function(e){return e.alt?"52px":"64px"}),(function(e){return e.alt?"20px":"24px"}),(function(e){var t=e.alt,n=e.form;return t||n?"0":"0 0 80px"}),(function(e){return e.alt?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"150px":"184px"}),(function(e){return e.alt?"52px":"48px"}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.alt?"0":"64px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.alt?"0":"32px"})),r.default.button.withConfig({displayName:"GlobalComponents__ButtonFront",componentId:"sc-6qzy6y-7"})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:",";opacity:",";transition:0.4s ease;font-size:",";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:",";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ","{font-size:",";}@media ","{font-size:14px;}"],(function(e){return e.alt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"}),(function(e){return e.disabled?".5":"1"}),(function(e){return e.alt?"20px":"24px"}),(function(e){return e.disabled?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.alt?"20px":"16px"}),(function(e){return e.theme.breakpoints.sm})),r.default.div.withConfig({displayName:"GlobalComponents__LinkContainer",componentId:"sc-6qzy6y-8"})(["margin-left:",";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ","{margin-left:",";}@media ","{margin-left:",";}"],(function(e){return e.large?"24px":"16px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.large?"16px":"8px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"0":"8px"})),r.default.div.withConfig({displayName:"GlobalComponents__LinkIconImg",componentId:"sc-6qzy6y-9"})(["display:flex;height:",";@media ","{height:",";}@media ","{height:",";}"],(function(e){return e.large?"32px":"24px"}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.nav?"16px":"24px"}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.large?"32px":"16px"})),r.default.div.withConfig({displayName:"HeroStyles__LeftSection",componentId:"pbjia3-0"})(["width:100%;@media ","{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ","{width:100%;display:flex;flex-direction:column;margin:0 auto;}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.md}))),m=function(e){return(0,i.jsx)(s,{row:!0,nopadding:!0,children:(0,i.jsxs)(c,{children:[(0,i.jsxs)(d,{main:!0,center:!0,"data-aos":"fade-right","data-aos-duration":"2000","data-aos-delay":"2000",children:["Alex Ludlow ",(0,i.jsx)("br",{}),"Junior Software Developer"]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),(0,i.jsx)(l,{"data-aos":"fade-right","data-aos-duration":"2000","data-aos-delay":"3000",children:"Hi, I am learning how to create things!"}),(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),(0,i.jsx)(p,{"data-aos":"fade-right","data-aos-duration":"2000","data-aos-delay":"1000"})]})})},u=r.default.img.withConfig({displayName:"ProjectsStyles__Img",componentId:"l76idc-0"})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]),f=r.default.section.withConfig({displayName:"ProjectsStyles__GridContainer",componentId:"l76idc-1"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ","{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"],(function(e){return e.theme.breakpoints.sm})),x=r.default.div.withConfig({displayName:"ProjectsStyles__BlogCard",componentId:"l76idc-2"})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ","{width:100%;}"],(function(e){return e.theme.breakpoints.sm})),h=r.default.div.withConfig({displayName:"ProjectsStyles__TitleContent",componentId:"l76idc-3"})(["text-align:center;z-index:20;width:100%;font-weight:700;"]),g=r.default.h3.withConfig({displayName:"ProjectsStyles__HeaderThree",componentId:"l76idc-4"})(["font-weight:500;letter-spacing:2px;color:",";padding:0.5rem 0;font-size:",";"],o,(function(e){return e.title?"3rem":"2rem"})),b=r.default.hr.withConfig({displayName:"ProjectsStyles__Hr",componentId:"l76idc-5"})(["width:50px;height:3px;margin:20px auto;border:0;background:",";"],a),y=(r.default.div.withConfig({displayName:"ProjectsStyles__Intro",componentId:"l76idc-6"})(['width:170px;margin:0 auto;color:#dce3e7;font-family:"Droid Serif",serif;font-size:13px;font-style:italic;line-height:18px;']),r.default.p.withConfig({displayName:"ProjectsStyles__CardInfo",componentId:"l76idc-7"})(["width:100%;padding:0 50px;color:",";font-style:2rem;line-height:24px;text-align:justify;@media ","{padding:0.3rem;}"],a,(function(e){return e.theme.breakpoints.sm}))),w=r.default.ul.withConfig({displayName:"ProjectsStyles__UtilityList",componentId:"l76idc-8"})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]),j=r.default.a.withConfig({displayName:"ProjectsStyles__ExternalLinks",componentId:"l76idc-9"})(["color:",";font-size:1.6rem;padding:1rem 1.5rem;background:#0c3654;border-radius:15px;transition:0.5s;&:hover{background:#145a8c;}"],o),v=r.default.ul.withConfig({displayName:"ProjectsStyles__TagList",componentId:"l76idc-10"})(["display:flex;justify-content:space-around;padding:2rem;"]),k=r.default.li.withConfig({displayName:"ProjectsStyles__Tag",componentId:"l76idc-11"})(["color:",";font-size:1.5rem;"],a),_=[{title:"NC Games API",description:"Using Node.Js, Express, PgSQL I created a RESTful API that contains information about Board Games. Endpoints were created using express routes and tested using Jest. It is currently hosted on Heroku",image:"/images/1.png",tags:["PgSQL","Express","Node, Heroku"],source:"https://github.com/AJLud/wwe-hall-of-game",visit:"https://wwe-hall-of-game.herokuapp.com/api",id:0},{title:"NC-Games",description:"Using React.Js I created a Front-End application to interact with the NC-Games API I created. I also used this as an opportunity to add weird and silly CSS effects.",image:"/images/2.png",tags:["React","JavaScript"],source:"https://github.com/AJLud/bored-games",visit:"https://bored-games-r-us.netlify.app/",id:1},{title:"My-tinerary",description:"In our final group project at Northcoders, 3 other students and myself created a Travel Planning App using React based Ionic 5 and Google Cloud Firestore as our back-end as a service. This is currently not hosted.",image:"/images/3.jpg",tags:["React","Ionic","Firebase"],source:"https://github.com/AJLud/My-tinerary",visit:"https://google.com",id:2}],C=function(){return(0,i.jsxs)(s,{nopadding:!0,id:"projects","data-aos":"fade-right","data-aos-duration":"2000","data-aos-delay":"1000",children:[(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(d,{main:!0,children:"Projects"}),(0,i.jsx)(f,{children:_.map((function(e){var t=e.id,n=e.image,r=e.title,o=e.description,a=e.tags,s=e.source,d=e.visit;return(0,i.jsxs)(x,{children:[(0,i.jsx)(u,{src:n}),(0,i.jsxs)(h,{children:[(0,i.jsx)(g,{title:!0,children:r}),(0,i.jsx)(b,{})]}),(0,i.jsx)(y,{children:o}),(0,i.jsxs)("div",{children:[(0,i.jsx)("br",{}),(0,i.jsx)(h,{children:"Stack"}),(0,i.jsx)(v,{children:a.map((function(e,t){return(0,i.jsx)(k,{children:e},t)}))})]}),(0,i.jsxs)(w,{children:[(0,i.jsx)(j,{href:d,children:"Code"}),(0,i.jsx)(j,{href:s,children:"Source"})]})]},t)}))})]})},I=n(859),N=n(2821),z=(r.default.div.withConfig({displayName:"TechnologiesStyles__ImageContainer",componentId:"sc-1ehw0pq-0"})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ","{background-image:none;padding:0;margin-top:40px;}@media ","{background-image:none;padding:0;margin-top:16px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md})),r.default.img.withConfig({displayName:"TechnologiesStyles__MainImage",componentId:"sc-1ehw0pq-1"})(["width:100%;"]),r.default.ul.withConfig({displayName:"TechnologiesStyles__List",componentId:"sc-1ehw0pq-2"})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ","{margin:64px 0;}@media ","{margin:64px 0;gap:24px}@media ","{display:flex;flex-direction:column;margin:32px 0;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),S=r.default.div.withConfig({displayName:"TechnologiesStyles__ListContainer",componentId:"sc-1ehw0pq-3"})(["display:flex;flex-direction:column;@media ","{display:flex;margin-left:18px;}"],(function(e){return e.theme.breakpoints.sm})),L=r.default.h4.withConfig({displayName:"TechnologiesStyles__ListTitle",componentId:"sc-1ehw0pq-4"})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ","{font-size:24px;line-height:28px;}@media ","{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),E=r.default.p.withConfig({displayName:"TechnologiesStyles__ListParagraph",componentId:"sc-1ehw0pq-5"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ","{font-size:16px;line-height:28px;}@media ","{font-size:14px;line-height:22px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),P=r.default.li.withConfig({displayName:"TechnologiesStyles__ListItem",componentId:"sc-1ehw0pq-6"})(["max-width:320px;display:flex;flex-direction:column;@media ","{max-width:203px;}@media ","{margin-bottom:14px;max-width:320px;flex-direction:row;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),F=(r.default.img.withConfig({displayName:"TechnologiesStyles__ListIcon",componentId:"sc-1ehw0pq-7"})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ","{width:40px;height:40px;margin-bottom:8px;}@media ","{width:32px;height:32px;margin-bottom:0px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),function(){return(0,i.jsxs)(s,{id:"tech",children:[(0,i.jsx)(p,{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(d,{children:"Technologies"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(l,{children:"Over my time so far I have learnt to use different technologies to create different things!"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(z,{children:[(0,i.jsxs)(P,{children:[(0,i.jsx)(I.GR$,{size:"3rem"}),(0,i.jsxs)(S,{children:[(0,i.jsx)(L,{children:"Front-End"}),(0,i.jsxs)(E,{children:["Experience with ",(0,i.jsx)("br",{})," React.js, HTML, CSS."]})]})]}),(0,i.jsxs)(P,{children:[(0,i.jsx)(I.BwW,{size:"3rem"}),(0,i.jsxs)(S,{children:[(0,i.jsx)(L,{children:"Back-End"}),(0,i.jsxs)(E,{children:["Experience with ",(0,i.jsx)("br",{})," Node.js, Express,",(0,i.jsx)("br",{})," PGSQL, Firebase"]})]})]}),(0,i.jsxs)(P,{children:[(0,i.jsx)(N.Dp5,{size:"3rem"}),(0,i.jsxs)(S,{children:[(0,i.jsx)(L,{children:"Other-Tools"}),(0,i.jsxs)(E,{children:["Experience with ",(0,i.jsx)("br",{})," Figma, Jira"]})]})]})]})]})}),T=function(){return(0,i.jsxs)(s,{id:"about",children:[(0,i.jsx)(p,{}),(0,i.jsx)("br",{}),(0,i.jsx)(d,{children:"About Me"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(l,{children:["Hello! I am Alex. I am Northcoders Bootcamp Graduate. Graduating the Bootcamp has made me discover how much fun coding can be (and how frustrating sometimes...) but also incredibly rewarding.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"In my previous life I worked as a camera assistant in the TV and Film industry, working on some incredible shows with some really excellent teams!",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Making this career change has ignited my passion for learning again, and I have only yet dipped my toe in the pond.",(0,i.jsx)("br",{}),"In my spare time I enjoy a bit of gaming and I love going out onto the water with my Paddleboard!"]})]})},D=r.default.div.withConfig({displayName:"HeaderStyles__Container",componentId:"sc-9w0vkp-0"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ","{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"],(function(e){return e.theme.breakpoints.sm})),G=r.default.div.withConfig({displayName:"HeaderStyles__Div1",componentId:"sc-9w0vkp-1"})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ","{grid-area:1 / 1 / 2 / 3;}"],(function(e){return e.theme.breakpoints.sm})),q=r.default.div.withConfig({displayName:"HeaderStyles__Div2",componentId:"sc-9w0vkp-2"})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ","{grid-area:2 / 2 / 3 / 5;}"],(function(e){return e.theme.breakpoints.sm})),O=r.default.div.withConfig({displayName:"HeaderStyles__Div3",componentId:"sc-9w0vkp-3"})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ","{align-items:center;grid-area:1 / 4 / 2 / 6;}"],(function(e){return e.theme.breakpoints.sm})),H=r.default.a.withConfig({displayName:"HeaderStyles__NavLink",componentId:"sc-9w0vkp-4"})(["font-size:2rem;line-height:32px;color:",";transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ","{padding:0.5rem;}"],o,(function(e){return e.theme.breakpoints.sm})),M=r.default.a.withConfig({displayName:"HeaderStyles__SocialIcons",componentId:"sc-9w0vkp-5"})(["transition:0.3s ease;color:#1ba098;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;color:#ffffff;}"]),R=r.default.section.withConfig({displayName:"FooterStyles__FooterWrapper",componentId:"sc-1ifsifd-0"})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ","{padding:0 16px 48px;width:calc(100vw - 32px);}"],(function(e){return e.theme.breakpoints.sm})),A=r.default.a.withConfig({displayName:"FooterStyles__LinkItem",componentId:"sc-1ifsifd-1"})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ","{font-size:16px;line-height:28px;display:flex;}@media ","{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),B=r.default.div.withConfig({displayName:"FooterStyles__SocialIconsContainer",componentId:"sc-1ifsifd-2"})(["max-width:1040px;display:flex;justify-content:space-between;@media ","{display:flex;justify-content:space-between;}@media ","{display:flex;width:100%;flex-direction:column;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),J=r.default.div.withConfig({displayName:"FooterStyles__CompanyContainer",componentId:"sc-1ifsifd-3"})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ","{flex-direction:column;align-items:baseline;}@media ","{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),U=r.default.p.withConfig({displayName:"FooterStyles__Slogan",componentId:"sc-1ifsifd-4"})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ","{font-size:16px;line-height:28px;}@media ","{line-height:22px;font-size:14px;min-width:100px;}"],(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm})),K=(r.default.div.withConfig({displayName:"FooterStyles__SocialContainer",componentId:"sc-1ifsifd-5"})(["display:flex;align-items:center;@media ","{justify-content:center;padding-right:16px;flex-wrap:wrap;}"],(function(e){return e.theme.breakpoints.md})),r.default.ul.withConfig({displayName:"FooterStyles__LinkList",componentId:"sc-1ifsifd-6"})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ","{padding:32px 0 16px;}@media ","{width:100%;padding:32px 0 16px;gap:16px;}@media ","{width:100%;padding:32px 4px 16px;gap:5px;}"],(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.breakpoints.md}),(function(e){return e.theme.breakpoints.sm}))),Q=r.default.div.withConfig({displayName:"FooterStyles__LinkColumn",componentId:"sc-1ifsifd-7"})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]),W=r.default.h4.withConfig({displayName:"FooterStyles__LinkTitle",componentId:"sc-1ifsifd-8"})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ","{font-size:10px;line-height:12px;margin-bottom:8px;}"],(function(e){return e.theme.breakpoints.sm})),X=function(){return(0,i.jsxs)(R,{children:[(0,i.jsxs)(K,{children:[(0,i.jsxs)(Q,{children:[(0,i.jsx)(W,{children:"Call"}),(0,i.jsx)(A,{href:"tel:07845822598",children:"07845822598"})]}),(0,i.jsxs)(Q,{children:[(0,i.jsx)(W,{children:"Email"}),(0,i.jsx)(A,{href:"mailto:a.ludlowww@gmail.com",children:"a.ludlowww@gmail.com"})]})]}),(0,i.jsxs)(B,{children:[(0,i.jsx)(J,{children:(0,i.jsx)(U,{children:"Don't hesitate to get in touch"})}),(0,i.jsx)(M,{href:"https://github.com/AJLud",children:(0,i.jsx)(N.RrF,{size:"3rem"})}),(0,i.jsx)(M,{href:"https://www.linkedin.com/in/alex-ludlow-b97359211/",children:(0,i.jsx)(N._iD,{size:"3rem"})})]})]})},V=n(1664),$=n(9352),Y=function(){return(0,i.jsxs)(D,{children:[(0,i.jsx)(G,{children:(0,i.jsxs)(H,{href:"/",children:[(0,i.jsx)($.KaR,{size:"3rem"})," Portfolio"]})}),(0,i.jsxs)(q,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(V.default,{href:"#projects",children:(0,i.jsx)(H,{children:"Projects"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(V.default,{href:"#tech",children:(0,i.jsx)(H,{children:"Technologies"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(V.default,{href:"#about",children:(0,i.jsx)(H,{children:"About"})})})]}),(0,i.jsxs)(O,{children:[(0,i.jsx)(M,{href:"https://github.com/AJLud",children:(0,i.jsx)(N.RrF,{size:"3rem"})}),(0,i.jsx)(M,{href:"https://www.linkedin.com/in/alex-ludlow-b97359211/",children:(0,i.jsx)(N._iD,{size:"3rem"})})]})]})},Z=r.default.div.withConfig({displayName:"LayoutStyles__Container",componentId:"mzu455-0"})(["max-width:1280px;width:100%;margin:auto;"]),ee=function(e){var t=e.children;return(0,i.jsxs)(Z,{children:[(0,i.jsx)(Y,{}),(0,i.jsx)("main",{children:t}),(0,i.jsx)(X,{})]})},te=function(){return(0,i.jsxs)(ee,{children:[(0,i.jsx)(s,{grid:!0,children:(0,i.jsx)(m,{})}),(0,i.jsx)(C,{}),(0,i.jsx)(F,{}),(0,i.jsx)(T,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1737)}])},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function d(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),d(e.child))}))}function l(e){return function(t){return i.createElement(p,a({attr:a({},e.attr)},t),d(e.child))}}function p(e){var t=function(t){var n,r=e.attr,o=e.size,d=e.title,l=s(e,["attr","size","title"]),p=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),d&&i.createElement("title",null,d),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}}},function(e){e.O(0,[937,921,617,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);