myApp.constant("constants", {
  appTitle: "Smart Farming",
   sources : {
    "simulator": { 
   	  "mapMarker": {
          url: "//s3.amazonaws.com/scriptr-cdn/smart-farming/grain-marker.png"
   	  }
    }
  },
  sourcesLabels: {
    "simulator": "Nebula-2.0 SHT Click"
  },
  infoWindows: {
    "icons": {
         "id": '<img  src="//s3.amazonaws.com/scriptr-cdn/smart-farming/granary.png">',
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
	  getDeviceHistory: "smartfarming/app/api/getDeviceHistory",
	  getLatestDevice: "smartfarming/app/api/getLatestDevice",
	  getGenericRuleEditor: "smartfarming/app/api/rules/getGenericRuleEditor",
	  getDevices: "smartfarming/app/api/getDevices",
	  updateSettings: "smartfarming/app/api/notifications/updateSettings",
	  getSettings: "smartfarming/app/api/notifications/getSettings",
	  getLatestDevices: "smartfarming/app/api/getLatestDevices",
	  getDeviceAlerts: "smartfarming/app/api/getDeviceAlerts"
  }
})