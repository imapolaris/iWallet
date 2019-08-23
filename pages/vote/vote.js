// pages/vote/vote.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		current: "tab1",
		nodes: [
			{ address: '0x01a1 ...' },
			{ address: '1x01a1 ...' },
			{ address: '2x01a1 ...' },
			{ address: '3x01a1 ...' },
			{ address: '4x01a1 ...' },
			{ address: '5x01a1 ...' },
			{ address: '6x01a1 ...' },
			{ address: '7x01a1 ...' },
			{ address: '8x01a1 ...' },
		],
		votes: [
			{ address: 'hdetr457g6h...', date: '2019/06/08', amount: 123, status: '抵押金额'},
			{ address: 'hdetr457g6h...', date: '2019/06/08', amount: 123, status: '抵押金额' },
			{ address: 'hdetr457g6h...', date: '2019/06/08', amount: 123, status: '抵押金额' },
			{ address: 'hdetr457g6h...', date: '2019/06/08', amount: 123, status: '抵押金额' },
			{ address: 'hdetr457g6h...', date: '2019/06/08', amount: 123, status: '抵押金额' },
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

	handleChange({ detail }) {
		this.setData({
			current: detail.key
		});
	}
})