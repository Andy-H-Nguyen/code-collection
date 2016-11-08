var request = require('request');
var _ = require("underscore");
var finished = _.after(PAGES, getTotal);

var PAGES = 10;
var total = 0;

function calculateShopifyTotal () {    
    for (var page = 1; page <= PAGES; page++) {
        calcPageTotal(page);
    }
}

function calcPageTotal(page) {
    var url = "http://shopicruit.myshopify.com/products.json?page=" + page;
    request({
    url: url, 
    json: true
    }, function (error, response, body) {
        if (error) {
            console.err('An error has occurred');
            finished();
        } else {
            if (body.products.length <= 0) {
                finished();
            } else {
                body.products.forEach(function(product) {
                    product.variants.forEach(function(variant) {
                        total+=parseInt(variant.price);
                    });
                });
                finished();
            }
        }
    });
}


function getTotal() {
    console.log(total);
}

calculateShopifyTotal();