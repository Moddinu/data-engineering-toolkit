# Fact Data Modeling

##  What is fact data modeling ? 
This is when creating a table to store data of something that happened or occured. eg 
1. A user logs in to an app
2. A payment is made

Facts are usually fixed as the action happened in the past and does not change.

##  What makes fact modeling hard?
1. It's the volume of data as there can be a lot of events, this type of data needs context so supporting dimension tables are usually needed.
2. Duplicates in facts are way more common than in dimensional data. 

##  Types of facts
1. Normalized facts: they don't have dimensions attributes 
2. Denormalized facts hold some dimensions attributes


## How does it work ?
Fact tables contain the Who,Where,How,What and When
1. Who   : the fields that identify who is doing the action eg user_id
2. Where : the fields that may bring dimensions but still can be an id eg: device_id, location_id, page_id
3. How   : How the action was executed eg. "he used an iphone to click the hoem page"
4. What  : Are part of the facts "CLICKED", "PAYED","FAILED"
5. When  : An event timestamp or date

Fact dataset should: 
1. Have quality guarantess
2. Remove hard to understand columns
3. Not be a log table
4. Data should be flat

## When should you model in dimensions in fact tables?
Eg an issue described by Zach Wilson is when in Netflix they wanted to collect all the data of the network used by their apps. At first to get the app name they had a join on the table causing a lot of issues so what they did is a wide company change to send the app from where the requested was originating allowing them to insert the app dimension attribute in the network fact table. 


Notes:
- Use UTC Timezones
- Raw logs are not facts
- High volume make fact data much more costly so a retention period is usally set
- Deduping is up to you

