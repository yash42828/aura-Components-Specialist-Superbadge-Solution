public with sharing class GetDataController{
   
    @AuraEnabled
    public static List<Boat__c> getItems() {
        return [SELECT Name, Id, BoatType__c, Picture__c FROM Boat__c];
    }
}