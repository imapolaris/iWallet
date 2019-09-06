(function() {
	const METHODS = ['OPTIONS', 'GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'TRACE', 'CONNECT'];

	let requestTask = function(url, method, data, options, callback) {
		if (!url) return;
		if (!method || METHODS.indexOf(method.toUpperCase()) < 0) 
			method = 'GET';
		method = method.toUpperCase();
		if (!options) options = {};
		if (!options.header) {
			options.header = { 'content-type': 'application/json' };
		}
		if (!options.dataType) {
			options.dataType = 'json';
		}
		if (!options.responseType) {
			options.responseType = 'text';
		}
		
		const task = wx.request({
			url,
			method,
			data,
			...options,
			success: function (res) {
				callback && callback(res);
			},
			fail: function () {
				callback && callback('fail');
			},
			complete: function () {
				callback && callback('complete');
			}
		})

		return task;
	}

	module.exports = requestTask;
})();