public with sharing class CampingListController {
     @AuraEnabled
    public static List<camping_item__c> getItems() {
        

        return [SELECT Id, Name, Price__c, Quantity__c, Packed__c
                FROM camping_item__c];
    }
	
    public static camping_item__c saveItem(camping_item__c CampingItem)
    {
        upsert CampingItem;
        return CampingItem;
    }
}