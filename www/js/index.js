var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
if(!localStorage.ipush){
$('.loader1').css('height',screen.width+'px');
$('.loader1').fadeIn();
}
		

	    
var i = 0;
(function() {
    if (i < 8) {
var arr = ["Загрузка списка доступных городов...", "Загрузка списка заведений...", "Загрузка категорий еды...", "Загрузка меню...", "Подготовка изображений...", "Загрузка акций...", "Загрузка иконок...", "Настройка данных..."];
	    $('#loaderInfo').text(arr[i]);
        i++;
        setTimeout(arguments.callee, 5000);
    } else {
 $('#loaderInfo').text("Настройка данных...");
    } 
})();   

        
function didReceiveRemoteNotificationCallBack(jsonData) {}
function didOpenRemoteNotificationCallBack(jsonData) {}       
        //Настройка ПУШЕЙ ДЛЯ АЙФОНА
        var iosSettings = {};
        iosSettings["kOSSettingsKeyAutoPrompt"] = true;
        iosSettings["kOSSettingsKeyInAppLaunchURL"] = true;

        //ПОДКЛЮЧЕНИЕ ПУШЕЙ 
           window.plugins.OneSignal
          .startInit("2d020748-2943-4d32-a804-1506007a1eea")
          .handleNotificationReceived(didReceiveRemoteNotificationCallBack)
          .handleNotificationOpened(didOpenRemoteNotificationCallBack)
              .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.None)
          .iOSSettings(iosSettings)
          .endInit();
        
        window.plugins.OneSignal.getIds(function(ids) {
           ipush = ids.userId;
$('.loader1').fadeIn();
localStorage.ipush=ipush;
            var ref = cordova.InAppBrowser.open('http://vezuedu.kz/v3/index.php?push='+ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');    


        });
        

    }
};

app.initialize();
