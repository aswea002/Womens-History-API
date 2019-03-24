var topics = [
  "Michelle Obama",
  "Maya Angelou",
  "Helen Keller",
  "Madame CJ Walker",
  "Ella Fitgerald",
  "Oprah Winfery",
  "Lucille Ball",
  "Rosa Parks",
  "Barbara Walters",
  "Hilary Clinton",
  "Condoleeza Rice", 
  "Susan B. Anthony", 
  "Lucretia Mott", 
  "Lena Horne", 
  "Dorothy Dandride", 
  "Ruth Bader Ginsburg", 
  "Shirley Chisolm", 
  "Serena Williams"
];

function women() {
  for (var i = 0; i < topics.length; i++) {
    document.getElementById("top").innerHTML +=
      "<button>" + topics[i] + "</button>";
  }
}

women();

$("button").on("click", function(){
    var topic = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic +"&api_key=7Iy4PQy21uWk8YaEmSF7KKjbM9VDsYXo&limit=3";

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response){ 
          var results = response.data;

        for (var i = 0; i < results.length; i++){
            if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");

                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.append(p);
                gifDiv.append(personImage);

                $("#gifs-appear-here").prepend(gifDiv);

            }
        }

      });



      
});

// allow search button contents to be stored as a button


$("#text").on("click", function(event) {
    event.preventDefault();

   
    var addButton = $("#text").val().trim();
});

//Allow images to pause and play when clicked






