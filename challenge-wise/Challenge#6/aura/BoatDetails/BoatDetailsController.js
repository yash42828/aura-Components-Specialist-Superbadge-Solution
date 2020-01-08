({
	onBoatSelected : function(component, event, helper) {
		var boat = event.getParam('boat');
        component.set("v.id", boat.Id);
        component.find("service").reloadRecord();
	},
    
    onRecordUpdated : function(component, event, helper) {
        component.find("service").reloadRecord();
	}
})