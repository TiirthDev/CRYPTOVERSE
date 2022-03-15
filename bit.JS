let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/everything?q=bitcoin&apiKey=d4011d21cea5439bb8964de54cd90cba`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card">
            <div class="flex">
            <img class="img" src=${element["urlToImage"]} alt=${element["title"]} >
            <div>
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="open" data-target="#open${index}"
                    aria-expanded="false" aria-controls="open${index}"><a href="${element["url"]}" target="_blank" >
                   ${element["title"]}</a>
                </button>
                </h2>
            </div>
            </div>
            </div>
            </div>
        </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
