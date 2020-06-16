function fetchMovie(){
    document.getElementById("searchmovie").innerHTML = "";
    var searchMovie = document.getElementById("search").value;
    const url = "https://api.themoviedb.org/3/search/movie?api_key=493d9cfb65c2913ce1a8d2cd87adc336&query=" + searchMovie;
    document.getElementById("searchmovie").innerHTML += "<div class='col-md-12'><h3 style='color:white;'>Showing results for " + searchMovie + "</h3></div>";
    // console.log(url);
    fetch(url)
    .then(r => r.json())
    .then(function(d){
        for(var i = 0; i < 8; i++){
            document.getElementById("searchmovie").innerHTML += "<div class='col-md-4 mt-3 text-center'><div class='card'><div class='card-header'><h5>" + d.results[i].title + "</h5></div><div class='card-body><div class='row'><div class='col-md-12 text-center'><img class='img-fluid img-thumbnail my-3' alt='"+d.results[i].title+"' src=https://image.tmdb.org/t/p/w500"+ d.results[i].poster_path + " data-toggle='modal' data-target='#Modal"+ i +"'></div></div></div></div></div><div class='modal' id='Modal" + i +"' tabindex='-1' role='dialog'><div class='modal-dialog modal-dialog-centered' role='document'><div class=modal-content><div class='modal-header'><h5 class='modal-title'>"+ d.results[i].title+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>"+ d.results[i].overview+"</div><div class='modal-footer'>Release Date: "+d.results[i].release_date+"</div></div></div></div>";
        }
    })
}