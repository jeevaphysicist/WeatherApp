 var count=0;
function my(){
	
	count++;
	console.log("count",count);

	// var api_key='d7dbbf483c1eca05d7c50d2ea2ad499f';
	if(count%2 !=0)
	{var location=document.getElementById('submit').value;
	var ans=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&`+`&appID=d7dbbf483c1eca05d7c50d2ea2ad499f`,{method:'GET'})
   ans.then(response=>response.json())
	.then(result=>{console.log("result",result);

				document.getElementById('name').innerHTML=result.name ;
				

				document.getElementById('country').innerHTML=result.sys.country; 
				document.getElementById('temperature').innerHTML=parseInt(result.main.temp - 273) +"°C"    
		   let icon1=result.weather[0].icon;
			document.getElementById('icon').innerHTML=`<img src="${icon1}.png" style= 'height:8rem'/>`;
		   document.getElementById('des').innerHTML=result.weather[0].description }
	)}
	else{
		var location=document.getElementById('submit').value;
	var ans=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&`+`&appID=d7dbbf483c1eca05d7c50d2ea2ad499f`,{method:'GET'})
   ans.then(response=>response.json())
	.then(result=>{console.log("result",result);

				document.getElementById('name2').innerHTML=result.name ;
				

				document.getElementById('country2').innerHTML=result.sys.country; 
				document.getElementById('temperature2').innerHTML=parseInt(result.main.temp - 273) +"°C"    
		   let icon1=result.weather[0].icon;
			document.getElementById('icon2').innerHTML=`<img src="${icon1}.png" style= 'height:8rem'/>`;
		   document.getElementById('des2').innerHTML=result.weather[0].description }
	)
	}
	
	
}	


