({
 
    /*validateFields : function (component,field) {
       
        var nameField = field;
        console.log('yes:'+nameField);
        var expname = nameField.get("v.value");
        if ($A.util.isEmpty(expname)){
           component.set("v.er",true);
           nameField.set("v.errors", [{message:"this field can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
    },*/
   
    createItem : function (component,Item){
     
        var action = component.get("c.saveItem");
        action.setParams({"CampingItem":Item});
        action.setCallback(this,function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                console.log('save');
            }
        });
        $A.enqueueAction(action); 
//Below lines are shifted from controller Js to helperJs
        var Items = component.get("v.items");
	     var Item = component.get("v.newItem");
      Items.push(Item);   
        component.set("v.items",Items);
        component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                'Name': '',
                'Quantity__c': 0,
                'Price__c': 0,
                'Packed__c': false });
    },
    addItem: function(component, item) {
    this.saveItem(component, item, function(response){
        var state = response.getState();
        if (component.isValid() && state === "SUCCESS") {
            // all good, nothing to do.
         /*   var items = component.get("v.items");
            items.push(response.getReturnValue());
            component.set("v.items", items);*/
        }
    });
},
})