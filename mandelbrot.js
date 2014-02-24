var vga_palette=[[0,0,0],[0,0,168],[0,168,0],[0,168,168],[168,0,0],[168,0,168],[168,84,0],[168,168,168],[84,84,84],[84,84,252],[84,252,84],[84,252,252],[252,84,84],[252,84,252],[252,252,84],[252,252,252],[0,0,0],[20,20,20],[32,32,32],[44,44,44],[56,56,56],[68,68,68],[80,80,80],[96,96,96],[112,112,112],[128,128,128],[144,144,144],[160,160,160],[180,180,180],[200,200,200],[224,224,224],[252,252,252],[0,0,252],[64,0,252],[124,0,252],[188,0,252],[252,0,252],[252,0,188],[252,0,124],[252,0,64],[252,0,0],[252,64,0],[252,124,0],[252,188,0],[252,252,0],[188,252,0],[124,252,0],[64,252,0],[0,252,0],[0,252,64],[0,252,124],[0,252,188],[0,252,252],[0,188,252],[0,124,252],[0,64,252],[124,124,252],[156,124,252],[188,124,252],[220,124,252],[252,124,252],[252,124,220],[252,124,188],[252,124,156],[252,124,124],[252,156,124],[252,188,124],[252,220,124],[252,252,124],[220,252,124],[188,252,124],[156,252,124],[124,252,124],[124,252,156],[124,252,188],[124,252,220],[124,252,252],[124,220,252],[124,188,252],[124,156,252],[180,180,252],[196,180,252],[216,180,252],[232,180,252],[252,180,252],[252,180,232],[252,180,216],[252,180,196],[252,180,180],[252,196,180],[252,216,180],[252,232,180],[252,252,180],[232,252,180],[216,252,180],[196,252,180],[180,252,180],[180,252,196],[180,252,216],[180,252,232],[180,252,252],[180,232,252],[180,216,252],[180,196,252],[0,0,112],[28,0,112],[56,0,112],[84,0,112],[112,0,112],[112,0,84],[112,0,56],[112,0,28],[112,0,0],[112,28,0],[112,56,0],[112,84,0],[112,112,0],[84,112,0],[56,112,0],[28,112,0],[0,112,0],[0,112,28],[0,112,56],[0,112,84],[0,112,112],[0,84,112],[0,56,112],[0,28,112],[56,56,112],[68,56,112],[84,56,112],[96,56,112],[112,56,112],[112,56,96],[112,56,84],[112,56,68],[112,56,56],[112,68,56],[112,84,56],[112,96,56],[112,112,56],[96,112,56],[84,112,56],[68,112,56],[56,112,56],[56,112,68],[56,112,84],[56,112,96],[56,112,112],[56,96,112],[56,84,112],[56,68,112],[80,80,112],[88,80,112],[96,80,112],[104,80,112],[112,80,112],[112,80,104],[112,80,96],[112,80,88],[112,80,80],[112,88,80],[112,96,80],[112,104,80],[112,112,80],[104,112,80],[96,112,80],[88,112,80],[80,112,80],[80,112,88],[80,112,96],[80,112,104],[80,112,112],[80,104,112],[80,96,112],[80,88,112],[0,0,64],[16,0,64],[32,0,64],[48,0,64],[64,0,64],[64,0,48],[64,0,32],[64,0,16],[64,0,0],[64,16,0],[64,32,0],[64,48,0],[64,64,0],[48,64,0],[32,64,0],[16,64,0],[0,64,0],[0,64,16],[0,64,32],[0,64,48],[0,64,64],[0,48,64],[0,32,64],[0,16,64],[32,32,64],[40,32,64],[48,32,64],[56,32,64],[64,32,64],[64,32,56],[64,32,48],[64,32,40],[64,32,32],[64,40,32],[64,48,32],[64,56,32],[64,64,32],[56,64,32],[48,64,32],[40,64,32],[32,64,32],[32,64,40],[32,64,48],[32,64,56],[32,64,64],[32,56,64],[32,48,64],[32,40,64],[44,44,64],[48,44,64],[52,44,64],[60,44,64],[64,44,64],[64,44,60],[64,44,52],[64,44,48],[64,44,44],[64,48,44],[64,52,44],[64,60,44],[64,64,44],[60,64,44],[52,64,44],[48,64,44],[44,64,44],[44,64,48],[44,64,52],[44,64,60],[44,64,64],[44,60,64],[44,52,64],[44,48,64],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]; 

var bw_palette=[[0,0,0],[252,252,252],[248,252,252],[252,248,252],[252,248,248],[248,248,248],[244,248,248],[248,244,252],[248,244,244],[244,244,244],[240,244,244],[244,240,248],[244,240,240],[240,240,240],[236,240,240],[240,236,244],[240,236,236],[236,236,236],[232,236,236],[236,232,240],[236,232,232],[232,232,232],[228,232,232],[232,228,236],[232,228,228],[228,228,228],[224,228,228],[228,224,232],[228,224,224],[224,224,224],[220,224,224],[224,220,228],[224,220,220],[220,220,220],[216,220,220],[220,216,224],[220,216,216],[216,216,216],[212,216,216],[216,212,220],[216,212,212],[212,212,212],[208,212,212],[212,208,216],[212,208,208],[208,208,208],[204,208,208],[208,204,212],[208,204,204],[204,204,204],[200,204,204],[204,200,208],[204,200,200],[200,200,200],[196,200,200],[200,196,204],[200,196,196],[196,196,196],[192,196,196],[196,192,200],[196,192,192],[192,192,192],[188,192,192],[192,188,196],[192,188,188],[188,188,188],[184,188,188],[188,184,192],[188,184,184],[184,184,184],[180,184,184],[184,180,188],[184,180,180],[180,180,180],[176,180,180],[180,176,184],[180,176,176],[176,176,176],[172,176,176],[176,172,180],[176,172,172],[172,172,172],[168,172,172],[172,168,176],[172,168,168],[168,168,168],[164,168,168],[168,164,172],[168,164,164],[164,164,164],[160,164,164],[164,160,168],[164,160,160],[160,160,160],[156,160,160],[160,156,164],[160,156,156],[156,156,156],[152,156,156],[156,152,160],[156,152,152],[152,152,152],[148,152,152],[152,148,156],[152,148,148],[148,148,148],[144,148,148],[148,144,152],[148,144,144],[144,144,144],[140,144,144],[144,140,148],[144,140,140],[140,140,140],[136,140,140],[140,136,144],[140,136,136],[136,136,136],[132,136,136],[136,132,140],[136,132,132],[132,132,132],[128,132,132],[132,128,136],[132,128,128],[128,128,128],[124,128,128],[128,124,132],[128,124,124],[124,124,124],[120,124,124],[124,120,128],[124,120,120],[120,120,120],[116,120,120],[120,116,124],[120,116,116],[116,116,116],[112,116,116],[116,112,120],[116,112,112],[112,112,112],[108,112,112],[112,108,116],[112,108,108],[108,108,108],[104,108,108],[108,104,112],[108,104,104],[104,104,104],[100,104,104],[104,100,108],[104,100,100],[100,100,100],[96,100,100],[100,96,104],[100,96,96],[96,96,96],[92,96,96],[96,92,100],[96,92,92],[92,92,92],[88,92,92],[92,88,96],[92,88,88],[88,88,88],[84,88,88],[88,84,92],[88,84,84],[84,84,84],[80,84,84],[84,80,88],[84,80,80],[80,80,80],[76,80,80],[80,76,84],[80,76,76],[76,76,76],[72,76,76],[76,72,80],[76,72,72],[72,72,72],[68,72,72],[72,68,76],[72,68,68],[68,68,68],[64,68,68],[68,64,72],[68,64,64],[64,64,64],[60,64,64],[64,60,68],[64,60,60],[60,60,60],[56,60,60],[60,56,64],[60,56,56],[56,56,56],[52,56,56],[56,52,60],[56,52,52],[52,52,52],[48,52,52],[52,48,56],[52,48,48],[48,48,48],[44,48,48],[48,44,52],[48,44,44],[44,44,44],[40,44,44],[44,40,48],[44,40,40],[40,40,40],[36,40,40],[40,36,44],[40,36,36],[36,36,36],[32,36,36],[36,32,40],[36,32,32],[32,32,32],[28,32,32],[32,28,36],[32,28,28],[28,28,28],[24,28,28],[28,24,32],[28,24,24],[24,24,24],[20,24,24],[24,20,28],[24,20,20],[20,20,20],[16,20,20],[20,16,24],[20,16,16],[16,16,16],[12,16,16],[16,12,20],[16,12,12],[12,12,12],[8,12,12],[12,8,16],[12,8,8],[8,8,8],[4,8,8],[8,4,12],[8,4,4],[4,4,4],[0,4,4],[4,0,8],[4,0,0],[0,0,0],[0,0,0],[0,0,0]];

var sepia_palette=[[0,0,0],[11,5,0],[23,11,0],[34,17,0],[45,22,0],[56,28,0],[66,33,0],[76,38,0],[84,42,0],[92,46,0],[99,49,0],[105,52,0],[110,55,0],[114,57,0],[117,58,0],[119,59,0],[120,60,0],[119,59,0],[117,58,0],[114,57,0],[110,55,0],[105,52,0],[99,49,0],[92,46,0],[84,42,0],[76,38,0],[66,33,0],[56,28,0],[45,22,0],[34,17,0],[23,11,0],[11,5,0],[0,0,0],[17,8,0],[35,17,0],[52,26,0],[68,34,0],[84,42,0],[100,50,0],[114,57,0],[127,63,0],[139,69,0],[149,74,0],[158,79,0],[166,83,0],[172,86,0],[176,88,0],[179,89,0],[180,90,0],[179,89,0],[176,88,0],[172,86,0],[166,83,0],[158,79,0],[149,74,0],[139,69,0],[127,63,0],[114,57,0],[100,50,0],[84,42,0],[68,34,0],[52,26,0],[35,17,0],[17,8,0],[0,0,0],[23,11,0],[46,23,0],[69,34,0],[91,45,0],[113,56,0],[133,66,0],[152,76,0],[169,84,0],[185,92,0],[199,99,0],[211,105,0],[221,110,0],[229,114,0],[235,117,0],[238,119,0],[240,120,0],[238,119,0],[235,117,0],[229,114,0],[221,110,0],[211,105,0],[199,99,0],[185,92,0],[169,84,0],[152,76,0],[133,66,0],[113,56,0],[91,45,0],[69,34,0],[46,23,0],[23,11,0],[0,0,0],[24,17,0],[49,35,0],[74,52,0],[97,68,0],[120,84,0],[141,100,0],[161,114,0],[180,127,0],[197,139,0],[212,149,0],[224,158,0],[235,166,0],[244,172,0],[250,176,0],[253,179,0],[255,180,0],[253,179,0],[250,176,0],[244,172,0],[235,166,0],[224,158,0],[212,149,0],[197,139,0],[180,127,0],[161,114,0],[141,100,0],[120,84,0],[97,68,0],[74,52,0],[49,35,0],[24,17,0],[0,0,0],[24,19,0],[49,39,0],[74,58,0],[97,76,0],[120,94,0],[141,111,0],[161,126,0],[180,141,0],[197,154,0],[212,166,0],[224,176,0],[235,184,0],[244,191,0],[250,196,0],[253,199,0],[255,200,0],[253,199,0],[250,196,0],[244,191,0],[235,184,0],[224,176,0],[212,166,0],[197,154,0],[180,141,0],[161,126,0],[141,111,0],[120,94,0],[97,76,0],[74,58,0],[49,39,0],[24,19,0],[0,0,0],[24,20,0],[49,40,0],[74,60,0],[97,80,0],[120,98,0],[141,116,0],[161,133,0],[180,148,0],[197,162,0],[212,174,0],[224,185,0],[235,194,0],[244,200,0],[250,205,0],[253,208,0],[255,210,0],[253,208,0],[250,205,0],[244,200,0],[235,194,0],[224,185,0],[212,174,0],[197,162,0],[180,148,0],[161,133,0],[141,116,0],[120,98,0],[97,80,0],[74,60,0],[49,40,0],[24,20,0],[0,0,0],[24,21,0],[49,42,0],[74,63,0],[97,84,0],[120,103,0],[141,122,0],[161,139,0],[180,155,0],[197,170,0],[212,182,0],[224,194,0],[235,203,0],[244,210,0],[250,215,0],[253,218,0],[255,220,0],[253,218,0],[250,215,0],[244,210,0],[235,203,0],[224,194,0],[212,182,0],[197,170,0],[180,155,0],[161,139,0],[141,122,0],[120,103,0],[97,84,0],[74,63,0],[49,42,0],[24,21,0],[0,0,0],[24,22,2],[49,44,5],[74,66,8],[97,88,11],[120,108,14],[141,127,16],[161,145,19],[180,162,21],[197,177,23],[212,191,24],[224,202,26],[235,212,27],[244,220,28],[250,225,29],[253,228,29],[255,230,30],[253,228,29],[250,225,29],[244,220,28],[235,212,27],[224,202,26],[212,191,24],[197,177,23],[180,162,21],[161,145,19],[141,127,16],[120,108,14],[97,88,11],[74,66,8],[49,44,5],[24,22,2]]; 

var palettes = [vga_palette, bw_palette, sepia_palette];
var palette = 0;

var ct2d;
var surfacewidth;
var surfaceheight;
var canvas;

var escapevalue = 4.0;
var maxiter = 150;

var startx = -2.4;
var starty = 1.2;
var extx = 3.2;
var exty = 2.4;

var re = 0.0;
var im = 0.0;
var prevstartx = startx; 
var prevstarty = starty; 
var prevextx = extx; 
var prevexty = exty; 
var prevre = re; 
var previm = im; 
var julia = false;   

var lp1;
var lp2;
var gred = 6;
var ggreen = 12;
var gblue = 18;
var range = 1;

var mousedown = false;
var mouseb;
var mousebx;
var mouseby;

var backimg;
var mthread;
var maxthreads = 8;
var actthread = 1;
var workers = new Array();
var timeout = 0;

var gi = 0;
var start = 0;

function resetvalues (preset) {
  if (preset==0) {
    startx = -2.4;
    extx = 3.2;
    starty = 1.2;
    exty = 2.4;
    re = 0.0;
    im = 0.0;
    julia = false; 
    A_SLIDERS[0].f_setValue(6);
    A_SLIDERS[1].f_setValue(12);
    A_SLIDERS[2].f_setValue(18);
    gred = parseInt(document.getElementById("sliderred").value);
    ggreen = parseInt(document.getElementById("slidergreen").value);
    gblue = parseInt(document.getElementById("sliderblue").value);
    escapevalue = 4.0;
    maxiter = 150;
    document.getElementById("iteration").value = maxiter;
    document.getElementById("escape").value = escapevalue;
    range = 1;
    document.getElementById("p100").checked = false;
    palette = 0;
    document.getElementById("proc").checked = true;
  } 
  else if (preset==1) {
    startx = -0.990165396112942994;
    extx = -0.990116320000000000 - startx;
    starty = 0.309678196004106188;
    exty = starty-0.309641392638807744;
    re = 0.0;
    im = 0.0;
    julia = false; 
    A_SLIDERS[0].f_setValue(73);
    A_SLIDERS[1].f_setValue(86);
    A_SLIDERS[2].f_setValue(100);
    gred=parseInt(document.getElementById("sliderred").value);
    ggreen=parseInt(document.getElementById("slidergreen").value);
    gblue=parseInt(document.getElementById("sliderblue").value);
    escapevalue = 4.0;
    maxiter = 1000;
    document.getElementById("iteration").value=maxiter;
    document.getElementById("escape").value=escapevalue;
    range=0.01;
    document.getElementById("p100").checked =true;
    palette=0;
    document.getElementById("proc").checked =true;
  } 

  else if (preset==2) {
    startx = -0.747345398829878366;
    extx = -0.747309046788541043 - startx;
    starty = 0.087867294132616292;
    exty = starty - 0.087840020000000000;
    re = 0.0;
    im = 0.0;
    julia = false; 
    A_SLIDERS[0].f_setValue(5);
    A_SLIDERS[1].f_setValue(5);
    A_SLIDERS[2].f_setValue(5);
    gred=parseInt(document.getElementById("sliderred").value);
    ggreen=parseInt(document.getElementById("slidergreen").value);
    gblue=parseInt(document.getElementById("sliderblue").value);
    escapevalue = 4.0;
    maxiter = 500;
    document.getElementById("iteration").value=maxiter;
    document.getElementById("escape").value=escapevalue;
    range=1;
    document.getElementById("p100").checked =false;
    palette=0;
    document.getElementById("proc").checked =true;
  } 
  else if (preset==3) {
    startx = -0.750585682229024399;
    extx = -0.743274216894426721 - startx;
    starty = 0.093191882803597334;
    exty = starty - 0.087710353866447093;
    re = 0.0;
    im = 0.0;
    julia = false; 
    A_SLIDERS[0].f_setValue(25);
    A_SLIDERS[1].f_setValue(25);
    A_SLIDERS[2].f_setValue(25);
    gred=parseInt(document.getElementById("sliderred").value);
    ggreen=parseInt(document.getElementById("slidergreen").value);
    gblue=parseInt(document.getElementById("sliderblue").value);
    escapevalue = 4.0;
    maxiter = 1000;
    document.getElementById("iteration").value=maxiter;
    document.getElementById("escape").value=escapevalue;
    range=0.01;
    document.getElementById("p100").checked =true;
    palette=0;
    document.getElementById("proc").checked =true;
  } 
  else if (preset==4) {
    startx = -1.258443962896917640;
    extx = -1.258443840496861240 - startx;
    starty = 0.382400322834674643;
    exty = starty - 0.382400231034546839;
    re = 0.0;
    im = 0.0;
    julia = false; 
    A_SLIDERS[0].f_setValue(0);
    A_SLIDERS[1].f_setValue(4);
    A_SLIDERS[2].f_setValue(0);
    gred=parseInt(document.getElementById("sliderred").value);
    ggreen=parseInt(document.getElementById("slidergreen").value);
    gblue=parseInt(document.getElementById("sliderblue").value);
    escapevalue = 4.0;
    maxiter = 3000;
    document.getElementById("iteration").value=maxiter;
    document.getElementById("escape").value=escapevalue;
    range=1;
    document.getElementById("p100").checked =false;
    palette=0;
    document.getElementById("proc").checked =true;
  } 
  else if (preset==5) {
    startx = -0.902853313737311980;
    extx = -0.077040114512740367 - startx;
    starty = 0.321914656325943444;
    exty = starty + 0.297445243092485266;
    re = -0.751111111111111111;
    im = 0.048888888888888889;
    julia = true; 
    escapevalue = 4.0;
    maxiter = 2000;
    document.getElementById("iteration").value=maxiter;
    document.getElementById("escape").value=escapevalue;
    palette=3;
    document.getElementById("nice").checked =true;
  } 
  else if (preset==6) {
    startx = -1.553033696714109880;
    extx = 1.528650709352576100 - startx;
    starty = 1.094045464862574510;
    exty = starty + 1.102749622025527560;
    re = -0.777306122448979592;
    im = 0.118040816326530612;
    julia = true; 
    escapevalue = 4.0;
    maxiter = 1000;
    document.getElementById("iteration").value=maxiter;
    document.getElementById("escape").value=escapevalue;
    palette=2;
    document.getElementById("bw").checked =true;
  } 
}


function iter(a,b,x,y,ba,mi) {
  var n = 0;
  var x2 = x*x;
  var y2 = y*y;

  do {
    y = 2*x*y + b;                
    x = x2 - y2 + a;
    x2 = x*x;
    y2 = y*y;
    n++;
  }
  while (((x2+y2) < ba) && (n < mi));

  return n;
}


function calcrowsmt () {
  gi = 0;
  for (var i = 0; i < maxthreads; i++) {
    var worker = workers[i];
    if (worker.idle) {
      var b = (starty - (gi * lp2));
      var a = startx;
      worker.idle = false;
      worker.postMessage({
        gi:gi,
        a: a,
        b: b,
        re: re,
        im: im,
        lp1: lp1,
        maxiter: maxiter,
        escapevalue: escapevalue,
        surfacewidth: surfacewidth,
        julia: julia,
      })
      gi++;
    }   
  }
}


function msghandler(worker, data) {
  var n;
  var offset = 0; 
  var image = ct2d.createImageData(surfacewidth, 1);
  var pixels = image.data;
  var values = data.values;
  for (var j = 0; j < surfacewidth; j++) { 
    n = values[j];
    if (n >= maxiter) {
      pixels[offset++] = 0;   
      pixels[offset++] = 0;   
      pixels[offset++] = 0;  
      pixels[offset++] = 255;
    }
    else {
      if (palette==0) {
        pixels[offset++] = Math.round(n*gred*range) & 255;   
        pixels[offset++] = Math.round(n*ggreen*range) & 255;   
        pixels[offset++] = Math.round(n*gblue*range) & 255;  
        pixels[offset++] = 255;
      }
      else {
        pixels[offset++] = palettes[palette][n & 255][0];   
        pixels[offset++] = palettes[palette][n & 255][1];   
        pixels[offset++] = palettes[palette][n & 255][2];  
        pixels[offset++] = 255;
      }
    }

  }
  ct2d.putImageData(image, 0, data.gi);
  if (gi < surfaceheight) {
    var b = (starty - (gi * lp2));
    var a = startx;
    worker.idle = false;
    worker.postMessage({
      gi:gi,
      a: a,
      b: b,
      re: re,
      im: im,
      lp1: lp1,
      maxiter: maxiter,
      escapevalue: escapevalue,
      surfacewidth: surfacewidth,
      julia: julia,
    })
    gi++;
  }
  else {
    worker.idle = true;
    if (actthread == maxthreads) {
      var elapsed = new Date().getTime() - start;
      statsreport(elapsed + " ms");
      actthread = 1;
    }
    else actthread++;   
  }
}


function calcrows () {

  var n = 0;
  var offset = 0; 

  var image = ct2d.createImageData(surfacewidth, 1);
  var pixels = image.data;

  var b = (starty - (gi * lp2));
  var a = startx;

  for (var j = 0; j < surfacewidth; j++) {
    a = a+lp1;
    if (!julia)
      n = iter(a,b,re,im,escapevalue,maxiter);
    else
      n = iter(re,im,a,b,escapevalue,maxiter);

    if (n >= maxiter) {
      pixels[offset++] = 0;   
      pixels[offset++] = 0;   
      pixels[offset++] = 0;  
      pixels[offset++] = 255;
    }
    else {
      if (palette==0) {
        pixels[offset++] = Math.round(n*gred*range) & 255;   
        pixels[offset++] = Math.round(n*ggreen*range) & 255;   
        pixels[offset++] = Math.round(n*gblue*range) & 255;  
        pixels[offset++] = 255;
      }
      else {
        pixels[offset++] = palettes[palette][n & 255][0];   
        pixels[offset++] = palettes[palette][n & 255][1];   
        pixels[offset++] = palettes[palette][n & 255][2];  
        pixels[offset++] = 255;
      }
    }
  }

  ct2d.putImageData(image, 0, gi);

  if (gi <  surfaceheight-1) {
    gi++;
    if (gi % 24 != 0)
      calcrows();
    else
      setTimeout("calcrows()",0);
  }
  else {
    var elapsed = new Date().getTime() - start;
    statsreport(elapsed + " ms");
  }
}


function maincalc() {
  start = new Date().getTime();
  gi = 0;
  lp1 = extx / surfacewidth;
  lp2 = exty / surfaceheight; 
  if (!mthread.checked) calcrows(); else calcrowsmt(); 
}


function getmousepos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function onmousedown(e) {
  mousedown = true;
  mouseb = e.button;
  var mousepos = getmousepos(canvas, e);

  mousebx = Math.round(mousepos.x);
  mouseby = Math.round(mousepos.y);

  backimg = ct2d.getImageData(0, 0, surfacewidth, surfaceheight);
}

function onmousemove(e) {
  var mousepos = getmousepos(canvas, e);
  var currx = Math.round(mousepos.x);
  var curry = Math.round(mousepos.y);

  if (mousedown && mouseb == 0) {   
    curry = mouseby + (booltoint(curry > mouseby) * 2 - 1) * Math.round(surfaceheight * Math.abs(currx - mousebx) / surfacewidth);
    ct2d.putImageData(backimg, 0, 0);
    ct2d.strokeStyle = "rgb(255,255,255)";
    ct2d.strokeRect(mousebx, mouseby, currx - mousebx, curry - mouseby);
  }
  var xre = startx + (currx * lp1);
  var yim = starty - (curry * lp2); 
  statsreportpos(xre, yim);
}

function onmouseup ( e ) {
  if (mousedown && e.button == 0 && !e.ctrlKey) {   
    var mousepos = getmousepos(canvas, e);
    var currx = Math.round(mousepos.x);
    var curry = Math.round(mousepos.y);

    curry = mouseby + (booltoint(curry > mouseby) * 2 - 1) * Math.round(surfaceheight * Math.abs(currx - mousebx) / surfacewidth);  

    if ((Math.abs(currx - mousebx) > 3) && (Math.abs(curry - mouseby) > 3)) {

      extx = (startx + (currx * lp1)) - (startx + (mousebx * lp1));
      exty = (starty - (mouseby * lp2)) - (starty - (curry * lp2)) ;
      startx = startx + (mousebx * lp1);
      starty = starty - (mouseby * lp2);

      maincalc();
    }
    //julia switch     
    else {

      julia = !julia;

      if (julia) {
        prevstartx = startx;
        prevstarty = starty;
        prevextx = extx;
        prevexty = exty;
        prevre = re;
        previm = im;
        re = startx + (currx * lp1);
        im = starty - (curry * lp2);
        startx = -2;
        starty = 1.5;
        extx = 4;
        exty = 3;
      }
      else {
        startx = prevstartx;
        starty = prevstarty;
        extx = prevextx;
        exty = prevexty;
        re = prevre;
        im = previm;
      }
      maincalc();
    }
  }
  else if (mousedown && e.button == 0 && e.ctrlKey) {
    var mousepos = getmousepos(canvas, e);
    var currx = Math.round(mousepos.x);
    var curry = Math.round(mousepos.y);

    curry = mouseby + (booltoint(curry > mouseby) * 2 - 1) * Math.round(surfaceheight * Math.abs(currx - mousebx) / surfacewidth);

    if ((Math.abs(currx - mousebx) > 3) && (Math.abs(curry - mouseby) > 3)) {

      var visszx = oszt(surfacewidth, (currx - mousebx));
      var visszy = oszt(surfaceheight, (curry - mouseby));
      extx = ((startx + extx) + ((surfacewidth - currx) * lp1 * visszx)) - (startx - (mousebx * lp1 * visszx));
      exty = (starty + (mouseby * lp2 * visszy)) - ((starty - exty) - ((surfaceheight - curry) * lp2 * visszy));
      startx = startx - (mousebx * lp1 * visszx);
      starty = starty + (mouseby * lp2 * visszy);
      maincalc();
    }
  }
  else if (mousedown && e.button == 2) {
    var mousepos = getmousepos(canvas, e);

    var currx = Math.round(mousepos.x);
    var curry = Math.round(mousepos.y); 

    if ((Math.abs(currx - mousebx) > 3) || (Math.abs(curry - mouseby) > 3)) {
      startx = startx +((mousebx-currx)*lp1);
      starty = starty -((mouseby-curry)*lp2);

      maincalc();
    }
  }
  mousedown = false;
}


function wheel(event){
  var delta = 0;
  if (!event) event = window.event;
  if (event.wheelDelta) {
    delta = event.wheelDelta/120; 
  } 
  else if (event.detail) {
    delta = -event.detail/3;
  }
  if (delta)
    wheelhandle(delta);
  if (event.preventDefault)
    event.preventDefault();
  event.returnValue = false;
}


function wheelhandle(delta) {
  if (delta < 0) {
    var visszx = oszt(surfacewidth, (surfacewidth - 8));
    var visszy = oszt(surfaceheight, (surfaceheight - (8 * surfaceheight / surfacewidth)));
    extx = extx + (8 * lp1 * visszx);
    exty = exty + ((8 * surfaceheight / surfacewidth) * lp2 *  visszy);
    startx = startx - (4 * lp1 * visszx);
    starty = starty + ((4 * surfaceheight / surfacewidth) * lp2 * visszy);  
  } 
  else {
    extx = extx - (8 * lp1);
    exty = exty - ((8 * surfaceheight / surfacewidth) * lp2);
    startx = startx + (4 * lp1);
    starty = starty - ((4 * surfaceheight / surfacewidth) *lp2);
  }
  if (mthread.checked) {
    clearTimeout(timeout);
    timeout=setTimeout("maincalc()",250); 
  }
  else maincalc();  
}

//touch

function ontouchstart ( e ) {
  e.preventDefault();
  var touch = e.targetTouches[0];
  mousedown = true;

  var mousepos = getmousepos(canvas, touch);
  mousebx = Math.round(mousepos.x);
  mouseby = Math.round(mousepos.y);
  backimg = ct2d.getImageData(0, 0, surfacewidth, surfaceheight);
}

function ontouchmove ( e ) {
  e.preventDefault();
  var touch = e.targetTouches[0];

  var mousepos = getmousepos(canvas, touch);
  var currx = Math.round(mousepos.x);
  var curry = Math.round(mousepos.y);

  if (mousedown) {   

    curry = mouseby + (booltoint(curry > mouseby) * 2 - 1) * Math.round(surfaceheight * Math.abs(currx - mousebx) / surfacewidth);
    ct2d.putImageData(backimg, 0, 0);
    ct2d.strokeStyle = "rgb(255,255,255)";
    ct2d.strokeRect(mousebx, mouseby, currx - mousebx, curry - mouseby);
  }
  var xre = startx + (currx * lp1);
  var yim = starty - (curry * lp2); 
  statsreportpos(xre,yim);
}

function ontouchend ( e ) {      
  e.preventDefault();
  var touch = e.changedTouches[0];
  if (mousedown) {   
    var mousepos = getmousepos(canvas, touch);
    var currx = Math.round(mousepos.x);
    var curry = Math.round(mousepos.y);

    curry = mouseby + (booltoint(curry > mouseby) * 2 - 1) * Math.round(surfaceheight * Math.abs(currx - mousebx) / surfacewidth);  

    if ((Math.abs(currx - mousebx) > 3) && (Math.abs(curry - mouseby) > 3)) {
      extx = (startx + (currx * lp1)) - (startx + (mousebx * lp1));
      exty = (starty - (mouseby * lp2)) - (starty - (curry * lp2)) ;
      startx = startx + (mousebx * lp1);
      starty = starty - (mouseby * lp2);
      maincalc();
    }

    else {
      julia = !julia;

      if (julia) {
        prevstartx = startx;
        prevstarty = starty;
        prevextx = extx;
        prevexty = exty;
        prevre = re;
        previm = im;
        re = startx + (currx * lp1);
        im = starty - (curry * lp2);
        startx = -2;
        starty = 1.5;
        extx = 4;
        exty = 3;
      }
      else {
        startx = prevstartx;
        starty = prevstarty;
        extx = prevextx;
        exty = prevexty;
        re = prevre;
        im = previm;
      }

      maincalc();
    }
  }
  mousedown = false;
}


function radiovalue () {
  var radios = document.getElementsByTagName('input');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked)
      return radios[i].value;       
  }
}


function initialize ( canvasElement, w, h ) {
  mthread = document.getElementById("mthread");
  if (!window.Worker) {
    mthread.checked=false;
    mthread.disabled=true;
  }
  else {
    mthread.checked=true;
    for (var i = 0; i < maxthreads; i++) {
      var worker = new Worker("worker.js");
      worker.onmessage = function(event) { msghandler(event.target, event.data) }
      worker.idle = true;
      workers.push(worker);
    }
  }
  surfacewidth = w;
  surfaceheight = h;
  canvas = document.getElementById(canvasElement);

  if (canvas.addEventListener)
    canvas.addEventListener('DOMMouseScroll', wheel, false);
  canvas.onmousewheel = wheel;

  ct2d = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;

  resetvalues(0);

  canvas.onmousedown = onmousedown;
  canvas.onmousemove = onmousemove;
  canvas.onmouseup = onmouseup;

  canvas.addEventListener('touchstart', ontouchstart);
  canvas.addEventListener('touchmove', ontouchmove);
  canvas.addEventListener('touchend', ontouchend);
}


function oszt(x, y) {
  if (y == 0) return 0;
  else return x / y;
}

function booltoint(b) {
  return b ? 1 : 0;
}   

function pngconvert (canvasElement) {   
  var canvas = document.getElementById(canvasElement);
  var url = canvas.toDataURL("image/png");
  var newwin = window.open();
  newwin.document.open();
  newwin.document.write('<html><head><title>Canvas image<\/title><\/head><body style="margin: 0"><img id="cnvimg"><\/body><\/html>');
  newwin.document.close();
  var cnvimg = newwin.document.getElementById("cnvimg"); 
  cnvimg.src = url;     
}

function load() {
  w = window.innerWidth;
  h = window.innerHeight;
  initialize("canvas", w, h);
  maincalc();
}

// When you resize the browser window, we need
// to resize the canvas and redraw
window.onresize = function() {
     load();
};

function paramschange() {
  maxiter = parseInt(document.getElementById("iteration").value);
  escapevalue = parseFloat(document.getElementById("escape").value);
  gred = parseInt(document.getElementById("sliderred").value);
  ggreen = parseInt(document.getElementById("slidergreen").value);
  gblue = parseInt(document.getElementById("sliderblue").value);
  range = document.getElementById("p100").checked ? 0.01 : 1;
  palette = radiovalue ();
  maincalc();
}

