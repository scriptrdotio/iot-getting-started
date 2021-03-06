var menuItems = {
  "mainMenu": "menu1",
  "menu1": [
    {"id":"1", "iconClass":"fa fa-globe", "label": "Map", "route":"#/map", "active":"true"},
    {"id":"2", "iconClass":"fa fa-list-alt", "label": "Rules Designer", "route":"#/rules", "active":"false"},
    {"id":"3", "iconClass":"fa fa-globe", "label": "Dashboard", "route":"#/dashboardHome", "active":"true"},
  ]
}; 

var headerItems = {
    "logo": "//blog.scriptr.io/wp-content/uploads/2016/10/logo-1.png",
    "items": [],
    "subitems": [
        {"id":"1", "iconClass":"fa fa-bell", "label": "Notification Settings", "route":"#/notifications", "active":"false"} 
    ], 
    "logout": {"icon": "fa fa-sign-out", "label": "Logout", "route":"#/logout"}
};

var routingItems = {
  "params": [
    {"route": "map", "template": "views/map/map.html", "controller": "mapCtrl as vm"},
    {"route": "map/deviceId/:deviceId*", "template": "views/map/map.html", "controller": "mapCtrl as vm"},
    {"route": "dashboard/deviceId/:deviceId*", "template": "views/dashboard/dashboard.html","controller": "dashboardCtrl as vm"},
    {"route": "dashboardHome", "template": "views/dashboard/dashboardHome.html"},  
    {"route": "alerts/deviceId/:deviceId*", "template": "views/logs/alerts.html","controller": "alertsCtrl as vm"},
    {"route": "notifications", "template": "views/notifications/notifications.html", "controller": "notificationCtrl as vm"},
    {"route": "rules", "template": "views/genericRules/genericAllRule.html", "controller": "rulesCtrl as vm"},    
    {"route": "logout", "template": "../../../login/view/logout.html"},  
  ]
};
