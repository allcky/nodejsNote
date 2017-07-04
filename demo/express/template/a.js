var render= function(tpl,data){
    return tpl.replace(/\{\{(\w+)\}\}/g,function () {
        return data[arguments[1]];
    })
}
var str="<h2>{{title}}</h2><p>{{content}}</p>";
console.log(render(str,{title:'标题',content:'内容'}));