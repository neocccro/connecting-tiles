var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

context.webkitImageSmoothingEnabled = false;
context.imageSmoothingEnabled = false;

var image = new Image();
image.src = "tiles.png";

var row = 16;
var column = 16;

var width = canvas.width/row;
var height = canvas.height/column;

var level = [];

for (var x = 0; x < row; x++)
{
  level[x] = [];
  for (var y = 0; y < column; y++)
  {
    level[x][y] = 0;
  }
}
var temp;
for (var i = 0; i < row*column/3; i++)
{
  tempx = Math.floor(Math.random()*row);
  tempy = Math.floor(Math.random()*column);
  while(level[tempx][tempy] == 1)
  {
    tempx = Math.floor(Math.random()*row);
    tempy = Math.floor(Math.random()*column);
  }
  level[tempx][tempy] = 1;
  console.log(i);
}

/*
var row = 8;
var column = 8;
var width = canvas.width/row;
var height = canvas.height/column;
var level = [[1,1,1,1,1,1,1,1,1],[1,0,0,1,0,0,1,0,1],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,1],[1,1,1,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1],[1,1,1,1,1,1,1,1,1],[1,0,0,1,0,0,1,0,1],[1,0,0,1,0,0,1,0,1]];
*/

function check()
{
  if(arguments[0] >= 0 && arguments[0] < row && arguments[1] >= 0 && arguments[1] < column)
  {
    return true;
  }
  else
  {
    return false;
  }
}

var tileArray = [[1,1],[8,1],[15,1],[22,1],[1,8],[8,8],[15,8],[22,8],[1,15],[8,15],[15,15],[22,15],[1,22],[8,22],[15,22],[22,22]];

function draw()//three ints
{
  context.drawImage(image, tileArray[arguments[2]][0], tileArray[arguments[2]][1], 5, 5, arguments[0]*canvas.width/row, arguments[1]*canvas.height/column, width, height);
}



image.addEventListener('load',()=>{
  for (var y = 0; y < level[0].length; y++)
  {
    for (var x = 0; x < level.length; x++)
    {
      if(level[x][y] == 1)
      {
        temp = 0;
        if(check(x, y-1))
        {
          if(level[x][y-1] == 1)
          {
            temp += 1;
          }
        }
        if(check(x+1, y))
        {
          if(level[x+1][y] == 1)
          {
            temp += 2;
          }
        }
        if(check(x, y+1))
        {
          if(level[x][y+1] == 1)
          {
            temp += 4;
          }
        }
        if(check(x-1, y))
        {
          if(level[x-1][y] == 1)
          {
            temp += 8;
          }
        }
        // console.log("x: " + x + " y: " + y + " value: " + temp);
        draw(x,y,temp);
      }
    }
  }
})
