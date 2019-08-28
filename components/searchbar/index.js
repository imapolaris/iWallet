// components/searchbar/searchbar.js
var plugin = requirePlugin('WechatSI');
let manager = plugin.getRecordRecognitionManager();

Component({
	options: {
		addGlobalClass: true
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		extClass: {
			type: String,
			value: ''
		},
		focus: {
			type: Boolean,
			value: false
		},
		placeholder: {
			type: String,
			value: 'Search'
		},
		value: {
			type: String,
			value: ''
		},
		search: {
			type: Function,
			value: null
		},
		throttle: {
			type: Number,
			value: 500
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		result: []
	},
	lastSearch: Date.now(),
	lifetimes: {
		attached: function attached() {
			this.initPlugin();
		}
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		clearInput: function clearInput() {
			this.setData({
				value: ''
			});
			this.triggerEvent('clear');
		},
		inputFocus: function inputFocus(e) {
			this.triggerEvent('focus', e.detail);
		},
		inputBlur: function inputBlur(e) {
			this.setData({
				focus: false
			});
			this.triggerEvent('blur', e.detail);
		},
		inputChange: function inputChange(e) {
			var _this = this;
			this.setData({
				value: e.detail.value
			});
			this.triggerEvent('input', e.detail);
			if (Date.now() - this.lastSearch < this.data.throttle) {
				return;
			}
			if (typeof this.data.search !== 'function') {
				return;
			}
			this.lastSearch = Date.now();
			this.timerId = setTimeout(function () {
				_this.data.search(e.detail.value).then(function (json) {
					_this.setData({
						result: json
					});
				}).catch(function (err) {
					console.log('search error', err);
				});
			}, this.data.throttle);
		},
		initPlugin() {
			manager.onRecognize = function(res) {
				console.log('current result', res.result);
			}
			manager.onStart = function(res) {
				console.log("成功开始录音识别", res)
			}
			manager.onStop = function(res) {
				console.log("record file path", res.tempFilePath)
				console.log("result", res.result)

				wx.showToast({
					title: res.result,
				})
			}
			manager.onError = function(res) {
				console.log('error msg', res.msg, res.retcode);

				wx.showToast({
					title: res.msg,
				})
			}
		},
		startSpeak() {
			console.log('start speak');
			manager.start({
				duration: 30000,
				lang: 'zh_CN'
			});
		},
		stopSpeak() {
			console.log('stop speak');
			manager.stop();
		}
	}
})
