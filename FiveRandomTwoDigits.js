var sum=0;
var avg=0;
var val=0;
var a=1;
while(a<6)
{
    val=Math.floor(Math.random()*99)+1;
    if(val>9)
    {
        sum+=val;
        a+=1;
    }
}
console.log(sum);
avg=Math.floor(sum/5);
console.log(avg);