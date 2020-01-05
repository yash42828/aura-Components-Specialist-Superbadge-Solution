({
   /*onSearch : function(component, event) {
        var boatTypId = component.get("v.boatTypeId");
        alert(boatTypId); //<---here I am getting undefined
        console.log("boatTypId--> " + boatTypId);
        var action = component.get("c.getBoats");
        action.setParams({boatTypeId:boatTypId});

        //add the callback behavior for when the response is received
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log("state " + state);
            if(state === "SUCCESS"){
                var res = response.getReturnValue();
                component.set("v.boats", res);
                //console.log("v.boats ->"+ JSON.stringify(res));
            }
            else{
                console.log("Failed with state: " + state);
            }
        });

        //send action off to be executed
        $A.enqueueAction(action);
    },*/
    onSearch : function(component, event) {
        console.log("helper call");
		var updatedExp = event.getParam("boat");	
         console.log(updatedExp);

        var action = component.get("c.getBoats"); 
			action.setParams({
            "boatTypeId": updatedExp
      		});
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    component.set("v.boats", response.getReturnValue());
                    console.log(response.getReturnValue());
                }
                else {
                    console.log("Failed with state: " + state);
                }
            }
                              );
            $A.enqueueAction(action);	                
        },
 
})