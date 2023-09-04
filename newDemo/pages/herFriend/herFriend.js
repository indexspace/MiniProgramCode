Page({
	data: {
	  activeNames: [],
	  
	  herFriend01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/02-sheMeetFriend/sheMeetFriend01.jpg",
	  herFriend02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/02-sheMeetFriend/sheMeetFriend02.jpg",
	  herFriend03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/02-sheMeetFriend/sheMeetFriend03.jpg",
	  herFriend04: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/02-sheMeetFriend/sheMeetFriend04.jpg",
	  herFriend05: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/02-sheMeetFriend/sheMeetFriend05.jpg",
	  herFriend06: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/02-sheMeetFriend/sheMeetFriend06.jpg",
	  herFriend07: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/02-sheMeetFriend/sheMeetFriend07.jpg",
	  herFriend08: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/02-sheMeetFriend/sheMeetFriend08.jpg"
	},

	onChange(event) {
	  this.setData({
		activeNames: event.detail
	  })
	}

  });