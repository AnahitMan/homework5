//commented part is the first exercise

/*const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const createpoint = function(count,canvaswidth,canvasheight){
	const a = []; 
	const b = function(n){ /// b = forEach 
	if(n <= 0){
		return "";
	}
	const colora = ['red','rgba(144, 119, 212, 0.98)', 'rgba(25, 141, 235, 1)','rgba(193, 47, 47, 0.67)','rgba(58, 152, 203, 0.71)']
a.push( {  
	x : rand(canvaswidth-56),
	y : rand(canvasheight-56),// 56 is ball.height 
	width : 56, 
	height : 56,
	color : colora[rand(7)-1],
	xDelta : rand(5) + 3,
	yDelta : rand(7) + 2
	});

	b(n-1); 
};
b(count);  
return a;
};
 const point = createpoint(20,canvas.width,canvas.height); //give the value here
 
const draw = function(){
 context.clearRect(0, 0, canvas.width, canvas.height);
	const forevery =  function(b,i){
		if(i === b.length ){
			return "";
		}
	context.fillStyle = b[i].color; 
	context.fillRect(b[i].x, b[i].y, b[i].width, b[i].height);
		forevery(b,i+1);	
	};
		forevery(point,0);
};
draw()*/



//second 

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const createpoint = function(count,canvaswidth,canvasheight){
	const a = []; 
	const b = function(n){ /// b = forEach 
	if(n <= 0){
		return "";
	}
	const colora = ['red','rgba(144, 119, 212, 0.98)', 'rgba(25, 141, 235, 1)','rgba(193, 47, 47, 0.67)','rgba(58, 152, 203, 0.71)']
a.push( {  
	x : rand(canvaswidth-56),
	y : rand(canvasheight-56),// 56 is ball.height 
	width : 56, 
	height : 56,
	color : colora[rand(7)-1],
	xDelta : rand(5) + 3,
	yDelta : rand(7) + 2
	});

	b(n-1); 
};
b(count);  
return a;
};
 const point = createpoint(20,canvas.width,canvas.height); //give the value here
 
const draw = function(){
 context.clearRect(0, 0, canvas.width, canvas.height);
	const forevery =  function(b,i){
		if(i === b.length ){
			return "";
		}
	context.fillStyle = b[i].color; 
	context.fillRect(b[i].x, b[i].y, b[i].width, b[i].height);
		forevery(b,i+1);	
	};
		forevery(point,0);
};
const updateData = function(){
	const every = function(a,i){
		const colora = ['red','rgba(0, 166, 255, 1)','rgba(251, 111, 4, 1)','rgba(25, 144, 14, 0.94)','rgba(144, 119, 212, 0.98)', 'rgba(25, 141, 235, 1)','rgba(193, 47, 47, 0.67)','rgba(58, 152, 203, 0.71)'];
	if(i === a.length){
		return;
	} 
	if (a[i].x >= canvas.width-a[i].width){ 
		a[i].xDelta = -a[i].xDelta;
		a[i].color = colora[rand(7)-1];
}	else if (a[i].x <= 0){
		a[i].xDelta = -a[i].xDelta;
		a[i].color = colora[rand(7)-1];
}	


	if (a[i].y >= canvas.height-a[i].height){ 
		a[i].yDelta = -a[i].yDelta;
		a[i].color = colora[rand(7)-1];
}	else if (a[i].y <= 0){
		a[i].yDelta = -a[i].yDelta;
		a[i].color = colora[rand(7)-1];
}	
	 	
a[i].x = a[i].x + a[i].xDelta;
a[i].y = a[i].y + a[i].yDelta;
every(a,i+1);
};
every(point,0);
};

const loop = function (){
draw();
updateData();

requestAnimationFrame(loop); 
};
loop(); 