(this["webpackJsonpchoose-pokemon-card"]=this["webpackJsonpchoose-pokemon-card"]||[]).push([[0],{31:function(e,t,n){},50:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),s=n(5),r=n.n(s),c=(n(31),n(10)),l=n(21),i=n.n(l),u=(n(50),n(11)),d=n(6),p={pokemonPack:[],resultsPokemons:[],error:"",totalResults:0};function j(e,t){switch(t.type){case"FETCH_SUCCESS":return{pokemonPack:t.payload,resultsPokemons:[],error:"",totalResults:0};case"FETCH_ERROR":return{pokemonPack:[],resultsPokemons:[],error:"Something went wrong"};case"ADD_POKEMON":var n=Object(d.a)(Object(d.a)({},e),{},{pokemonPack:e.pokemonPack.filter((function(e){return e.name!==t.payload[0].name})),resultsPokemons:[].concat(Object(u.a)(e.resultsPokemons),[t.payload[0]]),error:"Choose value",totalResults:e.resultsPokemons.length+1});return console.log("After ADD_POKEMON: ",n),n;case"DELETE_POKEMON":var o=Object(d.a)(Object(d.a)({},e),{},{pokemonPack:[].concat(Object(u.a)(e.pokemonPack),[t.payload]),resultsPokemons:e.resultsPokemons.filter((function(e){return e.id!==t.payload.id})),totalResults:e.resultsPokemons.length-1});return console.log("After DELETE_POKEMON: ",o),o;default:return e}}var m=a.a.createContext(),O=a.a.createContext(),b=m.Provider,k=O.Provider,f=n(79),h=n(1);function P(){var e=Object(o.useContext)(O);return Object(h.jsx)(f.a,{value:e.value||"",onChange:function(t,n){e.setValue(n)},id:"custom-input-demo",options:e.options,renderInput:function(e){return Object(h.jsx)("div",{ref:e.InputProps.ref,children:Object(h.jsx)("input",Object(d.a)({style:{width:192},type:"text"},e.inputProps))})}})}var g=function(){var e=Object(o.useContext)(m);return Object(h.jsxs)("div",{className:"bg",children:[Object(h.jsx)("div",{className:"bg_blacLine"}),Object(h.jsx)("div",{className:"bg_blackCircle",children:Object(h.jsx)("div",{className:"bg_whiteCircle",children:Object(h.jsx)("div",{className:"bg_whiteCircleBlackBorder"})})}),Object(h.jsxs)("div",{className:"form",onDragOver:e.dragOver,children:[Object(h.jsxs)("h2",{children:["Pokemon cards(",e.totalResults,")"]}),Object(h.jsxs)("form",{className:"input-form",onSubmit:e.addPokemon,children:[Object(h.jsx)(P,{}),Object(h.jsx)("button",{style:{width:200},children:"Add"})]}),e.resultsPokemons.map((function(t){return Object(h.jsxs)("div",{className:"pokemonCard",style:{transform:"rotate(".concat(t.number,"deg)")},draggable:"true",onDragEnd:e.dropCard,children:[Object(h.jsx)("div",{className:"invisible-element",children:Object(h.jsx)("div",{className:"close",onClick:function(){return e.dispatch({type:"DELETE_POKEMON",payload:t})},children:"X"})}),Object(h.jsx)("img",{src:t.imageUrl,alt:""})]},t.id)}))]})]})};var v=function(){var e=Object(o.useReducer)(j,p),t=Object(c.a)(e,2),n=t[0],a=t[1],s=n.pokemonPack.map((function(e){return e.name})),r=Object(o.useState)(s[0]),l=Object(c.a)(r,2),u=l[0],d=l[1],m=n.pokemonPack.filter((function(e){return e.name===u}));return Object(o.useEffect)((function(){i.a.get("https://api.pokemontcg.io/v1/cards").then((function(e){a({type:"FETCH_SUCCESS",payload:e.data.cards})})).catch((function(e){a({type:"FETCH_ERROR"}),console.log("error")}))}),[]),Object(h.jsx)(b,{value:{dispatch:a,addPokemon:function(e){e.preventDefault(),u&&(a({type:"ADD_POKEMON",payload:m}),d())},dropCard:function(e){e.target.style.left="".concat(e.pageX-50,"px"),e.target.style.top="".concat(e.pageY-50,"px")},dragOver:function(e){e.stopPropagation(),e.preventDefault()},totalResults:n.totalResults,resultsPokemons:n.resultsPokemons},children:Object(h.jsx)(k,{value:{value:u,options:s,setValue:d},children:Object(h.jsx)(g,{})})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()}},[[57,1,2]]]);
//# sourceMappingURL=main.d69ea6e5.chunk.js.map