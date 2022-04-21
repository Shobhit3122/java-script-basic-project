document.getElementById("btn").addEventListener("click", async () => {
     document.getElementById("result").innerHTML = "";

    let inputValue = document.getElementById("input").value.toLowerCase();
    let data = await fetch(
      `https://www.omdbapi.com/?s=${inputValue}&apikey=7880183f`
    ).
    then(res => res.json()).then(data => data)
    let movieList = data.Search
    console.log(movieList);
    movieList.map((movie) => {
        let div = document.createElement("div")
        div.innerHTML = `<div>
      
        <img src=${movie.Poster} alt="">
          <h1>
        ${movie.Title}
        </h1>
        </div>`;
        document.getElementById("result").appendChild(div)
    })
})