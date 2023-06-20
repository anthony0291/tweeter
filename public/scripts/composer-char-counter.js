
$(document).ready(function() {
  // --- our code goes here ---

  console.log(this);
  console.log("it's working!");
  
  $('.new-tweet textarea').on('input', function() {
    let newTweetLength = $(this).val().length;
    let nearbyCounter = $(this).siblings('.counter');
    const tweetLengthLimit = 140;
    console.log(".new-tweet:active");
    
    if (newTweetLength > tweetLengthLimit) {
      nearbyCounter.addClass('tweetIsTooLong');
    } else if (newTweetLength < tweetLengthLimit) {
      nearbyCounter.removeClass('tweetIsTooLong');
    }
    nearbyCounter.text(tweetLengthLimit - newTweetLength);

    $("#btn").on('click', function() {
      console.log(this); //The this keyword is a reference to the button
    });
    
  });


});