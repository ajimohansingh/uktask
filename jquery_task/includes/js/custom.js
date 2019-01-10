$(function(){
$(".search").keyup(function(){
	if($(this).val().length>0)
		{
			
	$('.remove-icon').show();
	var data = $(this).val(), count = 0;
	if(!data){
	$(".sidenav li").slideUp('slow', function(){
	$('.sidenav').css({'border': 'none', 'background': 'transparent'});
	});
	return;
	}
	var regex = new RegExp(data, "i");
	var count=0;
	$('.sidenav li').each(function(){
	if ($(this).find('.trans').text().search(regex) < 0) {
	$(this).slideUp('slow');
	} else {
		//alert($(".sidenav li").length);
	$(this).slideDown('slow');
	
	count++;
	}
	
	
	});
	 document.getElementById('totalClasess').innerHTML = count + " Filtered Result";

	}
	else
	{
	$('.sidenav li').show();
	$('.remove-icon').hide();
	document.getElementById('totalClasess').innerHTML ="";
	}//alert($(this).val().length);
							
    });

		var selector = '.nav-item';
		
		$(selector).on('click', function(){
			$(selector).removeClass('active');
			$(this).addClass('active');
		});

   


      $(".sidenav").sortable({items:"li"}); 

       $('.maintab li').click(function(e){
        $('.maintab li').removeClass('active');
        $(this).addClass('active');
      });

       $(document).on('click', '.remove-btn', function () {
        if(confirm('Are you sure?')){
          $(this).parents('li').toggle("slide", function(){
            $(this).remove();
          });
        }
      });



	  $('.remove-icon').on('click', function () {
  $('li').show();
   $('.remove-icon').hide();
   $('#search').val('');
 
});
	
});


     
      

      


      
  