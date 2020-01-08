({
	onBoatClick : function(component, event, helper) {
        var selectedBoat = component.get("v.boat");
        
        var boatselect = component.getEvent("boatselect");
        boatselect.setParams({
            "boatId" : selectedBoat.Id
        });
        boatselect.fire();
        
        var boatselected = $A.get("e.c:BoatSelected");
        boatselected.setParams({
            "boat" : selectedBoat
        });
        boatselected.fire();
		
	}
})