var app = getApp();

Page({

	data: {
		activeNames: [],

		figure01: app.globalData.ImgUrlprefix + "05-221105/figure/figure01.jpg",
		figure02: app.globalData.ImgUrlprefix + "05-221105/figure/figure02.jpg",
		figure03: app.globalData.ImgUrlprefix + "05-221105/figure/figure03.jpg",
		figure04: app.globalData.ImgUrlprefix + "05-221105/figure/figure04.jpg",
		figure05: app.globalData.ImgUrlprefix + "05-221105/figure/figure05.jpg",

		scenery01: app.globalData.ImgUrlprefix + "05-221105/scenery/scenery01.jpg",
		scenery02: app.globalData.ImgUrlprefix + "05-221105/scenery/scenery02.jpg",
		scenery03: app.globalData.ImgUrlprefix + "05-221105/scenery/scenery03.jpg",

		flower: app.globalData.ImgUrlprefix + "05-221105/flower.jpg"
	},
  
	onChange(event) {
		this.setData({
		  activeNames: event.detail
		})
	},

})