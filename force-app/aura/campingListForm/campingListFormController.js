({
	/*clickCreateItem : function(component, event, helper) {
    if(helper.validateItemForm(component)){
        // Create the new item
        var newItem = component.get("v.newItem");
        helper.createItem(component, newItem);
  		 }  
	}*/
    clickCreateItem: function(component, event, helper) {

        // Simplistic error checking
        var validItem = true;
        validItem = component.find('campingItem').reduce(function(validSoFar, inputCmp){
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);

        if(validItem){
            helper.createItem(component);
        }
    }
})