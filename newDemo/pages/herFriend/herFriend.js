var app = getApp();

Page({
	data: {
	  activeNames: [],
	  
	  herFriend01: app.globalData.ImgUrlprefix + "02-sheMeetFriend/sheMeetFriend01.jpg",
	  herFriend02: app.globalData.ImgUrlprefix + "02-sheMeetFriend/sheMeetFriend02.jpg",
	  herFriend03: app.globalData.ImgUrlprefix + "02-sheMeetFriend/sheMeetFriend03.jpg",
	  herFriend04: app.globalData.ImgUrlprefix + "02-sheMeetFriend/sheMeetFriend04.jpg",
	  herFriend05: app.globalData.ImgUrlprefix + "02-sheMeetFriend/sheMeetFriend05.jpg",
	  herFriend06: app.globalData.ImgUrlprefix + "02-sheMeetFriend/sheMeetFriend06.jpg",
	  herFriend07: app.globalData.ImgUrlprefix + "02-sheMeetFriend/sheMeetFriend07.jpg",
	  herFriend08: app.globalData.ImgUrlprefix + "02-sheMeetFriend/sheMeetFriend08.jpg"
	},

	onChange(event) {
	  this.setData({
		activeNames: event.detail
	  })
	}

  });