(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(12),r=a.n(i),l=(a(19),a(13)),c=a(10),s=a(2),d=a(3),u=a(4),m=a(5),p=a(35),h=(a(20),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).onSubmit=function(e){e.preventDefault(),o.state.title&&o.props.addToDo({id:Object(p.a)(),priority:"low",isComplete:!1,title:o.state.title,description:"This is a description"}),o.setState({title:""})},o.addItem=function(e){o.setState({title:e.target.value})},o.state={title:""},o}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.onSubmit,className:"add-form"},n.a.createElement("input",{type:"text",placeholder:"Add Todo",onChange:this.addItem,value:this.state.title,className:"add-form__input neumo-element"}),n.a.createElement("input",{className:"neumo-element hide",type:"submit",value:"submit"}))}}]),a}(o.Component)),f=function(e){return n.a.createElement("div",{className:"container"},e.children)},v=a(7),b=a(6),y=(a(26),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).onCheckBoxChanged=function(e){o.props.toggleCompleted(o.props.todo.id),o.setState({isComplete:!o.state.isComplete})},o.onDelete=function(){o.props.deleteToDo(o.props.todo.id)},o.handlePriority=function(){o.props.changePriority(o.props.todo.id)},o.state={isComplete:o.props.todo.isComplete},o}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.isComplete,t=this.props.todo,a=t.title,o=t.priority;return n.a.createElement("div",{className:"task neumo-element "+(e?"task--complete":"")},n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"check",onClick:this.onCheckBoxChanged},n.a.createElement("div",{className:"check__icon "+(e?"":"hide")},n.a.createElement(v.a,{icon:b.a}))),n.a.createElement("p",{className:"task__title "+(e?"task--complete":"")},a)),n.a.createElement("div",{className:"task__controls"},n.a.createElement("div",{className:"task__priority neumo-element ".concat(o),onClick:this.handlePriority},o),n.a.createElement("button",null,n.a.createElement(v.a,{icon:b.d})),n.a.createElement("button",{onClick:this.onDelete},n.a.createElement(v.a,{icon:b.f}))))}}]),a}(o.Component)),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.toggleCompleted,a=e.deleteToDo,o=e.changePriority;return this.props.todos.map((function(e){return n.a.createElement(y,{key:e.id,todo:e,deleteToDo:a,changePriority:o,toggleCompleted:t})}))}}]),a}(o.Component),E=(a(27),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).filteredTodos=function(){return"completed"===e.props.displayType?e.props.todos.filter((function(e){return e.isComplete})):"remaining"===e.props.displayType?e.props.todos.filter((function(e){return!e.isComplete})):e.props.todos},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.displayType;return n.a.createElement("div",{className:"column"},n.a.createElement("h2",{className:"column__header"},e.toUpperCase()," TASKS"),n.a.createElement(C,{todos:this.filteredTodos(),deleteToDo:this.props.deleteToDo,changePriority:this.props.changePriority,toggleCompleted:this.props.toggleCompleted}))}}]),a}(o.Component)),g=(a(28),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).setSearch=function(e){o.props.searchToDo(e.target.value),o.setState({search:e.target.value})},o.onSubmit=function(e){e.preventDefault(),o.props.searchToDo(o.state.search)},o.state={search:""},o}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{className:"search-form",onSubmit:this.onSubmit},n.a.createElement("input",{type:"text",placeholder:"Search",value:this.state.search,onChange:this.setSearch,className:"search-form__input"}))}}]),a}(o.Component)),T=(a(29),function(e){var t=e.title;return n.a.createElement("div",null,n.a.createElement("h1",{className:"header"},t))}),O=(a(30),function(e){var t=e.handleClick,a=e.visibility,o=e.icon;return n.a.createElement("button",{onClick:function(){return t(a)},className:"bottom-nav__button neumo-element"},n.a.createElement(v.a,{icon:o,size:"2x"}))}),k=(a(31),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(t){e.props.handleDisplayType(t)},e}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"bottom-nav"},n.a.createElement("div",{className:"bottom-nav__wrapper container"},n.a.createElement("div",null,n.a.createElement(O,{visibility:"all",icon:b.c,handleClick:this.handleClick}),n.a.createElement("span",null,"All")),n.a.createElement("div",null,n.a.createElement(O,{icon:b.b,visibility:"completed",handleClick:this.handleClick}),n.a.createElement("span",null,"Completed")),n.a.createElement("div",null,n.a.createElement(O,{icon:b.e,visibility:"remaining",handleClick:this.handleClick}),n.a.createElement("span",null,"Remaining"))))}}]),a}(o.Component)),D=(a(32),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(s.a)(this,a),(o=t.call(this,e)).searchToDo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=o.state.todos.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}));o.setState({filteredToDos:t})},o.addToDo=function(e){o.setState({todos:[e].concat(Object(c.a)(o.state.todos)),filteredToDos:[e].concat(Object(c.a)(o.state.todos))})},o.deleteToDo=function(e){var t=o.state.todos.filter((function(t){return t.id!==e}));o.setState({todos:t,filteredToDos:t})},o.toggleCompleted=function(e){var t=o.state.todos.map((function(t){return t.isComplete=t.id===e?!t.isComplete:t.isComplete,t}));o.setState({todos:t,filteredToDos:t})},o.handleVisibility=function(e){o.setState({visibility:e})},o.changePriority=function(e){var t=o.state.todos.map((function(t){if(t.id===e){var a=(o.priorities.indexOf(t.priority)+1)%o.priorities.length;t.priority=o.priorities[a]}return t}));o.setState({todos:t})},o.state={todos:[],filteredToDos:[],visibility:"all"},o.priorities=["low","med","high"],o}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todo"));e&&this.setState(Object(l.a)({},e,{visibility:"all",filteredToDos:e.todos}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todo",JSON.stringify(this.state))}},{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement(T,{title:"Yet Another Todo"}),n.a.createElement(f,null,n.a.createElement(g,{searchToDo:this.searchToDo}),n.a.createElement(h,{addToDo:this.addToDo}),this.state.todos.length?n.a.createElement(E,{deleteToDo:this.deleteToDo,todos:this.state.filteredToDos,displayType:this.state.visibility,changePriority:this.changePriority,toggleCompleted:this.toggleCompleted}):n.a.createElement("p",{className:"column--empty neumo-element"},"Hurray Nothing to do")),n.a.createElement(k,{todos:this.state.filteredToDos,handleDisplayType:this.handleVisibility}))}}]),a}(n.a.Component));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.36a9fb19.chunk.js.map