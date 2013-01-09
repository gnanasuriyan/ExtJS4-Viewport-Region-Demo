Ext.define('MyApp.view.Home', {
	extend : 'Ext.container.Viewport',
	layout : 'border',
	items : [{
		region : 'north',
		xtype : 'panel',
		html : '<h1 class="x-panel-header">North Region - Application Header</h1>',
		border : false,
		height : 50,
		margins : '0 0 5 0'
	}, {
		region : 'west',
		xtype : 'panel',
		collapsible : true,
		title : 'West Region',
		html : 'Navigation Links',
		width : 150
	}, {
		region : 'south',
		xtype : 'panel',
		title : 'South Region',
		collapsible : true,
		html : 'Footer contents',
		split : true,
		height : 100,
		minHeight : 100
	}, {
		region : 'east',
		xtype : 'panel',
		title : 'East Region',
		collapsible : true,
		split : true,
		width : 150
	}, {
		region : 'center',
		xtype : 'panel',
		title : 'Center Region',
		html : 'Application contents'
	}]
});
