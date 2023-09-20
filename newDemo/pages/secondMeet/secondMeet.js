var app = getApp();

Page({

	data: {	
		activeNames: [],

		bar01: app.globalData.ImgUrlprefix + "04-221015/bar/bar01.jpg",
		bar02: app.globalData.ImgUrlprefix + "04-221015/bar/bar02.jpg",
		bar03: app.globalData.ImgUrlprefix + "04-221015/bar/bar03.jpg",

		love01: app.globalData.ImgUrlprefix + "04-221015/love/love01.jpg",
		love02: app.globalData.ImgUrlprefix + "04-221015/love/love02.jpg",

		school01: app.globalData.ImgUrlprefix + "04-221015/school/school01.jpg",
		school02: app.globalData.ImgUrlprefix + "04-221015/school/school02.jpg",

		group01: app.globalData.ImgUrlprefix + "04-221015/groupPhoto/group01.jpg",
		group02: app.globalData.ImgUrlprefix + "04-221015/groupPhoto/group02.jpg",
		group03: app.globalData.ImgUrlprefix + "04-221015/groupPhoto/group03.jpg"
	  },
  
	onChange(event) {
		this.setData({
		  activeNames: event.detail
		})
	},

})