$( document ).ready(function() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=8df4c6a67bf88f75905c5867a433bfec",
        "method": "GET",
        "headers": {},
        "data": "{}"
      }
      
    $.ajax(settings).done(function (response) {
        let swiperContainer = $( ".swiper-wrapper");
        
        console.log(response.results)

        
        for(let movie of response.results){
            console.log(movie)

            let swiperSlide = document.createElement("div.swiper-slide");
            swiperSlide.innerHTML = `<a href="#" class="tv-shows-link"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="..." class="tv-shows-image img-fluid"></a>`;
            
            swiperContainer.append(swiperSlide);
        }


        $.each( response, function( key, value ) {
       // console.log(value)
        
        });
    });

});