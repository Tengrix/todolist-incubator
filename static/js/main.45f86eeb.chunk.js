(this.webpackJsonptododelete10=this.webpackJsonptododelete10||[]).push([[0],{103:function(t,e,n){"use strict";n.r(e);var a,i,c=n(0),o=n.n(c),r=n(9),s=n.n(r),l=(n(76),n(77),n(28)),d=n(144),u=n(134),j=n(135),f=n(5),O=o.a.memo((function(t){console.log("AddItemForm called");var e=Object(c.useState)(""),n=Object(l.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(null),r=Object(l.a)(o,2),s=r[0],O=r[1],b=function(){""!==a.trim()?(t.addItem(a),i("")):O("Title is required")};return Object(f.jsxs)("div",{children:[Object(f.jsx)(d.a,{variant:"outlined",error:!!s,value:a,onChange:function(t){i(t.currentTarget.value)},onKeyPress:function(t){null!==s&&O(null),13===t.charCode&&b()},label:"Title",helperText:s}),Object(f.jsx)(u.a,{color:"primary",onClick:b,children:Object(f.jsx)(j.a,{})})]})})),b=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(c.useState)(!1),n=Object(l.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(t.value),r=Object(l.a)(o,2),s=r[0],u=r[1];return a?Object(f.jsx)(d.a,{value:s,onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(s)}}):Object(f.jsx)("span",{onDoubleClick:function(){i(!0),u(t.value)},children:t.value})})),T=n(137),h=n(136),k=n(145),v=n(61),p=n.n(v).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"1eaa5d66-d310-487c-a1d0-2fd59af6c2de"}});!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var I=function(){return p.get("todo-lists")},g=function(t){return p.post("todo-lists",{title:t})},m=function(t){return p.delete("todo-lists/".concat(t))},C=function(t,e){return p.put("todo-lists/".concat(t),{title:e})},x=function(t){return p.get("todo-lists/".concat(t,"/tasks"))},S=function(t,e){return p.delete("todo-lists/".concat(t,"/tasks/").concat(e))},E=function(t,e){return p.post("todo-lists/".concat(t,"/tasks"),{title:e})},D=function(t,e,n){return p.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},L=o.a.memo((function(t){var e=Object(c.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(c.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(c.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(f.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(f.jsx)(k.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(f.jsx)(b,{value:t.task.title,onChange:i}),Object(f.jsx)(u.a,{onClick:e,children:Object(f.jsx)(h.a,{})})]},t.task.id)})),A=n(39),y=n(29),w=n(12),F={},N=n(22),K=o.a.memo((function(t){console.log("Todolist called");var e=Object(N.b)();Object(c.useEffect)((function(){var n;e((n=t.id,function(t,e){x(n).then((function(e){t({type:"SET-TASK",tasks:e.data.items,todoListId:n})}))}))}),[]);var n=Object(c.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),i=Object(c.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t.id,t.changeTodolistTitle]),o=Object(c.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.id,t.changeFilter]),r=Object(c.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.id,t.changeFilter]),s=Object(c.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.id,t.changeFilter]),l=t.tasks;return"active"===t.filter&&(l=t.tasks.filter((function(t){return t.status===a.New}))),"completed"===t.filter&&(l=t.tasks.filter((function(t){return t.status===a.Completed}))),Object(f.jsxs)("div",{children:[Object(f.jsxs)("h3",{children:[Object(f.jsx)(b,{value:t.title,onChange:i}),Object(f.jsx)(u.a,{onClick:function(){t.removeTodolist(t.id)},children:Object(f.jsx)(h.a,{})})]}),Object(f.jsx)(O,{addItem:n}),Object(f.jsx)("div",{children:l.map((function(e){return Object(f.jsx)(L,{task:e,todolistId:t.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus},e.id)}))}),Object(f.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(f.jsx)(T.a,{variant:"all"===t.filter?"outlined":"text",onClick:o,color:"default",children:"All"}),Object(f.jsx)(T.a,{variant:"active"===t.filter?"outlined":"text",onClick:r,color:"primary",children:"Active"}),Object(f.jsx)(T.a,{variant:"completed"===t.filter?"outlined":"text",onClick:s,color:"secondary",children:"Completed"})]})]})})),H=n(138),G=n(139),M=n(141),R=n(142),P=n(143),U=n(104),V=n(140),B=[],J=function(t,e){I().then((function(e){t({type:"SET-TODOLISTS",todos:e.data})}))};var q=function(){Object(c.useEffect)((function(){n(J)}),[]);var t=Object(N.c)((function(t){return t.todolists})),e=Object(N.c)((function(t){return t.tasks})),n=Object(N.b)(),a=Object(c.useCallback)((function(t,e){n(function(t,e){return function(n){S(t,e).then((function(){n(function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(e,t))}))}}(e,t))}),[]),i=Object(c.useCallback)((function(t,e){n(function(t,e){return function(n){E(e,t).then((function(t){var e=t.data.data.item;n(function(t){return{type:"ADD-TASK",task:t}}(e))}))}}(t,e))}),[]),o=Object(c.useCallback)((function(t,e,a){n(function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o={title:c.title,status:e,deadline:c.deadline,description:c.description,startDate:c.startDate,priority:c.priority};D(n,t,o).then((function(i){a(function(t,e,n){return{type:"CHANGE-TASK-STATUS",status:e,todolistId:n,taskId:t}}(t,e,n))}))}}}(t,e,a))}),[]),r=Object(c.useCallback)((function(t,e,a){n(function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o={title:e,status:c.status,deadline:c.deadline,description:c.description,startDate:c.startDate,priority:c.priority};D(n,t,o).then((function(i){a(function(t,e,n){return{type:"CHANGE-TASK-TITLE",title:e,todolistId:n,taskId:t}}(t,e,n))}))}}}(t,e,a))}),[]),s=Object(c.useCallback)((function(t,e){var a={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};n(a)}),[]),l=Object(c.useCallback)((function(t){n(function(t){return function(e){m(t).then((function(n){e({type:"REMOVE-TODOLIST",id:t})}))}}(t))}),[]),d=Object(c.useCallback)((function(t,e){n(function(t,e){return function(n){C(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e))}),[]),j=Object(c.useCallback)((function(t){n(function(t){return function(e){g(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item})}))}}(t))}),[n]);return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(H.a,{position:"static",children:Object(f.jsxs)(G.a,{children:[Object(f.jsx)(u.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(f.jsx)(V.a,{})}),Object(f.jsx)(M.a,{variant:"h6",children:"News"}),Object(f.jsx)(T.a,{color:"inherit",children:"Login"})]})}),Object(f.jsxs)(R.a,{fixed:!0,children:[Object(f.jsx)(P.a,{container:!0,style:{padding:"20px"},children:Object(f.jsx)(O,{addItem:j})}),Object(f.jsx)(P.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(f.jsx)(P.a,{item:!0,children:Object(f.jsx)(U.a,{style:{padding:"10px"},children:Object(f.jsx)(K,{id:t.id,title:t.title,tasks:n,removeTask:a,changeFilter:s,addTask:i,changeTaskStatus:o,filter:t.filter,removeTodolist:l,changeTaskTitle:r,changeTodolistTitle:d})})},t.id)}))})]})]})},Y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))},z=n(41),Q=n(63),W=Object(z.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TASK":var n=Object(w.a)({},t);return n[e.todoListId]=e.tasks,n;case"REMOVE-TASK":var a=Object(w.a)({},t),i=a[e.todolistId],c=i.filter((function(t){return t.id!==e.taskId}));return a[e.todolistId]=c,a;case"ADD-TASK":var o=Object(w.a)({},t),r=o[e.task.todoListId],s=[e.task].concat(Object(y.a)(r));return o[e.task.todoListId]=s,o;case"CHANGE-TASK-STATUS":var l=t[e.todolistId],d=l.map((function(t){return t.id===e.taskId?Object(w.a)(Object(w.a)({},t),{},{status:e.status}):t}));return t[e.todolistId]=d,Object(w.a)({},t);case"CHANGE-TASK-TITLE":var u=t[e.todolistId],j=u.map((function(t){return t.id===e.taskId?Object(w.a)(Object(w.a)({},t),{},{title:e.title}):t}));return t[e.todolistId]=j,Object(w.a)({},t);case"ADD-TODOLIST":return Object(w.a)(Object(w.a)({},t),{},Object(A.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var f=Object(w.a)({},t);return delete f[e.id],f;case"SET-TODOLISTS":var O=Object(w.a)({},t);return e.todos.forEach((function(t){O[t.id]=[]})),O;default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":var n=Object(w.a)(Object(w.a)({},e.todolist),{},{filter:"all"});return[n].concat(Object(y.a)(t));case"CHANGE-TODOLIST-TITLE":var a=t.find((function(t){return t.id===e.id}));return a&&(a.title=e.title),Object(y.a)(t);case"CHANGE-TODOLIST-FILTER":var i=t.find((function(t){return t.id===e.id}));return i&&(i.filter=e.filter),Object(y.a)(t);case"SET-TODOLISTS":return e.todos.map((function(t){return Object(w.a)(Object(w.a)({},t),{},{filter:"all"})}));default:return t}}}),X=Object(z.c)(W,Object(z.a)(Q.a));window.store=X,s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(N.a,{store:X,children:Object(f.jsx)(q,{})})}),document.getElementById("root")),Y()},76:function(t,e,n){},77:function(t,e,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.45f86eeb.chunk.js.map