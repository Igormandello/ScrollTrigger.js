var sm = new ScrollManager();
ScrollManager.offsetTop = 0.35;

sm.addReturnableSection($('.bigDiv')[0], div3Function);
sm.addSection($('.bigDiv')[1], div1Function);
sm.addSection('#div2', div2Function);

function div1Function()
{
    $($('h1')[1]).addClass('animation');
}

function div2Function()
{
    $($('h1')[2]).addClass('animation');
}

function div3Function(activated)
{
    if (activated)
      $('.bigDiv:first').css({backgroundColor: '#000'});
    else
      $('.bigDiv:first').css({backgroundColor: '#FFF'});
}