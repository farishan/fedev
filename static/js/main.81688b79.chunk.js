(this.webpackJsonpfedev=this.webpackJsonpfedev||[]).push([[0],{13:function(e,a,t){e.exports=t(23)},18:function(e,a,t){},19:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),c=t.n(o),l=(t(18),t(19),t(3),t(1)),i=t(4),m=t(6);t(20);m.initializeApp({apiKey:"AIzaSyCOdcyum2EnabsD8vI95q1InEcAn0wEx-U",authDomain:"frontend-developer-indonesia.firebaseapp.com",databaseURL:"https://frontend-developer-indonesia.firebaseio.com",projectId:"frontend-developer-indonesia",storageBucket:"frontend-developer-indonesia.appspot.com",messagingSenderId:"503231267566",appId:"1:503231267566:web:36c405ce56e147d7b229ff",measurementId:"G-BZMX5GBC6P"});var s=m.firestore(),d={postData:function(e,a){console.log("post data",a),s.collection(e).add(a).then((function(e){alert("success"),console.log("Document written with ID: ",e.id)})).catch((function(e){alert("failed"),console.error("Error adding document: ",e)}))},getData:function(e){return new Promise((function(a){s.collection(e).get().then((function(e){var t=[];e.forEach((function(e){var a=Object(l.a)({id:e.id},e.data());t.push(a)})),a(t)}))}))}},u=!1,p=function(e){var a=e.data;return r.a.createElement("div",{className:"border border-gray-400 p-4 h-full"},r.a.createElement("h4",{className:"text-2xl pb-2 border-b mb-2"},a.name),r.a.createElement("div",{className:"text-sm"},r.a.createElement("div",{className:"pb-2 border-b mb-2"},r.a.createElement("p",{className:"mb-2"},a.bio),r.a.createElement("p",null,"Pengalaman bekerja ",a.experience," bulan")),r.a.createElement("div",{className:"pb-2 border-b mb-2"},a.stacks&&a.stacks.map((function(e,a){return r.a.createElement("p",{key:a},e)}))),r.a.createElement("div",{className:"pb-2 mb-2"},r.a.createElement("p",null,a.phone),r.a.createElement("p",null,r.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer"},a.link)),r.a.createElement("p",{className:"mb-2"},r.a.createElement("a",{href:"mailto:".concat(a.email)},a.email)),r.a.createElement("p",{style:{textTransform:"capitalize"}},a.domicile)),"true"===a.available&&r.a.createElement("p",{className:"bg-green-600 p-1 rounded text-white font-bold text-xs text-center"},"Siap Kerja")))},f=function(){var e=r.a.useState([{name:"default"}]),a=Object(i.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){!1===u&&(u=!0,d.getData("developers").then((function(e){n(e)})))}),[]),r.a.createElement("div",{className:"container mx-auto"},r.a.createElement("div",{className:"flex flex-wrap min-w-full md:-mx-4"},t.map((function(e,a){return r.a.createElement("div",{key:a,className:"w-full md:w-1/2 lg:w-1/4 md:px-4 mb-4 object-cover"},r.a.createElement(p,{data:e}))}))))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container mx-auto"},r.a.createElement("h1",{className:"text-4xl font-bold uppercase"},r.a.createElement("a",{href:"/"},"fedev.id")),r.a.createElement("p",null,"Frontend Developer Indonesia")),!1,r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.81688b79.chunk.js.map