// components/customInput/index.js
Component({
	options: {
		multipleSlots: true
	},
	properties: {
		showIcon: {
			type: Boolean,
			value: true
		},
		icon: {
			type: String,
			value: 'info'
		},
		placeholder: {
			type: String,
			value: "请输入"
		},
		password: {
			type: Boolean,
			value: false
		},
		focus: {
			type: Boolean,
			value: false
		}
	},

	data: {
		inputData: '',
		showPassword: false
	},

	methods: {
		onInput: function(e) {
			this.setData({
				inputData: e.detail.value
			})
			this.triggerEvent('onInputChange', e.detail.value);
		},
		changeShowPassword: function() {
			console.log('show password')
			const show = this.data.showPassword;
			this.setData({
				showPassword: !show
			})
		}
	}
})
