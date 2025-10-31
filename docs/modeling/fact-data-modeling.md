# Fact Data Modeling

##  What is fact data modeling ? 
This is when create table to store data of something that happened or occured. eg 
1. A user logs in to an app
2. A payment is made

Facts are usually fixed as the action happened in the past and does not change.

##  What makes fact modeling hard?
1. It's the volume of data as there can be alot of events, this type of data needs context so supporting dimension tables are usually needed.
2. Duplicates in facts are way more common than in dimensional data. 
