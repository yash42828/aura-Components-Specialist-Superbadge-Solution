({
    packItem: function(component, event, helper) {
        var btnClicked = event.getSource();         // the button
        var btnMessage = btnClicked.get("v.item.Packed__c",true); // the button's label
        component.set("v.message", btnMessage);
        event.getSource().set("v.disabled", true);// update our message
    }
})