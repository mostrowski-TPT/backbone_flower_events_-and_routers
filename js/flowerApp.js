//model instances
var redRoses = new app.singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg",
    //    <!--#link syntax relating to "link" keys in model and model instances, link keys contain router keys, router keys in router file relate to functions-->
    link: "redRose"
});

var rainbowRoses = new app.singleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    //    <!--#link syntax relating to "link" keys in model and model instances, link keys contain router keys, router keys in router file relate to functions-->
    link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
    name: "Heirloom roses",
    price: 19.95,
    img: "images/heirloomPinkRoses.jpg",
    //    <!--#link syntax relating to "link" keys in model and model instances, link keys contain router keys, router keys in router file relate to functions-->
    link: "heirloomRose"
});

//collection instance
var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses, heirloomRoses
]);

//view instance
var flowerGroupView = new app.allFlowersView({
    collection: flowerGroup
});

//render the view
$("#allFlowers").html(flowerGroupView.render().el);

//creting router instance
var flowerRouter = new app.Router();
//keep track of history
Backbone.history.start();
