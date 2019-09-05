console.log("Hello fro new project");
const persons = ["Henrik","Helge","Hans","Holger"];
const root = document.getElementById("root");
const btn1 = document.getElementById("btn1");
const url = "https://dev.bugelhartmann.dk/movie-service";
const api = "/api/movie/all";
btn1.onclick = function(){
    // // const p = persons.map(function(el){return '<li>'+el+'</li>';});
    // const p = persons.map(el=>'<li>'+el+'</li>');
    // console.log("Jeg blev klikket");
    // root.innerHTML = '<ul>'+p.join("");+'</ul>'
    fetch(url+api)
    .then(function(response){return response.json()})
    .then(function(data){
        
        const tblContent = data.map(el=>"<tr><td>"+el.name+"</td><td>"+el.year+"</td></tr>").join();
        root.innerHTML = "<table><tr><th>Name</th><th>Year</th></tr>"+tblContent+"</table>";
    });
}


