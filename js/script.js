$(".search-button").click(function () {
  let input = $(".search-term").val();
  let customApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;

  fetch(customApiUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      console.log(data.data[0].images.original.url);
      let ranNum = Math.floor(Math.random() * (data.data.length + 1));
      let image = `<img src=${data.data[ranNum].images.original.url}>`
      $(".main").append(image);
      //return data.data[0].images.original.url;
      console.log(ranNum);
      $(".main").append(`<a href="mailto:luis.sanchez0378@gmail.com?subject=Cool%20Gif&body=${data.data[ranNum].images.original.url}">Email this gif to someone!</a>`);
      $("body").css("height","100%");
    });
});


//thanks to Matt Basta for help with the below code
$("body").on("mousemove", "img", function(event){
  let Nrandom = Math.random() * 360;
  $(this).css("border-color", `hsl(${Nrandom}, 100%, 50%)` );
  
});
