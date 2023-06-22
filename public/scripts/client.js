/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }];



$(document).ready(function() {

// Test / driver code (temporary). Eventually will get this from the server.
  
 const createTweetElement = (tweetData) => {
    const { name, handle } = tweetData["user"];
    const { text } = tweetData["content"];
    // const avatar = tweetData['user']['avatars'];

    const $tweet = $("<article>");
    const $title = $("<h3>");
    const $content = $("<p>");
    const $author = $("<p>");

    // const $avatar = $(`<img src= ${avatar}>`);
    // const $symbols = $('<div class="symbols"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></div>');

    $title.text(name);
    $content.text(text);
    $author.text(handle);
    // $avatar.text($avatar);
    // $symbols.text($symbols);

    $tweet.append($title);
    // $tweet.append($avatar);
    $tweet.append($author);
    $tweet.append($content);
    // $tweet.append($symbols);
  
    return $tweet;
  };


  const addTweetToPage = (target, post) => {
    $(target).append(post);
  };

  const renderTweets = (target, postList) => {
    for (const i of postList) {
      const newPost = createTweetElement(i);
      addTweetToPage(target, newPost);
    }
  };

//call renderTweets(#tw,tD) which calls
//createTweetElement()

// const localDataPost2 = createTweetElement(tweetData[0]);

  renderTweets("#tweets-container", tweetData);


  $('.new-tweet tweet').submit(function(event) {
    event.preventDefault();
    if($.ajax({ 
      method: "POST",
      url:"/tweets/",
      data: $this.serialize(),
    })) {
      (goodPost) => $.ajax('/tweets/', { method: "GET" });
    }
    console.log($this.serialize());
  });


  const loadTweets = function() {
    $.ajax('/tweets/', { method: "GET" })
    .then((res) => {
      renderTweets("#tweets-container", res);
    });
  };

  loadTweets();

});




    // $.ajax({
  //   method:"GET",
  //   url: "http:localhost:8080/api/posts",
  // });



//   $.ajax({
//     method: "GET",
//     url: "http://localhost:3000/api/posts",
//     // url: "https://jsonplaceholder.typicode.com/posts",
//   }).then((res) => {
//     addAllPostsToPage("#post-container-4", res);
//   });


    // $('.new-tweet p').empty().slideUp();
    // if ($.ajax({ url: "/tweets/", method: 'POST', data: $this.serialize() })) {
    //      (successfulPost) => $.ajax('/tweets/', { method: 'GET'});
    //  };










// const createTweetElement = (tweetData) => {
//   const $tweet = $article;
//   const { name, avatars, handle } = tweetData["user"];
//   const { text } = tweetData["content"];

//   const $article = $("<article>");
//   const $title = $("<h3 class ='top'>");
//   const $content = $("<p class='top'>");
//   const $author = $("<p class='top'>");
//   const $avatars = $(`<img class='top' src=${tweetData['user']['avatars']}>`);
//   const $symbols = $('<div class="symbols"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></div>');

//   $title.text(name);
//   $content.text(text);
//   $author.text(handle);

//   $article.append($title);
//   $article.append($avatars);
//   $article.append($avatars);
//   $article.append($author);
//   $article.append($content);
//   $article.append($symbols);
  
//   return $tweet;
  
// };

// // const $tweetie = $(`<article class="tweet">Hello world</article>`);
// const $tweet = createTweetElement(tweetData);
// // const localDataPost = createTweetElement(tweetData[0]);




// // Test / driver code (temporary)
// // console.log($tweetie); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// // addTweetToPage("#tweets-container", localDataPost);
// // renderTweets('#tweets-container', tweetData);


// // $(main.container .button).on("click", (event) => {
// //   console.log("click");
// // });




// //ready
// });

// });



    
    
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
    
    //add all tweets to pag