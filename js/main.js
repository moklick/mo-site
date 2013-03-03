$(document).ready(function(){
	var url = "https://api.twitter.com/1/statuses/user_timeline.json";
	$.ajax({
			url : url,
			type : "POST",
			data : {
				screen_name : 'moklick',
				include_rts : true,
				count : 1,
				include_entities : true
			},
			dataType : "jsonp",
			success : function(data){
				console.log(data[0]);
				if(data){
					var text = replaceTextWithLink(data[0].text)
					$('#last-tweet .module-text').html(text);	
				}else{
					$('#last-tweet').hide();
				}
			}
	});
});

function replaceTextWithLink(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,"<a class='sub-link' target='_blank' href='$1'>$1</a>");
}
