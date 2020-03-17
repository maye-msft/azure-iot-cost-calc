module.exports = {
    "Azure_Data_Lake_Storage-Azure_Databricks_Spark": {
        "link": "https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-databricks-account?toc=%2fazure%2fstorage%2fblobs%2ftoc.json",
        "description": `
        Run Apache Spark jobs using Azure Databricks to perform analytics on data stored in a storage account`

    },
    "Event_Hubs-Azure_Data_Lake_Storage": {
        link: "https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-archive-eventhub-capture",
        description: "Use Azure Data Lake Storage to capture data from Event Hubs"
    },

    "IoT_Hub-Azure_Data_Lake_Storage": {
        link: "https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messages-d2c#azure-blob-storage",
        description: "IoT Hub can route messages to -- Azure Blob Storage and Azure Data Lake Storage Gen2 (ADLS Gen2) accounts. Azure Data Lake Storage accounts are hierarchical namespace-enabled storage accounts built on top of blob storage."
    },
    "IoT_Hub-Azure_Databricks_Structured_Streaming": {
        link: "https://docs.microsoft.com/en-us/azure/azure-databricks/databricks-stream-from-eventhubs",
        description: "Connect a data ingestion system with Azure Databricks to stream data into an Apache Spark cluster in near real-time. You set up data ingestion system using Azure Event Hubs and then connect it to Azure Databricks to process the messages coming through."
    },
    "Event_Hubs-Azure_Databricks_Structured_Streaming": {
        link: "https://docs.microsoft.com/en-us/azure/azure-databricks/databricks-stream-from-eventhubs",
        description: "Connect a data ingestion system with Azure Databricks to stream data into an Apache Spark cluster in near real-time. You set up data ingestion system using Azure Event Hubs and then connect it to Azure Databricks to process the messages coming through."
    },
    "Azure_Databricks_Structured_Streaming-Azure_Data_Lake_Storage": {
        link: "https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/azure/azure-datalake-gen2",
        description: `Azure Databricks is an Apache Spark-based analytics platform optimized for the Microsoft Azure cloud services platform.
        Azure Data Lake Storage Gen2 (also known as ADLS Gen2) is a next-generation data lake solution for big data analytics.`
    },

    "Azure_Databricks_Structured_Streaming-SQL_Database": {
        link: "https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/sql-databases-azure",
        description: `The Spark connector for Azure SQL Database and SQL Server enables these databases to act as input data sources and output data sinks for Apache Spark jobs. It allows you to use real-time transactional data in big data analytics and persist results for ad-hoc queries or reporting.`
    },


    "Azure_Databricks_Structured_Streaming-Cosmos_DB": {
        link: "https://docs.microsoft.com/en-us/azure/machine-learning/concept-data",
        description: `An Azure Machine Learning datastore keeps the connection information to your storage so you don't have to code it in your scripts.`
    },

    "Azure_Data_Lake_Storage-Functions": {
        link: "https://github.com/Azure/azure-functions-datalake-extension",
        description: `Read and write data in Data Lake Storage with Azure Functions.`
    },
    "SQL_Database-Functions": {
        link: "https://github.com/Azure/azure-functions-datalake-extension",
        description: `Use Azure Functions to create a scheduled job that connects to an Azure SQL Database or Azure SQL Managed Instance.`
    },

    "Functions-SQL_Database": {
        link: "https://github.com/Azure/azure-functions-datalake-extension",
        description: `Use Azure Functions to create a scheduled job that connects to an Azure SQL Database or Azure SQL Managed Instance.`
    },

    "Cosmos_DB-Functions": {
        link: "https://github.com/Azure/azure-functions-datalake-extension",
        description: `Azure Cosmos DB is a great way to store unstructured and JSON data. Combined with Azure Functions, Cosmos DB makes storing data quick and easy with much less code than required for storing data in a relational database.`
    },

    "Functions-Cosmos_DB": {
        link: "https://github.com/Azure/azure-functions-datalake-extension",
        description: `Azure Cosmos DB is a great way to store unstructured and JSON data. Combined with Azure Functions, Cosmos DB makes storing data quick and easy with much less code than required for storing data in a relational database.`
    },

    "Machine_Learning-Azure_Data_Lake_Storage": {
        link: "https://docs.microsoft.com/en-us/azure/machine-learning/how-to-access-data",
        description: `Azure Machine Learning supports accessing data from Azure Blob storage, Azure Files, Azure Data Lake Storage Gen1, Azure Data Lake Storage Gen2, Azure SQL Database, and Azure Database for PostgreSQL.`
    },

    "Azure_Data_Lake_Storage-Machine_Learning": {
        link: "https://docs.microsoft.com/en-us/azure/machine-learning/how-to-access-data",
        description: `Azure Machine Learning supports accessing data from Azure Blob storage, Azure Files, Azure Data Lake Storage Gen1, Azure Data Lake Storage Gen2, Azure SQL Database, and Azure Database for PostgreSQL.`
    },

    "Azure_Data_Lake_Storage-Power_BI": {
        link: "https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-power-bi",
        description: `Use Power BI Desktop to analyze and visualize data stored in Azure Data Lake Storage and publish to PowerBI.com`
    },


    "Azure_Data_Lake_Storage-App_Service": {
        link: "https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-power-bi",
        description: `Power BI Desktop to analyze and visualize data stored in Azure Data Lake Storage`
    },

    "Cosmos_DB-Power_BI": {
        link: "https://docs.microsoft.com/en-us/azure/cosmos-db/powerbi-visualize",
        description: `Connect Azure Cosmos DB account to Power BI Desktop. After connecting, you navigate to a collection, extract the data, transform the JSON data into tabular format, and publish a report to Power BI`
    },

    "Cosmos_DB-App_Service": {
        link: "https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-power-bi",
        description: `With Cosmos DB SDK, it can work as backend database of Azure App services application.`
    },


    "SQL_Database-App_Service": {
        link: "https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-power-bi",
        description: `With Azure SQL drivers, it can work as backend database of Azure App services application.`
    },


    "App_Service-API_Management": {
        link: "https://docs.microsoft.com/en-us/azure/api-management/import-api-app-as-api",
        description: `Azure API Management feature allows you to expose apps deployed in Azure App Service to manage, protect, and secure APIs`
    },
    "SQL_Database-Power_BI": {
        link: "https://docs.microsoft.com/en-us/power-bi/service-azure-sql-database-with-direct-connect",
        description: `Power BI can connect directly to Azure SQL Database and create reports that use live data. You can keep your data at the source and not in Power BI`
    },

    "Event_Hubs-Stream_Analytics": {
        link: "https://docs.microsoft.com/en-us/azure/event-hubs/process-data-azure-stream-analytics",
        description: `The Azure Stream Analytics service makes it easy to ingest, process, and analyze streaming data from Azure Event Hubs, enabling powerful insights to drive real-time actions. This integration allows you to quickly create a hot-path analytics pipeline`
    },



    "IoT_Hub-Stream_Analytics": {
        link: "https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-get-started-with-azure-stream-analytics-to-process-data-from-iot-devices",
        description: `The Azure Stream Analytics service makes it easy to ingest, process, and analyze streaming data from Azure Event Hubs, enabling powerful insights to drive real-time actions. This integration allows you to quickly create a hot-path analytics pipeline`
    },


    "Stream_Analytics-Azure_Data_Lake_Storage": {

        link: "https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-stream-analytics",
        description: `Azure Data Lake Storage can be as an output for an Azure Stream Analytics job`
    },

    "Stream_Analytics-SQL_Database": {

        link: "https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-sql-output-perf",
        description: `SQL output in Azure Stream Analytics supports writing in parallel as an option. This option allows for fully parallel job topologies, where multiple output partitions are writing to the destination table in parallel. Enabling this option in Azure Stream Analytics however may not be sufficient to achieve higher throughputs, as it depends significantly on your SQL Azure database configuration and table schema. `
    },

    "Stream_Analytics-Cosmos_DB": {

        link: "https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-documentdb-output",
        description: `Azure Stream Analytics can target Azure Cosmos DB for JSON output, enabling data archiving and low-latency queries on unstructured JSON data. This document covers some best practices for implementing this configuration.`
    },
}