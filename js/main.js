(function(){

  console.log("it's alive");



  var state = {
    mobileCdn: '',
    desktopCdn: '',
    alt: '',
    mywidth: '',
    myheight: '',
    myX: '',
    myY: ''
  }

  // Desktop
  //cdn.notonthehighstreet.com/fs/79/5f/9fbd-2534-4060-a03f-7730d5aeec0a/original_skinny-banner-fathers-day-graphic-24-05-2016.jpg


  // Mobile
  //cdn.notonthehighstreet.com/fs/c1/01/e23b-8d64-4b5e-8f17-f3b374078935/original_mob-skinny-banner-fathers-day-graphic-24-05-2016.jpg

  var cdn_desktop = document.getElementById('desktop_cdn');
  var cdn_mobile = document.getElementById('mobile_cdn');
  var alt_text = document.getElementById('alt_text');

  var hotsopt_width = document.getElementById('hotsopt_width');
  var hotsopt_height = document.getElementById('hotsopt_height');
  var hotsopt_x = document.getElementById('hotsopt_x');
  var hotsopt_y = document.getElementById('hotsopt_y');

  var myresult = document.getElementById('result');
  var mycode = document.getElementById('code');


  // var for preview elements 
  var src_desktop = document.getElementById("edit_desktop_scr");
  var src_mobile = document.getElementById("edit_mobile_scr");
  var hotspot = document.getElementById('hotspot_area');


  // Var for markup
  var html_open = "&lt;div class='module_container'&gt;"+ "<br/>" + "&nbsp;&lt;div class='content_block_module content_module_has_mobile_image'&gt;" + "<br/>";
  var html_close = "<br/>" + "&nbsp;&lt;/div&gt;" + "<br/>" + "&lt;/div&gt;";

  var css_open = "&lt;!-- styles banner --&gt;<br/>&lt;style&gt;";
  var css_close = "&lt;/style&gt;<br/>&lt;!-- styles banner --&gt;<br/><br/>";


  $("#desktop_cdn").change( function(){
    state.desktopCdn = cdn_desktop.value;
    showMyResult();
  })

  $("#mobile_cdn").change( function(){
    state.mobileCdn = cdn_mobile.value;
    showMyResult();
  })

  //Add alt text and title text
  $("#alt_text").change( function(){
    state.alt = alt_text.value;
    showMyResult();
  })

  $("#hotsopt_width").change(function(){
    state.mywidth = hotsopt_width.value;
    controlerhotspot();
    
  })

  $("#hotsopt_height").change(function(){
    state.myheight = hotsopt_height.value;
    controlerhotspot();
  })

  $("#hotsopt_x").change(function(){
    state.myX = hotsopt_x.value;
    controlerhotspot();
    buildcss ();
  })

  $("#hotsopt_y").change(function(){
    state.myY = hotsopt_y.value;
    controlerhotspot();
    buildcss ();
  })

  // build html for the images

  function desktopImageHtml (){
    dektop_image = "&nbsp; &nbsp; &lt;img id='edit_mobile_scr' class='mobile_only mobile_banner' alt='" + state.alt + "' title='" + state.alt + "' data-lazy-load-for-media='mobile' data-lazy-load-event='immediately' data-pin-nopin='true' src='" + state.desktopCdn + "'&gt;<br/>"; 
  }

  function mobileImageHtml (){
    mobile_image = "&nbsp; &nbsp; &lt;img id='edit_mobile_scr' class='mobile_only mobile_banner' alt='" + state.alt + "' title='" + state.alt + "' data-lazy-load-for-media='mobile' data-lazy-load-event='immediately' data-pin-nopin='true' src='" + state.mobileCdn + "'&gt;"; 
  }

  // build css markup

  function buildcss (){
    desktop_css = css_open + "<br/>#hotspot_area {<br/>right:" + state.myX + "px;<br/>top:" + state.myY  + "px;<br/>}<br/>" + css_close;
    showMyResult();
  }
  

  // function to build the html code for the banner
  function showMyResult (){
    
    desktopImageHtml();
    mobileImageHtml();
    // $("#code").html("<pre>" + desktop_css + "</pre>");
    $("#code").html("<pre>" + desktop_css + html_open + dektop_image + mobile_image  + html_close + "</pre>");

    src_desktop.src = "https:" + cdn_desktop.value;
    src_mobile.src = "https:" + cdn_mobile.value;

  }

  function controlerhotspot (){
    hotspot.style.width = state.mywidth + "px";
    hotspot.style.height = state.myheight + "px";
    hotspot.style.top = state.myY + "px";
    hotspot.style.right = state.myX + "px";
  }


  // Collpase indiviudal panels 
  $(".header").click(function(){
        $(this).toggleClass("active");
        $(this).next().toggleClass("hide");


  }); 




})();