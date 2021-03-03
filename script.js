
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
           -71.060217,
          42.344655,
          1700// elevation in meters
        ],
        tilt:45,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: [
           -71.040217,
          42.3284655,
          1850// elevation in meters
        ],
        tilt: 45,
        heading: 0
        
        
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"local",
        // Geographic coordinate systems are not supported for a Scene Layer in local scenes.
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [v1, v2, v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    v2.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    v1.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
      
   v3.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: [
           -70.947903,
          42.361208,
          2500// elevation in meters
        ],
        tilt: 70,
        heading: -85
      });
    });


    });
