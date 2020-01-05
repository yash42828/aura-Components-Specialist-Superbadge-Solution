public with sharing class BoatSearchResults  { 
@AuraEnabled    
public static List <Boat__c> getBoats(String boatTypeId) {    
    if(boatTypeId != '')  {         
    return [SELECT id, BoatType__c, picture__c, name,contact__r.Name FROM Boat__c WHERE BoatType__c =:boatTypeId];  

} else {       
            return [SELECT id, BoatType__c, picture__c, name,contact__r.Name FROM Boat__c];
}      
}
 
   /* @AuraEnabled
     public static List<Boat__c> getBoats() {
        return [SELECT Name, Id, BoatType__c, Picture__c, contact__r.Name FROM Boat__c];
     }*/
}