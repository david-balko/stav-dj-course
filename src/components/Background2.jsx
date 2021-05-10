import { makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import welcomeBackground from '../assets/welcome-background.jpg'
import profilePic from '../assets/ron-rambell-logo-lay.png'
import { Image } from "./Image";
import { useEffect, useRef } from "react";
import { Particle, Particles, getPixelRatio, colours } from "../lib/animationClasses";

const useStyles = makeStyles(theme => ({

  svgBackground: {
    position: 'fixed',
    zIndex: -1,
    backgroundColor: '#2ca79b',
    height: '100%',
    width: '100%'
  },

}))



export const Background2 = inject()(observer((props) =>  {

  let canvasRef = useRef()

  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))

  const classes = useStyles()

  useEffect(() => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext('2d'); 

    // let ratio, width, height
         
    let ratio = getPixelRatio(ctx)
    let width = window.innerWidth
    let height = window.innerHeight



    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    let mouseParticle = new Particle(0, 0, 0, 0, 30, 'rgba(255, 255, 255, 0)')
    let particles = new Particles(13, ctx, width, height, mouseParticle)


    const onResize = () => {
      // window.innerWidth
      // window.innerHeight
      // console.log(canvas)
      ratio = getPixelRatio(ctx);
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      particles.ratio = ratio
      // ctx.beginPath();
      // ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ctx.fillStyle = "#ff9e00";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      // particles = new Particles(100, ctx, width, height)
    }

    // onResize()
    window.addEventListener('resize', onResize)


    const mouseMove = (e) => {
      mouseParticle.x = e.clientX * ratio
      mouseParticle.y = e.clientY * ratio
      mouseParticle.velocity.x = e.movementX > 5 ? 5 : e.movementX < -5 ? -5 : e.movementX
      mouseParticle.velocity.y = e.movementY > 5 ? 5 : e.movementY < -5 ? -5 : e.movementY
    }

    window.addEventListener('mousemove', mouseMove)

    const touchMove = (e) => {
      const touch = e.touches[0];

      if (mouseParticle.velocity.x !== 0 && mouseParticle.velocity.y !== 0) {
          // be aware that these only store the movement of the first touch in the touches array
          e.movementX = (touch.clientX * ratio) - mouseParticle.x
          e.movementY = (touch.clientY * ratio) - mouseParticle.y
      } else {
        mouseParticle.velocity.x = 1
        mouseParticle.velocity.y = 1
      }
      mouseParticle.x = touch.clientX * ratio
      mouseParticle.y = touch.clientY * ratio
      mouseParticle.velocity.x = e.movementX > 5 ? 5 : e.movementX < -5 ? -5 : e.movementX
      mouseParticle.velocity.y = e.movementY > 5 ? 5 : e.movementY < -5 ? -5 : e.movementY
    }

    window.addEventListener('touchmove', touchMove)

    const onScroll = (e) => {
      // console.log(window.scrollY)
    }

    window.addEventListener('scroll', onScroll)
      
    // ctx.beginPath();
    // ctx.fillStyle = "#ff9e00";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

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

  

    let requestId = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ctx.beginPath();
      particles.update(mouseParticle)
      requestId = requestAnimationFrame(render);
    };
  
    render();

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', mouseMove)
      cancelAnimationFrame(requestId);
    };
  }, [])

  return (
    <canvas
      ref={canvasRef} 
      className={classes.svgBackground}
    />
  )
}))
