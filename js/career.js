
(function ($) {
    "use strict";



  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);



/*------------------------------------------------------------------
[ Dropdown ]*/


jQuery.when( jQuery('.old-select select').hide('fast', function(){ 
  
    var select = jQuery(this);
    var selected = select.find(":selected").text()
    var options = '';
    
    select.find('option').each( function(){
      options += '<li id="' + jQuery(this).val() + '">' + jQuery(this).text() + '</li>';
    });
    
    select.after('<div class="new-select"><span>' + selected + '</span><ul>' + options + '</ul></div>');
  
  }) ).done( function(){
    
    jQuery('.new-select span').on('click', function(){
      jQuery(this).parent().find('ul').toggle('fast');
    });
    
    jQuery('.new-select li').on('click', function(){
      jQuery(this).closest('.old-select').find('select').val( jQuery(this).attr('id') );
      jQuery(this).closest('.new-select').find('span').text( jQuery(this).text() );
      jQuery(this).parent().slideUp('fast');
    });
    
    jQuery.on('click', function(){
      console.log(! jQuery(this).is('.new-select *'));
      if ( ! jQuery(this).is('.new-select *') ) {
        jQuery('.new-select ul').slideUp('fast');
      }
    });
  
  });