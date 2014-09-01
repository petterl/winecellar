// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Wines.find().count() === 0) {
    // {name: [name], vineyard: vineyard, country: country, vintage: 1980, image: url, quantity: 2}
		var data = [
			{name: "VIC Cabernet Merlot",
				vineyard: "Best's",
				country: "Austalia",
				vintage: 2010,
				quantity: 1,
				image: "http://images.vivino.com/thumbs/1375638551_21680_375x500.jpg",
				comments: [{comment: "Wow thats nice", rating: 2}, {comment: "Nja", rating: 1}]
			},
    ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < data.length; i++) {
      var wine_id = Wines.insert({name: data[i].name, vineyard: data[i].vineyard, 
				country: data[i].country, vintage: data[i].vintage, image: data[i].image});
    }
  }
});