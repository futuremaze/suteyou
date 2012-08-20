var Suteyou = function() {
	this.file = undefined;
	this.mode = undefined;
	this.sync = undefined;
};

Suteyou.fn = Suteyou.prototype;

Suteyou.open = function(fileData, mode, sync) {
	var s = new Suteyou();
	s.open(fileData, mode, sync);
	return s;
};

Suteyou.fn.open = function(fileData, mode, sync) {
	this.file = fileData;
	this.mode = mode;
	this.sync = sync;
};

Suteyou.fn.gets = function() {
	
};
