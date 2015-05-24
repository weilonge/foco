(function (){
  var foco = {};

  if (typeof module !== 'undefined' && module.exports) { // Node.js support
    module.exports = foco;
  } else { // browser support
    root.foco = foco;
  }
})();
