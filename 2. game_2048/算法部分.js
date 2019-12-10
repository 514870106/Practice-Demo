var x;
var c=0;
function read(){
	// 创建一个4*4的二维数组x全部赋值为0
	x=new Array(4);
	for (i=0;i<x.length;i++) {
		x[i]=[0,0,0,0];
	}
	//获得随机坐标，将数组x对应坐标内的数改为2
	var a,b,a1,b1;
	a=Math.round(Math.random()*3);
	b=Math.round(Math.random()*3);
	x[a][b] = 2;
	//获得随机坐标，判断坐标不重复，将数组x对应坐标内的数改为4
	while(1){
		a1 = Math.round(Math.random()*3);
		b1 = Math.round(Math.random()*3);
		if(a1 != a || b2 != b){
			x[a1][b1] = 4 ;
			break;
		}
	}
	//调用数字与图像书写函数
	font();
	color();
	//变更<p>中的已尝试次数
	document.getElementById("p2").innerHTML=("你已经尝试"+ c +"次")
	c+=1;
}

//依次将数组x内数字填充到table中对应的td中，如果为0，则填写空；
function font(){
	for (i=0;i<x.length;i++) {
		for (j=0;j<x.length;j++) {
			var td = document.getElementById(i+""+j);
			if(x[i][j] != 0)
			{
			   td.innerHTML = x[i][j];
			}
			else
			{
				td.innerHTML = " ";
			}
		}
	}
}
// 遍历x数组,获得对应table 的 td,再通过值来更改对应 td 的背景颜色
function color(){
	for (i=0;i<x.length;i++) {
		for (j=0;j<x.length;j++) {
			var td = document.getElementById(i+""+j);
			var num = x[i][j];
			switch(num){
			case 2:
			    td.style="background-color:#FFFFE1";
			    break;
			case 4:
			    td.style="background-color:#FFEFD1";
			    break;
			case 8:
			    td.style="background-color:#FEDFD5";
			    break;
			case 16:
			    td.style="background-color:#FFDEAD";
			    break;
			case 32:
			    td.style="background-color:#FFA07A";
			    break;
			case 64:
			    td.style="background-color:#F08080";
			    break;
			case 128:
			    td.style="background-color:#DB7093";
			    break;
			case 256:
			    td.style="background-color:#FF69B4";
			    break;
			case 512:
			    td.style="background-color:#DA70D6";
			    break;
			case 1024:
			    td.style="background-color:#FF4500";
			    break;
			default:
			    td.style="background-color:#87CEFA";
			    break;
			}
			if(num==1024){
				alert("恭喜你成功通关，获得香蕉君的友谊");
				return;
			}
		}
	}
}

//监听键盘按钮按下情况，根据keyCode返回值判断按下了哪个键并执行函数,再进行重新绘图（调用font（）、color（））
window.onkeydown = function(){
	var boy = event.keyCode;
	switch(boy){
	case 37://左
		onleft();
		font();
		color();
		break;
	case 38://上
		ontop();
		font();
		color();
		break;
	case 39://右
		onright();
		font();
		color();
		break;
	case 40://下
		onbelow();
		font();
		color();
		break;
	}
}

//用户按了左
function onleft(){
	for (i = 0;i < x.length; i++){
		var x1 = new Array(0,0,0,0);//创建一个临时数组x1
		var ace=0;
		for(j = 0;j < x.length; j++){//将x数组当前行的 有效数组 赋值给x1
			if(x[i][j] != 0){
				x1[ace] = x[i][j];
				ace+=1;
			}
		}
		for(j=0;j<x1.length-1;j++){
			if(x1[j] == x1[j+1]){  //判断相邻数是否相等，若相等则左边的数翻倍
				x1[j]*=2;
				var k=j+1;         //记录相等数对右边数的下标
				while(k<x1.length-1){//右边所有数向左移动
					x1[k] = x1[k+1];
					k+=1;
				}
			x1[3]=0;  //将最后一位赋值为0，为了table满了不立即结束。
			}
		}
		x[i]=x1;//将x数组更新
	}
	newnum();//随机出现2 或者 4  在数组内
}

//用户按了上
function ontop(){
	for (i = 0;i < x.length; i++){
		var x1 = new Array(0,0,0,0);
		var ace=0;
		for(j = 0;j < x.length; j++){
			if(x[j][i] != 0){
				x1[ace] = x[j][i];
				ace+=1;
			}
		}
		for(j=0;j<x1.length-1;j++){
			if(x1[j] == x1[j+1]){
				x1[j]*=2;
				var k=j+1;
				while(k<x1.length-1){
					x1[k] = x1[k+1];
					k+=1;
				}
			x1[3]=0;
			}
		}
		for(j=0;j<x.length;j++){
			x[j][i]=x1[j];
		}
	}
	newnum();
}
//用户按了右
function onright(){
	for (i = 0;i < x.length; i++){
		var x1 = new Array(0,0,0,0);
		var ace=3;
		for(j = 3;j >= 0; j--){
			if(x[i][j] != 0){
				x1[ace] = x[i][j];
				ace-=1;
			}
		}
		for(j=3;j>0;j--){
			if(x1[j-1] == x1[j]){
				x1[j]*=2;
				var k=j-1;
				while(k>0){
					x1[k] = x1[k-1];
					k-=1;
				}
			x1[0]=0;
			}
		}
		x[i]=x1;
	}
	newnum();
}

// 用户按了下
function onbelow(){
	for (i = 0;i < x.length; i++){
		var x1 = new Array(0,0,0,0);
		var ace=3;
		for(j = 3;j >=0 ; j--){
			if(x[j][i] != 0){
				x1[ace] = x[j][i];
				ace-=1;
			}
		}
		for(j=3; j>0 ;j--){
			if(x1[j-1] == x1[j]){
				x1[j]*=2;
				var k=j-1;
				while(k<0){
					x1[k] = x1[k-1];
					k-=1;
				}
			x1[0]=0;
			}
		}
		for(j=0;j<x.length;j++){
			x[j][i]=x1[j];
		}
	}
	newnum();
}


function newnum(){
	// 遍历数组x.若没有等于0的元素,游戏结束.输了
	var flag = false;
	for (i=0;i<x.length;i++) {
		for (j=0;j<x.length;j++) {
			if(x[i][j] == 0){
				flag=true;
				break;
			}
		}
	}
	if(flag==false){
		alert("兄弟，智商堪忧啊");
		return;
	}
	var a,b,q;
	// 获得一个随机的坐标
	while(true){
		a = Math.round(Math.random()*3);
		b = Math.round(Math.random()*3);
		if(x[a][b]==0){
			break;
		}
	}
	// 获得一个2或者4，并赋值给所得到的随机坐标
	while(true){
		q =Math.round(Math.random()*6);
		if(q==2|| q==4){
			break;
		}
	}
	x[a][b] = q;
}