var min=999;
var max=0;
var val=0;
var a=1;
while(a<6)
{
val=Math.floor(Math.random()*999)+1;
    if(val>99)
    {
        if(val>max)
        {
        max=val;
        }
        if(val<min)
        {
            min=val;
        }
        a+=1;
    }
}
console.log("Minimum Value: "+min);
console.log("Maximum Value: "+max);