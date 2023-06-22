/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




// Test / driver code (temporary). Eventually will get this from the server.



const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227

};


// const tweetData = {
//   "user": {
//     "name": "Newton", "Newton", "Newton", 
//     "avatars": "https://i.imgur.com/73hZDYK.png", "https://i.imgur.com/73hZDYK.png", "https://i.imgur.com/73hZDYK.png",
//     "handle": "@SirIsaac", "@SirIsaac", "@SirIsaac",
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants", "If I have seen further it is by standing on the shoulders of giants", "If I have seen further it is by standing on the shoulders of giants"
//   },
  
//   "created_at": 1461116232227, 1461116232227, 1461116232227,
// };


//1.
const renderTweets = function(target, tweetData) {
  for (const i of tweetData) {
    const newPost = createTweetElement(i);
    addTweetToPage(target, newPost);
  }
};

//2.
const createTweetElement = (tweetData) => {
  const { name, avatars, handle } = tweetData["user"];
  const { text } = tweetData["content"];

  console.log("hi");
  console.log(typeof(avatars));

  const $article = $("<article>");
  const $title = $("<h3 class ='top'>");
  const $content = $("<p class='top'>");
  const $author = $("<p class='top'>");
  const $avatars = $(`<img class='top' src=${tweetData['user']['avatars']}>`);
  const $symbols = $('<div class="symbols"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></div>');

  $title.text(name);
  $content.text(text);
  $author.text(handle);

  // $avatars.text(avatars);
  
  $article.append($title);
  $article.append($avatars);
  $article.append($avatars);
  $article.append($author);
  $article.append($content);
  $article.append($symbols);
  
  return $article;
};

//3.
const addTweetToPage = (target, post) => {
  return $(target).append(post);
};



// const $tweetie = $(`<article class="tweet">Hello world</article>`);
const $tweet = createTweetElement(tweetData);
// const localDataPost = createTweetElement(tweetData[0]);



$(document).ready(function() {
// Test / driver code (temporary)
// console.log($tweetie); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// addTweetToPage("#tweets-container", localDataPost);
// renderTweets('#tweets-container', tweetData);


// $(main.container .button).on("click", (event) => {
//   console.log("click");
// });

$('.new-tweet tweet').submit(function(event) {
  event.preventDefault();
  // $('.new-tweet p').empty().slideUp();
  const tweet = $this.serialize();
   if ($.ajax({ url: "/tweets/", method: 'POST', data: tweet })) {
        (successfulPost) => $.ajax('/tweets/', { method: 'GET'});
    };


//ready
});

});



    
    
//  const created = tweetData["created_at"];
//   // const $avatars = $("<p>");
//   const $footer = $("span class='created'>" + created + "</span>");
//   const $symbols = ('<div class="symbols"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></div>');

//   $title.text(name);
//   $content.text(text);
//   $author.text(handle);
//   // $created.text(tweetData["created_at"]);
//   // $avatars(avatars);
  

//   $article.append($title);
//   $article.append(avatars);
//   $article.append($author);
//   $article.append($content);
//   //$article.append($created);
//   $article.append($symbols);
//   $article.append($footer);
  
// const addPostToPage = (target, post) => {
  //   $(target).append(post);
  // };
  
  //   for (const tweets of tweetData) {
    //     const newPost = 
    //   }
    //   const $tweet = $()
    //   // timestamp: 1:05:12
    // }
    
    //add all tweets to page