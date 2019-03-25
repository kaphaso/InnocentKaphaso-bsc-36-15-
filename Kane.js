  var form = document.getElementById('myForm');
  form.addEventListener("submit", function(event){
  event.preventDefault();
  var name =myForm.name.value;
  var descr= myForm.projectDescription.value;
  var date= new Date(myForm.date.value);

  let arr = [name, descr,date ];

  localStorage.setItem("1",arr)

  var  display= document.getElementById("display");
  var links = document.createElement("A");
  links.setAttribute("href", "koma.html" );
  links.setAttribute ("class", "link" );
  var project = document.createTextNode(name);
  links.appendChild(project);
  display.appendChild(links);
  form.reset();

}
);
