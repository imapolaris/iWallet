// pages/asset/asset.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		asset: 999.01,
		flatMoney: 1232.45,
		showContent: '',
		accordion: false,
		currencyArr: [
			{ id: 1, name: "URAC", token: "10,298", money: "100" },
			{ id: 1, name: "BTC", token: "20,596", money: "200" },
		]
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

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
	trigger(e) {
		const data = this.data;
		if (data.accordion) {
			this.triggerEvent('collapse', { name: data.name }, { composed: true, bubbles: true });
		} else {
			this.setData({
				showContent: data.showContent ? '' : 'i-collapse-item-show-content'
			});
		}
	}
})