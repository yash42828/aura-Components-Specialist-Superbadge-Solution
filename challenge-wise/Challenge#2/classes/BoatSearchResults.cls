public with sharing class BoatSearchResults {
    
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
        return [SELECT Id, Name FROM BoatType__c];
    }
    
    
}