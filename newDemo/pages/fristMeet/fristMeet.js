Page({
	data: {
	  activeNames: [],

	  fristMeet01: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/03-221005/Img01.jpg",
	  fristMeet02: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/03-221005/Img02.jpg",
	  fristMeet03: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/03-221005/Img03.jpg",
	  fristMeet04: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/03-221005/Img04.jpg",
	  fristMeet05: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/03-221005/Img05.jpg",
	  fristMeet06: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/03-221005/Img06.jpg",
	  fristMeet07: "https://mp-a9b70e45-d5c2-45b3-a1c4-e2eb2cfa6b2b.cdn.bspapp.com/03-221005/Img07.jpg"
	},

	onChange(event) {
	  this.setData({
		activeNames: event.detail
	  })
	}

  });
  