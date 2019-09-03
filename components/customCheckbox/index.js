// components/customCheckbox/customCheckbox.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		checked: false
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onStatusChanged() {
			let checked = this.data.checked;
			this.setData({
				checked: !checked
			})
		}
	}
})
