/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweetData) => {
  const { name, handle } = tweetData["user"];
  const { text } = tweetData["content"];
  const avatar = tweetData['user']['avatars'];
  
  const $tweet = $("<article>");
  const $title = $("<h3>");
  const $content = $("<p>");
  const $author = $("<p>");

  const $avatar = $(`<img src= ${avatar}>`);
  const $symbols = $('<div class="symbols"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></div>');
  const $timeAgo = $(`<div>${$.timeago(tweetData['created_at'])}</div>`);
    
  $title.text(name);
  $content.text(text);
  $author.text(handle);
  // $timeAgo.text($timeAgo);
  // $avatar.text($avatar);
  // $symbols.text($symbols);
  $tweet.append($title);
  $tweet.append($avatar);
  $tweet.append($author);
  $tweet.append($content);
  $tweet.append($timeAgo);
  $tweet.append($symbols);
  
  console.log($.timeago(tweetData['created_at']));
  // console.log(tweetData['created_at']);
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
const loadTweets = function() {
  $.ajax('/tweets', { method: "GET" }).then((res) => {
    renderTweets("#tweets-container", res);
  });
};



// const myProfile = function(textarea) {
//   console.log('myprofile');
//   let newData = [
//     {
//       "user": { "name": "Anthony Tran",
//         "avatars": "https://i.imgur.com/73hZDYK.png",
//         "handle": "@anthonytran0291"},
        
//       "content":{ "text": `${textarea}` },
        
//       "created_at":  Date.now(),
//     }
//   ];
//   return newData;
// };

$(document).ready(function() {
  loadTweets();

  const sendPostToBackend = (textarea) => {
    console.log("top of sendPosttoBackEnd");
    $.ajax("/tweets", {
      method: "POST",
      data: textarea,
      // data: $this.serialize(),
    }).then((res) => {
      // const newPost = createTweetElement(res);
      console.log("afternewPost");
      renderTweets("#tweets-container", res);
      // const newPost = createTweetElement(myProfile(res.data));
      // console.log(myProfile);
      console.log("tweetrendered");
    });
  };

  $("form").on("submit", function(event) {
    event.preventDefault();
    // console.log("hello", $(event.currentTarget).serialize());
    // const text = $('textarea').val();
    const text = $(this).serialize();
    console.log(`Form submiss =  ${text}`);
    sendPostToBackend(text);
  });
  




// console.log( $( this ).serialize() );

// $( "form" ).on( "submit", function( event ) {
//   event.preventDefault();
//   console.log( $( this ).serialize() );
// });





///end of .document
});
///
