({
    doInit : function(component, event, helper){

        helper.loadBoatTypes(component);
    },

    handleChange : function(component, event, helper){
        console.log(component.find("boatTypes").get("v.value"));
        component.set("v.selectedType", component.find("boatTypes").get("v.value"));
    },

    search : function(component, event, helper){
        var selectedType = component.get("v.selectedType");
        console.log("Search button pressed " + selectedType)
    },

    newBoat : function(component, event, helper){
        //Set Boat Type Id selected from Boat Type drop-down
        //var boatTypeId = component.get("v.BoatTypes");
        //Create a new instance of e.force:createRecord
        var createNewBoatEvent = $A.get('e.force:createRecord');

        //If Id is not empty, Create a new instance of e.force:createRecord
        //if(!$A.util.isEmpty(boatTypeId)) {
            createNewBoatEvent.setParams({
                'entityApiName': 'Boat__c'
                
            });
            createNewBoatEvent.fire();
        // Else, log the error
        //} else {
          //  console.log('There was not found any Boat Type Id')
        //}
    },

    handleNewBoatForm: function(component, event, helper){
        console.log("handleNewBoatForm handler called.")
        var boatTypeId = component.get("v.selectedType");

        console.log(boatTypeId);
        var createNewBoat = $A.get("e.force:createRecord");
        console.log(createNewBoat);
        createNewBoat.setParams({
            "entityApiName": "Boat__c",
        })
        if(! boatTypeId==""){
            createNewBoat.setParams({
                "defaultFieldValues": {'BoatType__c': boatTypeId}
           })
        }
        createNewBoat.fire();
    },
    onFormSubmit : function(component, event, helper){
       /* var boatTypeId = component.get("v.selectedType");
        console.log("Search button pressed " + boatTypeId);
        var formSubmit = component.getEvent("formsubmit");
        console.log(formSubmit)
        formSubmit.setParams({
            'formData' : {
                'boat' : boatTypeId
            }
        });
        //Fire the event
        formSubmit.fire();*/
        var selectedType = component.get("v.selectedType");
        console.log("Search button pressed " + selectedType)
        //var requestNewBoat = component.getEvent("launchNewBoatForm");
        var requestNewBoat = $A.get("e.c:launchNewBoatForm")
        requestNewBoat.setParams({ "boat": selectedType });
        requestNewBoat.fire();
    },
})