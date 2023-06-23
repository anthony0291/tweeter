
$(document).ready(function() {
  // --- our code goes here ---

  // console.log(this);
  // console.log("it's working!");

  $('.new-tweet textarea').on('input', function() {
    let tweetLength = $(this).val().length;
    let tweetCounter = $(this).siblings('.counter');
    const tweetLimit = 140;

    if (tweetLength > tweetLimit) {
      tweetCounter.addClass('tweetIsTooLong');
    } else if (tweetLength < tweetLimit) {
      tweetCounter.removeClass('tweetIsTooLong');
    }
    tweetCounter.text(tweetLimit - tweetLength);
    
  });


});


