Ext.Loader.setConfig({
	enabled : true
});


Ext.application({
	name : 'MyApp',
	appFolder : 'app',
	launch : function() {
		Ext.create('MyApp.view.Home',{
			
		})
	}
});
