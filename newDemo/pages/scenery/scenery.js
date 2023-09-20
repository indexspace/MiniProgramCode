var app = getApp();

Page({
	data: {
	  activeNames: [],
	  
	  zhanJiang01: app.globalData.ImgUrlprefix + "00-scenery/zhanJiang/zhanJiang01.jpg",
	  zhanJiang02: app.globalData.ImgUrlprefix + "00-scenery/zhanJiang/zhanJiang02.jpg",
	  zhanJiang03: app.globalData.ImgUrlprefix + "00-scenery/zhanJiang/zhanJiang03.jpg",
	  zhanJiang04: app.globalData.ImgUrlprefix + "00-scenery/zhanJiang/zhanJiang04.jpg",
	  zhanJiang05: app.globalData.ImgUrlprefix + "00-scenery/zhanJiang/zhanJiang05.jpg",
	  zhanJiang06: app.globalData.ImgUrlprefix + "00-scenery/zhanJiang/zhanJiang06.jpg",
	  zhanJiang07: app.globalData.ImgUrlprefix + "00-scenery/zhanJiang/zhanJiang07.jpg",

	  toursim01: app.globalData.ImgUrlprefix + "00-scenery/tourism/tourism01.jpg",
	  toursim02: app.globalData.ImgUrlprefix + "00-scenery/tourism/tourism02.jpg",
	  toursim03: app.globalData.ImgUrlprefix + "00-scenery/tourism/tourism03.jpg",

	  school01: app.globalData.ImgUrlprefix + "00-scenery/school/school01.jpg",
	  school02: app.globalData.ImgUrlprefix + "00-scenery/school/school02.jpg",
	  school03: app.globalData.ImgUrlprefix + "00-scenery/school/school03.jpg",
	  school04: app.globalData.ImgUrlprefix + "00-scenery/school/school04.jpg",
	  school05: app.globalData.ImgUrlprefix + "00-scenery/school/school05.jpg",
	  school06: app.globalData.ImgUrlprefix + "00-scenery/school/school06.jpg",
	  school07: app.globalData.ImgUrlprefix + "00-scenery/school/school07.jpg",
	  school08: app.globalData.ImgUrlprefix + "00-scenery/school/school08.jpg",
	  school09: app.globalData.ImgUrlprefix + "00-scenery/school/school09.jpg",
	},

	onChange(event) {
	  this.setData({
		activeNames: event.detail
	  })
	},

  });