/**
 * Constructor
 *
 * */
function feedUtils(){
}

feedUtils.prototype.mybox;

feedUtils.prototype.getBoxOptions = function(){
    var defaultOptions = {
        "title":"Calendar Feeds",
        "banner": "iEnglish Banner here",
        "footer": "iEnglish footers",
        "itemsPerPage":6,
        "onDisplay": function(){

        }
    } ;
    return defaultOptions;
}

    /**
    *
    *    draw UI here
    **/
feedUtils.prototype.draw = function (element,customOption) {

// get options by this 
    var option = $.extend({}, this.getBoxOptions(), customOption);
    console.log("options in JSON: "+JSON.stringify(option));
    this.mybox = $(element);
        header = $('<h2></h2>').text(option.title);
        banner = $('<div class="calendarBanner"></div>').text(option.banner);
        refresh_items = $('<div class="refresh-items"></div>').empty();
        footer = $('<div class="calendarBanner"></div>').text(option.footer);
        $(this.mybox).append(banner,refresh_items,footer);
    }

/*
$.fn.feedUtils = function feedUtils(options){
    var defaultOptions = {
        "title":"Calendar Feeds",
        "banner": "iEnglish Banner here",
        "footer": "iEnglish footers",
        "itemsPerPage":6,
        "onDisplay": function(){

        }
    } ;

    function feedUtils(element,option){
        this.options = $.extend({}, defaultOption, options || {});
        this.ele = $(element);
        drow (this);
    }
    function drow ($this) {
        $this.header = $('<h2></h2>').text($this.options.title);
        $this.banner = $('<div class="calendarBanner"></div>').text($this.options.banner);
        $this.refresh_items = $('<div class="refresh-items"></div>').empty();
        $this.footer = $('<div class="calendarBanner"></div>').text($this.options.footer);
        $this.feed = $('<div></div>').append(banner,refresh_items,footer);

    }

    function refreshItemsHere(itemList){
        let items = this.refresh_items;
        // empty refresh items
        items.empty();
    }

    return new feedUtils(this,options);
}*/

var feedUtil = new feedUtils();
