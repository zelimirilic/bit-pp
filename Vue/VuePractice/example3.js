

var plural = new Vue({
    el: '#plural',
    data: {
        showContextMenu: false,
        top: '0px',
        left: '0px'
                
    },
    methods: {
        onBlockClick: function(e) {
            if(e.button === 2) {
                this.showContextMenu = true;
                this.top = e.y + 'px';
                this.left = e.x + 'px';
            }
        },
        closeContextMenu: function() {
            this.showContextMenu = false;
        },
        onCopyClick: function() {
            alert('copy something');
            this.closeContextMenu();
        },
        onPasteClick: function() {
            alert('paste something');
            this.closeContextMenu();
        }
    }
});