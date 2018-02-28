$(document).ready(function(){
	ImageUploader.init();
});

var ImageUploader = {
	init: function() {
		ImageUploader.bindEvents();
	},

	bindEvents: function(){
		$("#image_picture").bind('change', function(){
			var size_in_megabytes = this.files[0].size/1024/1024;

			if (size_in_megabytes > 5) {
				alert('Maximum file size is 5 MB.');
			}
		});
	}
}