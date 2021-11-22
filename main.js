canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_parking_images_array=["car2.png"];


random_number=Math.floor(Math.random()*4);
console.log(random_number);


greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;


function add() {
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;
   
	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=rover_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height); 

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	window.addEventListener("keydown",my_keydown);

	function my_keydown(e){
	 keypressed=e.keyCode;
	 console.log(keypressed);
	 if(keypressed=="37") {
	  left();
	  console.log("left");
	  
	  
	 }
	 if(keypressed=="38") {
		 up();
		 console.log("up");
			
		}
		if(keypressed=="39") {
		 right();
		 console.log("right");
			
		}
		if(keypressed=="40") {
		 down();
		 console.log("down");
			
		}
	}
	 
		
}

function up()
{
	function up(){
		if(car2.png_y>0){
			car2.png_y=car2.png_y-10;
		console.log("When up arrow is pressed , x= "+car2.png_x+", y= "+car2.png_y);
		uploadBackground();
		uploadcar2.png();  
		} 
	   }
}

function down()
{
	function down(){
		if(greencar_y>0){
		greencar_y=greencar_y-10;
		console.log("When down arrow is pressed , x= "+greencar_x+", y= "+greencar_y);
		uploadBackground();
		uploadgreencar();  
		} 
	   }
}

function left()
{
	function left(){
		if(greencar_y>0){
		greencar_y=greencar_y-10;
		console.log("When left arrow is pressed , x= "+greencar_x+", y= "+greencar_y);
		uploadBackground();
		uploadgreencar();  
		} 
	   }
}

function right()
{
	function right(){
		if(greencar_y>0){
		greencar_y=greencar_y-10;
		console.log("When right arrow is pressed , x= "+greencar_x+", y= "+greencar_y);
		uploadBackground();
		uploadgreencar();  
		} 
	   }
}
