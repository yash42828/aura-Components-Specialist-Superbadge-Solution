({
 doSearch : function(component, event, helper) {
 // alert(component.get("v.boatTypeId")); //<---here I am getting undefined
        helper.onSearch(component); //calling helper method
 },
    handleBoatResultForm : function(component, event, helper) {
 // alert(component.get("v.boatTypeId")); //<---here I am getting undefined
        helper.onSearch(component,event); //calling helper method
 },
    
        
    doInit: function(component, event, helper) {
        var action = component.get("c.getBoats");
        var requestNewBoat = $A.get("e.c:launchNewBoatForm");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.boats", response.getReturnValue());
                requestNewBoat.fire();
            }
            else {
                console.log("Failed with state: " + state);
            }
        }
);
        $A.enqueueAction(action);
    },
    
        onBoatSelect : function(component, event, helper) {
              var boatId = event.getParam("boatId");
        console.log(boatId);
        component.set("v.selectedBoatId",boatId);
    }


})