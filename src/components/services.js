
  const LAYER = {
    Devices: "Devices",
    EdgeDevices: "EdgeDevices",
    Data_Ingestion: "Data_Ingestion",
    Stream_Analysis: "Stream_Analysis",
    Data_Analysis: "Data_Analysis",
    BigData_Analysis: "BigData_Analysis",
    Machine_Learning: "Machine_Learning",
    Data_Storage: "Data_Storage",
    Data_Presentation: "Data_Presentation",
    Database: "Database",
    Database_NoSQL: "Database_NoSQL",
    Logic: "Logic",
    Application: "Application",
    API: "API"
  };

const OBJECTS = {

 IoT_Hub: {
    costFactors: ["MESSAGES/DAY", "MESSAGE METER SIZE"],
    layer: LAYER.Data_Ingestion,
    rules: [
      {
        Data_Ingestion_Device_Management: {
          from: [LAYER.Devices]
        }
      }
    ]
  },
  Event_Hubs: {
    costFactors: ["Throughput unit (1 MB/s ingress, 2 MB/s egress)", "Ingress events"],
    layer: LAYER.Data_Ingestion,
    rules: [
      {
        Data_Ingestion: {
          from: [LAYER.Devices]
        }
      }
    ]
  },
  Stream_Analytics: {
    costFactors: ["vCore", "RAM", "Throughput"],
    layer: LAYER.Stream_Analysis,
    rules: [
      {
        Realtime_Data_Analysis: {
          from: [LAYER.Data_Ingestion]
        }
      }
    ]
  },
  Azure_Databricks_Structured_Streaming: {
    costFactors: ["vCore", "RAM"],
    "link":"https://azure.microsoft.com/en-us/services/databricks/",
    "pricing": "https://azure.microsoft.com/en-us/pricing/details/databricks/",
    layer: LAYER.Stream_Analysis,
    rules: [
      {
        Realtime_Data_Analysis_BigData: {
          from: [LAYER.Data_Ingestion]
        }
      }
    ]
  },
  Machine_Learning: {
    costFactors: ["vCore", "RAM"],
    layer: LAYER.Machine_Learning,
    rules: [
      {
        Predictive_and_Anormaly_Analysis: {
          from: [LAYER.Data_Storage]
        }
      }
    ]
  },
//   Azure_Storage: {
//     "link": "https://azure.microsoft.com/en-us/services/storage/blobs/",
//     "pricing": "https://azure.microsoft.com/en-us/pricing/details/storage/blobs/",
//     layer: LAYER.Data_Storage,
//     rules: [
//       {
//         Data_Storage: {
//           from: [
//             LAYER.Data_Ingestion,
//             LAYER.Stream_Analysis,
//             LAYER.Machine_Learning
//           ]
//         }
//       }
//     ]
//   },
  Azure_Data_Lake_Storage: {
    costFactors: ["Storage", "Transactions (Read/Write Operations)"],
    "link": "https://azure.microsoft.com/en-us/services/storage/data-lake-storage/",
    "pricing": "https://azure.microsoft.com/en-us/pricing/details/storage/data-lake/",
    layer: LAYER.Data_Storage,
    rules: [
      {
        Data_Storage: {
          from: [
            LAYER.Data_Ingestion,
            LAYER.Stream_Analysis
            // LAYER.Machine_Learning,
            // LAYER.BigData_Analysis
          ]
        },
        // Historical_Data_Analysis_BigData: {
        //   from: [LAYER.BigData_Analysis]
        // }
        // Historical_Data_Analysis_BigData: {
        //   from: [LAYER.Stream_Analysis]
        // },
        // Predictive_and_Anormaly_Analysis: {
        //   from: [LAYER.Machine_Learning]
        // }
        // Realtime_Data_Analysis_BigData: {
        //   from: [LAYER.Data_Ingestion, LAYER.Stream_Analysis]
        // },
        // Realtime_Data_Analysis: {
        //   from: [LAYER.Data_Ingestion, LAYER.Stream_Analysis]
        // }
      }
    ]
  },
  Azure_Databricks_Spark: {
    costFactors: ["vCore", "RAM"],
    "link":"https://azure.microsoft.com/en-us/services/databricks/",
    "pricing": "https://azure.microsoft.com/en-us/pricing/details/databricks/",
    layer: LAYER.BigData_Analysis,
    rules: [
      {
        Historical_Data_Analysis_BigData: {
          from: [LAYER.Data_Storage]
        }
      }
    ]
  },
  SQL_Database: {
    costFactors: ["vCore", "RAM", "Storage"],
    layer: LAYER.Database,
    rules: [
      {
        Historical_Data_Analysis: {
          from: [LAYER.Stream_Analysis, LAYER.Logic]
        }
        // Historical_Data_Analysis_BigData: {
        //   from: [LAYER.BigData_Analysis, LAYER.Logic]
        // },
        // Data_Visualization: {
        //   from: [LAYER.Stream_Analysis, LAYER.Logic]
        // }
      }
    ]
  },

  Cosmos_DB: {
    costFactors: ["Request Units per second (RU/s)", "Item size", "Item indexing",
"Item property count", "Indexed properties", "Data consistency", "Query patterns", "Query patterns"],
    layer: LAYER.Database_NoSQL,
    rules: [
      {
        Historical_Data_Analysis_Distributed_NoSQL: {
          from: [LAYER.Stream_Analysis, LAYER.Logic]
        }
      }
    ]
  },

  Functions: {
    costFactors: ["vCore", "RAM", "Executions"],
    layer: LAYER.Logic,
    rules: [
      {
        Historical_Data_Analysis: {
          from: [LAYER.Database, LAYER.Data_Storage]
        },
        Historical_Data_Analysis_Distributed_NoSQL: {
          from: [LAYER.Database_NoSQL, LAYER.Data_Storage]
        }
        // Data_Visualization: {
        //   from: [LAYER.Database, LAYER.Data_Storage]
        // }
      }
    ]
  },

  Power_BI: {
    costFactors: ["Monthly price per user", "Monthly price per dedicated cloud compute and storage resource"],
    "link":"hhttps://powerbi.microsoft.com/en-us/power-bi-premium/",
    "pricing": "https://powerbi.microsoft.com/en-us/pricing/",
    layer: LAYER.Data_Presentation,
    rules: [
      {
        Data_Visualization: {
          from: [LAYER.Database, LAYER.Database_NoSQL, LAYER.Data_Storage]
        }
      }
    ]
  },
  App_Service: {
    costFactors: ["vCore", "RAM", "Storage", "Network Throughput"],
    layer: LAYER.Application,
    rules: [
      {
        Data_API: {
          from: [LAYER.Database, LAYER.Database_NoSQL, LAYER.Data_Storage]
        }
      }
    ]
  },
  API_Management: {
    costFactors:["Hour"],
    layer: LAYER.API,
    rules: [
      {
        Data_API: {
          from: [LAYER.Application]
        }
      }
    ]
  }
}



module.exports = {OBJECTS, LAYER}