const feedDisplay= document.querySelector('#list');

  /*  $.ajax({
        type: "POST",
        url: "http://localhost:8000/results",
        data: { input: input },
        success: function(data) {
        },
        error: function(jqXHR, textStatus, err) {
            alert('text status '+textStatus+', err '+err)
        }
    }); */
if (document.getElementById("submit").addEventListener("click", async function() {
    fetch('http://localhost:8000/results1')
    .then(response => {
        return response.json()
    
    })
    .then(data=> {
        var x= ''
        for(i=0; i<data.length; i++) {
            
            console.log(data[i].title)
            var item= data[i].title
            document.getElementById("p").innerHTML+= "<br></br><h1 id='title'>" + (data[i].title) + "</h1><br></br><a href=" + data[i].url + ">" + data[i].url + "</a><br></br>"
            
            
           
        }
    }) 
    
   // $.post('/results', { input : x })
}));



