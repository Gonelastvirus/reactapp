(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},26:function(e,t,a){e.exports=a(47)},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),r=a(22),o=a.n(r),i=(a(20),a(10)),l=a(23),u=a.n(l),p=a(17),d=a(24),s=(Object(d.a)({apiKey:"AIzaSyAqxrTtpuAmvtjLCMvxkkSyJoeaFcZnRqI",authDomain:"carbon-gecko-293516.firebaseapp.com",databaseURL:"https://carbon-gecko-293516-default-rtdb.firebaseio.com",projectId:"carbon-gecko-293516",storageBucket:"carbon-gecko-293516.appspot.com",messagingSenderId:"442495314624",appId:"1:442495314624:web:1d93b8d429dc17047a9b25"}),Object(p.a)());function b(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){var e=Object(p.c)(s,"test/");Object(p.b)(e,function(e){var t=e.val();r(t.float)})},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Air purity"),c.a.createElement(u.a,{id:"gauge-chart",textColor:"#333",nrOfLevels:3,arcsLength:[.0498946875,.146484375,.8046875],colors:["#5BE12C","#F5CD19","#EA4228"],percent:a,arcPadding:5e-6,text:!0}),c.a.createElement("p",null,"your data is ",(1024*a).toFixed(1)),1024*a<=50?c.a.createElement("p",{id:"green"},"You are in Green zone air quality is Satifactory"):1024*a>50&&1024*a<=200?c.a.createElement("p",{id:"yellow"},"You are in Yellow zone air quality acceptable.However it will effect sensetive people"):c.a.createElement("p",{id:"red"},"You are in Red zone. Health warning")))}a(44);var m=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null))},f=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,48)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null))),f()}},[[26,3,2]]]);
//# sourceMappingURL=main.5208edc1.chunk.js.map