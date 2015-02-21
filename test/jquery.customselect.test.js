var QUNIT = true;
$(document).ready(function(){
    var mySelect = $('#my-select');

    mySelect.customSelect({
        width:100,
        textAlign:"left",
        textIndent:"10",
        image:"select.jpg"
    });
  
    module('Select new value');
    test("Check Select option", function(){
        numOptions = 0;
        
        mySelect.click();
        numOptions = $(document).find('.select-ul').find('li').length;

        notEqual( numOptions, '0');
    });

    test("Click on option", function(){
        var check = false;
        var value = '';
        var newValue = '';

        value = $(document).find('.select-ul').find('li').eq(1).html();
        $(document).find('.select-ul').find('li').eq(1).click();;
        newValue = $(document).find('.select-span').html();

        if(value = newValue){
          check = true;
        }

        ok(check , true);
    });
});

