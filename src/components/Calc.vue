 <template>
  <Layout :resize="true" :edit="true" :splits="tree">
    <div class="view1">
      <!-- <v-row>
      <v-col class="pr-4">-->
      <v-subheader>Num of Tenant</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="tenant"
          class="align-center"
          :max="tenantMax"
          :min="tenantMin"
          hide-details
        >
          <template v-slot:append>
            <v-text-field
              v-model="tenant"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-card-text>
      <!-- </v-col>
      </v-row>-->
      <!-- 
          <v-row>
      <v-col class="pr-4">-->
      <v-subheader>Num of Device Per Tenant</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="device"
          class="align-center"
          :max="deviceMax"
          :min="deviceMin"
          hide-details
        >
          <template v-slot:append>
            <v-text-field
              v-model="device"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-card-text>
      <!-- </v-col>
      </v-row>-->

      <!-- <v-row>
      <v-col class="pr-4">-->
      <v-subheader>Message Size (KB)</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="msgSize"
          class="align-center"
          :max="msgSizeMax"
          :min="msgSizeMin"
          hide-details
        >
          <template v-slot:append>
            <v-text-field
              v-model="msgSize"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-card-text>
      <!-- </v-col>
          </v-row>

          <v-row>
      <v-col class="pr-4">-->
      <v-subheader>Occurrency (minute/device)</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="occurrency"
          class="align-center"
          :max="occurrencyMax"
          :min="occurrencyMin"
          hide-details
        >
          <template v-slot:append>
            <v-text-field
              v-model="occurrency"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-card-text>
      <!-- </v-col>
          </v-row>

          <v-row>
      <v-col class="pr-4">-->
      <v-subheader>Azure SQL vCore Per Tenant</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="sqlVCore"
          class="align-center"
          :max="sqlVCoreMax"
          :min="sqlVCoreMin"
          :step="0.25"
          hide-details
        >
          <template v-slot:append>
            <v-text-field
              v-model="sqlVCore"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-card-text>
      <!-- </v-col>
          </v-row>

          <v-row>
      <v-col class="pr-4">-->
      <v-subheader>Stream Job Unit Per Tenant</v-subheader>
      <v-card-text class="pt-0">
        <v-slider
          v-model="streamJobUnit"
          class="align-center"
          :max="streamJobUnitMax"
          :min="streamJobUnitMin"
          :step="0.25"
          hide-details
        >
          <template v-slot:append>
            <v-text-field
              v-model="streamJobUnit"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
      </v-card-text>
      <!-- </v-col>
      </v-row>-->
    </div>
    <!-- 0 - view -->
    <Pane title="Price & Configurations">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Service</th>
              <th class="text-center">
                Shared
                <br />Configurations
              </th>
              <th class="text-left">
                Shared
                <br />Unit
              </th>
              <th class="text-left">
                Shared
                <br />Price Per Tenant
              </th>
              <th class="text-left">
                Shared
                <br />Total Price
              </th>
              <th class="text-center">
                Dedicated
                <br />Configurations
              </th>
              <th class="text-left">
                Dedicated
                <br />Unit
              </th>
              <th class="text-left">
                Dedicated
                <br />Price Per Tenant
              </th>
              <th class="text-left">
                Dedicated
                <br />Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IoT Hub</td>
              <td>{{ unitOfIoTHub.name }}</td>
              <td>{{ unitOfIoTHub.unit }}</td>
              <td>{{ Math.round(unitOfIoTHub.costOfIoTHub/tenant) }}</td>
              <td>{{ unitOfIoTHub.costOfIoTHub }}</td>
              <td>{{ singleTenantUnitOfIoTHub.name }}</td>
              <td>{{ singleTenantUnitOfIoTHub.unit }}</td>
              <td>{{ singleTenantUnitOfIoTHub.costOfIoTHub }}</td>
              <td>{{ singleTenantUnitOfIoTHub.costOfIoTHub*tenant }}</td>
            </tr>
            <tr>
              <td>Event Hub</td>
              <td>-</td>
              <td>{{ unitOfEventHub }}</td>
              <td>{{ Math.round(costOfEventHub/tenant) }}</td>
              <td>{{ costOfEventHub }}</td>
              <td>-</td>
              <td>{{ singleTenantUnitOfEventHub }}</td>
              <td>{{ singleTenantCostOfEventHub }}</td>
              <td>{{ singleTenantCostOfEventHub*tenant }}</td>
            </tr>
            <tr>
              <td>Stream Analytics Job</td>
              <td>-</td>
              <td>{{ unitOfStreamJob }}</td>
              <td>{{ Math.round(costOfStreamJob/tenant) }}</td>
              <td>{{ costOfStreamJob }}</td>
              <td>-</td>
              <td>{{ singleTenantUnitOfStreamJob }}</td>
              <td>{{ singleTenantCostOfStreamJob }}</td>
              <td>{{ singleTenantCostOfStreamJob*tenant }}</td>
            </tr>
            <tr>
              <td>Azure SQL Database</td>
              <td>{{ instanceOfSql.vCore }} vCore</td>
              <td>{{ instanceOfSql.numOfSqlInstance }}</td>
              <td>{{ Math.round(instanceOfSql.totalCost/tenant) }}</td>
              <td>{{ Math.round(instanceOfSql.totalCost) }}</td>
              <td>{{ singleTenantInstanceOfSql.vCore }} vCore</td>
              <td>{{ singleTenantInstanceOfSql.numOfSqlInstance }}</td>
              <td>{{ Math.round(singleTenantInstanceOfSql.totalCost) }}</td>
              <td>{{ Math.round(singleTenantInstanceOfSql.totalCost)*tenant }}</td>
            </tr>
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td>-</td>
              <td>-</td>
              <td>{{sharedPerTenant}}</td>
              <td>{{ sharedTotal }}</td>
              <td>-</td>
              <td>-</td>
              <td>{{ dedicatedPerTenant }}</td>
              <td>{{ dedicatedPerTenant*tenant }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </Pane>
    <!-- 1 - view -->
    <Pane title="Price Comparison Shared v.s. Dedicated">
      
          <v-row  no-gutters>
              <v-col>
                  <v-card flat>
<v-chart :options="totalCost" :autoresize="true" />
                  </v-card>
              </v-col>
              <v-col>
                  <v-card flat>
<v-chart :options="tenantCost" :autoresize="true" />
</v-card>
              </v-col>
          </v-row>
        
        
        <!-- <v-card-text>numOfMsgPerDay: {{ numOfMsgPerDay }}</v-card-text>
        <v-card-text>numOfMsgForIoTHubPerDay: {{ numOfMsgForIoTHubPerDay }}</v-card-text>
        <v-card-text>sizeOfMsgForPerDay_KB: {{ sizeOfMsgForPerDay_KB }}</v-card-text>
        <v-card-text>sizeOfMsgForPerDay_MB: {{ sizeOfMsgForPerDay_MB }}</v-card-text>
        <v-card-text>sizeOfMsgForPerDay_GB: {{ sizeOfMsgForPerDay_GB }}</v-card-text>
        <v-card-text>unitOfIoTHub: {{ unitOfIoTHub.unit }}</v-card-text>
        <v-card-text>priceOfIoTHub: {{ unitOfIoTHub.price }}</v-card-text>
        <v-card-text>skuOfIoTHub: {{ unitOfIoTHub.name }}</v-card-text>
        <v-card-text>costOfIoTHub: {{ unitOfIoTHub.costOfIoTHub}}</v-card-text>
        <v-card-text>unitOfEventHub: {{ unitOfEventHub }}</v-card-text>
        <v-card-text>costOfEventHub: {{ costOfEventHub }}</v-card-text>
        <v-card-text>unitOfStreamJob: {{ unitOfStreamJob }}</v-card-text>
        <v-card-text>costOfStreamJob: {{ costOfStreamJob }}</v-card-text>
        <v-card-text>instanceOfSql: {{ instanceOfSql.numOfSqlInstance }}</v-card-text>
        <v-card-text>vCoreOfSqlInstance: {{ instanceOfSql.vCore }}</v-card-text>
        <v-card-text>costOfSql: {{ instanceOfSql.totalCost }}</v-card-text>-->
      
    </Pane>
    <!-- 2 - view -->
  </Layout>
  <!-- 
  <v-container class="grey lighten-5">
    <v-row>
      <v-col :cols="4">
        <v-card-text>
          
        </v-card-text>
      </v-col>
      <v-col :cols="8">
        <v-card class="pa-2 text-center" outlined tile>
          <v-card>
            <v-tabs v-model="tab" background-color="primary" dark>
              <v-tab key="price">Price</v-tab>
              <v-tab key="data">Data</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">

              <v-tab-item key="price">
                
              </v-tab-item>
              <v-tab-item key="info">
                              </v-tab-item>    
            </v-tabs-items>
          </v-card>

          <v-chart :options="polar" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>-->
</template>

<script>
import { Layout, Pane } from "vue-split-layout";
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
const IOTHUB_MESSAGE_METER_SIZE_KB = 4;

export default {
  components: {
    "v-chart": ECharts,
    Layout: Layout,
    Pane: Pane
  },
  data() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }

    return {
      tree: {
        dir: "horizontal", // Left | Right
        // Other split
        first: 0,
        second: {
          dir: "vertical",
          first: 1, // these numbers represents the views slot ID
          second: 2,
          split: "50%"
        },
        split: "20%"
      },

      tab: "",

      tenantMin: 1,
      tenantMax: 100,
      tenant: 10,
      deviceMin: 1,
      deviceMax: 1000,
      device: 100,
      msgSizeMin: 1,
      msgSizeMax: 20,
      msgSize: 0.5,
      occurrencyMax: 200,
      occurrencyMin: 1,
      occurrency: 60,
      sqlVCoreMax: 20,
      sqlVCoreMin: 0.25,
      sqlVCore: 0.5,
      streamJobUnitMax: 20,
      streamJobUnitMin: 0.25,
      streamJobUnit: 0.5,

      iotHubSpec: "",
      iotHubUnit: 0,
      iotHubPrice: 0,
      iotHubTotalPrice: 0,

      eventHubSpec: "",
      eventHubUnit: 0,
      eventHubPrice: 0,
      eventHubTotalPrice: 0,

      streamAnalyticsSpec: "",
      streamAnalyticsUnit: 0,
      streamAnalyticsPrice: 0,
      streamAnalyticsTotalPrice: 0,

      azureSQLSpec: "",
      azureSQLUnit: 0,
      azureSQLPrice: 0,
      azureSQLTotalPrice: 0,

      tenantPrice: 0,
      totalPrice: 0,
      currrency: "USD",
      iothub_sku: [
        {
          name: "S1",
          msgPerSecond: 12,
          msgSize: 4,
          msgPerDay: 400 * 1000,
          price: 25
        },
        {
          name: "S2",
          msgPerSecond: 120,
          msgSize: 4,
          msgPerDay: 6 * 1000 * 1000,
          price: 250
        },
        {
          name: "S3",
          msgPerSecond: 6000,
          msgSize: 4,
          msgPerDay: 300 * 1000 * 1000,
          price: 2500
        }
      ],
      eventhub_sku: {
        ingress_MB: 1,
        egress_MB: 2,
        pricePerHour: 0.03
      },
      streamjob_sku: {
        unit_hour: 0.11
      },
      sql_sku: [
        {
          vCore: 2,
          price_hour: 0.5044
        },
        {
          vCore: 2,
          price_hour: 0.5044
        },
        {
          vCore: 4,
          price_hour: 1.0088
        },
        {
          vCore: 6,
          price_hour: 1.5131
        },
        {
          vCore: 8,
          price_hour: 2.0175
        },
        {
          vCore: 10,
          price_hour: 2.5219
        },
        {
          vCore: 12,
          price_hour: 3.0262
        },
        {
          vCore: 14,
          price_hour: 3.5306
        },
        {
          vCore: 16,
          price_hour: 4.035
        },
        {
          vCore: 18,
          price_hour: 4.5393
        },
        {
          vCore: 20,
          price_hour: 5.0437
        },
        {
          vCore: 24,
          price_hour: 6.0524
        },
        {
          vCore: 32,
          price_hour: 8.0699
        },
        {
          vCore: 40,
          price_hour: 10.0874
        },
        {
          vCore: 80,
          price_hour: 20.1747
        }
      ]
    };
  },
  computed: {
    numOfMsgPerDay: function() {
      return this.occurrency * 60 * 24 * this.tenant * this.device;
    },
    numOfMsgForIoTHubPerDay: function() {
      return (
        this.occurrency *
        60 *
        24 *
        Math.ceil(this.msgSize / IOTHUB_MESSAGE_METER_SIZE_KB) *
        this.tenant *
        this.device
      );
    },
    singleTenantNumOfMsgForIoTHubPerDay: function() {
      return (
        this.occurrency *
        60 *
        24 *
        Math.ceil(this.msgSize / IOTHUB_MESSAGE_METER_SIZE_KB) *
        1 *
        this.device
      );
    },
    sizeOfMsgForPerDay_KB: function() {
      return this.numOfMsgPerDay * this.msgSize;
    },
    sizeOfMsgForPerDay_MB: function() {
      return Math.round(this.sizeOfMsgForPerDay_KB / 1024);
    },
    sizeOfMsgForPerDay_GB: function() {
      return Math.round(this.sizeOfMsgForPerDay_MB / 1024);
    },
    unitOfIoTHub: function() {
      return this.calcUnitOfIoTHub(this.tenant, this.numOfMsgForIoTHubPerDay);
    },
    singleTenantUnitOfIoTHub: function() {
      return this.calcUnitOfIoTHub(1, this.singleTenantNumOfMsgForIoTHubPerDay);
    },
    unitOfEventHub: function() {
      return (
        Math.ceil(
          (this.occurrency * this.device * this.msgSize) /
            60 /
            1024 /
            this.eventhub_sku.ingress_MB
        ) * this.tenant
      );
    },
    costOfEventHub: function() {
      return Math.round(
        this.unitOfEventHub * this.eventhub_sku.pricePerHour * 24 * 30
      );
    },
    singleTenantUnitOfEventHub: function() {
      return (
        Math.ceil(
          (this.occurrency * this.device * this.msgSize) /
            60 /
            1024 /
            this.eventhub_sku.ingress_MB
        ) * 1
      );
    },
    singleTenantCostOfEventHub: function() {
      return Math.round(
        this.singleTenantUnitOfEventHub *
          this.eventhub_sku.pricePerHour *
          24 *
          30
      );
    },

    unitOfStreamJob: function() {
      return Math.ceil(Math.max(3, this.tenant * this.streamJobUnit));
    },
    costOfStreamJob: function() {
      return Math.round(
        this.unitOfStreamJob * this.streamjob_sku.unit_hour * 24 * 30
      );
    },
    singleTenantUnitOfStreamJob: function() {
      return Math.ceil(Math.max(3, 1 * this.streamJobUnit));
    },
    singleTenantCostOfStreamJob: function() {
      return Math.round(
        this.singleTenantUnitOfStreamJob *
          this.streamjob_sku.unit_hour *
          24 *
          30
      );
    },
    instanceOfSql: function() {
      return this.tenantPerSQLInstance(this.tenant);
    },
    singleTenantInstanceOfSql: function() {
      return this.tenantPerSQLInstance(1);
    },

    sharedPerTenant: function() {
      return Math.round(
        (this.unitOfIoTHub.costOfIoTHub +
          this.costOfEventHub +
          this.costOfStreamJob +
          this.instanceOfSql.totalCost) /
          this.tenant
      );
    },

    sharedTotal: function() {
      return Math.round(
        this.unitOfIoTHub.costOfIoTHub +
          this.costOfEventHub +
          this.costOfStreamJob +
          this.instanceOfSql.totalCost
      );
    },

    dedicatedPerTenant: function() {
      return Math.round(
        this.singleTenantUnitOfIoTHub.costOfIoTHub +
          this.singleTenantCostOfEventHub +
          this.singleTenantCostOfStreamJob +
          this.singleTenantInstanceOfSql.totalCost
      );
    },
    totalCost: function() {
      return {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "Shared", "Dedicated"],
          source: [
            {
              product: "Cost In Total",
              Shared: this.sharedTotal,
              Dedicated: this.dedicatedPerTenant * this.tenant
            },
            
          ]
        },
        seriesLayoutBy: 'row',
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }],
        label: {
          show: true,
        }
      };
    },
    tenantCost: function() {
      return {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "Shared", "Dedicated"],
          source: [

            {
              product: "Cost Per Tenant",
              Shared: this.sharedPerTenant,
              Dedicated: this.dedicatedPerTenant
            }
          ]
        },

        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }],
        label: {
          show: true,
        }
      };
    }
  },
  methods: {
    calc() {
      console.log(this.tenant);
    },
    tenantPerSQLInstance: function(tenant) {
      let cost = 0,
        vCore = 0,
        numOfSqlInstance = 0,
        that = this;
      this.sql_sku.forEach(sku => {
        if (sku.vCore >= that.sqlVCore) {
          let numTenantOfPerInstance = Math.floor(sku.vCore / that.sqlVCore);
          let numOfInstance = Math.ceil(tenant / numTenantOfPerInstance);
          if (
            cost == 0 ||
            (cost >= numOfInstance * sku.price_hour &&
              numOfSqlInstance > numOfInstance)
          ) {
            cost = numOfInstance * sku.price_hour;
            numOfSqlInstance = numOfInstance;
            vCore = sku.vCore;
          }
        }
      });

      return { vCore, numOfSqlInstance, cost, totalCost: cost * 24 * 30 };
    },
    calcUnitOfIoTHub: function(tenant, numOfMsgForIoTHubPerDay) {
      var units = [];
      this.iothub_sku.forEach(sku => {
        var unit1 = Math.ceil(
          (tenant * this.device * this.occurrency) / (sku.msgPerSecond * 60)
        );
        var unit2 = Math.ceil(numOfMsgForIoTHubPerDay / sku.msgPerDay);
        var unit = Math.max(unit1, unit2);
        units.push({ name: sku.name, price: sku.price, unit: unit });
      });

      let mincost = 0,
        bestunit = units[0];
      mincost = units[0].price * units[0].unit;
      units.forEach(unit => {
        var mincost2 = Math.min(mincost, unit.price * unit.unit);
        if (mincost2 == unit.price * unit.unit) {
          bestunit = unit;
        }
      });
      bestunit.costOfIoTHub = bestunit.price * bestunit.unit;
      return bestunit;
    }
  }
};
</script>

<style>
.echarts {
  width: 400px;
  height: 300px;
}
</style>