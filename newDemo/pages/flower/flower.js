// pages/flower/flower.js
Page({

	data: {
		activeNames: [],

		figure01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/05-221105/figure/figure01.jpg",
		figure02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/05-221105/figure/figure02.jpg",
		figure03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/05-221105/figure/figure03.jpg",
		figure04: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/05-221105/figure/figure04.jpg",
		figure05: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/05-221105/figure/figure05.jpg",

		scenery01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/05-221105/scenery/scenery01.jpg",
		scenery02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/05-221105/scenery/scenery02.jpg",
		scenery03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/05-221105/scenery/scenery03.jpg",

		flower: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/05-221105/flower.jpg"
	},
  
	onChange(event) {
		this.setData({
		  activeNames: event.detail
		})
	},

})