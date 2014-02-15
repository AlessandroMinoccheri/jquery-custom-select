/*
Alessandro Minoccheri
V 1.0.0
15-02-2014
*/

(function ($) {
    $.fn.extend({      
        customSelect: function (argumentOptions) {
            var defaults = {
				width: 100,
				height: 19,
				image: "select.jpg",
				textAlign: "left",
				textIndent: "10"
			}
			var options = $.extend(defaults, argumentOptions);
			
			return this.each(function () {
                var o = options;
				var obj = $(this);
				var ul = $("ul", obj);
				var li = $("li", ul);
				var span = $("span", obj);
				var active = -1;
				var number_of_li_element = ul.find('li').length;
				var $document = $(document);

				unbind = function(){
		    		ul.unbind("mouseleave");
		    		$document.unbind("keyup");
		    		$document.unbind("click");
		    	}
				
				var input= '<input type="text" value="'+span.text()+'" name="'+obj.attr('id')+'" style="display:none"/>';
				obj.append(input);
				
				obj.css("background","url(img/"+o.image+") no-repeat");
				obj.css("width",o.width);
				obj.css("height",o.height);
				
				span.css("text-align",o.textAlign);
				span.css("margin-left",o.textIndent+"px");
				
				ul.css('width',o.width);
				li.css('width',o.width);
				
				obj.click(function(){
					ul.css("opacity","1");
					ul.css("display","block");
					
					ul.bind("mouseleave",	function(){
						 time = setTimeout(function() {
							 ul.animate({
								opacity: 0
							  }, 500, function() {
							  	unbind();
								ul.css("display","none");
							 });
						}, 400);		
					});
					$document.bind("keyup", function(e){
					    if (e.keyCode == 40) { 
					        if(active < number_of_li_element - 1){
					       		active++;
					       		ul.find('li').removeClass('active');
					       		ul.find('li:eq(' + active + ')').addClass('active');
					       	}
					    }
					    if (e.keyCode == 38) { 
					        if(active > 0){
					       		active--;
					       		ul.find('li').removeClass('active');
					       		ul.find('li:eq(' + active + ')').addClass('active');
					       	}
					    }
					});

					time2 = setTimeout(function() {
						$document.bind("click", function(){
							ul.animate({
								opacity: 0
								}, 500, function() {
									unbind();
									ul.css("display","none");
							});
						});
					}, 400);		
				});
				
				li.on("click",function(){
					unbind();
					span.text($(this).text());
					$('input[name="'+obj.attr('id')+'"]').attr("value",$(this).text());
					
					ul.animate({
						opacity: 0
						}, 500, function() {
							ul.css("display","none");
					});
				});
            });
        }
    });     
})(jQuery);