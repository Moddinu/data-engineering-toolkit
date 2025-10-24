# Clickhouse 
Clickhouse is an OLAP database meaning thath it works on column rather then rows. This allows for fast quering og aggregated data. You can learn all about on https://clickhouse.com/learn.

## Running clickhouse on a windows machine
1. Go to https://clickhouse.com/docs/interfaces/cli and follow instructions
2. If you on a windows machine use wsl to run a linux subsystem on windows then use ```wsl -d Ubuntu --exec /usr/bin/bash```

## How is data handled
Clickhouse handles data by using different engines :
1. [Database Engines](https://clickhouse.com/docs/engines/database-engines): these allow us to create default clickhouse database as well as connect to various databases outside clickhouse to import data eg. PostgreSQL,SQLite etc...
2. [Table Engines](https://clickhouse.com/docs/engines/table-engines): thse allow us how data is written and read from the database tables the most commonly used is MergeTree

## How is data stored
Clickhouse uses table engines to store data, **MergeTree** is the primary table engine used for single-node clickhouse, it is used as it allows column-oriented, highly-scalable performance.
There are four type of **MergeTree** engines thath give extra functionality. 
| Merge Tree Engine | Used For |
| ----------- | ----------- |
| **AggregatingMergeTree** | For roll-up use cases |
| **ReplacingmergeTree** | For upsert uses cases |
| **SharedMergeTree** | Used in Clickhouse Cloud |
| **ReplicaedMergeTree** | For on-prem replication |

## SQL Synatax
Clickhouse uses SQl syntax and supports common sql commands
```sql
-- Create a new database
CREATE DATABASE datawarhouse;
```
```sql
-- Show you databases listed
SHOW DATABASES;
```


