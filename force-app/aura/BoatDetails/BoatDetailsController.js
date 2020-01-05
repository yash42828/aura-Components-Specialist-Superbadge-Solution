({
    onBoatSelected : function(component, event, helper) {
        var boatSelected = event.getParam("boat");
        console.log("Boat Details:"+boatSelected)
        component.set("v.id",boatSelected.Id);
        var service = component.find("service");
        service.reloadRecord();
    },

    //onBoatReviewAdded : function(component, event, helper) {
        //console.log("Event received");
        //component.set("v.selTabId", "boatreviewtab");
    //}
    onRecordUpdated : function(component, event, helper){
        //invoke a refresh on the reviews tab, calling public method refresh
        //BRcmp is the aura:id for the component when invoked in BoatDetails.cmp
        //var boat = component.get("v.boat");
        //console.log("onRecordUpdated called | boat: " + boat.Id);

        //var BRcmp = component.find("boatReviews");
        //console.log(BRcmp);
        //component.find("BRcmp").refresh();
        //var auraMethodResult = BRcmp.refresh();
        //var auraMethodResult = component.find('boatReviews').refresh();
        //console.log("auraMethodResult: " + auraMethodResult);
        var boat = component.get("v.boat");
        console.log("onRecordUpdated called | boat: " + boat);

        //invoke a refresh on the reviews tab, calling public method refresh
        var BoatReviews = component.find("BoatReviews");
        console.log("BoatReviews: " + BoatReviews);
        if(typeof BoatReviews != 'undefined'){
            BoatReviews.refresh();
        }
	},
    onBoatReviewAdded : function(component, event, helper) {
 		console.log('Event received');
 		component.find("details").set("v.selectedTabId", "boatreviewtab");

	}

})

/*({
    init: function(component, event, helper) {
        component.set("v.enableFullDetails", $A.get("e.force:navigateToSObject"));
    },
    onFullDetails: function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.boat.Id")
        });
        navEvt.fire();
    },    
    onBoatSelected : function(component, event, helper) {
        var boatSelected = event.getParam("boat");
        component.set("v.id",boatSelected.Id);
        var service = component.find("service");
        service.reloadRecord() ;
    },
    onRecordUpdated : function(component, event, helper) {
    },
    onBoatReviewAdded : function(component, event, helper) {
	console.log('Event received');
	component.find("details").set("v.selectedTabId", "boatreviewtab");
}
    
})*/