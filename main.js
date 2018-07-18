function getfile(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange =function()
  {
    if(xhr.readyState=== 4 && xhr.status=="200")
    {
      callback(xhr.responseText);
  }
};
xhr.send(null);

}
getfile("data.json",function(text)
{
  var data= JSON.parse(text);
   console.log(data);
    details(data.basics);
    career(data.CareerObjective);
})
var child=document.querySelector(".childone");
function details(det){
var img=document.createElement("img");
img.src=det.image;
child.appendChild(img);

var name=document.createElement("h2");
name.textContent=det.name;
child.appendChild(name);

var phoneno=document.createElement("h3");
phoneno.textContent=det.phoneno;
child.appendChild(phoneno);

var email=document.createElement("a");
email.href = "mailto:deepika.bolla7j@gmail.com";
email.textContent=det.email;
child.appendChild(email);
var Address=document.createElement("h3");
Address.textContent=det.Address;
child.appendChild(Address);


var b=document.createElement("hr");
child.appendChild(b);
}
var child2=document.querySelector(".childtwo");
function career(det){
  var career=document.createElement("h2");
  career.textContent=det.career;
  child2.appendChild(career);

  var c=document.createElement("hr");
  child2.appendChild(c);

var info=document.createElement("h3");
info.textContent=det.info;
child2.appendChild(info);
}
