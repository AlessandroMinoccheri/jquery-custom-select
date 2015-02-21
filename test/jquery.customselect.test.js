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

        console.log('numOptions: ' + numOptions);

        notEqual( numOptions, '0');
    });
});

