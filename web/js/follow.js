$(function(){
  $('.ajax-follow').on({
    click: function(e){
      e.preventDefault();
      var $href = $(this).attr('href');
      $('<div></div>').load($href+' form', function(){
        $.ajax({
          url: $href,
          method: 'post',
          dataType: 'json',
          cache: false,
          success: function(obj) {
            var $tic = document.getElementById('follow-id-'+obj.id);
            if (obj.success) {
              $tic.href = '/user/unfollow/'+obj.id;
              $tic.innerHTML = "Unfollow";
            }
            else {
              $tic.href = '/user/follow/'+obj.id;
              $tic.innerHTML = "Follow";
            }
          }
        });
      });
    }
  });
});
