(this.webpackJsonpminiblog=this.webpackJsonpminiblog||[]).push([[0],{109:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(18),s=r.n(c),i=(r(96),r(8)),o=r.n(i),u=r(11),l=r(21),j=r(144),p=r(145),h=r(139),b=r(143),d=r(20),f=r(19);f.a.initializeApp({apiKey:"AIzaSyC8C_w-6dzqWhZ7XFx5WV5bEp7aiMgjXiQ",authDomain:"miniblog-01.firebaseapp.com",projectId:"miniblog-01",storageBucket:"miniblog-01.appspot.com",messagingSenderId:"753468044906",appId:"1:753468044906:web:e6d7eb1eac142fbabf7c13"});var x=f.a;function O(){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(o.a.mark((function e(){var t,r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.a.auth.GoogleAuthProvider,e.next=3,f.a.auth().signInWithPopup(t);case 3:return r=e.sent,e.prev=4,n=r.user,e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(4),(a=e.t0.message)&&console.log(a),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function v(){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.auth().signOut().then((function(){})).catch((function(e){return e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.firestore().collection("users").doc("".concat(t)).get();case 3:return r=e.sent,e.abrupt("return",r.data());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(e){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.firestore().collection("users").doc("".concat(t.uid)).set({displayName:t.displayName,photoURL:t.photoURL,uid:t.uid,following:[],followers:[]});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function U(e,t,r,n){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(o.a.mark((function e(t,r,n,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.firestore().collection("posts").add({title:t,body:r,author:n,authorId:a,createdAt:Date.now()});case 3:return c=e.sent,f.a.firestore().collection("posts").doc("".concat(c.id)).update({postId:c.id}),e.abrupt("return",1);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function C(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.firestore().collection("posts").where("authorId","==","".concat(t)).get();case 3:return r=e.sent,n=[],r.forEach((function(e){n.push(e.data())})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function W(e){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(o.a.mark((function e(t){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:if(r=e.sent,0!==(n=r.following).length){e.next=9;break}return e.abrupt("return",1);case 9:return e.next=11,f.a.firestore().collection("posts").where("authorId","in",n).orderBy("createdAt").limit(20).get();case 11:if(!(a=e.sent).empty){e.next=16;break}return e.abrupt("return",2);case 16:return e.abrupt("return",a.docs);case 17:e.next=23;break;case 19:return e.prev=19,e.t0=e.catch(0),console.log(e.t0.message),e.abrupt("return",2);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function P(e){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.firestore().collection("posts").doc("".concat(t)).get();case 3:if(!(r=e.sent).exists){e.next=6;break}return e.abrupt("return",r.data());case 6:return e.abrupt("return",1);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function D(e,t){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.firestore().collection("users").doc("".concat(r)).update({followers:f.a.firestore.FieldValue.arrayUnion("".concat(t))});case 2:return e.next=4,f.a.firestore().collection("users").doc("".concat(t)).update({following:f.a.firestore.FieldValue.arrayUnion("".concat(r))});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return R.apply(this,arguments)}function R(){return(R=Object(u.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.firestore().collection("users").doc("".concat(r)).update({followers:f.a.firestore.FieldValue.arrayRemove("".concat(t))});case 2:return e.next=4,f.a.firestore().collection("users").doc("".concat(t)).update({following:f.a.firestore.FieldValue.arrayRemove("".concat(r))});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return V.apply(this,arguments)}function V(){return(V=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.firestore().collection("posts").orderBy("createdAt").limit(15).get();case 2:if((t=e.sent).empty){e.next=7;break}return e.abrupt("return",t.docs);case 7:return e.abrupt("return",1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.firestore().collection("posts").doc("".concat(t)).delete();case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var G=r(4),H=function(e){var t=e.title,r=e.body,n=e.author,a=e.comments,c=e.authorId,s=e.postId,i=e.deletable,l=void 0!==i&&i,j=Object(d.g)(),p=function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(t);case 2:1===(r=e.sent)?alert("There is an error with our servers. Please try again later."):(console.log(r),alert("Post Deleted Successfully!"),j.push("/explore"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsxs)("div",{style:{margin:"4rem 0"},children:[Object(G.jsxs)(h.a,{variant:"h4",onClick:function(){j.push("/post/"+s)},style:{cursor:"pointer"},children:[t,"    "]})," ",l?Object(G.jsx)(b.a,{variant:"contained",color:"secondary",onClick:function(){p(s)},children:"Delete"}):"",Object(G.jsxs)(h.a,{variant:"subtitle2",color:"primary",onClick:function(){j.push("/user/"+c)},style:{cursor:"pointer"},children:["by ",n]}),Object(G.jsx)(h.a,{variant:"body1",children:r}),a>0?Object(G.jsxs)(h.a,{variant:"caption",children:["-",a," comment",1===a?"":"s","-"]}):""]})},M=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),i=s[0],b=s[1];var d=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.auth().currentUser,e.next=3,W(t.uid);case 3:1===(r=e.sent)?b(Object(G.jsx)(h.a,{variant:"body1",align:"center",children:"You are not following anyone."})):2===r?b(Object(G.jsx)(h.a,{variant:"body1",align:"center",children:"An error occured in the server, please try again."})):(n=[],r.map((function(e){n.push(e.data())})),a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),Object(G.jsxs)(j.a,{maxWidth:"sm",children:[Object(G.jsx)(h.a,{style:{margin:"2rem 0",textDecoration:"underline"},align:"center",variant:"h3",children:"Home"}),r&&r.map((function(e,t){return Object(G.jsx)(H,{title:e.title,author:e.author,body:(r=e.body,r.length>500?r.substring(0,500)+"...":r),comments:e.comments?e.comments.length:0,authorId:e.authorId,postId:e.postId},t);var r})),i||"",Object(G.jsx)(p.a,{})]})},J=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],a=t[1];var c=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:1===(t=e.sent)?alert("There was an error, please try again."):(r=[],t.map((function(e){e.data().authorId!==x.auth().currentUser.uid&&r.push(e.data())})),a(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),Object(G.jsxs)(j.a,{maxWidth:"sm",children:[Object(G.jsx)(h.a,{style:{margin:"2rem 0",textDecoration:"underline"},align:"center",variant:"h3",children:"Explore"}),r&&r.map((function(e,t){return Object(G.jsx)(H,{title:e.title,author:e.author,body:(r=e.body,r.length>500?r.substring(0,500)+"...":r),comments:e.comments?e.comments.length:0,authorId:e.authorId,postId:e.postId},t);var r})),Object(G.jsx)(p.a,{})]})},X=r(78),q=r.n(X),K=r(146),Q=function(){var e=Object(d.g)(),t=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O();case 3:t.sent?e.push("/redirect"):alert("There was an error signing in."),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(G.jsx)(j.a,{maxWidth:"sm",style:{height:"100vh"},children:Object(G.jsxs)(K.a,{container:!0,justify:"center",alignItems:"center",children:[Object(G.jsx)(K.a,{item:!0,xs:12,children:Object(G.jsx)(h.a,{align:"center",variant:"h1",style:{margin:"5rem 0"},children:"Miniblog"})}),Object(G.jsx)(K.a,{item:!0,xs:12,children:Object(G.jsx)(h.a,{align:"center",variant:"body1",style:{margin:"3rem 0"},children:"Read and write without any distractions. Let your ideas flow."})}),Object(G.jsx)(K.a,{item:!0,xs:12,align:"center",style:{margin:"3rem 0"},children:Object(G.jsx)(q.a,{onClick:function(){t()},children:"Google"})})]})})},Y=r(150),Z=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(),s=Object(l.a)(c,2),i=s[0],f=s[1],O=Object(d.g)();var m=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:O.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.auth().currentUser,f(t),e.next=4,C(t.uid);case 4:r=e.sent,a(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y()}),[]),Object(G.jsxs)(j.a,{maxWidth:"sm",children:[Object(G.jsxs)(K.a,{container:!0,style:{marginTop:"3rem"},justify:"center",children:[Object(G.jsx)(K.a,{item:!0,children:Object(G.jsx)(Y.a,{style:{width:"100px",height:"100px"},src:i&&i.photoURL,xs:12})}),Object(G.jsx)(K.a,{item:!0,xs:12,children:Object(G.jsx)(h.a,{style:{margin:"2rem 0",textDecoration:"underline"},align:"center",variant:"h3",children:i&&i.displayName})}),Object(G.jsx)(K.a,{item:!0,xs:12,align:"center",children:Object(G.jsx)(b.a,{variant:"contained",color:"secondary",onClick:m,children:"Logout"})})]}),r?r.map((function(e,t){return Object(G.jsx)(H,{title:e.title,author:e.author,body:(r=e.body,r.length>250?r.substring(0,250)+"...":r),comments:e.comments?e.comments.length:0,authorId:e.authorId,postId:e.postId,deletable:!0},t);var r})):"Loading",Object(G.jsx)(p.a,{})]})},_=function(){var e=Object(d.g)(),t=function(){var t=Object(u.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=x.auth().currentUser,t.next=3,g(r.uid);case 3:t.sent?e.push("/explore"):k(r).then(e.push("/explore"));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){t()}),[]),Object(G.jsx)("div",{children:"Redirecting..."})},$=function(){var e=Object(d.g)();return Object(G.jsxs)(j.a,{maxWidth:"sm",children:[Object(G.jsx)(h.a,{variant:"body1",align:"center",style:{margin:"3rem 0"},children:"Oops. The page you are looking for doesn't exist."}),Object(G.jsx)(K.a,{container:!0,justify:"center",children:Object(G.jsx)(K.a,{item:!0,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){e.push("/explore")},children:"Go Home"})})})]})},ee=function(){var e=Object(d.h)(),t=Object(d.g)(),r=Object(n.useState)(),a=Object(l.a)(r,2),c=a[0],s=a[1],i=function(){var t=Object(u.a)(o.a.mark((function t(){var r,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.pathname,n=r.substring(6),t.next=4,P(n);case 4:1===(a=t.sent)?alert("There is an error with our servers, try again later."):s(a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),Object(G.jsxs)(j.a,{maxWidth:"sm",children:[c?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(p.a,{}),Object(G.jsx)(h.a,{variant:"h4",children:c.title}),Object(G.jsxs)(h.a,{variant:"subtitle2",color:"primary",onClick:function(){t.push("/user/"+c.authorId)},style:{cursor:"pointer"},children:["by ",c.author]}),Object(G.jsx)(h.a,{variant:"body1",children:c.body})]}):"Loading...",c&&c.comments>0?Object(G.jsxs)(h.a,{variant:"caption",children:["-",c.comments," comment",1===c.comments?"":"s","-"]}):"",Object(G.jsx)(p.a,{})]})},te=r(149),re=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),i=s[0],d=s[1],f=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.auth().currentUser,e.next=3,U(r,i,t.displayName,t.uid);case 3:1===e.sent?(a(""),d(""),alert("Post Successful")):(a(""),d(""),alert("A problem occured, please try again later."));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(G.jsxs)(j.a,{maxWidth:"sm",children:[Object(G.jsxs)(K.a,{container:!0,spacing:5,children:[Object(G.jsx)(K.a,{item:!0,xs:12,children:Object(G.jsx)(h.a,{variant:"h3",align:"center",style:{marginTop:"3rem",textDecorationLine:"underline"},children:"New Post"})}),Object(G.jsx)(K.a,{item:!0,xs:12,children:Object(G.jsx)(te.a,{style:{width:"100%"},label:"Title",value:r,onChange:function(e){a(e.target.value)}})}),Object(G.jsx)(K.a,{item:!0,xs:12,children:Object(G.jsx)(te.a,{style:{width:"100%"},value:i,multiline:!0,label:"I want to talk about...",onChange:function(e){d(e.target.value)}})}),Object(G.jsx)(K.a,{item:!0,xs:12,children:Object(G.jsx)(b.a,{variant:"contained",color:"primary",onClick:f,children:"Publish"})})]}),Object(G.jsx)(p.a,{})]})},ne=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(),s=Object(l.a)(c,2),i=s[0],f=s[1],O=Object(n.useState)(!1),m=Object(l.a)(O,2),v=m[0],y=m[1],w=Object(n.useState)(!1),k=Object(l.a)(w,2),I=k[0],U=k[1],S=Object(d.h)();var E=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.next=3,D(x.auth().currentUser.uid,i.uid);case 3:y(!0),U(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.next=3,N(x.auth().currentUser.uid,i.uid);case 3:y(!1),U(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.pathname,r=t.substring(6),e.next=4,g(r);case 4:return n=e.sent,f(n),e.next=8,C(r);case 8:c=e.sent,a(c),y(n.followers.includes(x.auth().currentUser.uid));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){L()}),[]),Object(G.jsxs)(j.a,{maxWidth:"sm",children:[Object(G.jsxs)(K.a,{container:!0,style:{marginTop:"3rem"},justify:"center",children:[Object(G.jsx)(K.a,{item:!0,children:Object(G.jsx)(Y.a,{style:{width:"100px",height:"100px"},src:i&&i.photoURL,xs:12})}),Object(G.jsx)(K.a,{item:!0,xs:12,children:Object(G.jsx)(h.a,{style:{margin:"2rem 0",textDecoration:"underline"},align:"center",variant:"h3",children:i&&i.displayName})}),Object(G.jsx)(K.a,{item:!0,xs:12,align:"center",children:Object(G.jsx)(b.a,{disabled:I,variant:"contained",color:v?"default":"primary",onClick:v?W:E,children:v?"Unfollow":"Follow"})})]}),r?r.map((function(e,t){return Object(G.jsx)(H,{title:e.title,author:e.author,body:(r=e.body,r.length>250?r.substring(0,250)+"...":r),comments:e.comments?e.comments.length:0,authorId:e.authorId,postId:e.postId},t);var r})):"Loading",Object(G.jsx)(p.a,{})]})},ae=r(31),ce=r(49),se=r(83),ie=function(e){var t=e.needsUser,r=e.children,n=Object(se.a)(e,["needsUser","children"]),a=x.auth().currentUser;return Object(G.jsx)("div",{children:t?a?Object(G.jsx)(d.b,Object(ce.a)(Object(ce.a)({},n),{},{children:r})):Object(G.jsx)(d.a,{to:"/"}):a?Object(G.jsx)(d.a,{to:"/explore"}):Object(G.jsx)(d.b,Object(ce.a)(Object(ce.a)({},n),{},{children:r}))})},oe=r(147),ue=r(148),le=r(79),je=r.n(le),pe=r(80),he=r.n(pe),be=r(81),de=r.n(be),fe=r(82),xe=r.n(fe),Oe=function(){var e=Object(d.h)(),t=Object(d.g)(),r=Object(n.useState)(),a=Object(l.a)(r,2),c=a[0],s=a[1],i=function(r){var n=e.pathname;(n=n.substring(1))!==r&&t.push("/".concat(r))};return Object(n.useEffect)((function(){var t=e.pathname;t=t.substring(1),s(t)}),[e]),Object(G.jsxs)(oe.a,{showLabels:!0,style:{width:"100%",position:"fixed",bottom:0},value:c,children:[Object(G.jsx)(ue.a,{label:"Home",value:"home",icon:Object(G.jsx)(je.a,{}),onClick:function(){i("home")}}),Object(G.jsx)(ue.a,{label:"Explore",value:"explore",icon:Object(G.jsx)(he.a,{}),onClick:function(){i("explore")}}),Object(G.jsx)(ue.a,{label:"Profile",value:"profile",icon:Object(G.jsx)(de.a,{}),onClick:function(){i("profile")}}),Object(G.jsx)(ue.a,{label:"Write",value:"write",icon:Object(G.jsx)(xe.a,{}),onClick:function(){i("write")}})]})};var me=function(){return x.auth().setPersistence(x.auth.Auth.Persistence.NONE),Object(G.jsx)("div",{style:{height:"100vh"},children:Object(G.jsx)(ae.a,{children:Object(G.jsxs)(d.d,{children:[Object(G.jsx)(ie,{needsUser:!1,path:"/",exact:!0,children:Object(G.jsx)(Q,{})}),Object(G.jsx)(ie,{needsUser:!0,path:"/redirect",exact:!0,children:Object(G.jsx)(_,{})}),Object(G.jsxs)(ie,{needsUser:!0,path:"/home",exact:!0,children:[Object(G.jsx)(M,{}),Object(G.jsx)(Oe,{})]}),Object(G.jsxs)(ie,{needsUser:!0,path:"/explore",exact:!0,children:[Object(G.jsx)(J,{}),Object(G.jsx)(Oe,{})]}),Object(G.jsxs)(ie,{needsUser:!0,path:"/profile",exact:!0,children:[Object(G.jsx)(Z,{}),Object(G.jsx)(Oe,{})]}),Object(G.jsxs)(ie,{needsUser:!0,path:"/post/:id",exact:!0,children:[Object(G.jsx)(ee,{}),Object(G.jsx)(Oe,{})]}),Object(G.jsxs)(ie,{needsUser:!0,path:"/user/:id",exact:!0,children:[Object(G.jsx)(ne,{}),Object(G.jsx)(Oe,{})]}),Object(G.jsxs)(ie,{needsUser:!0,path:"/write",exact:!0,children:[Object(G.jsx)(re,{}),Object(G.jsx)(Oe,{})]}),Object(G.jsx)(ie,{needsUser:!0,path:"/404",exact:!0,children:Object(G.jsx)($,{})}),Object(G.jsx)(d.b,{path:"/",children:Object(G.jsx)(d.a,{to:"/404"})})]})})})};s.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(me,{})}),document.getElementById("root"))},96:function(e,t,r){}},[[109,1,2]]]);
//# sourceMappingURL=main.5bdc7023.chunk.js.map