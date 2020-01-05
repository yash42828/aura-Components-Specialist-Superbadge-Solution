({
    onInit : function(component, event, helper) {
        var service = component.find("service");
        service.getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function() {
                var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
                rec == component.get("v.boat").Id;
                component.set("v.boatReview.Boat__c", rec);
            })
        );
    }
})