// pages/user/register/register.js
const CountryCode = require('../../../assets/data/CountryCode.js');

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
		array: CountryCode,
		currentCC: 0
	},

	changeCountryCode(e) {
		this.setData({
			currentCC: e.detail.value
		});
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
	},

	register() {
		let cc = [...CountryCode];
		for (let i = 0; i < cc.length; ++i) {
			let item = cc[i];
			item.display = item.country + ' ' + `[+${item.code}]`
		}

		console.log(JSON.stringify(cc))
	}
})