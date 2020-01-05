public with sharing class BoatSearchResults {
    
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes() {
        return [SELECT Id, Name FROM BoatType__c];
    }
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if(boatTypeId == null || boatTypeId == ''){
            return [SELECT Id, Name, BoatType__c, Contact__r.Name, Picture__c FROM Boat__c];
        }
        else{
            return [SELECT Id, Name, BoatType__c, Contact__r.Name, Picture__c FROM Boat__c WHERE BoatType__c = :boatTypeId];
        }
    }
    
}