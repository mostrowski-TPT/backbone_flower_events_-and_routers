var app = app || {};

app.Router = Backbone.Router.extend({
    //    <!--#link syntax relating to "link" keys in model and model instances, link keys contain router keys, router keys in router file relate to functions-->
    routes: {
        //"" - homepage route
        "": "noCopy",
        "redRose": "redRoseMessage",
        "heirloomRose": "heirloomRoseMessage",
        "rainbowRose": "rainbowRoseMessage"  
    },

    noCopy: function () {
        $("#copy").html("");
    },

    heirloomRoseMessage: function () {
        $("#copy").html("Heirloom Roses are great Mother's Day flowers");
        console.log("clicked1");
    },

    rainbowRoseMessage: function () {
        $("#copy").html("Choose Rainbow Roses for your wedding");
        console.log("clicked2");
    },

    redRoseMessage: function () {
        $("#copy").html("On Valentine's Day, give that special someone Red Roses");
        console.log("clicked3");
    }


});


