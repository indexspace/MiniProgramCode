// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

const app = getApp()
// app.globalData.myName =  '* No input value for the time being * ...'
console.log(app.globalData.myName);

Page({
	data: {
		textVal: 'demo1',
	},

	onPullDownRefresh() {
		wx.stopPullDownRefresh()
	},

	saveTextVal(e) {
		app.globalData.myName = e.detail.value
	},

	updateTectVal() {
		this.setData({
			textVal: app.globalData.myName
		})
	},

})


