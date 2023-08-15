// pages/home/home.js
Page({
	data: {
	  activeNames: []
	},

	onChange(event) {
	  this.setData({
		activeNames: event.detail
	  })
	  //console.log(event.detail);
	},

  });
  