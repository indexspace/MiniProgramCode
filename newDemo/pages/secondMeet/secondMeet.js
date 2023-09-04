// pages/secondMeet/secondMeet.js
Page({

	data: {	
		activeNames: [],

		bar01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/bar/bar01.jpg",
		bar02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/bar/bar02.jpg",
		bar03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/bar/bar03.jpg",

		love01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/love/love01.jpg",
		love02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/love/love02.jpg",

		school01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/school/school01.jpg",
		school02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/school/school02.jpg",

		group01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/groupPhoto/group01.jpg",
		group02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/groupPhoto/group02.jpg",
		group03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/04-221015/groupPhoto/group03.jpg"
	  },
  
	onChange(event) {
		this.setData({
		  activeNames: event.detail
		})
	},

})