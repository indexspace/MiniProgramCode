var app = getApp();


Page({

	data: {
		activeNames: [],

		online: app.globalData.ImgUrlprefix + "06-221215/online.jpg",
		outRoom: app.globalData.ImgUrlprefix + "06-221215/outRoom.jpg",

		outdoor01: app.globalData.ImgUrlprefix + "06-221215/outdoor/outdoor01.jpg",
		outdoor02: app.globalData.ImgUrlprefix + "06-221215/outdoor/outdoor02.jpg",
		outdoor03: app.globalData.ImgUrlprefix + "06-221215/outdoor/outdoor03.jpg",

		group01: app.globalData.ImgUrlprefix + "06-221215/groupPhoto/group01.jpg",
		group02: app.globalData.ImgUrlprefix + "06-221215/groupPhoto/group02.jpg",
		group03: app.globalData.ImgUrlprefix + "06-221215/groupPhoto/group03.jpg",

		leave01: app.globalData.ImgUrlprefix + "06-221215/leave/leave01.jpg",
		leave02: app.globalData.ImgUrlprefix + "06-221215/leave/leave02.jpg",
		leave03: app.globalData.ImgUrlprefix + "06-221215/leave/leave03.jpg",
		leave04: app.globalData.ImgUrlprefix + "06-221215/leave/leave04.jpg",
		leave05: app.globalData.ImgUrlprefix + "06-221215/leave/leave05.jpg",
		leave06: app.globalData.ImgUrlprefix + "06-221215/leave/leave06.jpg",
	  },
  
	  onChange(event) {
		this.setData({
		  activeNames: event.detail
		})
	  },

})