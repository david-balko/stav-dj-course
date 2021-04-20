import { makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import welcomeBackground from '../assets/welcome-background.jpg'
import profilePic from '../assets/ron-rambell-logo-lay.png'
import { Image } from "./Image";
import { useEffect, useRef } from "react";
import { Particle } from "../lib/animationClasses";

const useStyles = makeStyles(theme => ({

  svgBackground: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },

}))

const getPixelRatio = ctx => {
  let backingStore =
  ctx.backingStorePixelRatio ||
  ctx.webkitBackingStorePixelRatio ||
  ctx.mozBackingStorePixelRatio ||
  ctx.msBackingStorePixelRatio ||
  ctx.oBackingStorePixelRatio ||
  ctx.backingStorePixelRatio ||
  1;
  
  return (window.devicePixelRatio || 1) / backingStore;
}

export const Background = inject()(observer((props) =>  {

  let canvasRef = useRef()

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))

  const classes = useStyles()

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d'); 
         
    let ratio = getPixelRatio(ctx);
    let width = getComputedStyle(canvas)
      .getPropertyValue('width')
      .slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue('height')
      .slice(0, -2);
    
    
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
      
    ctx.beginPath();
    ctx.fillStyle = "#ff9e00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ctx.beginPath()
    // ctx.arc(10, 10, 0, 0, 2 * Math.PI);
    // ctx.fillStyle = "#9d4edd";
    // ctx.fill();
    // ctx.arc(
    //   canvas.width / 2,
    //   canvas.height / 2,
    //   canvas.width / 2,
    //   0,
    //   2 * Math.PI
    // )
    // ctx.fillStyle = "#9d4edd";
    // ctx.fillRect(width/2, height/2 , width/2, height/2);
    // ctx.fill();

    let particleArray = []
    for (let i=0; i < 100; i++) {
      let size = Math.random() * 20
      let x = Math.random() * (width - size * 2)
      let y = Math.random() * (height - size * 2)
      let directionX = (Math.random() * .4) - .2
      let directionY = (Math.random() * .4) - .2
      let color = '#9d4edd'
      particleArray.push(new Particle(x, y, directionX, directionY, size, color))
    }

    let requestId = 0;
    const render = () => {
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = "#ff9e00";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particleArray.forEach(p => p.update(ctx, width, height))
      requestId = requestAnimationFrame(render);
    };
  
    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
  })

  return (
    <canvas
      ref={canvasRef} 
      className={classes.svgBackground}
    />
  )
}))
