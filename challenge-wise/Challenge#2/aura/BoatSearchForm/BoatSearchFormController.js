({
    initBoatSearchForm : function(component, event, helper) {
        var createRecordEvent = $A.get("e.force:createRecord");
        if (createRecordEvent){
            component.set("v.showNewButton", true);
        }
        
        helper.initBoatTypes(component);
    },
    
    createNewBoat : function(component, event, helper) {
        var boatType = component.find("boatTypeSelect").get("v.value");
        
        var params = {"entityApiName": "Boat__c"};
        if(boatType){
            params.defaultFieldValues = {"BoatType__c" : boatType};
        }
        
        var createBoatRecordEvent = $A.get("e.force:createRecord");
        createBoatRecordEvent.setParams(params);
        
        createAcountContactEvent.fire();
        
    }
    
    
})