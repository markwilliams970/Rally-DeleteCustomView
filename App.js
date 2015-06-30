Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    _viewTypeCombobox: null,
    _customViewTextBox: null,
    _findDeleteCustomViewButton: null,

    _deleteURLs: {
        "Defect": "https://rally1.rallydev.com/slm/df/tps/deleteTpsReportView.sp",
        "HierarchicalRequirement": "https://rally1.rallydev.com/slm/ar/tps/deleteTpsReportView.sp",
        "Task": "https://rally1.rallydev.com/slm/tlp/tps/deleteTpsReportView.sp"
    },

    items: [
        {
            xtype: 'container',
            itemId: 'textBoxContainer',
            padding: '10',
            layout: {
                type: 'vbox'
            },
            flex: 1
        }
    ],

    _artifactTypeChosen : function() {

    },

    _deleteCustomView: function() {

        var me = this;
        var selectedArtifactType = me._viewTypeCombobox.getValue();

        var deleteUrl = "https://rally1.rallydev.com/slm/df/tps/deleteTpsReportView.sp";

        var customViewOID = me._customViewTextBox.getValue();
        var postBody = "oid=" + customViewOID;

        deleteUrl = me._deleteURLs[selectedArtifactType];

        Ext.Ajax.request({
            url: deleteUrl,
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            xmlData: postBody,
            success: function() {
                Ext.create('Rally.ui.dialog.ConfirmDialog', {
                    title: "Success",
                    message: "Custom View Deleted!",
                    confirmLabel: "Ok",
                    listeners: {
                        confirm: function () {
                            return;
                        }
                    }
                });
            },
            failure: function() {
                Ext.create('Rally.ui.dialog.ConfirmDialog', {
                    title: "Problem",
                    message: "Custom View Not Deleted!",
                    confirmLabel: "Ok",
                    listeners: {
                        confirm: function () {
                            return;
                        }
                    }
                });
            }
        });

    },

    launch: function() {

        var me = this;

        var viewTypeStore = Ext.create('Ext.data.Store', {
            fields: ['name', 'type'],
            data: [
                {"name": "Plan->User Stories",     "type": "HierarchicalRequirement"},
                {"name": "Quality->Defects",       "type": "Defect"},
                {"name": "Track->Tasks",           "type": "Task"}
            ]
        });

        me._viewTypeCombobox = Ext.create('Ext.form.ComboBox', {
            fieldLabel:   'Choose View Type',
            store:        viewTypeStore,
            queryMode:    'local',
            displayField: 'name',
            valueField:   'type',
            listeners: {
                scope: this,
                'select': me._artifactTypeChosen
            }
        });

        this.down("#textBoxContainer").add(me._viewTypeCombobox);

        me._customViewTextBox = Ext.create('Rally.ui.TextField', {
            fieldLabel: 'Object ID of Custom View:',
            width: 200
        });

        me.down('#textBoxContainer').add(me._customViewTextBox);

        me._findDeleteCustomViewButton= Ext.create('Rally.ui.Button', {
            text: "Delete Custom View",
            handler: function() {
                me._deleteCustomView();
            }
        });
        me.down('#textBoxContainer').add(me._findDeleteCustomViewButton);
    }
});
