(this["webpackJsonpclick-game"]=this["webpackJsonpclick-game"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"id":1,"name":"Ruehin","image":"/assets/10010000 - Ruehin.png"},{"id":2,"name":"Tactical Advantage","image":"/assets/10060000 - Tactical Advantage.png"},{"id":3,"name":"Geralt Igni","image":"/assets/10080000 - Geralt Igni.png"},{"id":4,"name":"Villentretenmerth","image":"/assets/10130000 - Villentretenmerth.png"},{"id":5,"name":"Prize-Winning Cow","image":"/assets/10280000 - Prize-Winning Cow.png"},{"id":6,"name":"Ragh Nar Roog","image":"/assets/10400000 - Ragh Nar Roog.png"},{"id":7,"name":"Alzur_s Double-Cross","image":"/assets/10500000 - Alzur_s Double-Cross.png"},{"id":8,"name":"Hemdall","image":"/assets/12760000 - Hemdall.png"},{"id":9,"name":"Spectral Whale","image":"/assets/12770000 - Spectral Whale.png"},{"id":10,"name":"Vilgefortz","image":"/assets/12890000 - Vilgefortz.png"},{"id":11,"name":"Summoning Circle","image":"/assets/13330000 - Summoning Circle.png"},{"id":12,"name":"Kambi","image":"/assets/12350000 - Kambi.png"}]')},21:function(e,a,t){e.exports=t(33)},26:function(e,a,t){},27:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(6),c=t.n(s),r=(t(26),t(10)),o=t(12),l=t(13),m=t(19),g=t(14),u=t(20),d=t(18),h=t(8),p=t(9),f=t(5);t(27);var k=function(e){return i.a.createElement(f.a,{bg:"dark",variant:"dark",fixed:"top"},i.a.createElement(f.a.Brand,null,"Witcher Click Game"),i.a.createElement(f.a.Collapse,{className:"justify-content-end"},i.a.createElement(f.a.Text,{className:"text-light"},i.a.createElement("h4",null,e.feedback))),i.a.createElement(f.a.Collapse,{className:"justify-content-end"},i.a.createElement(f.a.Text,null,"Score: ",e.score," | High Score: ",e.highScore)))},b=(t(31),t(16));var E=function(e){return i.a.createElement(b.a,{alt:e.name,src:e.image,onClick:function(){return e.handleClick(e.id)},thumbnail:!0,className:"gameCard"})},C=t(17),v=(t(32),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(i)))).state={score:0,highScore:0,picks:[],feedback:"Click An Image To Play",cards:C},t.pointCheck=function(e){t.state.picks.includes(e)?(t.state.highScore<t.state.score&&t.setState({highScore:t.state.score}),t.setState({score:0,feedback:"Hmm... No.",picks:[]})):t.setState({score:t.state.score+1,feedback:"Toss a coin to your Witcher...",picks:[].concat(Object(r.a)(t.state.picks),[e])})},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"renderBoard",value:function(){var e=this,a=Object(r.a)(this.state.cards);return a.sort((function(){return Math.random()-.5})),a.map((function(a){return i.a.createElement(h.a,{xs:3,key:a.id},i.a.createElement(E,{id:a.id,name:a.name,image:a.image,handleClick:e.pointCheck}))}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k,{score:this.state.score,highScore:this.state.highScore,feedback:this.state.feedback}),i.a.createElement(d.a,{className:"cont"},i.a.createElement(p.a,{className:"justify-content-sm-center"},i.a.createElement(h.a,{xs:10},i.a.createElement(p.a,{noGutters:!0},this.renderBoard())))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.4a6f2a34.chunk.js.map