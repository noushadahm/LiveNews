console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'e9f770c74e6d4bd9b56ff0c479301296'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();


xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=e9f770c74e6d4bd9b56ff0c479301296`, true);

//xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";







    articles.forEach(function (element, index) {
      // console.log(element, index)
      let news = `<div class="card" style="width: 62rem;">
      <img src="${element['urlToImage']}" class="card-img-top" alt="No image available">
      <div class="card-body">
        <h5 class="card-title">${element["title"]}</h5>
        <p class="card-text">${element["content"]}.</p>
        <a href="${element['url']}" class="btn btn-primary">Read more</a>
      </div>
    </div>`

      // let news = `< div class="card" style = "width: 60rem;" >
      //       <img src="${element['urlToImage']}" class="card-img-top" alt="No image available">
      //       <div class="card-body">
      //         <h5 class="card-title">${element["title"]}</h5>
      //         <p class="card-text">${element["content"]}.</p>
      //         <a href="${element['url']}" class="btn btn-primary">Read</a>
      //       </div>
      //     </div>`;



      // let news = `<div class="card">
      //                 <div class="card-header" id="heading${index}">
      //                     <h2 class="mb-0">
      //                     <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
      //                         aria-expanded="false" aria-controls="collapse${index}">
      //                        <b>Breaking News ${index + 1}:</b> ${element["title"]}
      //                     </button>
      //                     </h2>
      //                 </div>

      //                 <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
      //                     <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
      //                 </div>
      //             </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
  else {
    console.log("Some error occured")
  }
}

xhr.send()


