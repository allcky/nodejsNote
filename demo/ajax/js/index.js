window.addEventListener('DOMContentLoaded',function () {
	//字符串拼接
	var lists = document.querySelector('.list');
	var str = "";
	var xhr = new XMLHttpRequest();
	xhr.open('GET','../data/list.json');
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState ==4){
			if(xhr.status==200){
				var data = JSON.parse(xhr.response);
				console.dir(data);
				data.forEach(function(elm, index){
					str+=`<li><a href=${elm.url}>${elm.title}</a></li>`;
				});
				lists.innerHTML = str;
			}
		}
	}

	//模板字符串
	var a = 100;
	var arr = [11,22,33,44,55,66,77]
	var strings = `<ul>
		${arr.map(item=>'<li>'+item+'</li>').join('')}
		</li>`;
	console.log(strings);
})

^ $ \/\/  \. 
()分组 
{} 量词
[] 原子
*{0,} 
+{1,}
?{0,1}

