/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */

'use strict';
importScripts('./swtoolbox.js');

self.toolbox.options.cache = {
  name: 'phaser-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './serviceworker.js',
    './swtoolbox.js',
    './app.bundle.js',
    './SIDPlayerPluginES5.js',

    './production-dependencies.bundle.js',
    './assets/crosshair.png',
    './assets/icon.png',
    './assets/icon-192.png',
    './assets/logo.png',        
    './assets/dronesheet.json',
    './assets/dronesheet.png',

    './assets/background_0.png',
    './assets/background_00.png',
    './assets/background_2.png',
    './assets/background_4.png',
    './assets/background_5.png',

    './assets/chevron_1.png',
    './assets/chevron_2.png',
    './assets/chevron_3.png',
    
    './assets/d-bomb_blank.1.png',
    './assets/d-bomb_blank.png',
    './assets/d-bomb_shine.png',
    './assets/d-bomb.png',
    './assets/drone-war_HUD_bg.png',
    
    './assets/sid/Deflektor.sid',
    './assets/sid/Krakout.sid',

    './assets/Roboto/Roboto-Regular.ttf',
    './assets/Squada_One/SquadaOne-Regular.ttf',
    
    //'./favicon.ico',
    

    './assets/explosion4.ogg',

    './assets/laser1.ogg',
    './assets/laser2.ogg',
    './assets/menubg_1.png',
    './assets/pause_off.png',
    './assets/pause_on.png',
    './assets/quit.png',
    './assets/road_700x226.png',
   
    './assets/speaker_off.png',
    './assets/speaker_on.png',
    './assets/splash.png',
    './assets/startbutton.png',
    
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
