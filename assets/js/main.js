$(document).ready(function(){
	
	
	new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})


