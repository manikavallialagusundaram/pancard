var request=new XMLHttpRequest();
//2.opening a connection(specify the URL)
request.open('GET','https://restcountries.com/v3.1/all',true);
//3.sending a connection
request.send();
//4.once the server responded successfully then we have to process the data
request.onload=function(){
var data=JSON.parse(this.response);
console.log(data);
}