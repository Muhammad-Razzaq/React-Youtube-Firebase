(this["webpackJsonpfirebase-react-auth"]=this["webpackJsonpfirebase-react-auth"]||[]).push([[0],{52:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(19),s=a.n(n),i=a(55),j=a(15),l=a.n(j),o=a(18),u=a(8),d=a(58),b=a(56),p=a(57),O=a(54),h=a(33),x=(a(43),h.a.initializeApp({apiKey:"AIzaSyBdDFeOgyA5B8p6URwPAnzUJQSDNbSjFFQ",authDomain:"auth-development-75666.firebaseapp.com",databaseURL:"https://auth-development-75666-default-rtdb.firebaseio.com/",projectId:"auth-development-75666",storageBucket:"auth-development-75666.appspot.co",messagingSenderId:"514196228631",appId:"1:514196228631:web:7509973218331ddfcaaa52"})),m=x.auth(),f=a(1),v=c.a.createContext();function w(){return Object(r.useContext)(v)}function g(e){var t=e.children,a=Object(r.useState)(),c=Object(u.a)(a,2),n=c[0],s=c[1],i=Object(r.useState)(!0),j=Object(u.a)(i,2),l=j[0],o=j[1];Object(r.useEffect)((function(){return m.onAuthStateChanged((function(e){s(e),o(!1)}))}),[]);var d={currentUser:n,login:function(e,t){return m.signInWithEmailAndPassword(e,t)},signup:function(e,t){return m.createUserWithEmailAndPassword(e,t)},logout:function(){return m.signOut()},resetPassword:function(e){return m.sendPasswordResetEmail(e)},updateEmali:function(e){return n.updateEmali(e)},updatePassword:function(e){return n.updatePassword(e)}};return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(v.Provider,{value:d,children:!l&&t})})}var y=a(7),S=a(10);function P(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),c=w().signup,n=Object(r.useState)(),s=Object(u.a)(n,2),i=s[0],j=s[1],h=Object(r.useState)(!1),x=Object(u.a)(h,2),m=x[0],v=x[1],g=Object(y.g)();function P(){return(P=Object(o.a)(l.a.mark((function r(n){return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){r.next=3;break}return r.abrupt("return",j("Password donot matched"));case 3:return r.prev=3,j(""),v(!0),r.next=8,c(e.current.value,t.current.value);case 8:g.push("/"),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),j("Failed to create an account");case 14:v(!1);case 15:case"end":return r.stop()}}),r,null,[[3,11]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{children:Object(f.jsxs)(d.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(f.jsx)(b.a,{variant:"danger",children:i}),Object(f.jsxs)(p.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(f.jsxs)(p.a.Group,{id:"email",children:[Object(f.jsx)(p.a.Label,{children:"Email"}),Object(f.jsx)(p.a.Control,{type:"email",ref:e,required:!0})]}),Object(f.jsxs)(p.a.Group,{id:"password",children:[Object(f.jsx)(p.a.Label,{children:"Password"}),Object(f.jsx)(p.a.Control,{type:"password",ref:t,required:!0})]}),Object(f.jsxs)(p.a.Group,{id:"password-confirm",children:[Object(f.jsx)(p.a.Label,{children:"Password Confirmation"}),Object(f.jsx)(p.a.Control,{type:"password",ref:a,required:!0})]}),Object(f.jsx)(O.a,{disabled:m,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(f.jsx)(S.b,{to:"/login",children:"Log In"})]})]})}function N(){var e=Object(r.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],n=w(),s=n.currentUser,i=n.logout,j=Object(y.g)();function p(){return(p=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,i();case 4:j.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{children:Object(f.jsxs)(d.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),a&&Object(f.jsx)(b.a,{variant:"danger",children:a}),Object(f.jsx)("strong",{children:"Email : "})," ",s.email,Object(f.jsx)(S.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(O.a,{variant:"link",onClick:function(){return p.apply(this,arguments)},children:"Log Out"})})]})}function k(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=w().login,c=Object(r.useState)(),n=Object(u.a)(c,2),s=n[0],i=n[1],j=Object(r.useState)(!1),h=Object(u.a)(j,2),x=h[0],m=h[1],v=Object(y.g)();function g(){return(g=Object(o.a)(l.a.mark((function r(c){return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,i(""),m(!0),r.next=6,a(e.current.value,t.current.value);case 6:v.push("./"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),i("Failed to log in");case 12:m(!1);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{children:Object(f.jsxs)(d.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(f.jsx)(b.a,{variant:"danger",children:s}),Object(f.jsxs)(p.a,{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(f.jsxs)(p.a.Group,{id:"email",children:[Object(f.jsx)(p.a.Label,{children:"Email"}),Object(f.jsx)(p.a.Control,{type:"email",ref:e,required:!0})]}),Object(f.jsxs)(p.a.Group,{id:"password",children:[Object(f.jsx)(p.a.Label,{children:"Password"}),Object(f.jsx)(p.a.Control,{type:"password",ref:t,required:!0})]}),Object(f.jsx)(O.a,{disabled:x,className:"w-100",type:"submit",children:"Log In"})]}),Object(f.jsx)("div",{className:"w-100 text-center mt-3",children:Object(f.jsx)(S.b,{to:"/forgot-password",children:"Forgot Password"})})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(f.jsx)(S.b,{to:"/signup",children:"Sign Up"})]})]})}var C=a(23),L=a(37);function F(e){var t=e.component,a=Object(L.a)(e,["component"]),r=w().currentUser;return Object(f.jsx)(y.b,Object(C.a)(Object(C.a)({},a),{},{render:function(e){return r?Object(f.jsx)(t,Object(C.a)({},e)):Object(f.jsx)(y.a,{to:"/login"})}}))}function U(){var e=Object(r.useRef)(),t=w().resetPassword,a=Object(r.useState)(),c=Object(u.a)(a,2),n=c[0],s=c[1],i=Object(r.useState)(),j=Object(u.a)(i,2),h=j[0],x=j[1],m=Object(r.useState)(!1),v=Object(u.a)(m,2),g=v[0],y=v[1];function P(){return(P=Object(o.a)(l.a.mark((function a(r){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,x(""),s(""),y(!0),a.next=7,t(e.current.value);case 7:x("Check your inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),s("Failed to reset password");case 13:y(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{children:Object(f.jsxs)(d.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),n&&Object(f.jsx)(b.a,{variant:"danger",children:n}),h&&Object(f.jsx)(b.a,{variant:"success",children:h}),Object(f.jsxs)(p.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(f.jsxs)(p.a.Group,{id:"email",children:[Object(f.jsx)(p.a.Label,{children:"Email"}),Object(f.jsx)(p.a.Control,{type:"email",ref:e,required:!0})]}),Object(f.jsx)(O.a,{disabled:g,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(f.jsx)("div",{className:"w-100 text-center mt-3",children:Object(f.jsx)(S.b,{to:"/login",children:"Login"})})]})}),Object(f.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(f.jsx)(S.b,{to:"/signup",children:"Sign Up"})]})]})}function R(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),c=w(),n=c.currentUser,s=c.updateEmail,i=c.updatePassword,j=Object(r.useState)(),l=Object(u.a)(j,2),o=l[0],h=l[1],x=Object(r.useState)(!1),m=Object(u.a)(x,2),v=m[0],g=m[1],P=Object(y.g)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{children:Object(f.jsxs)(d.a.Body,{children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),o&&Object(f.jsx)(b.a,{variant:"danger",children:o}),Object(f.jsxs)(p.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==a.current.value)return h("Password donot matched");var c=[];g(!0),h(""),e.current.value!==n.email&&c.push(s(e.current.value)),t.current.value&&c.push(i(t.current.value)),Promise.all(c).then((function(){P.push("/")})).catch((function(){h("Failed to update account")})).finally((function(){g(!1)}))},children:[Object(f.jsxs)(p.a.Group,{id:"email",children:[Object(f.jsx)(p.a.Label,{children:"Email"}),Object(f.jsx)(p.a.Control,{type:"email",ref:e,defaultValue:n.email,required:!0})]}),Object(f.jsxs)(p.a.Group,{id:"password",children:[Object(f.jsx)(p.a.Label,{children:"Password"}),Object(f.jsx)(p.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(f.jsxs)(p.a.Group,{id:"password-confirm",children:[Object(f.jsx)(p.a.Label,{children:"Password Confirmation"}),Object(f.jsx)(p.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})]}),Object(f.jsx)(O.a,{disabled:v,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(f.jsx)("div",{className:"w-100 text-center mt-2",children:Object(f.jsx)(S.b,{to:"/",children:"Cancel"})})]})}var E=function(){return Object(f.jsx)(g,{children:Object(f.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(f.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(f.jsx)(S.a,{children:Object(f.jsx)(g,{children:Object(f.jsxs)(y.d,{children:[Object(f.jsx)(F,{exact:!0,path:"/",component:N}),Object(f.jsx)(F,{path:"/update-profile",component:R}),Object(f.jsx)(y.b,{path:"/signup",component:P}),Object(f.jsx)(y.b,{path:"/login",component:k}),Object(f.jsx)(y.b,{path:"/forgot-password",component:U})]})})})})})})};a(51);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.f2a4c8e5.chunk.js.map