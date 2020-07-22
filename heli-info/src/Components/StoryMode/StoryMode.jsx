import React, { Component } from 'react';
import ReactDOM from "react-dom";
import * as THREE from "three";

import NavBar from '../NavBar/NavBar';
import './StoryMode.scss';


import {OBJModel} from 'react-3d-viewer';
import { Geometry } from 'three';

import heli from "./model.obj";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,
    0.1,
    1000
    );

const renderer = new THREE.WebGLRenderer({
    antialias: true
}); 

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 2, 2, 2);
const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );


const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 9;

function animate() {
    requestAnimationFrame(animate)

    // cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera);
}

animate();



class StoryMode extends React.Component{
    constructor(props){
        super(props);
        this.state={
            scene: {}
        }
    }


    render(){

        
    return (
        <div className="StoryMode">
            <NavBar/>
            <h5>StoryMode page</h5>
{/* We'll base it off the Apache for now since there's more modeling data for it */}
           <div className="HeliModel">
               {/* <OBJModel 
               width="399" height="399"
               position={{x:0,y:-100,z:0}}
               src="./Assets/model_obj/model.obj" 
               onLoad={()=>{
                //...
               }}
               onProgres={xhr=>{
                   //...
               }}
               /> */}

            {/* <OBJModel 
                    className="HeliModel__object"
                    width="390" height="390"  
                    position={{x:0,y:-100,z:0}} 
                    src="./model.obj"
                    onLoad={()=>{
                    //...
                    }}
                    onProgress={xhr=>{
                    //...
                    }}
                /> */}


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