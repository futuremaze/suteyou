function startSuteyoujsTest() {
	var fileData = document.getElementById("inputFile").files[0];
	var reader = undefined;

	module('read file(text mode)', {
	  setup: function() {
	    // setup for start test to read a file(text mode) 
	  },
	  teardown: function() {
	    //teardown for start test to read a file(text mode)
	  }
	});
	
	test('Suteyou.open', 4, function() {
	  reader = Suteyou.open(fileData, "r");
	  equal(reader.file.name, fileData.name, "reader.file.name=" + fileData.name);
	  equal(reader.file.size, fileData.size, "reader.file.size=" + fileData.size);
	  equal(reader.file.type, fileData.type, "reader.file.type=" + fileData.type);
	  ok(true, "Success Suteyou.open");
	});

	test('Suteyou#gets', 11, function() {
	  var line = "";
	  for (var i = 0; (line = reader.gets()) != undefined; i++) {
	  	equal(line, "line " + i.toString(), "line " + i.toString());
	  }
	  ok(true, "Success Suteyou#gets");
	});
}