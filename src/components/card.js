const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  
  //Create
  const card = document.createElement('div')
  const headLine = document.createElement('div')
  const author = document.createElement('div')
  const imgCont = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  //Child support
  card.appendChild(headLine)
  card.appendChild(author)

  author.appendChild(imgCont)
  imgCont.appendChild(img)

  author.appendChild(authorName)

  //text
  headLine.textContent = article.headline
  authorName.textContent = article.authorName

  //image
  //y tho
  img.src = article.authorPhoto

  //event
  document.addEventListener('click', event => {
    console.log(headline)
  })



  return card
}

 const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  //axios ain't working aswell... can't even load a single one
  axios.get('http://localhost:5000/api/articles')
   .then(res => {
    console.log(res)
    const newCard = document.querySelector(selector)
    newCard.appendChild(Card(res.data.articles))
  })    
  .catch(err => {
    console.error(err)
  })

}

export { Card, cardAppender }


//IDK WTF IS GOING ON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//the image is just undifined!!!!!!!!!!!!!
