// pages/user/findPassword/findPassword.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		username: '',
		newPassword: '',
		verifyCode: ''
	},

	onUsernameChanged(e) {
		this.setData({
			username: e.detail
		})
	},
	onPasswordChanged(e) {
		this.setData({
			newPassword: e.detail
		})
	},
	onVerifyCodeChanged(e) {
		this.setData({
			verifyCode: e.detail
		})
	},

	findPassword() {
		const { username, newPassword, verifyCode } = this.data;
		if (!username || !newPassword || !verifyCode) {
			wx.showToast({
				title: '不能为空',
				icon: 'none'
			})
			return;
		}
	}
})