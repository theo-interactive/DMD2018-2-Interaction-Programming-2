(function($){
$(document).ready(function() {

console.log("ready");

    var movieAjax = function()
    {
        $.ajax({
            
            url : "data/movie.json",
            dataType: "json",
            
            success: function(d) { 
                
                console.log(d);

                var items = d["movie"], html = "";
                var $Wrap = $("#wrap");
                
                $.each(items, function(i, d) {

                    // <div class = "poster-box box">
                    // <img src="img/01.jpg">
                    // </div><div class = "text-box box">
                    // <h2>Captain America<br />: The First Avenger</h2>
                    // <p class = "release">2011.07.28</p>
                    // <p class = "timeline">Timeline: <span>1943 - 1945</span></p>
                    // </div>

                    var title = d["title"],
                    poster = d["poster"],
                    release = d["release"],
                    timeline = d["timeline"];
                    console.log(title)


                    html += '<li class = "movie-wrap">'

                    html += '<div class = "poster-box box"><img src="img/' + poster + '.jpg"></div><div class = "text-box box">'
                    
                    html += '<h2>' + title + '</h2>'
                    html += '<p class = "release">' + release + '</p>'
                    html += '<p class = "timeline">Timeline: <span>' + timeline + '</span></p>'

                    html += '</div>'

                    html += '</li>'

                    console.log(html)

                    if(i === items.length - 1)
                    {
                        $Wrap.empty().html(html);
                    }
                });


            },


            error: function(error) { 
                console.log(error);
             }

        });
    }

    movieAjax();


});
})(jQuery);