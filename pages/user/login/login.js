// pages/user/login/login.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		username: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	onUserNameInput(e) {
		this.setData({
			username: e.detail
		})

		console.log('用户名', e.detail);
	},
	onPasswordInput(e) {
		this.setData({
			password: e.detail
		})
	},
	register() {
		wx.navigateTo({
			url: '../register/register',
		})
	},
	forgotPassword() {
		wx.navigateTo({
			url: '../findPassword/findPassword',
		})
	},
	loginNow() {
		const username = this.data.username;
		const pass = this.data.password;

		if (!username || !pass) {
			wx.showToast({
				title: '用户名或密码不能为空',
				icon: 'none',
				mask: true
			});
			return;
		}
	}
})