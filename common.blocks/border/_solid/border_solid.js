modules.define('border', function(provide, Border) {

provide(Border.declMod({ modName: 'solid', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
