$(document).ready(function(){
  $( '#result-submit' ).submit(function( event ) {
    event.preventDefault();

    var query = $("#query").val();

    $.ajax({
      url : '/api/results?q=' + query,
      success : function(data){
        $('#term').empty().append(query);
        
        $('#timeline').empty();

        var tweets = data.statuses;

        for(var i = 0; i < tweets.length; i++){
          var tweet = tweets[i];

          if(i % 2 == 0){
            var timeline = 'timeline-inverted';
          } else {
            var timeline = 'timeline';
          }

          if(tweet.in_reply_to_status_id){
            var status = {
              badge : 'info',
              icon : 'fa-reply'
            }
          } else {
            var status = {
              badge : 'success',
              icon : 'fa-twitter'
            }
          }


          $('#timeline').append(
            '<li class="' + timeline + '">' +
            '  <div class="timeline-badge ' + status.badge + '"><i class="fa ' + status.icon + '"></i></div>' +
            '  <div class="timeline-panel">' +
            '    <div class="timeline-heading">' +
            '      <h4 class="timeline-title"><a href="https://twitter.com/' + tweet.user.screen_name + '" target="_blank">' + tweet.user.name + '</a> says...</h4>' +
            '    </div>' +
            '    <div class="timeline-body">' +
            '      <p>' + tweet.text + '</p>' +
            '      <hr />' +
            '      <p class="small"><span class="btn btn-sm"><i class="fa fa-heart-o"></i> ' + tweet.favorite_count + '</span> | <span class="btn btn-sm"><i class="fa fa-reply"></i> ' + tweet.retweet_count + '</span> <span class="pull-right"><a href="https://twitter.com/statuses/' + tweet.id_str + '" target="_blank" class="btn btn-info btn-sm">View Tweet</a></span></p>' +
            '    </div>' +
            '  </div>' +
            '</li>'
          )
        }
      }
    })

  });
})