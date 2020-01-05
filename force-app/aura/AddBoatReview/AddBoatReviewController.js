({
	doInit : function (component, event, helper) {
        //Call helper onInit
        helper.onInit(component, event, helper);
    },
      onSave : function(component, event, helper) {
        var currentBoat = component.get("v.boat");
        component.set("v.boatReview.Boat__c",currentBoat.Id);

        var service = component.find("service");
        service.saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                // record is saved successfully
                var resultsToast = $A.get("e.force:showToast");
                if (resultsToast) {
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    resultsToast.fire();
                } else {
                    alert("The record was saved.");
                }

                var boatReviewAdded = component.getEvent("BoatReviewAdded");
                boatReviewAdded.fire();

                helper.onInit(component, event, helper);                
            } else if (saveResult.state === "INCOMPLETE") {
                // handle the incomplete state
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                // handle the error state
                console.log('Problem saving review, error: ' + JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        });
    },

    onRecordUpdated : function (component, event, helper) {
        //Handle recordUpdated force:recordData event with toast/alert
        var recordUpdatedToast = $A.get("e.force:showToast");
        if(recordUpdatedToast) {
            recordUpdatedToast.setParams({
                'title': 'Boat Review',
                'message': 'Boat Review has been updated!',
                'type': 'Success',
            });
            recordUpdatedToast.fire();
        } else {
            alert('Boat Review has updated!');
        }
    },
})