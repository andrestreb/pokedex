(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a.p+"static/media/pokeball.2b4798f5.svg"},135:function(e,t,a){e.exports=a(293)},140:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(9),r=a.n(l),i=(a(140),a(141),a(142),a(77)),c=a(131),s=(a(143),a(126)),m=a.n(s),u=a(326),p=a(328),d=a(329),v=a(330),h=a(332),E=a(130),k=a.n(E),f=a(333),g=Object(u.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}});function b(){var e,t=g(),a=n.a.useState({open:!1,vertical:"top",horizontal:"center"}),o=Object(c.a)(a,2),l=o[0],r=o[1],s=l.vertical,u=l.horizontal,E=l.open;return n.a.createElement("div",{className:t.root},n.a.createElement(p.a,{position:"static"},n.a.createElement(d.a,null,n.a.createElement(h.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:(e={vertical:"top",horizontal:"left"},function(){r(Object(i.a)({open:!0},e))})},n.a.createElement(k.a,null)),n.a.createElement(v.a,{variant:"h6",className:t.title},n.a.createElement("img",{src:m.a,className:"navbar-logo",alt:"pokeball"}),"Pokedex"))),n.a.createElement(f.a,{anchorOrigin:{vertical:s,horizontal:u},key:"".concat(s,",").concat(u),open:E,onClose:function(){r(Object(i.a)({},l,{open:!1}))},autoHideDuration:1e3,ContentProps:{"aria-describedby":"message-id"},message:n.a.createElement("span",{id:"message-id"},"Do not work...yet!")}))}var N=a(55),I=a(25),y=a(57),P=a(56),w=a(26),O=a(58),j=a(331),_=a(4),C=(a(158),a(159),function(e){function t(){var e,a;Object(N.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(y.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(n)))).isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},a}return Object(O.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.error,e.isLoaded,e.pokemon),a=e.pokemonSpecies;e.pokemonEvolution;return n.a.createElement("div",{className:"product-card "+a.color.name},n.a.createElement("div",{className:"product-additional"},n.a.createElement("div",{className:"product-img-card"},n.a.createElement("div",{className:"product-type product-center"},"N\xb0",t.id),n.a.createElement("div",{className:"product-img product-center"},n.a.createElement("img",{src:t.sprites.front_default})),n.a.createElement("div",{className:"product-status product-center"},a.egg_groups[0].name),n.a.createElement("i",{className:"fa fa-language product-center"})),n.a.createElement("div",{className:"product-more-info"},n.a.createElement("h1",null,t.name),n.a.createElement("p",null),n.a.createElement("div",{className:"product-coords"},n.a.createElement("span",null,"Evolution chain:")),n.a.createElement("br",null),this.getEvolutions(),n.a.createElement("div",{className:"product-stats"},n.a.createElement("div",null,n.a.createElement("div",{className:"title"},"Height"),n.a.createElement("i",{className:"fa fa-language"}),n.a.createElement("div",{className:"value"},t.height/10,"m")),n.a.createElement("div",null,n.a.createElement("div",{className:"title"},"weight"),n.a.createElement("i",{className:"fa fa-desktop"}),n.a.createElement("div",{className:"value"},t.weight/10,"kg")),n.a.createElement("div",null,n.a.createElement("div",{className:"title"},"XP"),n.a.createElement("i",{className:"fa fa-feed"}),n.a.createElement("div",{className:"value"},t.base_experience))))),n.a.createElement("div",{className:"product-general"},n.a.createElement("h1",null,t.name),this.getDescriptions(),n.a.createElement("span",{className:"product-more"},"Mouse over the card for more info")))}},{key:"getDescriptions",value:function(){for(var e=0,t=0;0==t;)"en"===this.props.pokemonSpecies.flavor_text_entries[e].language.name?t=1:e+=1;return n.a.createElement("p",null,this.props.pokemonSpecies.flavor_text_entries[e].flavor_text)}},{key:"getEvolutions",value:function(){this.props.pokemonEvolution.chain.evolves_to.secondEvolution;return this.isEmpty(this.props.pokemonEvolution.chain.evolves_to[0])?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"product-evolution"}," - "),n.a.createElement("div",{className:"product-evolution"},"I don't evolve! I'm unique! "),n.a.createElement("div",{className:"product-evolution"}," - ")):this.isEmpty(this.props.pokemonEvolution.chain.evolves_to[0].evolves_to[0])?this.isEmpty(this.props.pokemonEvolution.chain.evolves_to[1])?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"product-evolution"},this.props.pokemonEvolution.chain.species.name),n.a.createElement("div",{className:"product-evolution"},this.props.pokemonEvolution.chain.evolves_to[0].species.name),n.a.createElement("div",{className:"product-evolution"}," - ")):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"product-evolution"},this.props.pokemonEvolution.chain.species.name),n.a.createElement("div",{className:"product-evolution2"},this.props.pokemonEvolution.chain.evolves_to.map(function(e,t){return n.a.createElement("span",{key:t},e.species.name,", ")}))):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"product-evolution"},this.props.pokemonEvolution.chain.species.name),n.a.createElement("div",{className:"product-evolution"},this.props.pokemonEvolution.chain.evolves_to[0].species.name),n.a.createElement("div",{className:"product-evolution"},this.props.pokemonEvolution.chain.evolves_to[0].evolves_to[0].species.name))}}]),t}(o.Component)),S=(a(160),"https://pokeapi.co/api/v2/pokemon/"),A="https://pokeapi.co/api/v2/pokemon-species/",x=Object(_.a)({root:{"& label.Mui-focused":{color:"white"},"& label":{color:"white"},"& .MuiInputBase-input":{color:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"grey"},"&.Mui-focused fieldset":{borderColor:"green"}}}})(j.a),M=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(y.a)(this,Object(P.a)(t).call(this,e))).callEvolutionChainAPI=function(){console.log("Pokemon Evolution API called"),fetch(a.state.pokemonSpecies.evolution_chain.url).then(function(e){return e.json()}).then(function(e){a.setState({isLoaded:!0,pokemonEvolution:e})})},a.callPokemonAPI=function(e){var t=fetch(S+a.state.pokemonId),o=fetch(A+a.state.pokemonId);Promise.all([t,o]).then(function(e){return Promise.all(e.map(function(e){return e.json()}))}).then(function(e){a.setState({pokemon:e[0],pokemonSpecies:e[1]},function(){a.callEvolutionChainAPI()})},function(e){a.setState({isLoaded:!0,error:e})})},a.state={error:null,isLoaded:!1,pokemon:[],pokemonSpecies:[],pokemonEvolution:[],pokemonEvolutions:1,pokemonIdReady:!0,pokemonId:1},a.handleChange=a.handleChange.bind(Object(w.a)(a)),a.callPokemonAPI=a.callPokemonAPI.bind(Object(w.a)(a)),a}return Object(O.a)(t,e),Object(I.a)(t,[{key:"handleChange",value:function(e){var t=this,a="";e.target.value>0&e.target.value<808?(a=e.target.value,this.setState({pokemonIdReady:!0,pokemonId:a},function(){t.callPokemonAPI(t.state.pokemonId)})):this.setState({pokemonIdReady:!1,pokemonId:a})}},{key:"componentDidMount",value:function(){console.log("Pokemon - Mounted"),1==this.state.pokemonIdReady&&(this.callPokemonAPI(this.state.pokemonId),console.log("Pokemon API called")),this.setState({pokemonIdReady:!1})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,o=e.pokemon,l=e.pokemonSpecies,r=e.pokemonEvolution,i=e.pokemonId;return t?n.a.createElement("div",null,"Error: ",t.message):a?n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{id:"outlined-number",type:"number",label:"Pokemon ID",value:i,onChange:this.handleChange,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined"}),n.a.createElement(C,{pokemonId:i,pokemon:o,pokemonSpecies:l,pokemonEvolution:r})):n.a.createElement("div",null,"Loading...")}}]),t}(o.Component);var L=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,null),n.a.createElement("header",{className:"App-header"},n.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[135,1,2]]]);
//# sourceMappingURL=main.181ad206.chunk.js.map