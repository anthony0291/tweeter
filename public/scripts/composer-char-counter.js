
$(document).ready(function() {
  // --- our code goes here ---


  $('.new-tweet textarea').on('input', function() {
    let tweetLength = $(this).val().length;
    let tweetCounter = $(this).siblings('.counter');
    const tweetLimit = 140;
    console.log(tweetLength);

    if (tweetLength > tweetLimit) {
      tweetCounter.addClass('tweetIsTooLong');
    } else if (tweetLength <= tweetLimit) {
      tweetCounter.removeClass('tweetIsTooLong');
    }
    tweetCounter.text(tweetLimit - tweetLength);
  });

});


