var app = getApp();

Page({
	data: {
	  activeNames: [],
	  acquaintance01: app.globalData.ImgUrlprefix + "01-acquaintance/acquaintance01.jpg",
	  acquaintance02: app.globalData.ImgUrlprefix + "01-acquaintance/acquaintance02.jpg",
	  acquaintance03: app.globalData.ImgUrlprefix + "01-acquaintance/acquaintance03.jpg",
	  acquaintance04: app.globalData.ImgUrlprefix + "01-acquaintance/acquaintance04.jpg",
	  acquaintance05: app.globalData.ImgUrlprefix + "01-acquaintance/acquaintance05.jpg",
	  acquaintance06: app.globalData.ImgUrlprefix + "01-acquaintance/acquaintance06.jpg",
	  acquaintance07: app.globalData.ImgUrlprefix + "01-acquaintance/acquaintance07.jpg"

	},

	onChange(event) {
	  this.setData({
		activeNames: event.detail
	  })
	},

  });