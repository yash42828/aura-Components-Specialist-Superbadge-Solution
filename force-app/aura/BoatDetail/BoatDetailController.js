({
     doInit : function (component, event, helper) {
        //Check if environment allows force:navigateToSObject event. Set showOnFullDetailsButton conditionally.
        component.set('v.showButton', $A.get("e.force:navigateToSObject"));
    },
     onFullDetails: function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.boat.Id")
        });
        navEvt.fire();
    }
})