(this.webpackJsonpjammmingv2=this.webpackJsonpjammmingv2||[]).push([[0],{144:function(t,e,n){},146:function(t,e,n){},147:function(t,e,n){},148:function(t,e,n){},149:function(t,e,n){},152:function(t,e,n){},153:function(t,e,n){},179:function(t,e){},181:function(t,e){},191:function(t,e){},193:function(t,e){},220:function(t,e){},222:function(t,e){},223:function(t,e){},228:function(t,e){},230:function(t,e){},236:function(t,e){},238:function(t,e){},257:function(t,e){},269:function(t,e){},272:function(t,e){},277:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(0),r=n.n(c),s=n(136),i=n.n(s),o=(n(144),n(16)),u=n.n(o),l=n(32),p=n(46),f=n(18),m=(n(146),function(t){var e=Object(c.useState)(""),n=Object(f.a)(e,2),r=n[0],s=n[1],i=function(){t.onSearch(window.sessionStorage.getItem("term")||r),window.sessionStorage.setItem("term","")};return Object(a.jsxs)("div",{onKeyDown:function(t){return"Enter"===t.key?i():""},className:"SearchBar",children:[Object(a.jsx)("input",{role:"searchbox",value:window.sessionStorage.getItem("term")||r,onChange:function(t){var e=t.target;s(e.value),window.sessionStorage.setItem("term",e.value)},placeholder:"Enter A Song, Album, or Artist"}),Object(a.jsx)("button",{onClick:i,className:"SearchButton",children:"SEARCH"})]})}),d=(n(147),n(148),n(149),function(t){var e=Object(c.useState)(!1),n=Object(f.a)(e,2),r=n[0],s=n[1],i=function(){s((function(t){return!t}))};return Object(a.jsxs)("div",{className:"Track",children:[Object(a.jsxs)("div",{className:"Track-information",children:[Object(a.jsxs)("h3",{children:[t.track.name," ",t.track.preview&&Object(a.jsx)("small",{tabIndex:0,role:"button",style:{cursor:"pointer"},onKeyDown:function(t){return"Enter"===t.key?i():""},onClick:i,children:r?"| click to stop preview \u23f9":"| click to preview \u25b6"})]}),Object(a.jsxs)("p",{children:[t.track.artist," | ",t.track.album]}),r&&t.track.preview&&Object(a.jsx)("audio",{autoPlay:!0,src:t.track.preview})]}),Object(a.jsx)("button",{tabIndex:0,className:"Track-action",onClick:t.isRemoval?function(){return t.onRemove(t.track)}:function(){return t.onAdd(t.track)},children:t.isRemoval?"-":"+"})]})}),j=function(t){return Object(a.jsxs)("div",{className:"TrackList",children:[t.searchResults&&t.searchResults.map((function(e){return Object(a.jsx)(d,{isRemoval:t.isRemoval,onAdd:t.onAdd,track:e},e.id)})),t.playlistTracks&&t.playlistTracks.map((function(e){return Object(a.jsx)(d,{isRemoval:t.isRemoval,onRemove:t.onRemove,track:e},e.id)}))]})},h=function(t){return Object(a.jsxs)("section",{className:"SearchResults",children:[Object(a.jsx)("h2",{children:"Results"}),Object(a.jsx)(j,{isRemoval:!1,onAdd:t.onAdd,searchResults:t.searchResults})]})},b=n(14),v=n.n(b),O=(n(152),function(t){return Object(a.jsxs)("div",{className:"Playlist",children:[Object(a.jsx)("input",{onChange:function(e){var n=e.target;t.onNameChange(n.value),window.sessionStorage.setItem("playlistName",n.value)},value:window.sessionStorage.getItem("playlistName")||t.playlistName}),Object(a.jsx)(j,{isRemoval:!0,onRemove:t.onRemove,playlistTracks:t.playlistTracks}),Object(a.jsx)("button",{onClick:t.onSave,className:"Playlist-save",children:"SAVE TO SPOTIFY"}),Object(a.jsx)("button",{onClick:t.onClear,className:"Playlist-clear",children:"CLEAR PLAYLIST"})]})});O.propType={onNameChange:v.a.func,playlistName:v.a.string,playlistTracks:v.a.array,onRemove:v.a.func,onSave:v.a.func,onClear:v.a.func};n(153);var w=n(39),x=n.n(w),y=n(170),k="",g=0,S=y({length:14,type:"alphanumeric"}),N=function(){return k||(!k&&window.location.href.match(/access_token=([^&]*)/)?(k=window.location.href.match(/access_token=([^&]*)/)[0].split("=")[1],g=1e3*Number(window.location.href.match(/expires_in=([^&]*)/)[0].split("=")[1]),window.history.pushState("Access Token",null,"/"),window.setTimeout((function(){return k=""}),g),k):void(window.location.href="https://accounts.spotify.com/authorize?client_id=".concat("cdef731b0b1440abad772c058cf2ef89","&response_type=token&state=").concat(S,"&scope=playlist-modify-public&redirect_uri=").concat("http:%2F%2Flocalhost:3000%2F")))},R=function(t,e){return Object(l.a)(u.a.mark((function n(){var a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.spotify.com/v1/search",n.next=3,x.a.get("https://api.spotify.com/v1/search",{params:{type:"track",q:t},headers:{Authorization:"Bearer ".concat(e)}});case 3:if((a=n.sent).data){n.next=8;break}return n.abrupt("return",[]);case 8:return n.abrupt("return",a.data.tracks.items.map((function(t){return{id:t.id,name:t.name,artist:t.artists[0].name,album:t.album.name,uri:t.uri,preview:t.preview_url}})));case 9:case"end":return n.stop()}}),n)})))()},T=function(t,e,n){return Object(l.a)(u.a.mark((function a(){var c,r,s,i;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://api.spotify.com/v1/me",a.next=3,x.a.get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){return{id:t.data.id,name:t.data.display_name}}));case 3:return c=a.sent,r="https://api.spotify.com/v1/users/".concat(c.id,"/playlists"),a.next=7,x.a.post(r,{name:t},{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}}).then((function(t){return t.data.id}));case 7:return s=a.sent,i="https://api.spotify.com/v1/playlists/".concat(s,"/tracks"),a.next=11,x.a.post(i,{uris:e},{headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"}}).then((function(t){return t}));case 11:case"end":return a.stop()}}),a)})))()},A=function(t){var e=Object(c.useState)("New Playlist"),n=Object(f.a)(e,2),r=n[0],s=n[1],i=Object(c.useState)([]),o=Object(f.a)(i,2),d=o[0],j=o[1],b=Object(c.useState)(JSON.parse(window.sessionStorage.getItem("playlistTracks"))||[]),v=Object(f.a)(b,2),w=v[0],x=v[1];Object(c.useEffect)((function(){window.sessionStorage.setItem("playlistTracks",JSON.stringify(w))}),[w]);var y=Object(c.useState)(""),k=Object(f.a)(y,2),g=k[0],S=k[1],A=function(){S(N());window.setTimeout((function(){return S("")}),3e6)};Object(c.useEffect)((function(){A()}),[g]);var C=function(){var t=Object(l.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g||A(),t.next=4,R(e,g);case 4:n=t.sent,j(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),I=Object(c.useState)(!1),P=Object(f.a)(I,2),E=P[0],F=P[1],B=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,F(!0),g||A(),e=JSON.parse(window.sessionStorage.getItem("playlistTracks")).map((function(t){return t.uri}))||w.map((function(t){return t.uri})),t.next=6,T(window.sessionStorage.getItem("playlistName")||r,e,g);case 6:window.sessionStorage.setItem("playlistName",""),s("New Playlist"),x([]),F(!1),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("section",{children:[E&&Object(a.jsx)("div",{className:"pageLoading",children:Object(a.jsx)("p",{children:"Saving Playlist"})}),Object(a.jsxs)("h1",{children:["Ja",Object(a.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(a.jsx)("p",{className:"love",children:Object(a.jsx)("small",{children:"made with \u2764 by Funmilola O."})}),Object(a.jsxs)("section",{className:"App",children:[Object(a.jsx)(m,{onSearch:C}),Object(a.jsxs)("div",{className:"App-playlist",children:[Object(a.jsx)(h,{searchResults:d,onAdd:function(t){w.includes(t)?x((function(t){return Object(p.a)(t)})):x((function(e){return[].concat(Object(p.a)(e),[t])}));j((function(e){return e.filter((function(e){return e!==t}))}))}}),Object(a.jsx)(O,{onNameChange:function(t){return s(t)},playlistTracks:w,playlistName:r,onRemove:function(t){var e=t.id;x((function(t){return t.filter((function(t){return t.id!==e}))})),j((function(e){return[].concat(Object(p.a)(e),[t])}))},onSave:B,onClear:function(){x([])}})]})]})]})},C=function(){return Object(a.jsx)(A,{})},I=n(137),P=n(5),E=function(){return Object(a.jsx)(I.a,{children:Object(a.jsx)(P.c,{children:Object(a.jsx)(P.a,{exact:!0,path:"/",component:C})})})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,278)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),F(console.log)}},[[277,1,2]]]);
//# sourceMappingURL=main.3bc9f4dd.chunk.js.map