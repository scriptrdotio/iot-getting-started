myApp.constant("constants", {
  appTitle: "Smart Farming",
   sources : {
    "simulator": { 
   	  "mapMarker": {
          url: "//scriptr-cdn.s3.amazonaws.com/marketplace/iotgettingstarted/images/marker.png"
   	  }
    }
  },
  sourcesLabels: {
    "simulator": "Nebula-2.0 SHT Click"
  },
  infoWindows: {
    "icons": {
         "id": '<img  src="//scriptr-cdn.s3.amazonaws.com/marketplace/iotgettingstarted/images/device.png">',
         "device": ' <img   alt="Embedded Image" src="//s3.amazonaws.com/scriptr-cdn/common/images/device.png">',
         "address": '<img alt="Embedded Image"  src="//s3.amazonaws.com/scriptr-cdn/common/images/location.png" />',
         "locationType": '<img alt="Embedded Image"    src="//s3.amazonaws.com/scriptr-cdn/common/images/industrial.png" />',
         "time": '<img  alt="Embedded Image"    src="//s3.amazonaws.com/scriptr-cdn/common/images/time.png" />',
         "temperature": '<img alt="Embedded Image"  width="17" height="30" src="//s3.amazonaws.com/scriptr-cdn/common/images/temperature.png" />',
         "humidity": '<img alt="Embedded Image"  src="//s3.amazonaws.com/scriptr-cdn/common/images/humidity.png" />'
     }
  },
  alertsGrid: [
      {headerName: "Temperature", field: "temperature", cellRenderer: function(params){return params.value + " " + ((params.data.temperature_unit) ? params.data.temperature_unit : "°C")} },
      
      {headerName: "Humidity", field: "humidity", cellRenderer: function(params){return params.value + " " +((params.data.humidity_unit) ? params.data.humidity_unit : "%")}},
      
      {headerName: "Timestamp", field: "creationDate", cellStyle: {'white-space': 'normal', 'word-break': 'break-all'}},
      
      {headerName: "Alerts", field: "alert_type", cellStyle: {'white-space': 'normal', 'word-break': 'break-all'}},
      
      {field: "temperature_unit", hide: true},
      {field: "humidity_unit", hide: true},
      {field: "pressure_unit", hide: true}
  ],
    
  apis: {
	  getDeviceHistory: "app/api/getDeviceHistory",
	  getLatestDevice: "app/api/getLatestDevice",
	  getGenericRuleEditor: "app/api/rules/getGenericRuleEditor",
	  getDevices: "app/api/getDevices",
	  updateSettings: "app/api/notifications/updateSettings",
	  getSettings: "app/api/notifications/getSettings",
	  getLatestDevices: "app/api/getLatestDevices",
	  getDeviceAlerts: "app/api/getDeviceAlerts"
  }
})