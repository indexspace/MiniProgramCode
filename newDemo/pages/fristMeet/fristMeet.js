var app = getApp();

Page({
	data: {
	  activeNames: [],

	  fristMeet01: app.globalData.ImgUrlprefix + "03-221005/Img01.jpg",
	  fristMeet02: app.globalData.ImgUrlprefix + "03-221005/Img02.jpg",
	  fristMeet03: app.globalData.ImgUrlprefix + "03-221005/Img03.jpg",
	  fristMeet04: app.globalData.ImgUrlprefix + "03-221005/Img04.jpg",
	  fristMeet05: app.globalData.ImgUrlprefix + "03-221005/Img05.jpg",
	  fristMeet06: app.globalData.ImgUrlprefix + "03-221005/Img06.jpg",
	  fristMeet07: app.globalData.ImgUrlprefix + "03-221005/Img07.jpg"
	},

	onChange(event) {
	  this.setData({
		activeNames: event.detail
	  })
	}

  });
  