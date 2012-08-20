function startSuteyoujsTest() {
	var s = new Suteyou();
	var fileData = document.getElementById("inputFile").files[0];

	module('read file(text mode)', {
	  setup: function() {
	    // setup for start test to read a file(text mode) 
	  },
	  teardown: function() {
	    //teardown for start test to read a file(text mode)
	  }
	});
	
	test('Suteyou.open', 1, function() {
	  var reader = s.open(fileData, "r");
	  ok(true, "Success Suteyou.open");
	});
}