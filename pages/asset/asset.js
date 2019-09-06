// pages/asset/asset.js
const httpRequest = require('../../utils/request.js');

Page({
	data: {
		asset: 999.01,
		flatMoney: 1232.45,
		currencyArr: []
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
		this.fetchData();
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		this.fetchData();
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


	fetchData() {
		wx.showLoading({
			title: '加载数据中...',
			mask: true
		});
		const $ = this;
		const task = httpRequest(
			'https://tcb-api.tencentcloudapi.com',
			'GET',
			null,
			null,
			(res) => {
				console.log(res);	
				wx.hideLoading();

				$.setData({
					currencyArr: [
						{ id: 1, name: "URAC", token: "10,298", money: "100", showContent: '' },
						{ id: 2, name: "BTC", token: "20,596", money: "200", showContent: '' },
					]
				})
			}
		)
	},
	trigger(e) {
		const target = e.currentTarget.dataset['item'];
		let arr = this.data.currencyArr;
		let item = arr.find(_ => _.id === target.id);
		if (item) {
			item.showContent = item.showContent ? '' : 'i-collapse-item-show-content';
		}
		this.setData({
			currencyArr: arr
		});
	}
})