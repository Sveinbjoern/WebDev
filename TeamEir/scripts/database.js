let myDatabase = {
  samling: [
    JSON.stringify({
        "navn": "sdfgSDfhsdfh",
        "name": "Yehuda Katz",
        "image": "assets/img/1.fargeoversiktRmotRo.jpg",
        "innholdsTekst": "dfgsdghfsdhh",
        "flavourText": '"ERFGSDGHSHFASDFGD"',
    })
    ,

    `{
      "name": "Yehuda Katz",
    }`,

    {
      name: '"Yehuda Katz"',
      image: `assets/img/1.fargeoversiktRmotRo.jpg`,
      flavourText: '"ERFGSDGHSHFASDFGD"',
    },
    {
      name: '"Yehuda Katz"',
      image: `assets/img/1.fargeoversiktRmotRo.jpg`,
      flavourText: '"ERFGSDGHSHFASDFGD"',
    },
    {
      name: '"Yehuda Katz"',
      image: `assets/img/1.fargeoversiktRmotRo.jpg`,
      flavourText: '"ERFGSDGHSHFASDFGD"',
    },
    {
      name: '"Yehuda Katz"',
      image: `assets/img/1.fargeoversiktRmotRo.jpg`,
      flavourText: '"ERFGSDGHSHFASDFGD"',
    },
    {
      name: '"Yehuda Katz"',
      image: `assets/img/1.fargeoversiktRmotRo.jpg`,
      flavourText: '"ERFGSDGHSHFASDFGD"',
    },
    {
      name: '"Yehuda Katz"',
      image: `assets/img/1.fargeoversiktRmotRo.jpg`,
      flavourText: '"ERFGSDGHSHFASDFGD"',
    },
    {
      name: '"Yehuda Katz"',
      image: `assets/img/1.fargeoversiktRmotRo.jpg`,
      flavourText: '"ERFGSDGHSHFASDFGD"',
    },
    {
      name: '"Yehuda Katz"',
      image: `assets/img/1.fargeoversiktRmotRo.jpg`,
      flavourText: '"ERFGSDGHSHFASDFGD"',
    },
    {
      name: '"Yehuda Katz"',
      image: `assets/img/1.fargeoversiktRmotRo.jpg`,
      flavourText: '"ERFGSDGHSHFASDFGD"',
    },
  ],

  getSamlingObject: function (array) {
    let returnObject = {
		object: [], 
		 
	    } 
    array.forEach(element => {
        returnObject.object.push (JSON.parse(this.samling[element]))
    });

    return returnObject

  },
};
