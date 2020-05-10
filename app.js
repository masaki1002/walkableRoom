/// <reference path="js/babylon.2.5.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function() {
    
    //get the canvas
    var canvas = document.getElementById('renderCanvas');

    //create a Babylon engine object
    var engine = new BABYLON.Engine(canvas, true);
    
    BABYLON.SceneLoader.Load('', 'asset/puchiRoom11.babylon', engine, function(scene){
        scene.executeWhenReady(function() {
            //attach camera to canvas
            scene.activeCamera.attachControl(canvas);


            // var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 30, 0), scene);
            // light.intensity = 1.5;

 

            engine.runRenderLoop(function() {
                scene.render();
            });
        });
    });


};