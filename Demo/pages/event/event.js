// pages/event/event.js
Page({

  /**
  * 页面的初始数据
   */
	data: {
		num: 0,
		color: "rgb(10,200,100)",
		size: 300
	},

  /**`
   * 生命周期函数--监听页面加载
   */
	onLoad(options) {

	},

	onClick(e) {
		let r0 = parseInt(Math.random()*600)
		let r1 = parseInt(Math.random()*255)
		let r2 = parseInt(Math.random()*255)
		let r3 = parseInt(Math.random()*255)

		this.setData({
			num: r0,
			color: `rgb(${r1},${r2},${r3})`,
			size: r0>200 ? r0 : 200
		})
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})