(function(){

    var $html = document.querySelector('html');
    var $btn = document.querySelector('.header-nav__hamburgger');

    var ariaControl = $btn.getAttribute('aria-controls');

    var $menu = document.getElementById(ariaControl);
    
    $html.classList.remove('no-js');
    $html.classList.add('js');
    
    $btn.addEventListener('click', function(){
        $html.classList.toggle('menu-opened');
        
        var ariaExpanded = this.getAttribute('arial-expanded');

        $btn.setAttribute('aria-expanded', !ariaExpanded);
        $menu.setAttribute('aria-hidden', !ariaExpanded);


    })
})()