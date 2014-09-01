
Template.winelist.wines = function () {
	return Wines.find({}, {sort: {name: 1}});
};