 var cl=console.log;


const setzero=(num)=>{
	if(num<10)
	{
		return "0"+num;
	}
	else{
	return num;
	}
}
let res=setzero(5);
cl(res);
const fort=(hr)=>{
	return (hr>12)?hr-12:hr;
}
let res1=fort(5);
cl(res1);
const forse=(hr)=>{
	return (hr>12)?hr+"PM":hr+"AM";
}
let res2=forse(5);
cl(res2);
		


const digital=()=>{
	let d=new Date();
	let hr=d.getHours();
	let min=d.getMinutes();
	let sec=d.getSeconds();
    let session=" ";
	const forse=(hr)=>{
	return (hr>12)?hr+"PM":hr+"AM";}
	let result=`${setzero(fort(hr))} : ${setzero(min)} : ${setzero(sec)}${forse(session)}`;
	return result;
}
 cl(digital());
 var str=digital();
 	var digi=document.getElementById("my1").innerHTML=str;
	