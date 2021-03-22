var a = 0;
console.log(a);
var b = "vedant";
console.log(b);
console.log(b.length);
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(parseInt("123"));
var trang;
var s = "";


function setup() 
{
  createCanvas(800,400);

  if(3>2 && 4>3)
  {
    console.log("happy");
  }
  else 
  {
    console.log("not happy");
  }

  var name = "my Name"
  switch(name)
  {
    case "my Name":
    console.log("yes");
    break;
    case "My Name":
    console.log("no");
    break;
    case "my name":
    default: console.log("none");
    break;
  }
  for(var i=5;i<51;i+=5)
  {
    console.log(i);
  }
  for(var j=0;j<5;j++)
  {
  for(var i=0;i<=4-j;i++)
  {
    s=s+"*";
  }
  s=s+"\n";
  }

  console.log(s);
}

function draw() 
{
  background("black");  
}