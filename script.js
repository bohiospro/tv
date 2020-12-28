(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "thumbnailUrl": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_t.jpg",
 "class": "Panorama",
 "label": "PISCINA",
 "id": "panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB",
   "backwardYaw": -172.43,
   "class": "AdjacentPanorama",
   "yaw": 98.9,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_72293E95_4895_C527_41B2_099278056E12"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.96,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B186DF35_A618_02FA_41DA_57B4746D7AAC"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 45.72,
  "pitch": 1.23
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C48027A_4B94_BDED_41C2_ABD796139373_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE73D0FB_A618_1F6F_41C5_93695D4B134E"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.45,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B00CA3AA_A618_01E9_41DC_4CD5681AC265"
},
{
 "thumbnailUrl": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_t.jpg",
 "class": "Panorama",
 "label": " VISTA FRONTAL",
 "id": "panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C",
 "hfovMin": "133%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395",
   "backwardYaw": 1.39,
   "class": "AdjacentPanorama",
   "yaw": 170.57,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_522E85DE_4BFB_C725_41C0_D9E812464D48"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_t.jpg",
 "class": "Panorama",
 "label": "TERRAZA #1",
 "id": "panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB",
   "backwardYaw": 73.65,
   "class": "AdjacentPanorama",
   "yaw": -114.28,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010",
   "backwardYaw": -61.93,
   "class": "AdjacentPanorama",
   "yaw": 1.91,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_7DBB3C63_489B_45E8_41B2_25B1B0E3D286",
  "this.overlay_7D557F4B_4895_C323_41A0_16EA1885AC38"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_t.jpg",
 "class": "Panorama",
 "label": "HABITACION PRIMER PISO",
 "id": "panorama_5C488B87_4B95_C323_41B3_865515D5E0B2",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_607B90A7_4B9F_BD63_41C5_73983A6D63F7"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -72.99,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BF517204_A618_029A_41CE_38E14E429CB9"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.16,
  "pitch": -7.62
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_camera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "gyroscopeEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BED9F168_A618_0169_41DD_B17395E639D3"
},
{
 "thumbnailUrl": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_3_t.jpg",
 "label": "WhatsApp Image 2020-12-10 at 11.33.46 PM (1)",
 "id": "album_5A23F159_57FF_7F8F_41D4_7571359B31DA_3",
 "width": 1242,
 "image": {
  "levels": [
   {
    "url": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
 "class": "Photo",
 "height": 933
},
{
 "thumbnailUrl": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_t.jpg",
 "class": "Panorama",
 "label": "COSINA  #2",
 "id": "panorama_5C48957F_4B95_47E3_41CD_850BC82131A4",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D",
   "backwardYaw": -179.97,
   "class": "AdjacentPanorama",
   "yaw": -80.27,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_6541F23D_4874_DD67_4173_58A60A7B3A96"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1B88F74_A618_0179_41C1_7327A4136BC6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.6,
  "pitch": -6.51
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_camera"
},
{
 "thumbnailUrl": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_t.jpg",
 "class": "Panorama",
 "label": "SALA #3",
 "id": "panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816",
   "backwardYaw": 107.01,
   "class": "AdjacentPanorama",
   "yaw": -85.19,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C482489_4B97_452F_41CA_8580DB533138",
   "backwardYaw": 179.68,
   "class": "AdjacentPanorama",
   "yaw": -11.25,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_577A660D_4B9D_C527_41D0_3141900D34FC",
  "this.overlay_57F520A8_4B9C_BD6D_41A1_DC98411C0FFB",
  "this.overlay_5790B801_4B9F_4D1F_41B9_D6EC3F68BEB2",
  "this.overlay_545CD949_4B9D_4F2F_41CF_EA589739DB57"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE21B0AC_A618_1FEA_41E0_51EFAB8E2BB2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.02,
  "pitch": -1.67
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -107.24,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B110AE5B_A618_02AF_41B3_441AC009DE06"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 102.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BF1DA1B6_A618_01F9_41DF_26BD6C598194"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B141CED8_A618_03A9_41B5_FE4465EDD83C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 141.5,
  "pitch": -1.74
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B165DEF7_A618_0367_41E1_E63B0F4C0BC8"
},
{
 "thumbnailUrl": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_t.jpg",
 "class": "Panorama",
 "label": "ESCALERA #2",
 "id": "panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665",
   "backwardYaw": 92.48,
   "class": "AdjacentPanorama",
   "yaw": -77.09,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "backwardYaw": 2.32,
   "class": "AdjacentPanorama",
   "yaw": -175.86,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_6A1B523D_4B95_7D67_41D1_8D76C81B0D43",
  "this.overlay_6A1BDAEA_4BAB_42ED_4191_A72C6463E82C",
  "this.overlay_6ACD24D9_4BAB_452F_41D1_3F1AB664B913"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_t.jpg",
 "class": "Panorama",
 "label": "BA\u00d1O DE VISITAS",
 "id": "panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C488B87_4B95_C323_41B3_865515D5E0B2",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "backwardYaw": -150.91,
   "class": "AdjacentPanorama",
   "yaw": -178,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_636AEA5C_4B94_CD25_41CF_1C5D25937567",
  "this.overlay_630ED381_4B94_C31F_41C9_007706292F34"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.07,
  "pitch": 0,
  "hfov": 125
 },
 "class": "PanoramaCamera",
 "id": "camera_BF2F91F4_A618_017A_41B0_29C6F08C14B8"
},
{
 "thumbnailUrl": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_t.jpg",
 "class": "Panorama",
 "label": "walking closet #1",
 "id": "panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C483303_4B95_4323_41AD_F535C065121E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_6DE94CF7_4BAD_46E3_41D0_C484FE72B7E7",
  "this.overlay_624ADA41_4BAB_4D1F_41B6_86C39B4CF08A"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_t.jpg",
 "class": "Panorama",
 "label": "SALA #2",
 "id": "panorama_5C482489_4B97_452F_41CA_8580DB533138",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816",
   "backwardYaw": 51.29,
   "class": "AdjacentPanorama",
   "yaw": -101.32,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D",
   "backwardYaw": 111.57,
   "class": "AdjacentPanorama",
   "yaw": -47.44,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2",
   "backwardYaw": -11.25,
   "class": "AdjacentPanorama",
   "yaw": 179.68,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_565D4BD1_4B97_433F_41C6_48A60F4B1173",
  "this.overlay_56132B18_4B94_C32D_41D1_B833AEC6C6E2",
  "this.overlay_56FB3960_4B95_4F1D_41C1_EDB6E0DC86F7",
  "this.overlay_56A03C70_4B9B_C5FD_41CD_D696552DC7D5"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B007F38B_A618_01AF_41CB_FB327A8B8449"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.61,
  "pitch": -8.42
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BF0DE1C6_A618_0199_41D2_93E8C59DA7C4"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B3C082CF_A618_03A6_41A4_E23EA8F00617"
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "camera": "this.panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C482489_4B97_452F_41CA_8580DB533138_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_5C482489_4B97_452F_41CA_8580DB533138",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C483303_4B95_4323_41AD_F535C065121E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_5C483303_4B95_4323_41AD_F535C065121E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "media": "this.panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "media": "this.panorama_5C488B87_4B95_C323_41B3_865515D5E0B2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "media": "this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "media": "this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "media": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "media": "this.panorama_5C48957F_4B95_47E3_41CD_850BC82131A4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "media": "this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "media": "this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "media": "this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "media": "this.panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "media": "this.panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "media": "this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "media": "this.panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "media": "this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "media": "this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "media": "this.panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 0)",
   "media": "this.album_5A23F159_57FF_7F8F_41D4_7571359B31DA",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BF418214_A618_02B9_41E1_F1A67369F1DE"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetHfov": 115,
   "targetPitch": 11,
   "duration": 3000,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0
  }
 ],
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": 175.96,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.96,
  "pitch": 11,
  "hfov": 115
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -157.22,
  "pitch": -2.91
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C482489_4B97_452F_41CA_8580DB533138_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE874129_A618_1EEA_41C3_D9D85A3EC7DD"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B01E737B_A618_016E_41E1_8276886A2ADE"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.16,
  "pitch": 0,
  "hfov": 124
 },
 "class": "PanoramaCamera",
 "id": "camera_B3E0233D_A618_02EB_41E2_8A96A3A34665"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 87.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BF731223_A618_029E_41E1_F9F730DFA668"
},
{
 "thumbnailUrl": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_t.jpg",
 "class": "Panorama",
 "label": "HABITACION 2 #2",
 "id": "panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE",
   "backwardYaw": -6.03,
   "class": "AdjacentPanorama",
   "yaw": -100.61,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_7E2EABDF_4897_4323_41C8_E9F2E5189C77",
  "this.overlay_7F9A2755_4895_C327_41D0_F6A63AF3F16E",
  "this.overlay_7FDD3362_489B_431D_41D0_62241FC9E4F5"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -73.44,
  "pitch": -3.3
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE95C11A_A618_1EA9_41DF_53A4D7965EA8"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.05,
  "pitch": -0.38
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -128.71,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1888F55_A618_02BB_41E2_BE49BD5B297B"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.82,
  "pitch": -26.45
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 38.66,
  "pitch": 13.43,
  "hfov": 124
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_camera"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C482489_4B97_452F_41CA_8580DB533138_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_5C482489_4B97_452F_41CA_8580DB533138",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C483303_4B95_4323_41AD_F535C065121E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_5C483303_4B95_4323_41AD_F535C065121E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_5C488B87_4B95_C323_41B3_865515D5E0B2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_5C48957F_4B95_47E3_41CD_850BC82131A4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "media": "this.panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "media": "this.panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "media": "this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "media": "this.panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "media": "this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "media": "this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "media": "this.panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F",
   "class": "PanoramaPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 0)",
   "media": "this.album_5A23F159_57FF_7F8F_41D4_7571359B31DA",
   "class": "PhotoAlbumPlayListItem"
  }
 ]
},
{
 "thumbnailUrl": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_2_t.jpg",
 "label": "WhatsApp Image 2020-12-10 at 11.33.47 PM",
 "id": "album_5A23F159_57FF_7F8F_41D4_7571359B31DA_2",
 "width": 1242,
 "image": {
  "levels": [
   {
    "url": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
 "class": "Photo",
 "height": 888
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE51E0CC_A618_1FA9_41C6_D1861CAB7BF6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BECB4187_A618_01A6_41D8_18EAFE499151"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.76,
  "pitch": -6.37
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.59,
  "pitch": 1.37
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B0E4AE3B_A618_02EE_41C0_1ABBE3A259C5"
},
{
 "thumbnailUrl": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_t.jpg",
 "class": "Panorama",
 "label": " PASILLO 2 PISO #3",
 "id": "panorama_5C496889_4B94_CD2C_41BF_A28767C03F21",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB",
   "backwardYaw": -92.89,
   "class": "AdjacentPanorama",
   "yaw": 84.19,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3",
   "backwardYaw": 25.58,
   "class": "AdjacentPanorama",
   "yaw": -179.94,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_7AB115D0_486B_473C_41BF_CCDC16DDC40C",
  "this.overlay_7B464625_486B_4567_41C6_1BCD086476F2",
  "this.overlay_7BF2C2B6_486C_DD65_41BA_AB11EBFEFAFD"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.27,
  "pitch": -4.6
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.61,
  "pitch": 0,
  "hfov": 125
 },
 "class": "PanoramaCamera",
 "id": "camera_BEFBB197_A618_01A7_41DA_A0557CB7367C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.84,
  "pitch": -6.45
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -61.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B03E33D9_A618_01AB_41D8_4DBA6BBC99F5"
},
{
 "thumbnailUrl": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_t.jpg",
 "class": "Panorama",
 "label": "ESTAR 2 PISO",
 "id": "panorama_5C44992D_4B94_CF64_41BA_5EB35C141577",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "backwardYaw": 72.76,
   "class": "AdjacentPanorama",
   "yaw": -7.2,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB",
   "backwardYaw": 112.56,
   "class": "AdjacentPanorama",
   "yaw": -135.32,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_682E83F1_4BB5_42FC_41C5_7C3FC30FDA1A",
  "this.overlay_68B332DA_4BB7_5D2D_41C9_48152F35AE19",
  "this.overlay_69109879_4BB5_4DEF_41D0_D2326D3E87A2"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 58.7,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1CCFFE1_A618_019A_41CF_1076B3079F59"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 65.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B02553E8_A618_016A_41E1_3AB1F00B59E3"
},
{
 "thumbnailUrl": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_1_t.jpg",
 "label": "WhatsApp Image 2020-12-10 at 11.33.47 PM (1)",
 "id": "album_5A23F159_57FF_7F8F_41D4_7571359B31DA_1",
 "width": 720,
 "image": {
  "levels": [
   {
    "url": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
 "class": "Photo",
 "height": 1280
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B12C4EB8_A618_03EA_41C6_8C87056F16A6"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.35,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1ED2020_A618_1E99_41CE_0BE1040FA692"
},
{
 "thumbnailUrl": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_t.jpg",
 "class": "Panorama",
 "label": " ESTAR PRIMER PISO",
 "id": "panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F",
   "backwardYaw": 1.91,
   "class": "AdjacentPanorama",
   "yaw": -61.93,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D",
   "backwardYaw": -121.3,
   "class": "AdjacentPanorama",
   "yaw": 65.32,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D",
   "backwardYaw": 31.41,
   "class": "AdjacentPanorama",
   "yaw": 42.55,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_61DFA52E_4B95_4765_41C2_73D0010B36E5",
  "this.overlay_67078654_4875_C525_41C1_A5BA24ABE501",
  "this.overlay_67E2BA3E_4877_CD64_41AD_D5E6D250F39C"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_t.jpg",
 "class": "Panorama",
 "label": " ESCALERA #3",
 "id": "panorama_5C584D54_4B97_4724_41D0_5BA7346F4665",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60",
   "backwardYaw": -77.09,
   "class": "AdjacentPanorama",
   "yaw": 92.48,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "backwardYaw": -2.91,
   "class": "AdjacentPanorama",
   "yaw": -177.05,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_6AA458BD_4BAD_4D64_41AB_9D9ACAB0B64B",
  "this.overlay_6B566B38_4BAF_436D_41CC_59B039EEC861"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -155.9,
  "pitch": -3.22
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.39,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BEA99158_A618_1EAA_41D7_DA2BD7CF0C17"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.49,
  "pitch": -3.64
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE31008D_A618_1FAA_41C7_8A0E02099B8A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B3F622EE_A618_0366_41CA_9659790A0EC2"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -167.93,
  "pitch": -5.11
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 87.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B125DEA9_A618_03EB_41B0_0A892180FBAD"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.97,
  "pitch": 1.19
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.01,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1966F07_A618_02A7_41E2_792B71AFD579"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B03793BA_A618_01E9_41D3_6E5836EC2923"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -136.75,
  "pitch": -2.41
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_camera"
},
{
 "thumbnailUrl": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_t.jpg",
 "class": "Panorama",
 "label": "2 FRENTE",
 "id": "panorama_5C489EBD_4B97_4567_41BE_D1815901E395",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475",
   "backwardYaw": 114.84,
   "class": "AdjacentPanorama",
   "yaw": 106.9,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151",
   "backwardYaw": -85.72,
   "class": "AdjacentPanorama",
   "yaw": 179.93,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C",
   "backwardYaw": 170.57,
   "class": "AdjacentPanorama",
   "yaw": 1.39,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_52EB9FF2_4BFD_42FC_4192_F20D79C56306",
  "this.overlay_52EFD4BF_4BFC_C563_41C8_EF1C9DF25EA6",
  "this.overlay_537FF8E3_4BFF_4EE3_41C9_B3F9C6CF036C"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_t.jpg",
 "class": "Panorama",
 "label": "BALCON H2",
 "id": "panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924",
   "backwardYaw": -100.61,
   "class": "AdjacentPanorama",
   "yaw": -6.03,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_7F0C111D_489B_5F27_41D0_244A7CC6FA85"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.47,
  "pitch": 0.24
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_camera"
},
{
 "thumbnailUrl": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_t.png",
 "class": "PhotoAlbum",
 "label": "Album de Fotos WhatsApp Image 2020-12-10 at 11.33.48 PM",
 "id": "album_5A23F159_57FF_7F8F_41D4_7571359B31DA",
 "playList": "this.album_5A23F159_57FF_7F8F_41D4_7571359B31DA_AlbumPlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.95,
  "pitch": -30.49
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.97,
  "pitch": -7.92
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_camera"
},
{
 "thumbnailUrl": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_t.jpg",
 "class": "Panorama",
 "label": "HABITACION P #1",
 "id": "panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "backwardYaw": 163.95,
   "class": "AdjacentPanorama",
   "yaw": 17.09,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_69E749E7_4BBB_4EE3_41B0_730AA6DDE3B4",
  "this.overlay_69AAFFE1_4BBD_431C_41C6_70B126D1C0EE",
  "this.overlay_6E0D9FE9_4BBC_C2EC_41B5_99838E9F6AFF",
  "this.overlay_6E8A0389_4BBC_C32F_41B1_F2E0A9D01E82",
  "this.overlay_6F7317D5_4BBD_4324_4163_113E966F4BC2"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B0E9EE4B_A618_02AE_41E3_313CAF02F4B8"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE65E10A_A618_1EAE_41BE_BC9692EAB3B9"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1FC9001_A618_1E9B_41A5_8BC7CF49F400"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.9,
  "pitch": -9.87
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C483303_4B95_4323_41AD_F535C065121E_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -114.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BF634233_A618_02FF_41B7_80AFBC61CC07"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B3CBC2DF_A618_03A7_41D0_2349DCD72158"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B130CE99_A618_03AA_41E3_59536C1044C4"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B10C1E8A_A618_03A9_41B9_CA3217892163"
},
{
 "class": "PlayList",
 "id": "ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist",
 "items": [
  {
   "camera": "this.panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 0, 1)",
   "media": "this.panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 1, 2)",
   "media": "this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 2, 3)",
   "media": "this.panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 3, 4)",
   "media": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 4, 5)",
   "media": "this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 5, 6)",
   "media": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C482489_4B97_452F_41CA_8580DB533138_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 6, 7)",
   "media": "this.panorama_5C482489_4B97_452F_41CA_8580DB533138",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 7, 8)",
   "media": "this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 8, 9)",
   "media": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 9, 10)",
   "media": "this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 10, 11)",
   "media": "this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 11, 12)",
   "media": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 12, 13)",
   "media": "this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 13, 14)",
   "media": "this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 14, 15)",
   "media": "this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 15, 16)",
   "media": "this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 16, 17)",
   "media": "this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 17, 18)",
   "media": "this.panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C483303_4B95_4323_41AD_F535C065121E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 18, 19)",
   "media": "this.panorama_5C483303_4B95_4323_41AD_F535C065121E",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 19, 20)",
   "media": "this.panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 20, 21)",
   "media": "this.panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 21, 22)",
   "media": "this.panorama_5C488B87_4B95_C323_41B3_865515D5E0B2",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 22, 23)",
   "media": "this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 23, 24)",
   "media": "this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 24, 25)",
   "media": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 25, 26)",
   "media": "this.panorama_5C48957F_4B95_47E3_41CD_850BC82131A4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 26, 27)",
   "media": "this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 27, 28)",
   "media": "this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 28, 29)",
   "media": "this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 29, 30)",
   "media": "this.panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 30, 31)",
   "media": "this.panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 31, 32)",
   "media": "this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 32, 33)",
   "media": "this.panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 33, 34)",
   "media": "this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 34, 35)",
   "media": "this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 35, 36)",
   "media": "this.panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist, 36, 0)",
   "media": "this.album_5A23F159_57FF_7F8F_41D4_7571359B31DA",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_t.jpg",
 "class": "Panorama",
 "label": "COMEDOR",
 "id": "panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010",
   "backwardYaw": 65.32,
   "class": "AdjacentPanorama",
   "yaw": -121.3,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D",
   "backwardYaw": -23.68,
   "class": "AdjacentPanorama",
   "yaw": -13.96,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "backwardYaw": 74.91,
   "class": "AdjacentPanorama",
   "yaw": 76.93,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_60F1C7B6_4B9D_4365_418E_5679D730C9F5",
  "this.overlay_608F09F5_4B9B_CEE7_4190_D6C704E441F6",
  "this.overlay_617D575E_4B94_C324_41BE_F44C17CFED1B",
  "this.overlay_613BC677_4B94_C5E3_41C6_72B7E57003ED"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.86,
  "pitch": 1.77
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -73.1,
  "pitch": 0,
  "hfov": 125
 },
 "class": "PanoramaCamera",
 "id": "camera_B3E5231D_A618_02AA_41DD_E7D0E07F8ACB"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.42,
  "pitch": -18.27
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 118.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE1F303F_A618_1EE7_41E2_CC659D2C7989"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -105.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BF84D252_A618_02BE_41DD_304E381AE254"
},
{
 "thumbnailUrl": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_t.jpg",
 "class": "Panorama",
 "label": "PORTICO",
 "id": "panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D",
   "backwardYaw": 6.77,
   "class": "AdjacentPanorama",
   "yaw": 90.86,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395",
   "backwardYaw": 179.93,
   "class": "AdjacentPanorama",
   "yaw": -85.72,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_53FF27C5_4BF5_4324_41C6_ACEB4B217507",
  "this.overlay_53EB56F7_4BF4_C2E3_41BC_89121E193DFB"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BEB7E139_A618_1EEB_41E0_AC38E0FDFBE0"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.3,
  "pitch": 2.03
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 156.32,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BF93A243_A618_029F_41E1_BB072C17F356"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B3F022FE_A618_0366_41D8_4FC5E4099A4F"
},
{
 "thumbnailUrl": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_t.jpg",
 "class": "Panorama",
 "label": "PASILLO 2 PISO",
 "id": "panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665",
   "backwardYaw": -177.05,
   "class": "AdjacentPanorama",
   "yaw": -2.91,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577",
   "backwardYaw": -7.2,
   "class": "AdjacentPanorama",
   "yaw": 72.76,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6",
   "backwardYaw": 17.09,
   "class": "AdjacentPanorama",
   "yaw": 163.95,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB",
   "backwardYaw": 94.56,
   "class": "AdjacentPanorama",
   "yaw": 90.03,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_6B2299FC_4BAC_CEE5_41CC_8978F1F7E06B",
  "this.overlay_6B976872_4BAD_4DFD_41B7_F13DB239BA6B",
  "this.overlay_686E2FE4_4BAB_42E5_4173_641269B6ED4D",
  "this.overlay_735F7CB7_48B5_4563_41C6_E1421506A1A0"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_t.jpg",
 "class": "Panorama",
 "label": "ESCALERA #1",
 "id": "panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60",
   "backwardYaw": -175.86,
   "class": "AdjacentPanorama",
   "yaw": 2.32,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D",
   "backwardYaw": 76.93,
   "class": "AdjacentPanorama",
   "yaw": 74.91,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D",
   "backwardYaw": -71.49,
   "class": "AdjacentPanorama",
   "yaw": 118.89,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816",
   "backwardYaw": 168.28,
   "class": "AdjacentPanorama",
   "yaw": -86.89,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6",
   "backwardYaw": -178,
   "class": "AdjacentPanorama",
   "yaw": -150.91,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_542DEF0D_4B9C_C327_41D0_3009E5C3EC9D",
  "this.overlay_5490C849_4B9B_CD2F_41CE_37BB23767FF8",
  "this.overlay_55761EE1_4B95_C51F_41CA_EDD547C17525",
  "this.overlay_552AAE6B_4B94_C5E3_41C7_343C3F8526FF",
  "this.overlay_558DF941_4B94_CF1F_41A0_D34BBEB1E6C9"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_t.jpg",
 "class": "Panorama",
 "label": "HABITACION P#3",
 "id": "panorama_5C48027A_4B94_BDED_41C2_ABD796139373",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F",
   "backwardYaw": 118.59,
   "class": "AdjacentPanorama",
   "yaw": 25.99,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_6C47E11F_4BB4_BF23_4195_D46D4F74B957",
  "this.overlay_6C31FC19_4BB5_452F_419C_68E6404BE251",
  "this.overlay_6CF45D82_4BAB_471C_41CD_8A749A74EA4C",
  "this.overlay_6CA71ED2_4BAD_C53D_41B3_E5CE44CC5EEC"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_t.jpg",
 "class": "Panorama",
 "label": "COSINA #1",
 "id": "panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D",
   "backwardYaw": -13.96,
   "class": "AdjacentPanorama",
   "yaw": -23.68,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010",
   "backwardYaw": 42.55,
   "class": "AdjacentPanorama",
   "yaw": 31.41,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C48957F_4B95_47E3_41CD_850BC82131A4",
   "backwardYaw": -80.27,
   "class": "AdjacentPanorama",
   "yaw": -179.97,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "backwardYaw": 118.89,
   "class": "AdjacentPanorama",
   "yaw": -71.49,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_67CD9836_4875_CD65_4183_C0D923B0CBE7",
  "this.overlay_646B8F2E_487B_4364_41C4_1F7A14569C51",
  "this.overlay_64ECBF73_487B_43FC_41A4_F858397A411D",
  "this.overlay_64CE74A0_487D_451C_41D1_799AEAE99AFD"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_t.jpg",
 "class": "Panorama",
 "label": "SALA #1",
 "id": "panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C482489_4B97_452F_41CA_8580DB533138",
   "backwardYaw": -101.32,
   "class": "AdjacentPanorama",
   "yaw": 51.29,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2",
   "backwardYaw": -85.19,
   "class": "AdjacentPanorama",
   "yaw": 107.01,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "backwardYaw": -86.89,
   "class": "AdjacentPanorama",
   "yaw": 168.28,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_512AF99F_4BED_CF24_41D1_58DD338B6FE0",
  "this.overlay_51025CA9_4BEC_C56F_41CF_A6AEA4CD5227",
  "this.overlay_51600B9A_4BEB_432D_41C7_7A7ECFD78BDC",
  "this.overlay_518224D1_4B95_453F_41CA_FD54D9910AFA"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_t.jpg",
 "class": "Panorama",
 "label": "HABITACION P #2",
 "id": "panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373",
   "backwardYaw": 25.99,
   "class": "AdjacentPanorama",
   "yaw": 118.59,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86",
   "backwardYaw": 0.04,
   "class": "AdjacentPanorama",
   "yaw": -92.16,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_6F999A02_4BBB_4D1C_41D0_9C254A065135",
  "this.overlay_6FAC0389_4BB5_C32C_41A3_138D37E8421A",
  "this.overlay_6C505869_4BB7_4DEC_41D2_850345F5ACC9"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1058E6A_A618_036E_41C4_1A3D77504128"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE0F006E_A618_1F69_41D3_E4CFFE7CB26A"
},
{
 "thumbnailUrl": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_t.jpg",
 "class": "Panorama",
 "label": " BA\u00d1O HABITACION P",
 "id": "panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_63BACC53_4B9D_C53C_41D2_0BBAEEBE5C74"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.31,
  "pitch": -2.59
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B3E9C34C_A618_02AA_41D8_97CC720A6110"
},
{
 "thumbnailUrl": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_t.jpg",
 "class": "Panorama",
 "label": "JARDIN",
 "id": "panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395",
   "backwardYaw": 106.9,
   "class": "AdjacentPanorama",
   "yaw": 114.84,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_531A2A10_4BFD_4D3D_41C3_D679A31CD74B",
  "this.overlay_535BA8F9_4BFB_CEEC_41CC_1192EF71D4F8"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_t.jpg",
 "class": "Panorama",
 "label": " HABITACION 2 #1",
 "id": "panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21",
   "backwardYaw": -179.94,
   "class": "AdjacentPanorama",
   "yaw": 25.58,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B",
   "backwardYaw": 4.66,
   "class": "AdjacentPanorama",
   "yaw": 96.73,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_7B9A7BEA_486C_C2ED_41CD_785E7420DB78",
  "this.overlay_78F07249_486C_BD2F_41C7_09526377632A",
  "this.overlay_799DF99A_4894_CF2D_41D2_82A58FF3839F",
  "this.overlay_79667ED8_4895_452D_41D0_9EBEBBBADA74"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.34,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B3FB630E_A618_02A9_41E3_B95E77FD052A"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.27,
  "pitch": -1.61
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -133.07,
  "pitch": -0.2
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.04,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B002D39A_A618_01AE_41E1_781ADF9E48DA"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1AA8F93_A618_01BE_41DF_253306DB77EE"
},
{
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "thumbnailUrl": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_t.jpg",
 "class": "Panorama",
 "label": "PASILLO 2 PISO #2",
 "id": "panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05",
   "backwardYaw": 90.03,
   "class": "AdjacentPanorama",
   "yaw": 94.56,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577",
   "backwardYaw": -135.32,
   "class": "AdjacentPanorama",
   "yaw": 112.56,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21",
   "backwardYaw": 84.19,
   "class": "AdjacentPanorama",
   "yaw": -92.89,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_65D84731_4875_437F_41CA_D27FE5792EFB",
  "this.overlay_7A3D8A90_4877_CD3C_41A0_D92C6BAB82EA",
  "this.overlay_7AA79D62_4875_471D_41A5_FC015EB99A9C"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.25,
  "pitch": -8.97
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_camera"
},
{
 "thumbnailUrl": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_t.jpg",
 "class": "Panorama",
 "label": " TERRAZA  #2",
 "id": "panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F",
   "backwardYaw": -114.28,
   "class": "AdjacentPanorama",
   "yaw": 73.65,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F",
   "backwardYaw": 98.9,
   "class": "AdjacentPanorama",
   "yaw": -172.43,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_7D5B3819_4897_4D2F_41BE_99608D09EC7D",
  "this.overlay_720BACD8_4894_C52D_41D2_4A6BD293D6DD"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BF3F91D5_A618_01BA_41D2_94F2B64D7ACD"
},
{
 "thumbnailUrl": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_t.jpg",
 "class": "Panorama",
 "label": "BALCON HABITACION P",
 "id": "panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F",
   "backwardYaw": -92.16,
   "class": "AdjacentPanorama",
   "yaw": 0.04,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_6D3025DE_4BAF_C725_415A_8622EBF55CA4"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_t.jpg",
 "class": "Panorama",
 "label": "BA\u00d1O HABITACION 2 #2",
 "id": "panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B",
   "backwardYaw": -92,
   "class": "AdjacentPanorama",
   "yaw": 90.72,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_7C51190F_489C_CF23_41B9_315A6AAD18D8"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1DB1FC2_A618_0199_41DA_6298F3876500"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.21,
  "pitch": 0.62
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.93,
  "pitch": -3.06,
  "hfov": 125
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C489EBD_4B97_4567_41BE_D1815901E395_camera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.1,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B02BB3F8_A618_016A_41B3_64C7DB3C0EFF"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -61.41,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B051F408_A618_06A9_41E3_FE0F29B433BD"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.43,
  "pitch": 0,
  "hfov": 115
 },
 "class": "PanoramaCamera",
 "id": "camera_B014F36B_A618_016E_41DE_703D58054564"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BE4340EB_A618_1F6F_41C6_2069BAAB360A"
},
{
 "thumbnailUrl": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_t.jpg",
 "class": "Panorama",
 "label": "PUERTA PRINCIPAL",
 "id": "panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151",
   "backwardYaw": 90.86,
   "class": "AdjacentPanorama",
   "yaw": 6.77,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C482489_4B97_452F_41CA_8580DB533138",
   "backwardYaw": -47.44,
   "class": "AdjacentPanorama",
   "yaw": 111.57,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_500C014E_4BF4_BF25_41D1_299824C8D72B",
  "this.overlay_50074DB1_4BEB_477C_41C9_018D00565A31",
  "this.overlay_50A5B129_4BED_BF6C_41C3_0703920AE6B4",
  "this.overlay_50B42B89_4BEC_C32F_418F_E5E7F21BDA10",
  "this.overlay_509213B0_4BEF_C37D_41C7_EAD62B7D25C5"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -162.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B1737EE7_A618_0366_41CB_C44DD09DFB50"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.55,
  "pitch": 2.55
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_camera"
},
{
 "thumbnailUrl": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_4_t.jpg",
 "label": "WhatsApp Image 2020-12-10 at 11.33.46 PM",
 "id": "album_5A23F159_57FF_7F8F_41D4_7571359B31DA_4",
 "width": 1088,
 "image": {
  "levels": [
   {
    "url": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_4.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
 "class": "Photo",
 "height": 1184
},
{
 "thumbnailUrl": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_t.jpg",
 "class": "Panorama",
 "label": "walking closet",
 "id": "panorama_5C483303_4B95_4323_41AD_F535C065121E",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9",
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_6213A8A1_4B94_CD1F_41A9_9984120D0F05",
  "this.overlay_62AC41FB_4B94_DEE3_41B8_4AE324C04561"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_B15EEEC8_A618_03A9_41C1_49DACDD9D2DD"
},
{
 "thumbnailUrl": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_0_t.jpg",
 "label": "WhatsApp Image 2020-12-10 at 11.33.48 PM",
 "id": "album_5A23F159_57FF_7F8F_41D4_7571359B31DA_0",
 "width": 960,
 "image": {
  "levels": [
   {
    "url": "media/album_5A23F159_57FF_7F8F_41D4_7571359B31DA_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "duration": 5000,
 "class": "Photo",
 "height": 1280
},
{
 "thumbnailUrl": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_t.jpg",
 "class": "Panorama",
 "label": " BA\u00d1O HABITACION 2 #1",
 "id": "panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3",
   "backwardYaw": 96.73,
   "class": "AdjacentPanorama",
   "yaw": 4.66,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C",
   "backwardYaw": 90.72,
   "class": "AdjacentPanorama",
   "yaw": -92,
   "distance": 1
  }
 ],
 "partial": false,
 "vfov": 180,
 "overlays": [
  "this.overlay_7CB98FFC_489D_42E5_41C4_BB38A14E9783",
  "this.overlay_7C3FA932_489C_CF7D_4185_17FCE14F7B9E"
 ],
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BEB83149_A618_1EAB_41D4_9F34FA6049C3"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_BEED41A6_A618_01E6_41DE_0F37406A9B4F"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 87.9,
  "pitch": -4.34
 },
 "class": "PanoramaCamera",
 "id": "panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_camera"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "left": 0,
 "transitionDuration": 500,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 10,
 "transitionMode": "blending",
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "progressBorderColor": "#CCCCCC",
 "progressBarBackgroundColorRatios": [
  0,
  0.9
 ],
 "progressBarBorderColor": "#0066FF",
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF",
  "#000000"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "paddingLeft": 0,
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "progressBarBorderSize": 10,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "top": 0,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "bottom": 1,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "displayTooltipInTouchScreens": true,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "horizontal",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "shadow": false,
 "progressBackgroundOpacity": 0.17,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
  "this.Image_741F9FF2_48AF_42FD_417A_818DCE10123B"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": "6.34%",
 "width": 550,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "top": "5.64%",
 "class": "Container",
 "propagateClick": true,
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "height": 140,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "right": "0%",
 "width": 115.05,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "propagateClick": true,
 "borderSize": 0,
 "height": 641,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--INFO photo"
 },
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--PANORAMA LIST"
 },
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--LOCATION"
 },
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--FLOORPLAN"
 },
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--PHOTOALBUM"
 },
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--REALTOR"
 },
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "right": "0%",
 "backgroundOpacity": 0.6,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "borderSize": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "mode": "toggle",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "borderSize": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "mode": "toggle",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C04E96_48AB_C525_41C8_2AF96A894236",
   "pitch": -23.32,
   "yaw": 98.9,
   "hfov": 25.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB, this.camera_BED9F168_A618_0169_41DD_B17395E639D3); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_72293E95_4895_C527_41B2_099278056E12",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.32,
   "hfov": 25.36
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E609B91_486C_C33F_41C7_E4E9B02D24F6",
   "pitch": -14.47,
   "yaw": 170.57,
   "hfov": 9.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395, this.camera_BEFBB197_A618_01A7_41DA_A0557CB7367C); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_522E85DE_4BFB_C725_41C0_D9E812464D48",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.47,
   "hfov": 9.59
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C01E96_48AB_C525_41A3_D2F80AD0AA9C",
   "pitch": -16.8,
   "yaw": 1.91,
   "hfov": 15.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010, this.camera_BE1F303F_A618_1EE7_41E2_CC659D2C7989); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7DBB3C63_489B_45E8_41B2_25B1B0E3D286",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.8,
   "hfov": 15.3
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C1FE96_48AB_C525_41AA_113591A959D5",
   "pitch": -14.96,
   "yaw": -114.28,
   "hfov": 15.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB, this.camera_B1ED2020_A618_1E99_41CE_0BE1040FA692); this.mainPlayList.set('selectedIndex', 34)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7D557F4B_4895_C323_41A0_16EA1885AC38",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -114.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.96,
   "hfov": 15.45
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4C5BA4_486C_C364_41A4_49B6B181B53D",
   "pitch": -22.53,
   "yaw": -93.94,
   "hfov": 14.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_607B90A7_4B9F_BD63_41C5_73983A6D63F7",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.53,
   "hfov": 14.77
  }
 ]
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "borderSize": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "mode": "toggle",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "borderSize": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "mode": "toggle",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "borderSize": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C81E80_48AB_C51C_41AA_3305C58DC598",
   "pitch": -17.95,
   "yaw": -80.27,
   "hfov": 15.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D, this.camera_B3C082CF_A618_03A6_41A4_E23EA8F00617); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6541F23D_4874_DD67_4173_58A60A7B3A96",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.95,
   "hfov": 15.21
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E783B9B_486C_C323_41C2_4F7499D0D405",
   "pitch": -24.73,
   "yaw": -11.25,
   "hfov": 9.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C482489_4B97_452F_41CA_8580DB533138, this.camera_BF418214_A618_02B9_41E1_F1A67369F1DE); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_577A660D_4B9D_C527_41D0_3141900D34FC",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.73,
   "hfov": 9.89
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E788B9B_486C_C323_4190_3E428EEBBA10",
   "pitch": -18.14,
   "yaw": -40.84,
   "hfov": 12.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_57F520A8_4B9C_BD6D_41A1_DC98411C0FFB",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.14,
   "hfov": 12.92
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E78FB9B_486C_C323_41C2_17C1EE173FB4",
   "pitch": -27.51,
   "yaw": -85.19,
   "hfov": 14.18,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816, this.camera_BF517204_A618_029A_41CE_38E14E429CB9); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_5790B801_4B9F_4D1F_41B9_D6EC3F68BEB2",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.51,
   "hfov": 14.18
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E790B9B_486C_C323_41A4_9C91B2661D62",
   "pitch": -17.65,
   "yaw": -147.39,
   "hfov": 13.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_545CD949_4B9D_4F2F_41CF_EA589739DB57",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.65,
   "hfov": 13.02
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E79FB9B_486C_C323_41C7_9E72EE64B903",
   "pitch": -48.56,
   "yaw": -77.09,
   "hfov": 15.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665, this.camera_B0E4AE3B_A618_02EE_41C0_1ABBE3A259C5); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6A1B523D_4B95_7D67_41D1_8D76C81B0D43",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.56,
   "hfov": 15.88
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7A0B9B_486C_C323_41BA_F77082CC8B1D",
   "pitch": 8.83,
   "yaw": -152.83,
   "hfov": 15.8,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6A1BDAEA_4BAB_42ED_4191_A72C6463E82C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.83,
   "hfov": 15.8
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7A6B9B_486C_C323_41D2_52D17867848E",
   "pitch": -41.54,
   "yaw": -175.86,
   "hfov": 7.11,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B, this.camera_B0E9EE4B_A618_02AE_41E3_313CAF02F4B8); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6ACD24D9_4BAB_452F_41D1_3F1AB664B913",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -41.54,
   "hfov": 7.11
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E730BA4_486C_C364_41BA_04FAE6E0B363",
   "pitch": -13.88,
   "yaw": -15.27,
   "hfov": 20.42,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_636AEA5C_4B94_CD25_41CF_1C5D25937567",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.88,
   "hfov": 20.42
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E739BA4_486C_C364_41CB_17C7CD533CC7",
   "pitch": -21.36,
   "yaw": -178,
   "hfov": 35.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B, this.camera_B3CBC2DF_A618_03A7_41D0_2349DCD72158); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_630ED381_4B94_C31F_41C9_007706292F34",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.36,
   "hfov": 35.97
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E719BA4_486C_C364_41C5_431445DA108E",
   "pitch": -33.54,
   "yaw": -106.69,
   "hfov": 10.66,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6DE94CF7_4BAD_46E3_41D0_C484FE72B7E7",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.54,
   "hfov": 10.66
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E71FBA4_486C_C364_41C1_EA33A5097C2D",
   "pitch": -21.9,
   "yaw": -173.48,
   "hfov": 13.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_624ADA41_4BAB_4D1F_41B6_86C39B4CF08A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.9,
   "hfov": 13.71
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7ECB9B_486C_C323_41C9_5AB0949E6CD4",
   "pitch": -23.89,
   "yaw": -47.44,
   "hfov": 10.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D, this.camera_B1B88F74_A618_0179_41C1_7327A4136BC6); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_565D4BD1_4B97_433F_41C6_48A60F4B1173",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.89,
   "hfov": 10.28
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7F3B9B_486C_C323_41CE_3C60817549BA",
   "pitch": -29.56,
   "yaw": -101.32,
   "hfov": 10.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816, this.camera_B1888F55_A618_02BB_41E2_BE49BD5B297B); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_56132B18_4B94_C32D_41D1_B833AEC6C6E2",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.56,
   "hfov": 10.59
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7F6B9B_486C_C323_41BC_7B73074C988A",
   "pitch": -28.84,
   "yaw": 179.68,
   "hfov": 10.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2, this.camera_B1AA8F93_A618_01BE_41DF_253306DB77EE); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_56FB3960_4B95_4F1D_41C1_EDB6E0DC86F7",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.84,
   "hfov": 10.48
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7FCB9B_486C_C323_41B5_1F12262AD099",
   "pitch": -15.69,
   "yaw": -142.15,
   "hfov": 10.33,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_56A03C70_4B9B_C5FD_41CD_D696552DC7D5",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.69,
   "hfov": 10.33
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C3DE8C_48AB_C525_4193_555CBD5186FE",
   "pitch": -11.57,
   "yaw": 69.06,
   "hfov": 12.7,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7E2EABDF_4897_4323_41C8_E9F2E5189C77",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.57,
   "hfov": 12.7
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C35E8C_48AB_C525_41C4_75CE0BB7C909",
   "pitch": -15.48,
   "yaw": 91.59,
   "hfov": 7.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7F9A2755_4895_C327_41D0_F6A63AF3F16E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.48,
   "hfov": 7.02
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C2BE8C_48AB_C525_4180_2409F2FF9F8F",
   "pitch": -18.36,
   "yaw": -100.61,
   "hfov": 15.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE, this.camera_B3F622EE_A618_0366_41CA_9659790A0EC2); this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7FDD3362_489B_431D_41D0_62241FC9E4F5",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.36,
   "hfov": 15.17
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CE9E82_48AB_C51D_41B8_235589FAFEE4",
   "pitch": -29.44,
   "yaw": 84.19,
   "hfov": 13.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB, this.camera_B125DEA9_A618_03EB_41B0_0A892180FBAD); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7AB115D0_486B_473C_41BF_CCDC16DDC40C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.44,
   "hfov": 13.92
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CEEE82_48AB_C51D_41D0_9E762D2C385E",
   "pitch": -10.15,
   "yaw": 86.84,
   "hfov": 8.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7B464625_486B_4567_41C6_1BCD086476F2",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.15,
   "hfov": 8.85
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CE4E82_48AB_C51D_41A2_92A5DC815A88",
   "pitch": -7.97,
   "yaw": -179.94,
   "hfov": 28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3, this.camera_B12C4EB8_A618_03EA_41C6_8C87056F16A6); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7BF2C2B6_486C_DD65_41BA_AB11EBFEFAFD",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.97,
   "hfov": 28
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E74BB9B_486C_C323_41C0_972A0764FE32",
   "pitch": -18.04,
   "yaw": -7.2,
   "hfov": 12.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05, this.camera_B110AE5B_A618_02AF_41B3_441AC009DE06); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_682E83F1_4BB5_42FC_41C5_7C3FC30FDA1A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.04,
   "hfov": 12.57
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E752B9B_486C_C323_41C6_922F04FB9EC7",
   "pitch": -15.08,
   "yaw": -21.64,
   "hfov": 6.79,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_68B332DA_4BB7_5D2D_41C9_48152F35AE19",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.08,
   "hfov": 6.79
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E759B9B_486C_C323_41CB_746F9AC3884F",
   "pitch": -26.09,
   "yaw": -135.32,
   "hfov": 11.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB, this.camera_B1058E6A_A618_036E_41C4_1A3D77504128); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_69109879_4BB5_4DEF_41D0_D2326D3E87A2",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.09,
   "hfov": 11.62
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4E2BA4_486C_C364_41D2_3925878B647A",
   "pitch": -13.31,
   "yaw": 65.32,
   "hfov": 9.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D, this.camera_B1CCFFE1_A618_019A_41CF_1076B3079F59); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_61DFA52E_4B95_4765_41C2_73D0010B36E5",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.31,
   "hfov": 9.72
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CA8E78_48AB_C5EC_41D1_AF775F0B0D57",
   "pitch": -16.26,
   "yaw": -61.93,
   "hfov": 15.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F, this.camera_B1DB1FC2_A618_0199_41DA_6298F3876500); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_67078654_4875_C525_41C1_A5BA24ABE501",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.26,
   "hfov": 15.35
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CAEE78_48AB_C5EC_41B4_11F11146C414",
   "pitch": -13.49,
   "yaw": 42.55,
   "hfov": 10.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D, this.camera_B1FC9001_A618_1E9B_41A5_8BC7CF49F400); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_67E2BA3E_4877_CD64_41AD_D5E6D250F39C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.49,
   "hfov": 10.24
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7ADB9B_486C_C323_4198_7D3541121868",
   "pitch": -50.93,
   "yaw": 92.48,
   "hfov": 13.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60, this.camera_BF1DA1B6_A618_01F9_41DF_26BD6C598194); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6AA458BD_4BAD_4D64_41AB_9D9ACAB0B64B",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.93,
   "hfov": 13.55
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7B2B9B_486C_C323_41CA_B5C40E4ED44A",
   "pitch": 0.84,
   "yaw": -177.05,
   "hfov": 15.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05, this.camera_BF0DE1C6_A618_0199_41D2_93E8C59DA7C4); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6B566B38_4BAF_436D_41CC_59B039EEC861",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.84,
   "hfov": 15.99
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E618B91_486C_C33F_41C9_E263DC4C0DB3",
   "pitch": -18.62,
   "yaw": 106.9,
   "hfov": 10.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475, this.camera_B3E0233D_A618_02EB_41E2_8A96A3A34665); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_52EB9FF2_4BFD_42FC_4192_F20D79C56306",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.62,
   "hfov": 10.24
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E61FB91_486C_C33F_41BC_C5160316FD33",
   "pitch": -8.26,
   "yaw": 179.93,
   "hfov": 10.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151, this.camera_B3E9C34C_A618_02AA_41D8_97CC720A6110); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_52EFD4BF_4BFC_C563_41C8_EF1C9DF25EA6",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.26,
   "hfov": 10.4
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E622B91_486C_C33F_41C3_8EF91FFFEC5A",
   "pitch": -12.34,
   "yaw": 1.39,
   "hfov": 15.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C, this.camera_B014F36B_A618_016E_41DE_703D58054564); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_537FF8E3_4BFF_4EE3_41C9_B3F9C6CF036C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.34,
   "hfov": 15.62
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C23E8C_48AB_C525_41D1_F39833C12526",
   "pitch": -15.14,
   "yaw": -6.03,
   "hfov": 42.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924, this.camera_BEA99158_A618_1EAA_41D7_DA2BD7CF0C17); this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7F0C111D_489B_5F27_41D0_244A7CC6FA85",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.14,
   "hfov": 42.85
  }
 ]
},
{
 "class": "PhotoPlayList",
 "id": "album_5A23F159_57FF_7F8F_41D4_7571359B31DA_AlbumPlayList",
 "items": [
  {
   "media": "this.album_5A23F159_57FF_7F8F_41D4_7571359B31DA_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.74",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.44"
    }
   }
  },
  {
   "media": "this.album_5A23F159_57FF_7F8F_41D4_7571359B31DA_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.57"
    }
   }
  },
  {
   "media": "this.album_5A23F159_57FF_7F8F_41D4_7571359B31DA_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.39",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.26"
    }
   }
  },
  {
   "media": "this.album_5A23F159_57FF_7F8F_41D4_7571359B31DA_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.67"
    }
   }
  },
  {
   "media": "this.album_5A23F159_57FF_7F8F_41D4_7571359B31DA_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.44"
    }
   }
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E75EB9B_486C_C323_41B5_C22EEDA4C11A",
   "pitch": -34.73,
   "yaw": 123.37,
   "hfov": 13.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_69E749E7_4BBB_4EE3_41B0_730AA6DDE3B4",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.73,
   "hfov": 13.14
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E766BA4_486C_C364_41BD_24221AE0507B",
   "pitch": -24.44,
   "yaw": 179.27,
   "hfov": 6.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_69AAFFE1_4BBD_431C_41C6_70B126D1C0EE",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.44,
   "hfov": 6.59
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E76EBA4_486C_C364_41D1_C4413C8BA7A5",
   "pitch": -21.36,
   "yaw": -102.49,
   "hfov": 10.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6E0D9FE9_4BBC_C2EC_41B5_99838E9F6AFF",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.36,
   "hfov": 10.89
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E777BA4_486C_C364_418C_2039EC68CCB1",
   "pitch": -31.92,
   "yaw": 17.09,
   "hfov": 13.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05, this.camera_BECB4187_A618_01A6_41D8_18EAFE499151); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6E8A0389_4BBC_C32F_41B1_F2E0A9D01E82",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.92,
   "hfov": 13.57
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E77BBA4_486C_C364_41C3_8808FA45BFA8",
   "pitch": -4.79,
   "yaw": -96.41,
   "hfov": 7.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6F7317D5_4BBD_4324_4163_113E966F4BC2",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.79,
   "hfov": 7.31
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4C8BA4_486C_C364_41A8_0E09F6D33297",
   "pitch": -32.11,
   "yaw": -13.96,
   "hfov": 13.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D, this.camera_BF93A243_A618_029F_41E1_BB072C17F356); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_60F1C7B6_4B9D_4365_418E_5679D730C9F5",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.11,
   "hfov": 13.54
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4D0BA4_486C_C364_41C9_4AEEDFEEBCA1",
   "pitch": -23.12,
   "yaw": -121.3,
   "hfov": 11.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010, this.camera_BF634233_A618_02FF_41B7_80AFBC61CC07); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_608F09F5_4B9B_CEE7_4190_D6C704E441F6",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.12,
   "hfov": 11.03
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4D7BA4_486C_C364_41CB_A187AD411BE2",
   "pitch": -4.56,
   "yaw": -107.89,
   "hfov": 7.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_617D575E_4B94_C324_41BE_F44C17CFED1B",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.56,
   "hfov": 7.89
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4DCBA4_486C_C364_41B6_3E00D3D27A0A",
   "pitch": -16.51,
   "yaw": 76.93,
   "hfov": 12.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B, this.camera_BF84D252_A618_02BE_41DD_304E381AE254); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_613BC677_4B94_C5E3_41C6_72B7E57003ED",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.51,
   "hfov": 12.53
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E635B91_486C_C33F_41CB_6B0BAA2294E8",
   "pitch": -21.65,
   "yaw": 90.86,
   "hfov": 14.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D, this.camera_BF3F91D5_A618_01BA_41D2_94F2B64D7ACD); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_53FF27C5_4BF5_4324_41C6_ACEB4B217507",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.65,
   "hfov": 14.86
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E636B91_486C_C33F_41A7_98587061CD50",
   "pitch": -29.72,
   "yaw": -85.72,
   "hfov": 10.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395, this.camera_BF2F91F4_A618_017A_41B0_29C6F08C14B8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_53EB56F7_4BF4_C2E3_41BC_89121E193DFB",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.72,
   "hfov": 10.92
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7B6B9B_486C_C323_41A6_880B24AEA74D",
   "pitch": -38.94,
   "yaw": 163.95,
   "hfov": 21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6, this.camera_B1737EE7_A618_0366_41CB_C44DD09DFB50); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6B2299FC_4BAC_CEE5_41CC_8978F1F7E06B",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.94,
   "hfov": 21
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7BFB9B_486C_C323_4189_0EC874895F16",
   "pitch": -18.09,
   "yaw": 72.76,
   "hfov": 12.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577, this.camera_B141CED8_A618_03A9_41B5_FE4465EDD83C); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6B976872_4BAD_4DFD_41B7_F13DB239BA6B",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.09,
   "hfov": 12.12
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E744B9B_486C_C323_41D1_AAFF7A700F54",
   "pitch": -11.56,
   "yaw": 90.03,
   "hfov": 9.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB, this.camera_B165DEF7_A618_0367_41E1_E63B0F4C0BC8); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_686E2FE4_4BAB_42E5_4173_641269B6ED4D",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.56,
   "hfov": 9.21
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_75AC523A_48B7_5D6D_41C5_9C6E589CF28F",
   "pitch": -32.15,
   "yaw": -2.91,
   "hfov": 13.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C584D54_4B97_4724_41D0_5BA7346F4665, this.camera_B15EEEC8_A618_03A9_41C1_49DACDD9D2DD); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_735F7CB7_48B5_4563_41C6_E1421506A1A0",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.15,
   "hfov": 13.54
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E796B9B_486C_C323_41C1_9956BDB938B5",
   "pitch": 11.49,
   "yaw": 2.32,
   "hfov": 15.67,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60, this.camera_BE65E10A_A618_1EAE_41BE_BC9692EAB3B9); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_542DEF0D_4B9C_C327_41D0_3009E5C3EC9D",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.49,
   "hfov": 15.67
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E79CB9B_486C_C323_41D1_446225991379",
   "pitch": -27.58,
   "yaw": 74.91,
   "hfov": 14.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D, this.camera_BE95C11A_A618_1EA9_41DF_53A4D7965EA8); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_5490C849_4B9B_CD2F_41CE_37BB23767FF8",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.58,
   "hfov": 14.17
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E78AB9B_486C_C323_41CE_5BCC3C9FB32B",
   "pitch": -19.14,
   "yaw": -86.89,
   "hfov": 15.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816, this.camera_BEB7E139_A618_1EEB_41E0_AC38E0FDFBE0); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_55761EE1_4B95_C51F_41CA_EDD547C17525",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.14,
   "hfov": 15.1
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E791B9B_486C_C323_41B3_30647BC55039",
   "pitch": -25.22,
   "yaw": -150.91,
   "hfov": 14.46,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6, this.camera_BEB83149_A618_1EAB_41D4_9F34FA6049C3); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_552AAE6B_4B94_C5E3_41C7_343C3F8526FF",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.22,
   "hfov": 14.46
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E796B9B_486C_C323_41B9_0FBF1BC8F4D1",
   "pitch": -20.76,
   "yaw": 118.89,
   "hfov": 9.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D, this.camera_BE874129_A618_1EEA_41C3_D9D85A3EC7DD); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_558DF941_4B94_CF1F_41A0_D34BBEB1E6C9",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.76,
   "hfov": 9.26
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E713BA4_486C_C364_41D2_225C5CE464A3",
   "pitch": -19.04,
   "yaw": 25.99,
   "hfov": 8.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F, this.camera_B051F408_A618_06A9_41E3_FE0F29B433BD); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6C47E11F_4BB4_BF23_4195_D46D4F74B957",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.04,
   "hfov": 8.23
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E77FBA4_486C_C364_41CC_83E5FDB6ABB8",
   "pitch": -5.13,
   "yaw": 12.49,
   "hfov": 7.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6C31FC19_4BB5_452F_419C_68E6404BE251",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.13,
   "hfov": 7.71
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E707BA4_486C_C364_41C1_8CFB632731AB",
   "pitch": -18.98,
   "yaw": 97.91,
   "hfov": 12.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6CF45D82_4BAB_471C_41CD_8A749A74EA4C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.98,
   "hfov": 12.32
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E708BA4_486C_C364_41CC_08BF2DF190F7",
   "pitch": -23.97,
   "yaw": 137.24,
   "hfov": 11.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6CA71ED2_4BAD_C53D_41B3_E5CE44CC5EEC",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.97,
   "hfov": 11.72
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CA6E78_48AB_C5EC_4198_4F891C3638DB",
   "pitch": -29.87,
   "yaw": -23.68,
   "hfov": 13.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D, this.camera_B002D39A_A618_01AE_41E1_781ADF9E48DA); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_67CD9836_4875_CD65_4183_C0D923B0CBE7",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.87,
   "hfov": 13.86
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C9CE78_48AB_C5EC_41D1_88226DBB2DAB",
   "pitch": -20.74,
   "yaw": -71.49,
   "hfov": 14.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B, this.camera_B03E33D9_A618_01AB_41D8_4DBA6BBC99F5); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_646B8F2E_487B_4364_41C4_1F7A14569C51",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.74,
   "hfov": 14.95
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C92E78_48AB_C5EC_41BF_3A2EABEEB8BB",
   "pitch": -7.4,
   "yaw": -179.97,
   "hfov": 15.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48957F_4B95_47E3_41CD_850BC82131A4, this.camera_B03793BA_A618_01E9_41D3_6E5836EC2923); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_64ECBF73_487B_43FC_41A4_F858397A411D",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.4,
   "hfov": 15.85
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C88E80_48AB_C51C_41B3_3916D7399F46",
   "pitch": -15.53,
   "yaw": 31.41,
   "hfov": 10.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010, this.camera_B00CA3AA_A618_01E9_41DC_4CD5681AC265); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_64CE74A0_487D_451C_41D1_799AEAE99AFD",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.53,
   "hfov": 10.02
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7D7B91_486C_C33F_41A5_3C01C701CA9D",
   "pitch": -23.65,
   "yaw": -4.62,
   "hfov": 10.85,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_512AF99F_4BED_CF24_41D1_58DD338B6FE0",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.65,
   "hfov": 10.85
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7DAB96_486C_C325_41C1_49A51ED7E0A5",
   "pitch": -23.21,
   "yaw": 51.29,
   "hfov": 10.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C482489_4B97_452F_41CA_8580DB533138, this.camera_BE0F006E_A618_1F69_41D3_E4CFFE7CB26A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_51025CA9_4BEC_C56F_41CF_A6AEA4CD5227",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.21,
   "hfov": 10.08
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7E2B96_486C_C325_41BC_447BD1E19CA1",
   "pitch": -23.9,
   "yaw": 107.01,
   "hfov": 7.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2, this.camera_BE31008D_A618_1FAA_41C7_8A0E02099B8A); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_51600B9A_4BEB_432D_41C7_7A7ECFD78BDC",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.9,
   "hfov": 7.95
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7E9B96_486C_C325_41B7_34B16BC9E999",
   "pitch": -17.91,
   "yaw": 168.28,
   "hfov": 10.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B, this.camera_BE21B0AC_A618_1FEA_41E0_51EFAB8E2BB2); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_518224D1_4B95_453F_41CA_FD54D9910AFA",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.91,
   "hfov": 10.12
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E700BA4_486C_C364_41C9_7B36C47CCB48",
   "pitch": -20.53,
   "yaw": 118.59,
   "hfov": 10.7,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C48027A_4B94_BDED_41C2_ABD796139373, this.camera_B1966F07_A618_02A7_41E2_792B71AFD579); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6F999A02_4BBB_4D1C_41D0_9C254A065135",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.53,
   "hfov": 10.7
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E709BA4_486C_C364_41C1_5EE3A7512665",
   "pitch": -15.18,
   "yaw": 87.58,
   "hfov": 7.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6FAC0389_4BB5_C32C_41A3_138D37E8421A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.18,
   "hfov": 7.86
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E70DBA4_486C_C364_41A1_70CF0AF332EC",
   "pitch": -16.22,
   "yaw": -92.16,
   "hfov": 15.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86, this.camera_B186DF35_A618_02FA_41DA_57B4746D7AAC); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6C505869_4BB7_4DEC_41D2_850345F5ACC9",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.22,
   "hfov": 15.35
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E73CBA4_486C_C364_41B3_D029278A0BBB",
   "pitch": -16.57,
   "yaw": 1.17,
   "hfov": 15.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_63BACC53_4B9D_C53C_41D2_0BBAEEBE5C74",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.57,
   "hfov": 15.32
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E629B91_486C_C33F_41C0_43D60B807170",
   "pitch": -27.65,
   "yaw": 114.84,
   "hfov": 14.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C489EBD_4B97_4567_41BE_D1815901E395, this.camera_B3E5231D_A618_02AA_41DD_E7D0E07F8ACB); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_531A2A10_4BFD_4D3D_41C3_D679A31CD74B",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.65,
   "hfov": 14.16
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E62FB91_486C_C33F_41CB_6E21EB39FFC5",
   "pitch": -8.07,
   "yaw": 37.45,
   "hfov": 13.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_535BA8F9_4BFB_CEEC_41CC_1192EF71D4F8",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.07,
   "hfov": 13.21
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CDDE8A_48AB_C52D_41C7_E2B8C1D88841",
   "pitch": -27.27,
   "yaw": -96.49,
   "hfov": 11.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7B9A7BEA_486C_C2ED_41CD_785E7420DB78",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.27,
   "hfov": 11.89
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CD4E8A_48AB_C52D_41BF_F88FAD1DC432",
   "pitch": -16.22,
   "yaw": 25.58,
   "hfov": 15.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21, this.camera_B3F022FE_A618_0366_41D8_4FC5E4099A4F); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_78F07249_486C_BD2F_41C7_09526377632A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.22,
   "hfov": 15.35
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CCDE8C_48AB_C525_41BB_D5DAB5AC95D4",
   "pitch": -5.27,
   "yaw": -101.86,
   "hfov": 8.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_799DF99A_4894_CF2D_41D2_82A58FF3839F",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.27,
   "hfov": 8.1
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CC2E8C_48AB_C525_41B3_43EFB9B2F04F",
   "pitch": -32.26,
   "yaw": 96.73,
   "hfov": 13.52,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B, this.camera_B3FB630E_A618_02A9_41E3_B95E77FD052A); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_79667ED8_4895_452D_41D0_9EBEBBBADA74",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.26,
   "hfov": 13.52
  }
 ]
},
{
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "top": "20%",
 "borderSize": 0,
 "maxHeight": 60,
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "width": "14.22%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "top": "20%",
 "borderSize": 0,
 "maxHeight": 60,
 "bottom": "20%",
 "mode": "push",
 "minWidth": 50,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "width": "14.22%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C86E82_48AB_C51D_41CF_09838EBD43E7",
   "pitch": -18.25,
   "yaw": 112.56,
   "hfov": 10.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C44992D_4B94_CF64_41BA_5EB35C141577, this.camera_BE4340EB_A618_1F6F_41C6_2069BAAB360A); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_65D84731_4875_437F_41CA_D27FE5792EFB",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.25,
   "hfov": 10.09
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CFDE82_48AB_C51D_418B_92C704DFF98B",
   "pitch": -11.09,
   "yaw": 94.56,
   "hfov": 10.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05, this.camera_BE51E0CC_A618_1FA9_41C6_D1861CAB7BF6); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7A3D8A90_4877_CD3C_41A0_D92C6BAB82EA",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.09,
   "hfov": 10.1
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71CF3E82_48AB_C51D_41C6_8B78F53B512F",
   "pitch": -35.7,
   "yaw": -92.89,
   "hfov": 12.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C496889_4B94_CD2C_41BF_A28767C03F21, this.camera_BE73D0FB_A618_1F6F_41C5_93695D4B134E); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7AA79D62_4875_471D_41A5_FC015EB99A9C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.7,
   "hfov": 12.98
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C14E96_48AB_C525_41C0_42466BB1C079",
   "pitch": -26.97,
   "yaw": 73.65,
   "hfov": 14.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F, this.camera_B02553E8_A618_016A_41E1_3AB1F00B59E3); this.mainPlayList.set('selectedIndex', 33)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7D5B3819_4897_4D2F_41BE_99608D09EC7D",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.97,
   "hfov": 14.25
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C0DE96_48AB_C525_41C4_1981F104555D",
   "pitch": -18.56,
   "yaw": -172.43,
   "hfov": 15.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F, this.camera_B02BB3F8_A618_016A_41B3_64C7DB3C0EFF); this.mainPlayList.set('selectedIndex', 35)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_720BACD8_4894_C52D_41D2_4A6BD293D6DD",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.56,
   "hfov": 15.16
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E710BA4_486C_C364_41A1_960131E22FEF",
   "pitch": -18.51,
   "yaw": 0.04,
   "hfov": 15.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F, this.camera_BF731223_A618_029E_41E1_F9F730DFA668); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6D3025DE_4BAF_C725_415A_8622EBF55CA4",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.51,
   "hfov": 15.16
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C09E96_48AB_C525_4176_3CDA2C2B59FF",
   "pitch": -51.55,
   "yaw": 90.72,
   "hfov": 17.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B, this.camera_BEED41A6_A618_01E6_41DE_0F37406A9B4F); this.mainPlayList.set('selectedIndex', 31)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7C51190F_489C_CF23_41B9_315A6AAD18D8",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -51.55,
   "hfov": 17.17
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E63CB91_486C_C33F_41CF_A8E95E673837",
   "pitch": -31.75,
   "yaw": 6.77,
   "hfov": 13.6,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151, this.camera_B10C1E8A_A618_03A9_41B9_CA3217892163); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_500C014E_4BF4_BF25_41D1_299824C8D72B",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.75,
   "hfov": 13.6
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7C2B91_486C_C33F_41CC_26669C07DA76",
   "pitch": -26.54,
   "yaw": 111.57,
   "hfov": 14.3,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C482489_4B97_452F_41CA_8580DB533138, this.camera_B130CE99_A618_03AA_41E3_59536C1044C4); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_50074DB1_4BEB_477C_41C9_018D00565A31",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.54,
   "hfov": 14.3
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7C9B91_486C_C33F_41B4_19915F7DFDF8",
   "pitch": -31.6,
   "yaw": -173.35,
   "hfov": 13.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_50A5B129_4BED_BF6C_41C3_0703920AE6B4",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.6,
   "hfov": 13.62
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7CAB91_486C_C33F_41D1_4194A48BD045",
   "pitch": -19.46,
   "yaw": 156.15,
   "hfov": 9.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_50B42B89_4BEC_C32F_418F_E5E7F21BDA10",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.46,
   "hfov": 9.32
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E7D0B91_486C_C33F_41D0_DB05BD8C4E62",
   "pitch": -14.7,
   "yaw": 177.51,
   "hfov": 6.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_509213B0_4BEF_C37D_41C7_EAD62B7D25C5",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.7,
   "hfov": 6.54
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E724BA4_486C_C364_41C6_70DC75A3C011",
   "pitch": -31.5,
   "yaw": 49.11,
   "hfov": 13.63,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_6213A8A1_4B94_CD1F_41A9_9984120D0F05",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.5,
   "hfov": 13.63
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_7E72ABA4_486C_C364_41D2_51C63D327A2B",
   "pitch": -31.35,
   "yaw": 122.22,
   "hfov": 11.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_62AC41FB_4B94_DEE3_41B8_4AE324C04561",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.35,
   "hfov": 11.99
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C1BE94_48AB_C525_41C8_8D4964F28094",
   "pitch": -49.1,
   "yaw": -92,
   "hfov": 10.47,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C, this.camera_B007F38B_A618_01AF_41CB_FB327A8B8449); this.mainPlayList.set('selectedIndex', 32)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7CB98FFC_489D_42E5_41C4_BB38A14E9783",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.1,
   "hfov": 10.47
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_71C10E96_48AB_C525_418D_E5A2F0007D65",
   "pitch": -27.93,
   "yaw": 4.66,
   "hfov": 14.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3, this.camera_B01E737B_A618_016E_41E1_8276886A2ADE); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7C3FA932_489C_CF7D_4185_17FCE14F7B9E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.93,
   "hfov": 14.13
  }
 ]
},
{
 "shadowBlurRadius": 7,
 "data": {
  "name": "white block"
 },
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "width": 366,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "1.43%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "height": 78,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": true,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "shadowBlurRadius": 7,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": "0%",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "width": 366,
 "shadowSpread": 1,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0.01
 ],
 "borderSize": 0,
 "bottom": "5.71%",
 "shadowHorizontalLength": 0,
 "height": 46,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "paddingLeft": 0,
 "data": {
  "name": "blue block"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "fontWeight": "bold",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": "1.82%",
 "data": {
  "name": "text 1"
 },
 "width": 391,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "text": "LOREM IPSUM",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Label",
 "propagateClick": true,
 "borderSize": 0,
 "height": 75,
 "minWidth": 1,
 "shadow": false,
 "fontColor": "#000000",
 "paddingLeft": 0,
 "fontStyle": "italic",
 "fontSize": 61,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "fontWeight": "normal",
 "textShadowColor": "#000000",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": "2.18%",
 "data": {
  "name": "text 2"
 },
 "textShadowVerticalLength": 0,
 "width": 385,
 "textShadowHorizontalLength": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "propagateClick": true,
 "class": "Label",
 "height": 44,
 "borderSize": 0,
 "bottom": "4.29%",
 "minWidth": 1,
 "textShadowOpacity": 1,
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "fontStyle": "italic",
 "fontSize": 28,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "horizontalAlign": "left"
},
{
 "id": "Image_741F9FF2_48AF_42FD_417A_818DCE10123B",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 1460,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "url": "skin/Image_741F9FF2_48AF_42FD_417A_818DCE10123B.png",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "borderSize": 0,
 "maxHeight": 821,
 "width": "35.636%",
 "height": "58.571%",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Image175517"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "horizontalAlign": "center"
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "right": "0%",
 "width": 110,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "top": "0%",
 "class": "Container",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "height": 110,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "horizontal",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "center"
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "right": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "height": "85.959%",
 "borderSize": 0,
 "minWidth": 1,
 "gap": 3,
 "layout": "vertical",
 "width": "91.304%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "-button set"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "right": 0,
 "width": 330,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "7.71%",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "right": "2.69%",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "top": "1.82%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "4.69%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "shadow": true,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left"
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "82.72%",
 "right": "2.86%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "top": "3%",
 "borderSize": 0,
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 10,
 "layout": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "right"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "right": "15%",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": true,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "center"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "36.92%",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "right": "29.86%",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "shadow": true,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left"
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "right": "15%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "top": "10%",
 "scrollBarColor": "#000000",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "layout": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "right"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "right": "15%",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": true,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "center"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "right": "15%",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "shadow": true,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "center"
},
{
 "shadowBlurRadius": 25,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "right": "15%",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "scrollBarWidth": 10,
 "top": "10%",
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "shadow": true,
 "paddingLeft": 0,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left"
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "right": "15%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "top": "10%",
 "borderSize": 0,
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 10,
 "layout": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "right"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4970C5_4BAB_FD27_41CF_E6033C1EA14F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C04E96_48AB_C525_41C8_2AF96A894236",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C6B02CD_4B97_7D27_41D0_D6CCEA01B75C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E609B91_486C_C33F_41C7_E4E9B02D24F6",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C01E96_48AB_C525_41A3_D2F80AD0AA9C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49DEA3_4BAB_4563_41C4_275D93CB0B6F_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C1FE96_48AB_C525_41AA_113591A959D5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C488B87_4B95_C323_41B3_865515D5E0B2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E4C5BA4_486C_C364_41A4_49B6B181B53D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48957F_4B95_47E3_41CD_850BC82131A4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C81E80_48AB_C51C_41AA_3305C58DC598",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E783B9B_486C_C323_41C2_4F7499D0D405",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E788B9B_486C_C323_4190_3E428EEBBA10",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E78FB9B_486C_C323_41C2_17C1EE173FB4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C5B72F7_4B97_42E3_41AC_070F07B41DC2_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E790B9B_486C_C323_41A4_9C91B2661D62",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E79FB9B_486C_C323_41C7_9E72EE64B903",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7A0B9B_486C_C323_41BA_F77082CC8B1D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4BFF95_4B97_4327_41BB_E0555F65BD60_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7A6B9B_486C_C323_41D2_52D17867848E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E730BA4_486C_C364_41BA_04FAE6E0B363",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C5AE4D3_4B95_C523_41C4_78CAAAA033E6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E739BA4_486C_C364_41CB_17C7CD533CC7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E719BA4_486C_C364_41C5_431445DA108E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C5AFF33_4B95_4363_41C5_92B04F1CA710_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E71FBA4_486C_C364_41C1_EA33A5097C2D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7ECB9B_486C_C323_41C9_5AB0949E6CD4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7F3B9B_486C_C323_41CE_3C60817549BA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7F6B9B_486C_C323_41BC_7B73074C988A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C482489_4B97_452F_41CA_8580DB533138_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7FCB9B_486C_C323_41B5_1F12262AD099",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C3DE8C_48AB_C525_4193_555CBD5186FE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C35E8C_48AB_C525_41C4_75CE0BB7C909",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49994D_4B94_CF27_41CD_1A7151C5F924_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C2BE8C_48AB_C525_4180_2409F2FF9F8F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CE9E82_48AB_C51D_41B8_235589FAFEE4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CEEE82_48AB_C51D_41D0_9E762D2C385E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C496889_4B94_CD2C_41BF_A28767C03F21_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CE4E82_48AB_C51D_41A2_92A5DC815A88",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E74BB9B_486C_C323_41C0_972A0764FE32",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E752B9B_486C_C323_41C6_922F04FB9EC7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C44992D_4B94_CF64_41BA_5EB35C141577_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E759B9B_486C_C323_41CB_746F9AC3884F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E4E2BA4_486C_C364_41D2_3925878B647A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CA8E78_48AB_C5EC_41D1_AF775F0B0D57",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48FF1B_4B95_4323_41C4_D4962F58F010_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CAEE78_48AB_C5EC_41B4_11F11146C414",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7ADB9B_486C_C323_4198_7D3541121868",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C584D54_4B97_4724_41D0_5BA7346F4665_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7B2B9B_486C_C323_41CA_B5C40E4ED44A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E618B91_486C_C33F_41C9_E263DC4C0DB3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E61FB91_486C_C33F_41BC_C5160316FD33",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C489EBD_4B97_4567_41BE_D1815901E395_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E622B91_486C_C33F_41C3_8EF91FFFEC5A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49FCCF_4BAB_4524_41C4_03DCFE0BECCE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C23E8C_48AB_C525_41D1_F39833C12526",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E75EB9B_486C_C323_41B5_C22EEDA4C11A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E766BA4_486C_C364_41BD_24221AE0507B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E76EBA4_486C_C364_41D1_C4413C8BA7A5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E777BA4_486C_C364_418C_2039EC68CCB1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48164D_4B94_C526_41AB_FF8180E0EBC6_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E77BBA4_486C_C364_41C3_8808FA45BFA8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E4C8BA4_486C_C364_41A8_0E09F6D33297",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E4D0BA4_486C_C364_41C9_4AEEDFEEBCA1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E4D7BA4_486C_C364_41CB_A187AD411BE2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C489CA5_4B95_C567_41BE_E16FCA1BCD5D_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E4DCBA4_486C_C364_41B6_3E00D3D27A0A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E635B91_486C_C33F_41CB_6B0BAA2294E8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C52EAEF_4B97_C2E3_419D_A8894EC35151_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E636B91_486C_C33F_41A7_98587061CD50",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7B6B9B_486C_C323_41A6_880B24AEA74D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7BFB9B_486C_C323_4189_0EC874895F16",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E744B9B_486C_C323_41D1_AAFF7A700F54",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C484BDF_4B94_C324_41CE_6D1C8EE13F05_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_75AC523A_48B7_5D6D_41C5_9C6E589CF28F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E796B9B_486C_C323_41C1_9956BDB938B5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E79CB9B_486C_C323_41D1_446225991379",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E78AB9B_486C_C323_41CE_5BCC3C9FB32B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E791B9B_486C_C323_41B3_30647BC55039",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4BA0E1_4B97_7D1F_41CC_3CA6DEC39B4B_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E796B9B_486C_C323_41B9_0FBF1BC8F4D1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E713BA4_486C_C364_41D2_225C5CE464A3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E77FBA4_486C_C364_41CC_83E5FDB6ABB8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E707BA4_486C_C364_41C1_8CFB632731AB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48027A_4B94_BDED_41C2_ABD796139373_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E708BA4_486C_C364_41CC_08BF2DF190F7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CA6E78_48AB_C5EC_4198_4F891C3638DB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C9CE78_48AB_C5EC_41D1_88226DBB2DAB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C92E78_48AB_C5EC_41BF_3A2EABEEB8BB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C48D21A_4B95_7D2D_41AA_C18FA835AD0D_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C88E80_48AB_C51C_41B3_3916D7399F46",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7D7B91_486C_C33F_41A5_3C01C701CA9D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7DAB96_486C_C325_41C1_49A51ED7E0A5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7E2B96_486C_C325_41BC_447BD1E19CA1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C44D6C2_4B97_C51D_41C9_181A822D2816_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7E9B96_486C_C325_41B7_34B16BC9E999",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E700BA4_486C_C364_41C9_7B36C47CCB48",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E709BA4_486C_C364_41C1_5EE3A7512665",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C47E3FE_4B94_C2E5_41CD_52D122E8469F_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E70DBA4_486C_C364_41A1_70CF0AF332EC",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C59C9E1_4B95_CF1F_41D0_4C0B467EFFF9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E73CBA4_486C_C364_41B3_D029278A0BBB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E629B91_486C_C33F_41C0_43D60B807170",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C516CA9_4B97_C56F_4187_72F35C5F8475_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E62FB91_486C_C33F_41CB_6E21EB39FFC5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CDDE8A_48AB_C52D_41C7_E2B8C1D88841",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CD4E8A_48AB_C52D_41BF_F88FAD1DC432",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CCDE8C_48AB_C525_41BB_D5DAB5AC95D4",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49B85E_4B94_CD25_41A1_C3DB3E50B4D3_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CC2E8C_48AB_C525_41B3_43EFB9B2F04F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C86E82_48AB_C51D_41CF_09838EBD43E7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CFDE82_48AB_C51D_418B_92C704DFF98B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49677C_4B94_C3E5_41B3_1F567FFEE0FB_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71CF3E82_48AB_C51D_41C6_8B78F53B512F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C14E96_48AB_C525_41C0_42466BB1C079",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C58E034_4BAB_DD64_41D1_3C4FE8E505BB_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C0DE96_48AB_C525_41C4_1981F104555D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4470AC_4B95_5D65_41D0_68E6E308ED86_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E710BA4_486C_C364_41A1_960131E22FEF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49FE1B_4BAB_452C_41B8_941DD0D05F5C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C09E96_48AB_C525_4176_3CDA2C2B59FF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E63CB91_486C_C33F_41CF_A8E95E673837",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7C2B91_486C_C33F_41CC_26669C07DA76",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7C9B91_486C_C33F_41B4_19915F7DFDF8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7CAB91_486C_C33F_41D1_4194A48BD045",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C4818E3_4B97_CEE3_41BB_5404F00A9D0D_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E7D0B91_486C_C33F_41D0_DB05BD8C4E62",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E724BA4_486C_C364_41C6_70DC75A3C011",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C483303_4B95_4323_41AD_F535C065121E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_7E72ABA4_486C_C364_41D2_51C63D327A2B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C1BE94_48AB_C525_41C8_8D4964F28094",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_5C49FCD1_4BAB_453F_41B5_429ABCBA676B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_71C10E96_48AB_C525_418D_E5A2F0007D65",
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "height": 60,
 "borderSize": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "mode": "toggle",
 "minWidth": 1,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "borderSize": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "mode": "push",
 "minWidth": 1,
 "click": "this.shareTwitter(window.location.href)",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "height": 58,
 "borderSize": 0,
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "mode": "push",
 "minWidth": 1,
 "click": "this.shareFacebook(window.location.href)",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton FB"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.4,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container black"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left"
},
{
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 80,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "top": "40%",
 "borderSize": 0,
 "maxHeight": 80,
 "bottom": "40%",
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "width": "90%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left"
},
{
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "right": 9,
 "width": 50,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 50,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "top": "40%",
 "borderSize": 0,
 "maxHeight": 50,
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_A821D125_A60B_FE9A_41D4_39AF8A653CB4"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "85%",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "-left"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "center"
},
{
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 20,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "50%",
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "gap": 0,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 50,
 "data": {
  "name": "-right"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": "9.547%",
 "borderSize": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "width": "16.667%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "height": 140,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundColorDirection": "vertical",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "paddingRight": 70,
 "itemThumbnailWidth": 220,
 "borderRadius": 5,
 "paddingBottom": 70,
 "verticalAlign": "middle",
 "itemLabelGap": 7,
 "selectedItemLabelFontColor": "#04A3E1",
 "width": "100%",
 "itemPaddingBottom": 3,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "itemMode": "normal",
 "itemOpacity": 1,
 "itemMaxWidth": 1000,
 "borderSize": 0,
 "minWidth": 1,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "height": "92%",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "gap": 26,
 "scrollBarVisible": "rollOver",
 "itemMaxHeight": 1000,
 "itemLabelFontFamily": "Oswald",
 "paddingLeft": 70,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailShadow": false,
 "itemLabelPosition": "bottom",
 "itemPaddingLeft": 3,
 "rollOverItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadow": true,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "propagateClick": true,
 "itemBackgroundColor": [],
 "class": "ThumbnailGrid",
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "shadow": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 16,
 "itemThumbnailScaleMode": "fit_outside",
 "itemMinWidth": 50
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "propagateClick": true,
 "class": "WebFrame",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "100.055%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "99.917%",
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "WebFrame"
 },
 "paddingTop": 0,
 "insetBorder": false
},
{
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "height": "75%",
 "borderSize": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "width": "25%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "progressBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "transitionDuration": 500,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 6,
 "transitionMode": "blending",
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBorderColor": "#CCCCCC",
 "progressBarBackgroundColorRatios": [
  0,
  0.9
 ],
 "progressBarBorderColor": "#0066FF",
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF",
  "#000000"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "99.975%",
 "toolTipOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "paddingLeft": 0,
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 10,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "top": 0,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "displayTooltipInTouchScreens": true,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "horizontal",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "shadow": false,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 },
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowVerticalLength": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "height": 140,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container photo"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "55%",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "-left"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "center"
},
{
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 60,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 20,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "45%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "gap": 0,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 60,
 "data": {
  "name": "-right"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingRight": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "maxWidth": 60,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": "75%",
 "borderSize": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "width": "25%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "- Buttons set"
 },
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "backgroundOpacity": 0.7,
 "children": [
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894",
  "this.Image_5C61C4D8_489C_C52D_4198_70C5788F58F9",
  "this.Label_71F259C3_48B4_CF1C_41D2_78D675543801"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 40,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 40,
 "verticalAlign": "top",
 "top": "0%",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "width": "100%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "shadow": false,
 "paddingLeft": 40,
 "scrollBarVisible": "rollOver",
 "paddingTop": 40,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Image_A821D125_A60B_FE9A_41D4_39AF8A653CB4",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 921,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "url": "skin/Image_A821D125_A60B_FE9A_41D4_39AF8A653CB4.jpg",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "borderSize": 0,
 "maxHeight": 1302,
 "width": "100%",
 "height": "100%",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Image3191"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "horizontalAlign": "center"
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "height": 60,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "right"
},
{
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_48C44819_5808_AD8F_418D_15510222B331",
  "this.HTMLText_48ECFC8F_5818_A682_41BB_336D85BBDF8C",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 30,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "gap": 10,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container text"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "maxWidth": 60,
 "verticalAlign": "top",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "top": 20,
 "borderSize": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "mode": "push",
 "height": "36.14%",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "width": "100%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "right"
},
{
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "maxWidth": 60,
 "verticalAlign": "top",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "top": 20,
 "borderSize": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "mode": "push",
 "height": "36.14%",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "width": "100%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "right"
},
{
 "progressBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingRight": 6,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "transitionDuration": 500,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 6,
 "transitionMode": "blending",
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipDisplayTime": 600,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderSize": 0,
 "progressBorderColor": "#CCCCCC",
 "progressBarBackgroundColorRatios": [
  0,
  0.9
 ],
 "progressBarBorderColor": "#0066FF",
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF",
  "#000000"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "paddingLeft": 0,
 "toolTipTextShadowColor": "#000000",
 "paddingTop": 0,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 10,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "top": "0%",
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "displayTooltipInTouchScreens": true,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "horizontal",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "shadow": false,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowVerticalLength": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "maxWidth": 60,
 "verticalAlign": "top",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "top": 20,
 "borderSize": 0,
 "maxHeight": 60,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "mode": "push",
 "height": "10%",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "width": "10%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "right"
},
{
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 2000,
 "verticalAlign": "bottom",
 "paddingBottom": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "borderSize": 0,
 "maxHeight": 1000,
 "width": "100%",
 "height": "100%",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Image40635"
 },
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "horizontalAlign": "center"
},
{
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "5%",
 "horizontalAlign": "right"
},
{
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 30,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "gap": 10,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container text"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "width": 370,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "13.78%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "bottom",
 "propagateClick": true,
 "class": "Container",
 "height": 130,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 5,
 "layout": "vertical",
 "width": "69.124%",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "-Container footer"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "borderSize": 0,
 "bottom": "25%",
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 0,
 "layout": "vertical",
 "width": "75%",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-2"
 },
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "borderSize": 0,
 "bottom": "25%",
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 0,
 "layout": "vertical",
 "width": "100%",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-3"
 },
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "borderSize": 0,
 "bottom": "25%",
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 0,
 "layout": "vertical",
 "width": "100%",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-4"
 },
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "borderSize": 0,
 "bottom": "25%",
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 0,
 "layout": "vertical",
 "width": "100%",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-5"
 },
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "borderSize": 0,
 "bottom": "25%",
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 0,
 "layout": "vertical",
 "width": "100%",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-Level 2-6"
 },
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "class": "Container",
 "top": "25%",
 "borderSize": 0,
 "bottom": "25%",
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "gap": 0,
 "layout": "vertical",
 "width": "100%",
 "shadow": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false,
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "selectedItemLabelFontWeight": "bold",
 "id": "ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894",
 "left": "0%",
 "itemLabelFontColor": "#FFFFFF",
 "width": 217,
 "itemBackgroundColorDirection": "vertical",
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "borderRadius": 5,
 "verticalAlign": "top",
 "itemThumbnailWidth": 75,
 "paddingBottom": 10,
 "itemThumbnailShadowColor": "#000000",
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelGap": 9,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemPaddingBottom": 3,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "itemMode": "normal",
 "itemOpacity": 1,
 "height": "49.331%",
 "scrollBarColor": "#FFFFFF",
 "minWidth": 20,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "layout": "vertical",
 "itemLabelFontFamily": "Arial",
 "paddingLeft": 20,
 "paddingTop": 10,
 "itemBorderRadius": 0,
 "playList": "this.ThumbnailList_5FC4D984_489C_CF25_41AD_E2B082F88894_playlist",
 "itemHorizontalAlign": "center",
 "itemThumbnailShadowOpacity": 0.54,
 "itemThumbnailShadow": true,
 "itemLabelPosition": "bottom",
 "itemPaddingLeft": 3,
 "itemThumbnailShadowSpread": 1,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 50,
 "backgroundOpacity": 0,
 "minHeight": 20,
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "itemBackgroundColor": [],
 "class": "ThumbnailList",
 "rollOverItemLabelFontWeight": "normal",
 "bottom": "24.59%",
 "itemThumbnailOpacity": 1,
 "rollOverItemBackgroundOpacity": 0,
 "itemThumbnailShadowVerticalLength": 3,
 "itemPaddingRight": 3,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "shadow": false,
 "itemThumbnailShadowBlurRadius": 8,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailHeight": 75,
 "itemVerticalAlign": "middle",
 "itemLabelFontSize": 14,
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "id": "Image_5C61C4D8_489C_C52D_4198_70C5788F58F9",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 1460,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "url": "skin/Image_5C61C4D8_489C_C52D_4198_70C5788F58F9.png",
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "borderSize": 0,
 "maxHeight": 821,
 "width": "100%",
 "height": "18.164%",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "Image25108"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "horizontalAlign": "center"
},
{
 "fontFamily": "Arial",
 "fontWeight": "normal",
 "id": "Label_71F259C3_48B4_CF1C_41D2_78D675543801",
 "left": "18.89%",
 "data": {
  "name": "Label173426"
 },
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "Label",
 "top": "21.64%",
 "borderSize": 0,
 "height": "6.772%",
 "minWidth": 1,
 "width": "46.083%",
 "shadow": false,
 "fontColor": "#000000",
 "paddingLeft": 0,
 "fontStyle": "normal",
 "fontSize": "1.48vmin",
 "paddingTop": 0,
 "textDecoration": "none",
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "HTMLText53815"
 },
 "scrollBarWidth": 10,
 "id": "HTMLText_48C44819_5808_AD8F_418D_15510222B331",
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 20,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "height": "45.306%",
 "borderSize": 0,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0066ff;font-size:48px;font-family:'Bahnschrift Light';\">HERMOSA CASA</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">CUENTA CON 4 HABITACIONES, PARQUEO PARA 4 VEICULOS, COSINA FRIA Y COSINA CALIENTE,AMPLIA SALA PRINCIPAL Y 2 SALAS DE ESTAR Y PISCINA. </SPAN><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Aenean vulputate eleifend tellus. </SPAN></SPAN></DIV></div>",
 "shadow": false,
 "paddingLeft": 20,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "scrollBarMargin": 2
},
{
 "data": {
  "name": "HTMLText1580"
 },
 "id": "HTMLText_48ECFC8F_5818_A682_41BB_336D85BBDF8C",
 "backgroundOpacity": 0,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "width": "69.722%",
 "height": "18.98%",
 "borderSize": 3,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0033ff;font-size:29px;\"><B>Valor</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:26px;\"><B>RD$25,000,000.00</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "scrollBarMargin": 2
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "italic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "width": 180,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 1,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 50,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "backgroundOpacity": 0.7,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "class": "Button",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "height": 50,
 "layout": "horizontal",
 "minWidth": 1,
 "label": "LOREM IPSUM",
 "pressedBackgroundOpacity": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "click": "this.openLink('https://api.whatsapp.com/send?phone=18296840422&text=me%20gustar%C3%ADa%20hacer%20una%20visita%20presencial.%F0%9F%8F%98%EF%B8%8F%F0%9F%8F%98%EF%B8%8F%F0%9F%8F%98%EF%B8%8F', '_blank')",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "fontSize": "2.39vh",
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "height": "46%",
 "borderSize": 0,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingLeft": 0
},
{
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "- content"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "height": "75%",
 "horizontalAlign": "left"
},
{
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "width": 40,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "height": 2,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "blue line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "HTMLText",
 "height": 78,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "visible": false,
 "paddingLeft": 0
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "scrollBarWidth": 10,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "bottom",
 "propagateClick": false,
 "class": "Container",
 "height": 56,
 "scrollBarColor": "#000000",
 "width": "73.272%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 7,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "scrollBarWidth": 10,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "class": "Container",
 "height": 44,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 7,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 50,
 "borderSize": 0,
 "borderColor": "#000000",
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 5,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "backgroundOpacity": 0.5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "scrollBarWidth": 10,
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "height": 8,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Main Entrance",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lobby",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "pressedLabel": "Reception",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Reception",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Meeting Area 1",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Meeting Area 2",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Bar",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Chill Out",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Terrace",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Garden",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "fontSize": 18,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "fontStyle": "italic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 0,
 "fontSize": 18,
 "paddingTop": 0,
 "visible": false,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 50,
 "borderSize": 0,
 "borderColor": "#000000",
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 5,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "backgroundOpacity": 0.5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "scrollBarWidth": 10,
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "height": 8,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "fontStyle": "italic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 50,
 "borderSize": 0,
 "borderColor": "#000000",
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 5,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "backgroundOpacity": 0.5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "scrollBarWidth": 10,
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "height": 8,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "fontStyle": "italic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 50,
 "borderSize": 0,
 "borderColor": "#000000",
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 5,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "backgroundOpacity": 0.5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "scrollBarWidth": 10,
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "height": 8,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "fontStyle": "italic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 50,
 "borderSize": 0,
 "borderColor": "#000000",
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 5,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "backgroundOpacity": 0.5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "scrollBarWidth": 10,
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "height": 8,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "fontStyle": "italic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 30,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 50,
 "borderSize": 0,
 "borderColor": "#000000",
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "BACK",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverFontSize": 18,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false)",
 "rollOverFontFamily": "Oswald",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 5,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "backgroundOpacity": 0.5,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "height": 1,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left"
},
{
 "scrollBarWidth": 10,
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "class": "Container",
 "height": 8,
 "scrollBarColor": "#000000",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "gap": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "shadowBlurRadius": 15,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 23,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "pressedLabel": "Lorem Ipsum",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "width": "100%",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "fontStyle": "italic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconWidth": 32,
 "backgroundOpacity": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "class": "Button",
 "height": 36,
 "borderSize": 0,
 "borderColor": "#000000",
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "minWidth": 1,
 "label": "Lorem Ipsum",
 "pressedBackgroundOpacity": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "fontSize": 18,
 "paddingTop": 0,
 "textDecoration": "none",
 "cursor": "hand",
 "width": "100%",
 "horizontalAlign": "left"
},
{
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 200,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "propagateClick": false,
 "class": "Image",
 "height": "100%",
 "borderSize": 0,
 "maxHeight": 200,
 "width": "25%",
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "scrollBarWidth": 10,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingBottom": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "width": "75%",
 "height": "100%",
 "borderSize": 0,
 "minWidth": 1,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarMargin": 2,
 "shadow": false,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "paddingLeft": 10
},
{
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 101,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 101,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 101,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 101,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 101,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton Floorplan"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 101,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "width": 44,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 101,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 44,
 "borderSize": 0,
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton Video"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "width": 50,
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "maxWidth": 101,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "IconButton",
 "height": 50,
 "borderSize": 0,
 "maxHeight": 101,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "mode": "push",
 "minWidth": 1,
 "shadow": false,
 "paddingLeft": 0,
 "data": {
  "name": "IconButton --"
 },
 "paddingTop": 0,
 "visible": false,
 "cursor": "hand",
 "horizontalAlign": "center"
}],
 "propagateClick": true,
 "class": "Player",
 "borderSize": 0,
 "width": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "layout": "absolute",
 "mouseWheelEnabled": true,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "data": {
  "name": "Player468"
 },
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "existsKey": function(key){  return key in window; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } }
 },
 "height": "100%",
 "horizontalAlign": "left"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
