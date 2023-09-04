// pages/winter/winter.js
Page({

	data: {
		activeNames: [],

		daily01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/daily/daily01.jpg",
		daily02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/daily/daily02.jpg",
		daily03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/daily/daily03.jpg",
		daily04: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/daily/daily04.jpg",
		daily05: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/daily/daily05.jpg",
		daily06: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/daily/daily06.jpg",
		daily07: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/daily/daily07.jpg",


		food01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/food/food01.jpg",
		food02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/food/food02.jpg",
		food03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/food/food03.jpg",
		food04: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/food/food04.jpg",
		food05: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/food/food05.jpg",

		game01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game01.png",
		game02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game02.png",
		game03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game03.png",
		game04: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game04.png",
		game05: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game05.png",
		game06: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game06.png",
		game07: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game07.png",
		game08: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game08.png",
		game09: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game09.png",
		game10: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game10.png",
		game11: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game11.png",
		game12: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game12.png",
		game13: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game13.png",
		game14: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game14.png",
		game15: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/07-winterVacation/game/game15.png",
	  },
  
	  onChange(event) {
		this.setData({
		  activeNames: event.detail
		})
	  },

})