var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;


var thor_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("thor.jpg", function(Img){
    thor_object = Img;
    thor_object.scaleToWidth(150);
    thor_object.scaleToHeight(140);
    thor_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(thor_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
    block_image_object = Img;
    block_image_object.scaleToWidth(150);
    block_image_object.scaleToHeight(140);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
    });
}