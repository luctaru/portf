(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,a,t){},129:function(e,a,t){},131:function(e,a,t){},133:function(e,a,t){},135:function(e,a,t){},137:function(e,a,t){},139:function(e,a,t){},141:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),o=t.n(c),i=t(8),l=t(9),s=t(11),m=t(10),u=t(12),d=t(147),p=t(148),E=t(142),f=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{inverse:!0,collapseOnSelect:!0,fixedTop:!0},r.a.createElement(d.a.Header,null,r.a.createElement(d.a.Brand,null,r.a.createElement("a",{href:"#profile"},"LT")),r.a.createElement(d.a.Toggle,null)),r.a.createElement(d.a.Collapse,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{eventKey:1,href:"#profile"},"Perfil"),r.a.createElement(E.a,{eventKey:2,href:"#skills"},"Habilidades"),r.a.createElement(E.a,{eventKey:3,href:"#blog"},"Blog"),r.a.createElement(E.a,{eventKey:4,href:"#portfolio"},"Portf\xf3lio"),r.a.createElement(E.a,{eventKey:5,href:"#about"},"Mais Informa\xe7\xf5es"),r.a.createElement(E.a,{eventKey:6,href:"#contact"},"Contato"))))}}]),a}(n.Component),h=t(143),b=t(109),g=t(144),v=t(145),w=t(146),O=(t(125),t(57)),j=t.n(O),x=t(33),y=t.n(x),k=t(34),N=t.n(k),S=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state=[{name:"INTERESSES",itens:["Bioinform\xe1tica","Desenvolvimento Web","Design de Games","Teste de Software"]},{name:"IDIOMAS",itens:["Portugu\xeas(Nativo)","Ingl\xeas(Avan\xe7ado)","Japon\xeas(B\xe1sico)"]},{name:"FORMA\xc7\xc3O",itens:["2013/Anglo - Ensino M\xe9dio"]},{name:"ATIVIDADES",itens:["Graduando em Engenharia de Software"]}],t.showDetails=function(){var e=t.state.map(function(e){return r.a.createElement("ul",null,e.name,e.itens.map(function(e){return r.a.createElement("li",null,e)}))});return r.a.createElement(h.a,{xs:12,md:4},e)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"profile"},r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:8},r.a.createElement("h1",null,"Perfil",r.a.createElement("img",{id:"profile_icon",src:j.a})))),r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:4},r.a.createElement("img",{id:"profile_img",src:y.a}),r.a.createElement(v.a,null,r.a.createElement(w.a,{id:"curriculum_btn",bsSize:"large",href:N.a,target:"_blank"},"Meu curr\xedculo"))),r.a.createElement(h.a,{xsHidden:!0,md:4},r.a.createElement("p",{id:"description"},"Ol\xe1, meu nome \xe9 Lucas Tarumoto, nasci no Jap\xe3o e atualmente moro no Brasil")),this.showDetails())))}}]),a}(n.Component),_=(t(129),t(59)),A=t.n(_),X=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={skills:["HTML5","CSS3","C++","Java","JavaScript","React JS","JQuery","Ajax","UML","MySQL","PostgreSQL","Bootstrap","GULP","SASS","GIT","SVG","Python","NPM","Windows","Linux","XML"]},t.showSkills=function(){var e=t.state.skills.map(function(e){return r.a.createElement("li",{className:"skills_topic"},e," ")});return r.a.createElement("ul",null,e)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"skills"},r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:8},r.a.createElement("h1",null,"Habilidades",r.a.createElement("img",{id:"wrench_icon",src:A.a})))),r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:8},this.showSkills()))))}}]),a}(n.Component),P=(t(131),t(60)),T=t.n(P),C=t(61),M=t.n(C),I=t(62),B=t.n(I),L=t(63),q=t.n(L),G=t(64),R=t.n(G),J=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state=[{link:"https://br.ign.com/no-mans-sky/5935/news/ign-first-como-funciona-o-universo-infinito-de-no-mans-sky",desc:"Como funciona o universo infinito de No Mans Sky",img:M.a},{link:"https://www.ufrgs.br/bioinfo/o-que-e-bioinformatica/",desc:"O que \xe9 Bioinform\xe1tica?",img:B.a},{link:"https://tableless.com.br/",desc:"\xd3timo site de not\xedcias para desenvolvedores!",img:q.a},{link:"https://www.udemy.com/",desc:"Para aprender muito mais!",img:R.a}],t.showPosts=function(){var e=t.state.map(function(e){return r.a.createElement(h.a,{xs:12,md:4},r.a.createElement("div",{className:"post_container"},r.a.createElement("img",{className:"post_img",src:e.img}),r.a.createElement("p",{className:"post_desc"},e.desc),r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"post_btn",bsSize:"large",href:e.link,target:"_blank"},"Acesse aqui!"))))});return r.a.createElement(g.a,{className:"show-grid"},e)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"blog"},r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:8},r.a.createElement("h1",null,"Blog",r.a.createElement("img",{id:"blog_icon",src:T.a})))),r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:12},r.a.createElement("h2",null,"Veja alguns posts sobre tecnologia que eu tenho interesses"))),this.showPosts()))}}]),a}(n.Component),D=(t(133),t(65)),z=t.n(D),F=t(66),H=t.n(F),K=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state=[{name:"T01",desc:"Replica\xe7\xe3o do site Geovanna Garcia",link:"https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/t01/lucas-tarumoto"},{name:"TA01",desc:"Cria\xe7\xe3o de curr\xedculo em HTML e CSS",link:"https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta01/lucas-tarumoto"},{name:"TA05",desc:"Resolu\xe7\xe3o de exerc\xedcios",link:"https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta05/lucas-tarumoto"},{name:"TA07",desc:"Exerc\xedcio de SVG",link:"https://github.com/luctaru/dctb-utfpr-2018-2/tree/master/programacao-web/if66h-es61/ta07/lucas-tarumoto"}],t.showWorks=function(){var e=t.state.map(function(e){return r.a.createElement(h.a,{xs:12,md:4},r.a.createElement("div",{className:"post_container"},r.a.createElement("img",{className:"port_img",src:H.a}),r.a.createElement("p",{className:"post_desc"},e.name),r.a.createElement("p",{className:"post_desc"},e.desc),r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"port_btn",bsSize:"large",href:e.link,target:"_blank"},"Acesse aqui!"))))});return r.a.createElement(g.a,{className:"show-grid"},e)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"portfolio"},r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:8},r.a.createElement("h1",{id:"portfolio_title"},"Portf\xf3lio",r.a.createElement("img",{id:"book_icon",src:z.a})))),r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:12},r.a.createElement("h2",{id:"portfolio_desc"},"Trabalhos realizados na disciplina de Programa\xe7\xe3o Web"))),this.showWorks()))}}]),a}(n.Component),U=(t(135),t(67)),W=t.n(U),V=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state=[{name:"BIOGRAFIA",desc:"Nascido no Jap\xe3o, vivi poucos anos l\xe1 e acabei me mudando para o Brasil quando jovem. Realizei o Ensino M\xe9dio no Col\xe9gio Prisma de Pirap\xf3zinho. Iniciei minha vida universit\xe1ria em 2014 na UFSJ de Ouro Branco em Minas Gerais, por\xe9m acabei desistindo por n\xe3o ter afinidade com o curso. Em seguida iniciei em 2016 na UTFPR de Corn\xe9lio Proc\xf3pio no curso de Engenharia de Software onde estou at\xe9 hoje na gradua\xe7\xe3o."},{name:"PROFISS\xc3O",desc:"Foi por acaso que acabei entrando em contato com a profiss\xe3o. Na \xe9poca do vestibular n\xe3o sabia que caminho seguir, primeiramente acabei fazendo Engenharia de Bioprocessos, em seguida queria fazer Engenharia Eletr\xf4nica, contudo minha nota do ENEM n\xe3o era alta o suficiente e para n\xe3o perder tempo entrei em Engenharia de Software. Por ironia do destino o curso me agradou muito e hoje estou aqui!"}],t.showDetails=function(){var e=t.state.map(function(e){return r.a.createElement(h.a,{xs:12,md:6},r.a.createElement("div",{className:"details_container"},r.a.createElement("p",{className:"post_desc"},e.name),r.a.createElement("p",{className:"post_desc"},e.desc)))});return r.a.createElement(g.a,{className:"show-grid"},e)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"about"},r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:8},r.a.createElement("h1",null,"Mais Informa\xe7\xf5es  ",r.a.createElement("img",{id:"about_icon",src:W.a})))),this.showDetails()))}}]),a}(n.Component),Q=(t(137),t(68)),Y=t.n(Q),Z=t(69),$=t.n(Z),ee=t(70),ae=t.n(ee),te=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"contact"},r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:8},r.a.createElement("h1",null,"Contato  ",r.a.createElement("img",{id:"phone_icon",src:Y.a})))),r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:12},r.a.createElement("h2",null,"Entre em contato"),r.a.createElement("form",{id:"form",method:"POST",action:"https://formspree.io/YOUREMAILHERE"},r.a.createElement("input",{type:"text",name:"text",placeholder:"Seu Nome"}),r.a.createElement("input",{type:"email",name:"email",placeholder:"Seu email"}),r.a.createElement("input",{type:"text",name:"text",placeholder:"Assunto"}),r.a.createElement("textarea",{name:"message",placeholder:"Mensagem"}),r.a.createElement("button",{id:"submit_btn",type:"submit"},"Enviar")))),r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:12},r.a.createElement("h2",null,"Tamb\xe9m estou aqui!"))),r.a.createElement(g.a,{id:"social_row",className:"show-grid"},r.a.createElement(h.a,{id:"git_col",xs:12,md:6},r.a.createElement("a",{href:"https://github.com/luctaru"},r.a.createElement("img",{id:"github_icon",src:$.a})),r.a.createElement("h3",null,"GitHub")),r.a.createElement(h.a,{id:"fb_col",xs:12,md:6},r.a.createElement("a",{href:"https://www.facebook.com/lucas.tarumoto"},r.a.createElement("img",{id:"facebook_icon",src:ae.a})),r.a.createElement("h3",null,"Facebook")))))}}]),a}(n.Component),ne=(t(139),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"Lucas Tarumoto",email:"lucastarumoto@gmail.com",number:"(XX)XXXX-XXXX"},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement(b.a,null,r.a.createElement(g.a,{className:"show-grid"},r.a.createElement(h.a,{xs:12,md:12},r.a.createElement("p",null,"Lucas Tarumoto"),r.a.createElement("p",null,"lucastarumoto@gmail.com"),r.a.createElement("p",null,"(XX)XXXX-XXXX")))))}}]),a}(n.Component)),re=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null),r.a.createElement(S,null),r.a.createElement(X,null),r.a.createElement(J,null),r.a.createElement(K,null),r.a.createElement(V,null),r.a.createElement(te,null),r.a.createElement(ne,null))}}]),a}(n.Component);o.a.render(r.a.createElement(re,null),document.getElementById("root"))},33:function(e,a,t){e.exports=t.p+"static/media/profile-img.4e35ae82.svg"},34:function(e,a,t){e.exports=t.p+"static/media/curriculum.6e09dbd2.pdf"},57:function(e,a,t){e.exports=t.p+"static/media/profile-icon.db921edc.svg"},59:function(e,a,t){e.exports=t.p+"static/media/wrench-icon.403d58b4.svg"},60:function(e,a,t){e.exports=t.p+"static/media/blog-icon.7a8eff20.svg"},61:function(e,a,t){e.exports=t.p+"static/media/no-mans-sky-art.8ef54497.svg"},62:function(e,a,t){e.exports=t.p+"static/media/bioinfo-img.4c00d43b.svg"},63:function(e,a,t){e.exports=t.p+"static/media/tableless_logo.f8132807.svg"},64:function(e,a,t){e.exports=t.p+"static/media/udemy-logo.560f61c4.svg"},65:function(e,a,t){e.exports=t.p+"static/media/book-icon.c26a73a2.svg"},66:function(e,a,t){e.exports=t.p+"static/media/gear-icon.b4310dc2.svg"},67:function(e,a,t){e.exports=t.p+"static/media/about-icon.85d8c9c0.svg"},68:function(e,a,t){e.exports=t.p+"static/media/phone-icon.5998c9f4.svg"},69:function(e,a,t){e.exports=t.p+"static/media/github-icon.46c28547.svg"},70:function(e,a,t){e.exports=t.p+"static/media/facebook-icon.bc47ee53.svg"},71:function(e,a,t){e.exports=t(141)}},[[71,2,1]]]);
//# sourceMappingURL=main.71f0965f.chunk.js.map