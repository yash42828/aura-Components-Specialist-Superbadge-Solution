({
    onInit: function(component, event, helper) {
        var boatId = component.get("v.boat").Id;
        var action = component.get("c.getAll");
        action.setParams({"boatId": boatId });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS"){
                //do success stuff
                console.log('the query for boat revieww was SUCCESS');
                var boatReviews = response.getReturnValue();
                console.log(boatReviews);
                component.set("v.boatReviews", boatReviews);
            } else if (state === "ERROR") {
                //do error stuff
                console.log('there was an error with the BoatReviews Apex');
                
            }
        });
        $A.enqueueAction(action);
    }
})