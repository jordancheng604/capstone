import React, { Component } from 'react';

// import ReactDOM from "react-dom";


import * as THREE from "three";
import { MTLLoader,  OBJLoader } from "three-obj-mtl-loader";
import OrbitControls from "three-orbitcontrols";

import NavBar from '../NavBar/NavBar';
import './StoryMode.scss';


// import {OBJModel} from 'react-3d-viewer';
// import { Geometry, ObjectLoader, Color } from 'three';

// import heli from "./model.obj";

// import * as OBJLoader from 'three-obj-loader';
// OBJLoader(THREE);

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// import heliLogo from "../../../src/logo.png";




// const {MTLLoader, OBJLoader} = require('three-obj-mtl-loader');
// const objloader = new THREE.OBJLoader();


//===GLTF - TRYING ANOTHER WAY, since OBJ wasn't working.

// var loader = new GLTFLoader();

// loader.load( './modelGLTF/model.gltf', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

//=== GLTF END ===
//================


//================
//===CUBE START===
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
//     0.1,
//     1000
//     );

// const renderer = new THREE.WebGLRenderer({
//     antialias: true
// }); 

// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxBufferGeometry(5,5,5);
// // const geometry = new THREE.SphereGeometry(5,5,5);
// const material = new THREE.MeshBasicMaterial({wireframe: false});


// const cube = new THREE.Mesh( geometry, material );
// scene.add(cube);

// camera.position.z = 9;

// function animate() {
//     requestAnimationFrame(animate)

//     // cube.rotation.x += 0.02;
//     cube.rotation.y += 0.009;

//     renderer.render(scene, camera);
// }
// animate();

// animate();
//===CUBE END===
//================


//=== Trying OBJ, ObjectLoader, Load, etc. ===
//OBJLoader and ObjectLoader wasn't working. and npm packages were no help.
//
//
// let loader= new THREE.FileLoader();
// loader.load(
//     "./model.obj",

// )

// let loader = new ObjectLoader();
// loader.load('./model.obj');



    // <div>
    //   <OBJModel 
    //     width="400" height="400"  
    //     position={{x:0,y:-100,z:0}} 
    //     src="./model.obj"
    //     onLoad={()=>{
    //       //...
    //     }}
    //     onProgress={xhr=>{
    //       //...
    //     }}
    //   />
    // </div>
  





class StoryMode extends React.Component{
    componentDidMount(){
      //Scene
      const width = this.mount.clientWidth;
      const height = this.mount.clientHeight;
      this.scene = new THREE.Scene();

      //Render
      this.renderer = new THREE.WebGLRenderer({antialias: true});
      this.renderer.setSize(width, height);
      this.mount.appendChild(this.renderer.domElement);

      //Camera
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
        0.1,
        1000
        );
        this.camera.position.z = 1;
        this.camera.position.x = 1;
        // this.camera.position.y = -10;

        //Controls
        const controls = new OrbitControls(this.camera, this.renderer.domElement);


        //Lighting
        var light = []
        light[0]=new THREE.PointLight(0xffffff, 1, 0);
        light[1]=new THREE.PointLight(0xffffff, 1, 0);
        light[2]=new THREE.PointLight(0xffffff, 1, 0);
        light[3]=new THREE.PointLight(0xffffff, 1, 0);
        light[4]=new THREE.PointLight(0xffffff, 1, 0);
        light[5]=new THREE.PointLight(0xffffff, 1, 0);
        light[0].position.set(50,50,50);
        light[1].position.set(0,50,0);
        light[2].position.set(0,0,50);
        light[3].position.set(50,0,0);
        light[4].position.set(-50,-50,0);
        light[5].position.set(50,50,0);
        // this.scene.add(light[0]);
        // this.scene.add(light[1]);
        // this.scene.add(light[2]);
        // this.scene.add(light[3]);
        this.scene.add(light[4]);
        this.scene.add(light[5]);


        this.addModel();
        
        this.start();
    }


    addModel(){
      //wireframe for Materials can be added later if we have time.
      let objLoader = new OBJLoader();
        // objLoader.setMaterials({wireframe: true})
        objLoader.load("./assets/model_obj_f3W-vzmHRgW_4EeRj7QNREa/model.obj",
        // objLoader.load("./assets/18715_Tandem_rotor_transport_helicopter_V1.obj",
        object=>{
        this.aircraft=object;
        this.aircraft.scale.set(0.9,0.9,0.9);
        this.scene.add(this.aircraft);
      }
      )
    }

    start=()=>{
      if(!this.frameId){
        this.frameId=requestAnimationFrame(this.animate);

      }
    };
    animate=()=>{
      this.renderScene();
      this.frameId=window.requestAnimationFrame(this.animate);
    };
    renderScene=()=>{
      if(this.renderer){
        this.renderer.render(this.scene, this.camera);
      }
      
    }




    

heliImage = ()=>{
}
    render(){
        
    return (
        <div className="StoryMode">
            <NavBar/>
            <h5>StoryMode page</h5>
            <div style={{width: "800px", height: "800px"}}
            ref={mount => {this.mount=mount}}/>

        

           <div className="HeliModel">
           
              


           </div>
            <h3 className="section__left">L-Helicopter Model No and Name: AH-64 Apache</h3>
            <h3 className="section__left">L-Manufacturer: Boeing</h3>
            <p className="section__left">L-Possible a slogan or nickname: The flying Tank.</p>


            <div className="section__right">
                <h3>It can fly upside down.</h3>
            </div>

            <div className="background__container">
            <div className="parallaxGround">For ground layer</div>

            <div className="section__right">
                <h3>More Apache info-RightSide</h3>
                <p>And some more</p>
            </div>

            <div className="section__left">
                <h3>L-LeftSide</h3>
                <p>L-left-side</p>
            </div>

            <div className="section__right">
                <h3>stuf stuff</h3>
                <p>mor stuff</p>
            </div>

            <div className="parallaxClouds">Clouds layer</div>


            </div>

            <div>BluePrint section starts here.</div>

        </div>
    )
}
}
export default StoryMode;