var app = getApp();

Page({

	data: {
		activeNames: [],

		daily01: app.globalData.ImgUrlprefix + "07-winterVacation/daily/daily01.jpg",
		daily02: app.globalData.ImgUrlprefix + "07-winterVacation/daily/daily02.jpg",
		daily03: app.globalData.ImgUrlprefix + "07-winterVacation/daily/daily03.jpg",
		daily04: app.globalData.ImgUrlprefix + "07-winterVacation/daily/daily04.jpg",
		daily05: app.globalData.ImgUrlprefix + "07-winterVacation/daily/daily05.jpg",
		daily06: app.globalData.ImgUrlprefix + "07-winterVacation/daily/daily06.jpg",
		daily07: app.globalData.ImgUrlprefix + "07-winterVacation/daily/daily07.jpg",


		food01: app.globalData.ImgUrlprefix + "07-winterVacation/food/food01.jpg",
		food02: app.globalData.ImgUrlprefix + "07-winterVacation/food/food02.jpg",
		food03: app.globalData.ImgUrlprefix + "07-winterVacation/food/food03.jpg",
		food04: app.globalData.ImgUrlprefix + "07-winterVacation/food/food04.jpg",
		food05: app.globalData.ImgUrlprefix + "07-winterVacation/food/food05.jpg",

		game01: app.globalData.ImgUrlprefix + "07-winterVacation/game/game01.png",
		game02: app.globalData.ImgUrlprefix + "07-winterVacation/game/game02.png",
		game03: app.globalData.ImgUrlprefix + "07-winterVacation/game/game03.png",
		game04: app.globalData.ImgUrlprefix + "07-winterVacation/game/game04.png",
		game05: app.globalData.ImgUrlprefix + "07-winterVacation/game/game05.png",
		game06: app.globalData.ImgUrlprefix + "07-winterVacation/game/game06.png",
		game07: app.globalData.ImgUrlprefix + "07-winterVacation/game/game07.png",
		game08: app.globalData.ImgUrlprefix + "07-winterVacation/game/game08.png",
		game09: app.globalData.ImgUrlprefix + "07-winterVacation/game/game09.png",
		game10: app.globalData.ImgUrlprefix + "07-winterVacation/game/game10.png",
		game11: app.globalData.ImgUrlprefix + "07-winterVacation/game/game11.png",
		game12: app.globalData.ImgUrlprefix + "07-winterVacation/game/game12.png",
		game13: app.globalData.ImgUrlprefix + "07-winterVacation/game/game13.png",
		game14: app.globalData.ImgUrlprefix + "07-winterVacation/game/game14.png",
		game15: app.globalData.ImgUrlprefix + "07-winterVacation/game/game15.png",
	  },
  
	  onChange(event) {
		this.setData({
		  activeNames: event.detail
		})
	  },

})