let result = document.getElementById("result")

let countryChoice = document.getElementById("countryChoice")
let keyWord = document.getElementById("keyWord")

const mySelect = () => {
    console.log("working")
   return countryChoice.value
}


const myNews = () => {
    result.innerHTML = "";
    console.log(countryChoice.value)
    console.log(keyWord.value)
    fetch(`http://newsapi.org/v2/top-headlines?country=${countryChoice.value}&q=${keyWord.value}&apiKey=e86b7e46b097496baf69899e50907ede`)
        .then(response => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.articles)
        data.articles.forEach(element => {
        console.log(element.publishedAt.slice(0,10))
        result.innerHTML += `<div>
        <img src="${element.urlToImage}" alt="">
        <div id="content">
        <h1>${element.title}</h1>
        <p>${element.description}</p>
        <span>${ element.publishedAt.slice(0,10)}</span>
        <a href="${element.url}" target="_blank">Read More</a>
    </div></div>`
            
        });
   

    })
}



// const myNews = () => {
//     result.innerHTML = "";
//     console.log(userChoice.value)
//     fetch(`http://newsapi.org/v2/top-headlines?country=${countryChoice.value}&apiKey=e86b7e46b097496baf69899e50907ede`)
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data)
//         console.log(data.articles)
//         data.articles.forEach(element => {
//         result.innerHTML += `<div>
//         <img src="${element.urlToImage}" alt="">
//         <div id="content">
//         <h1>${element.title}</h1>
//         <p>${element.description}</p>
//         <span>${element.publishedAt}</span>
//         <a href="${element.url}" target="_blank">Read More</a>
//     </div></div>`
            
//         });
   

//     })
// }




    // fetch('http://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=e86b7e46b097496baf69899e50907ede')
    // .then(response => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         console.log(data.articles)
    //         data.articles.forEach(element => {
               
    //         result.innerHTML += `<div>
    //         <img src="${element.urlToImage}" alt="">
    //         <div id="content">
    //         <h1>${element.title}</h1>
    //         <p>${element.description}</p>
    //         <span>${element.publishedAt}</span>
    //         <a href="${element.url}" target="_blank">Read More</a>
    //     </div></div>`
                
    //         });
    
    //         // console.log(data.articles[0].author);
       
    
    //     })
    
    
    
