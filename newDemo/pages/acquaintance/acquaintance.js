Page({
	data: {
	  activeNames: [],
	  acquaintance01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/01-acquaintance/acquaintance01.jpg",
	  acquaintance02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/01-acquaintance/acquaintance02.jpg",
	  acquaintance03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/01-acquaintance/acquaintance03.jpg",
	  acquaintance04: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/01-acquaintance/acquaintance04.jpg",
	  acquaintance05: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/01-acquaintance/acquaintance05.jpg",
	  acquaintance06: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/01-acquaintance/acquaintance06.jpg",
	  acquaintance07: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/01-acquaintance/acquaintance07.jpg"

	},

	onChange(event) {
	  this.setData({
		activeNames: event.detail
	  })
	},

  });