// pages/hello/hello.js
const app = getApp()

Page({
	data: {
		info: '嘿嘿嘿嘿',
		herName: app.globalData.myName
  	},

  /**
   * 组件的方法列表
   */
  mySwitch() {
	wx.switchTab({
	  url: '/pages/index/index',
	})
},
  })