// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
  var qs = document.querySelector.bind(document)
  var qsa = document.querySelectorAll.bind(document)

  // burger menu
  var burger = qs('.nav-toggle');
  var menu = qs('.nav-menu');

  // guard against being in 404.html, for example
  if(burger === null || menu === null) return

  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  // toggle menu items
  var active_item = qs('.nav-item.is-active')
  var menu_items = qsa('.nav-item.is-tab')

  menu_items.forEach(function(el){
    el.addEventListener('click', function(){
      // deselect the current item
      if(active_item) active_item.classList.toggle('is-active')

      // toggle the clicked item and remember that it's active
      this.classList.toggle('is-active');
      active_item = this
    }) 
  })


})();
