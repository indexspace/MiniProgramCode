// pages/boforeWinter/boforeWinter.js
Page({

	data: {
		activeNames: [],

		online: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/online.jpg",
		outRoom: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/outRoom.jpg",

		outdoor01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/outdoor/outdoor01.jpg",
		outdoor02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/outdoor/outdoor02.jpg",
		outdoor03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/outdoor/outdoor03.jpg",

		group01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/groupPhoto/group01.jpg",
		group02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/groupPhoto/group02.jpg",
		group03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/groupPhoto/group03.jpg",

		leave01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/leave/leave01.jpg",
		leave02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/leave/leave02.jpg",
		leave03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/leave/leave03.jpg",
		leave04: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/leave/leave04.jpg",
		leave05: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/leave/leave05.jpg",
		leave06: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/06-221215/leave/leave06.jpg",
	  },
  
	  onChange(event) {
		this.setData({
		  activeNames: event.detail
		})
	  },

})