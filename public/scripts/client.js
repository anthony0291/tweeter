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
  const $tweetTop = $("<div class='top'>");
  const $tweetMid = $("<div class='mid'>");
  const $tweetBot = $("<div class='bot'>");
  
  
  const $title = $("<h3>");
  const $content = $("<p>");
  const $author = $("<p>");
  
  const $avatar = $(`<img src= ${avatar}>`);
  const $timeAgo = $(`<em>${$.timeago(tweetData['created_at'])}</em>`);
  const $symbols = $('<em class="symbols"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></em>');

  $title.text(name);
  $content.text(text);
  $author.text(handle);

  $tweet.append($tweetTop.append($avatar));
  $tweet.append($tweetTop.append($title));
  $tweet.append($tweetTop.append($author));
  $tweet.append($tweetMid.append($content));
  $tweet.append($tweetBot.append($timeAgo));
  $tweet.append($tweetBot.append($symbols));
  console.log($.timeago(tweetData['created_at']));

  return $tweet;
};

const addTweetToPage = (target, post) => {
  $(target).prepend(post);
};

const renderTweets = (target, postList) => {
  $(target).empty();
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

const sendPostToBackend = (textarea) => {
  console.log("top of sendPosttoBackEnd");
  if (textarea === 'text=') {
    $('.new-tweet p').text("You need to write before you can Tweet");
    setTimeout(function() {
      $('.new-tweet p').slideDown();
      setTimeout(function() {
        setTimeout(function() {
          $('.new-tweet p').slideUp();
        }, 2500);
      }, 100);
    });

  } else if (textarea.length > 145) {
    $('.new-tweet p').text("That's a little too Tweety. Try less Tweet.");
    setTimeout(function() {
      $('.new-tweet p').slideDown();
      setTimeout(function() {
        setTimeout(function() {
          $('.new-tweet p').slideUp();
        }, 2500);
      }, 100);
    });

  } else {
    $.ajax("/tweets", { method: "POST", data: textarea }).then((res) => {
      renderTweets("#tweets-container", res);
      console.log("tweetRendered");
      setTimeout(function() {
        loadTweets(textarea);
        $('textarea').val("");
        $('.counter').text(140);
      }, 5);
    });
  }
};


//DOCUMENT READY
$(document).ready(function() {
  
  loadTweets();

  $("form").on("submit", function(event) {
    event.preventDefault();
    sendPostToBackend($(this).serialize());
  });

///////// END OF DOCUMENT
});

