 <template>
  <v-container fluid style="height:100%">
    <v-row no-gutters style="height:100%">
      <v-col cols="2" style="height:100%;overflow:hidden">
        <v-card class="pa-2 mr-2" outlined tile style="height:100%;overflow:auto">
          <template v-for="(key, idx) in Object.keys(rules)">
            <v-switch
              dense
              :key="idx"
              v-model="acceptRules[key]"
              class="ma-2"
              :label="key.replace(/_/g, ' ')"
            ></v-switch>
            <template v-for="(item, idx2) in rules[key]">
              <v-switch
                :key="key+'-'+idx2"
                v-model="acceptRules[key+'_'+item]"
                class="ma-2 pl-5"
                :label="'with '+item.replace(/_/g, ' ')"
              ></v-switch>
            </template>
          </template>
        </v-card>
      </v-col>
      <v-col cols="10" style="height:100%;">
        <v-card
          outlined
          tile
          style="height:100%;overflow:auto"
        >

        <v-card
          class="pa-2 "
          
          style="text-align:center; min-height:500px; overflow:auto"
        >
          <vue-mermaid
            style="margin: 0; position: absolute; top: 50%; left: 55%; transform: translate(-50%, -50%);"
            :nodes="imgData"
            type="graph LR"
            @nodeClick="editNode"
            :config="mermaidConfig"
          ></vue-mermaid>
        </v-card>

        <!-- <v-card
          outlined
          tile
          class="pa-2"
          style="text-align:center;  overflow:auto"
        >{{JSON.stringify(acceptRules, null, 4)}} {{JSON.stringify(imgData, null, 4)}} {{JSON.stringify(services, null, 4)}}</v-card> -->

        <v-card class="mx-auto" 
                  style="text-align:center; overflow:auto"
        >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Usage</th>
                  <th class="text-left">Cost Consideration</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="key in Object.keys(services)" :key="key">
                  <td>{{ key }}</td>
                  <td>{{ key }}</td>
                  <td>{{ key }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const RULES = {
  // Edge_Computing: [],
  Data_Ingestion: ["Device_Management"],
  Data_Storage: ["Secured_High_Performance_Analysis"],
  Realtime_Data_Analysis: ["BigData"],
  Historical_Data_Analysis: ["BigData", "Distributed_NoSQL"],
  Predictive_and_Anormaly_Analysis: [],
  Data_Visualization: [],
  Data_API: []
};
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
  Logic: "Logic",
  Application: "Application",
  API: "API"
};
const OBJECTS = {
  // IoT_Devices: {
  //   layer: LAYER.Devices
  // },
  // IoT_Edge: {
  //   layer: LAYER.EdgeDevices,
  //   rules: [
  //     {
  //       Edge_Computing: {}
  //     }
  //   ]
  // },
  IoTHub: {
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
    layer: LAYER.Data_Ingestion,
    rules: [
      {
        Data_Ingestion: {
          from: [LAYER.Devices]
        }
      }
    ]
  },
  Stream_Analytcs: {
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
    layer: LAYER.Stream_Analysis,
    rules: [
      {
        Realtime_Data_Analysis_BigData: {
          from: [LAYER.Data_Ingestion]
        }
      }
    ]
  },
  Azure_Machine_Learning: {
    layer: LAYER.Machine_Learning,
    rules: [
      {
        Predictive_and_Anormaly_Analysis: {
          from: [LAYER.Data_Storage]
        }
      }
    ]
  },
  Azure_Storage: {
    layer: LAYER.Data_Storage,
    rules: [
      {
        Data_Storage: {
          from: [
            LAYER.Data_Ingestion,
            LAYER.Stream_Analysis,
            LAYER.Machine_Learning
          ]
        }
      }
    ]
  },
  Azure_Data_Lake_Storage: {
    layer: LAYER.Data_Storage,
    rules: [
      {
        // Data_Ingestion: {
        //   from: [LAYER.Data_Ingestion]
        // },
        Data_Storage_Secured_High_Performance_Analysis: {
          from: [
            LAYER.Data_Ingestion,
            LAYER.Stream_Analysis,
            LAYER.Machine_Learning
          ]
        },
        Historical_Data_Analysis_BigData: {
          from: [LAYER.BigData_Analysis]
        }
        // Historical_Data_Analysis_BigData: {
        //   from: [LAYER.Stream_Analysis]
        // },
        // Predictive_and_Anormaly_Analysis: {
        //   from: [LAYER.Machine_Learning, LAYER.Stream_Analysis]
        // },
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
    layer: LAYER.BigData_Analysis,
    rules: [
      {
        Historical_Data_Analysis_BigData: {
          from: [LAYER.Data_Storage]
        }
      }
    ]
  },
  Azure_SQL: {
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

  CosmosDB: {
    layer: LAYER.NoSQL_Database,
    rules: [
      {
        Historical_Data_Analysis_Distributed_NoSQL: {
          from: [LAYER.Stream_Analysis, LAYER.Logic]
        }
      }
    ]
  },

  Azure_Function: {
    layer: LAYER.Logic,
    rules: [
      {
        Historical_Data_Analysis: {
          from: [LAYER.Database, LAYER.Data_Storage]
        },
        Historical_Data_Analysis_Distributed_NoSQL: {
          from: [LAYER.NoSQL_Database, LAYER.Data_Storage]
        }
        // Data_Visualization: {
        //   from: [LAYER.Database, LAYER.Data_Storage]
        // }
      }
    ]
  },

  Power_BI: {
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
    layer: LAYER.API,
    rules: [
      {
        Data_API: {
          from: [LAYER.Application]
        }
      }
    ]
  }
};

export default {
  components: {},
  data: function() {
    return {
      rules: RULES,
      objects: OBJECTS,
      acceptRules: {},
      data: [
        { id: 1, text: "IoT Device", next: [2, "3"] },
        { id: 2, text: "IoT Hub", next: ["4", 9, 3] },
        { id: 3, text: "Event Hub", next: ["4", "6", 9, 12] },
        { id: 4, text: "Sream Analytcs", next: ["5", "6", "8", "7", 12] },
        { id: 5, text: "Azure SQL", next: ["8"] },
        { id: 6, text: "Azure Data Lake Storage", next: [10] },
        { id: 7, text: "CosmosDB", next: [8] },
        { id: 8, text: "Power BI", next: [] },
        { id: 9, text: "Azure Databricks", next: [6] },
        { id: 10, text: "Azure Machine Learning", next: [] },
        { id: 11, text: "Azure Function", next: [12] },
        { id: 12, text: "Azure Table Storage", next: [11, 8] }
        // { id: "3", text: "C", next: ["4", "6"] },
        // { id: "4", text: "D", link: "-- This is the text ---", next: ["5"] },
        // { id: "5", text: "E" },
        // { id: "6", text: "F" }
      ],
      mermaidConfig: {
        theme: "forest"
      }
    };
  },
  computed: {
    services: function() {
      const services = {},
        layer = {};
      let count = 1;
      const that = this;
      if (that.acceptRules) {
        Object.keys(that.objects).forEach(key => {
          if (that.objects[key].rules) {
            that.objects[key].rules.forEach(rule => {
              Object.keys(that.acceptRules).forEach(accept => {
                if (rule[accept] && that.acceptRules[accept]) {
                  if (!layer[that.objects[key].layer]) {
                    layer[that.objects[key].layer] = {
                      service: key,
                      rule: accept
                    };
                    if (!services[key]) {
                      services[key] = {
                        id: count,
                        layer: that.objects[key].layer,
                        text: key.replace(/_/g, " "),
                        fromLayer: rule[accept].from,
                        rule: [accept]
                        // group: that.objects[key].layer,
                      };
                    } else {
                      rule[accept].from.forEach(from => {
                        if (services[key].fromLayer.indexOf(from) == -1) {
                          services[key].rule.push(accept);
                          services[key].fromLayer.push(from);
                        }
                      });
                    }
                    count++;
                  } else if (
                    accept.indexOf(layer[that.objects[key].layer].rule) == 0
                  ) {
                    services[key] = {
                      id: count,
                      layer: that.objects[key].layer,
                      text: key.replace(/_/g, " "),
                      fromLayer: rule[accept].from,
                      rule: [accept]
                      // group: that.objects[key].layer,
                    };
                    count++;
                    if (
                      accept.indexOf(layer[that.objects[key].layer].rule) ==
                        0 &&
                      layer[that.objects[key].layer].service != key
                    ) {
                      // eslint-disable-next-line no-debugger
                      debugger;
                      services[layer[that.objects[key].layer].service] = null;
                      delete services[layer[that.objects[key].layer].service];
                    }
                  } else if (
                    layer[that.objects[key].layer].rule.indexOf(accept) != 0
                  ) {
                    if (!services[key]) {
                      services[key] = {
                        id: count,
                        layer: that.objects[key].layer,
                        text: key.replace(/_/g, " "),
                        fromLayer: rule[accept].from,
                        rule: [accept]
                        // group: that.objects[key].layer,
                      };
                    } else {
                      rule[accept].from.forEach(from => {
                        if (services[key].fromLayer.indexOf(from) == -1) {
                          services[key].rule.push(accept);
                          services[key].fromLayer.push(from);
                        }
                      });
                    }
                  }
                }
              });
            });
          }
        });
      }

      Object.keys(services).forEach(key => {
        if (services[key].fromLayer) {
          services[key].fromLayer.forEach(fromLayer => {
            Object.keys(services).forEach(key2 => {
              if (services[key2].layer == fromLayer) {
                services[key2]["next"] = services[key2]["next"] || [];
                services[key2]["next"].push(services[key].id);
              }
            });
          });
        }
      });
      return services;
    },
    imgData: function() {
      const imgdata = [];

      Object.keys(this.services).forEach(key => {
        imgdata.push(this.services[key]);
      });

      return imgdata;
    }
  },
  methods: {
    editNode(nodeId) {
      alert(nodeId);
    }
  }
};
</script>

<style>
</style>