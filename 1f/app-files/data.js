var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3732128252902154,
        "pitch": 0.1873492062008033,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.5184840836270013,
          "pitch": 0.22713122253522755,
          "rotation": 0,
          "target": "2-apple-store"
        },
        {
          "yaw": -1.2430504516594993,
          "pitch": 0.07586183299463656,
          "rotation": 0,
          "target": "1-asus-rog"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-asus-rog",
      "name": "Asus ROG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4398698340710547,
        "pitch": 0.03596679049904239,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.2983333048402486,
          "pitch": 0.1814129681746195,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-apple-store",
      "name": "Apple Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4538067782928277,
          "pitch": 0.27149270298142625,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "1F",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
