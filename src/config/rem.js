 (function (win,doc) {
        function setSize() {
          var clientWidth = document.documentElement.clientWidth;
          doc.documentElement.style.fontSize = 20*(clientWidth/375)+'px';
        }
        setSize();
        win.addEventListener('resize',setSize,false)
})(window,document)