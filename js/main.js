(function(){

  console.log("it's alive");



  // Var for holding value

  var state = {
    mobileCdn: '',
    desktopCdn: '',
    alt: '',
    mywidth: '',
    myheight: '',
    myX: '',
    myY: '',
    mywidthMob: '',
    myheightMob: '',
    myXMob: '',
    myYMob: ''
  }



  // Var for imput fields

  var cdn_desktop = document.getElementById('desktop_cdn');
  var cdn_mobile = document.getElementById('mobile_cdn');
  var alt_text = document.getElementById('alt_text');

  var hotsopt_width = document.getElementById('hotsopt_width');
  var hotsopt_height = document.getElementById('hotsopt_height');
  var hotsopt_x = document.getElementById('hotsopt_x');
  var hotsopt_y = document.getElementById('hotsopt_y');

  var hotsopt_x_mob = document.getElementById('hotsopt_x_mob');
  var hotsopt_y_mob = document.getElementById('hotsopt_y_mob');

  var myresult = document.getElementById('result');
  var mycode = document.getElementById('code');


  // var for preview elements 
  var src_desktop = document.getElementById("edit_desktop_scr");
  var src_mobile = document.getElementById("edit_mobile_scr");
  var hotspot = document.getElementById('hotspot_area');
  var hotspotMob = document.getElementById('hotspot_area_mob');


  // Var for markup
  var html_open = "&lt;div class='module_container'&gt;"+ "<br/>" + "&nbsp;&lt;div class='content_block_module content_module_has_mobile_image'&gt;" + "<br/>";
  var html_close = "<br/>" + "&nbsp;&lt;/div&gt;" + "<br/>" + "&lt;/div&gt;";

 

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
    buildcss ();
    
  })

  $("#hotsopt_height").change(function(){
    state.myheight = hotsopt_height.value;
    controlerhotspot();
    buildcss ();
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

  // Mobile styles imputs
  $("#hotsopt_x_mob").change(function(){
    state.myXMob = hotsopt_x_mob.value;
    controlerHotspotMob();
    buildcss ();
  })

  $("#hotsopt_y_mob").change(function(){
    state.myYMob = hotsopt_y_mob.value;
    controlerHotspotMob();
    buildcss ();
  })

  $("#hotsopt_width_mob").change(function(){
    state.mywidthMob = hotsopt_width_mob.value;
    controlerHotspotMob();
    buildcss ();
  })

  $("#hotsopt_height_mob").change(function(){
    state.myheightMob = hotsopt_height_mob.value;
    controlerHotspotMob();
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
    css_open = "&lt;!-- styles banner --&gt;<br/>&lt;style&gt;";
    css_close = "&lt;/style&gt;<br/>&lt;!-- styles banner --&gt;<br/><br/>";

    media_query_open = "@media (max-width: 767px) {<br/>";
    media_query_close = "}";

    desktop_right = "right:" + state.myX + "px;<br/>";
    desktop_top = "top:" + state.myY + "px;<br/>";
    desktop_width = "width:" + state.mywidth + "px;<br/>";
    desktop_height = "height:" + state.myheight + "px;<br/>";

    mob_right = "right:" + state.myXMob + "vw;<br/>";
    mob_top = "top:" + state.myYMob + "vw;<br/>";
    mob_width = "width:" + state.mywidthMob + "vw;<br/>";
    mob_height = "height:" + state.myheightMob + "vw;<br/>";

    mobile_css = media_query_open + mob_right + mob_top + mob_width + mob_height + media_query_close;

    desktop_css = css_open + "<br/>#hotspot_area {<br/>" + desktop_right + desktop_top + desktop_width  + desktop_height + "}<br/>" + mobile_css + +"<br/>"  + css_close;

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


  // preview hot spot code 
  function controlerhotspot (){
    hotspot.style.width = state.mywidth + "px";
    hotspot.style.height = state.myheight + "px";
    hotspot.style.top = state.myY + "px";
    hotspot.style.right = state.myX + "px";
  }

  // preview code hotspot mobile
  function controlerHotspotMob (){
    hotspotMob.style.width = state.mywidthMob + "vw";
    hotspotMob.style.height = state.myheightMob + "vw";
    hotspotMob.style.top = state.myYMob + "vw";
    hotspotMob.style.right = state.myXMob + "vw";
  }


  // Collpase indiviudal panels 
  $(".header").click(function(){
        $(this).toggleClass("active");
        $(this).next().toggleClass("hide");

  }); 




})();