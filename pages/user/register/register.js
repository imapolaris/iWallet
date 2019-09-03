// pages/user/register/register.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		withEmail: false,
		password: '',
		passwordAgain: '',
		verifyCode: '',
		agree: false,
		array: [
			'美国', '中国', '巴西', '日本'
		]
	},

	chooseRegion() {

	},

	onAgreeStatusChanged(e) {
		this.setData({
			agree: e.detail
		})
	},

	viewAgreement() {
		wx.navigateTo({
			url: '../../setting/agreement/agreement',
		})
	},

	switchWay() {
		let withEmail = this.data.withEmail;
		this.setData({
			withEmail: !withEmail
		})
	}
})