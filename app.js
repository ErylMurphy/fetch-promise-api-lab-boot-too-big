fetch('https://www.reddit.com/r/boottoobig/.json',)
.then(response => {
  return response.json();
})
.then(json => {
  const post = json.data.children[randomNumber(json.data.children.length)].data;


  $('.title').html(post.title);

    const imageURL = post.url;
    const cleanedTitle = post.title.replace('Roses are red', '').split('').join('+');

    console.log(cleanedTitle);
    

  $('.reddit-img').attr('src', imageURL);

  return fetch(`http://api.giphy.com/v1/gifs/search?q=${cleanedTitle}&api_key=${secrets.giphyAPIkey}&limit=5`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      const videoURL = json.data[0].images.looping.mp4;

      $('.meme-list').append(`<li><video autoplay src ='${videoURL}'</video></li>`,)
    });
});


function randomNumber(limit) {
  return Math.floor(Math.random() * limit);
}



// http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
//giphy API key

