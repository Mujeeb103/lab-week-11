let todolist = [
    {todo: "clone repo for starter code", status:"complete"},
    {todo: "link the stylesheets to index.html", status:"complete"},
    {todo: "write the javascript", status:"started"},
    {todo: "push all changes to github"},
];


let completedTodos = []

for(const obj of todolist) {
if (obj.todo === "complete") {
    completedTodos.push(obj);
}
}
 

console.log(completedTodos)