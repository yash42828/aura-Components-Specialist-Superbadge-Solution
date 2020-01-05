({
   /* onBoatClick : function(component, event, helper) {
        var cmpEvent = component.getEvent("BoatSelect");
        var boatId = event.getSource().get("v.name");
        cmpEvent.setParams({
            "boatId" : boatId
        });
        cmpEvent.fire();
        var BoatSelectedEvt = $A.get('e.c:BoatSelected');
        BoatSelectedEvt.setParams({
            "boat" : boat
        });     
        BoatSelectedEvt.fire();

    }*/
    onBoatClick : function (component, event, helper) {

        //Get the boat tile selected
        var boat = component.get('v.boat');
        //debugger;
        //console.log(boat)
        //Get the Id from the boat tile selected
        var boatId = boat.Id;
        console.log(boatId)
        //Create an instance of the BoatSelect event. Pass boatIs as a parameter. Fire the event.
        var BoatSelectEvent = $A.get('e.c:BoatSelect');
        //console.log(BoatSelectEvent	)
        BoatSelectEvent.setParams({
            boatId : boatId,
        });
        BoatSelectEvent.fire();

        //Create an instance of the BoatSelected event. Pass boat as a parameter. Fire the event.
        var BoatSelectedEvent = $A.get('e.c:BoatSelected');
        BoatSelectedEvent.setParams({
            boat : boat,
        });
        BoatSelectedEvent.fire();
     var boat = component.get('v.boat');
//send geolocation to map.cmp through the PlotMapMarker Application event
var lat = boat.Geolocation__Latitude__s;
var long = boat.Geolocation__Longitude__s;
var label = boat.Name;
var sObjectId;
var plotMapMarkerAppEvent = $A.get("e.c:PlotMapMarker");   
plotMapMarkerAppEvent.setParams({        
        "lat"   : lat,        
        "long"  : long,        
        "label" : label,        
        "SObjectId" : boat.Id});  
plotMapMarkerAppEvent.fire();    
console.log('lat ',lat);
    }
})