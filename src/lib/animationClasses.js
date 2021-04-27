import createMixins from "@material-ui/core/styles/createMixins";

// export const colours = [
//   'rgba(251, 86, 7 , 0.5)',
//   'rgba(255, 0, 110 , 0.5)',
//   'rgba(131, 56, 236 , 0.5)',
//   'rgba(58, 134, 255 , 0.5)',
//   // 'rgba(255, 190, 11, 1)'
// ]

export const colours = [
  'rgba(164, 219, 248, 1)',
  'rgba(176, 141, 255, 1)',
  'rgba(255, 156, 121, 1)',
  'rgba(255, 116, 0, 1)',
  'rgba(255, 93, 32, 1)'
]

export function getPixelRatio(ctx) {
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

export function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1
  let yDistance = y2 - y1
  
  return Math.sqrt(Math.pow(xDistance, 2) + 
    Math.pow(yDistance, 2))
}

function rotate(velocity, angle) {
  const rotatedVelocities = {
      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
      y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  }

  return rotatedVelocities;
}

export function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // Prevent accidental overlap of particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

      // Grab angle between the two colliding particles
      const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

      // Store mass in var for better readability in collision equation
      const m1 = particle.mass;
      const m2 = otherParticle.mass;

      // Velocity before equation
      const u1 = rotate(particle.velocity, angle);
      const u2 = rotate(otherParticle.velocity, angle);

      // Velocity after 1d collision equation
      const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
      const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

      // Final velocity after rotating axis back to original location
      const vFinal1 = rotate(v1, -angle);
      const vFinal2 = rotate(v2, -angle);

      // Swap particle velocities for realistic bounce effect
      particle.velocity.x = vFinal1.x > 5 ? 5 : vFinal1.x < -5 ? -5 : vFinal1.x;
      particle.velocity.y = vFinal1.y > 5 ? 5 : vFinal1.y < -5 ? -5 : vFinal1.y;

      otherParticle.velocity.x = vFinal2.x > 5 ? 5 : vFinal2.x < -5 ? -5 : vFinal2.x;
      otherParticle.velocity.y = vFinal2.y > 5 ? 5 : vFinal2.y < -5 ? -5 : vFinal2.y;
  }
}

export class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x
    this.y = y
    this.velocity = {
      x: directionX,
      y: directionY
    }
    this.size = size
    this.color = color
    this.mass = .5
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }

  update(ctx, ratio, particles) {
    // let nextXPixelData = ctx.getImageData(this.x + this.directionX, this.y, 1, 1).data
    // let nextYPixelData = ctx.getImageData(this.x, this.y + this.directionY, 1, 1).data
    // let isNextXPixelWhite = nextXPixelData[0] === 157 && nextXPixelData[1] === 78 && nextXPixelData[2] === 221
    // let isNextYPixelWhite = nextYPixelData[0] === 157 && nextYPixelData[1] === 78 && nextYPixelData[2] === 221
    
    // check for screen boundaries
    if (this.x + this.size >= window.innerWidth * ratio || this.x - this.size <= 0 ) {
      this.velocity.x = -this.velocity.x
      this.x = this.x - this.size <= 0 ? this.size : (window.innerWidth * ratio) - this.size
    }
    if (this.y + this.size >= window.innerHeight * ratio || this.y - this.size <= 0 ) {
      this.velocity.y = -this.velocity.y
      this.y = this.y - this.size <= 0 ? this.size : (window.innerHeight * ratio) - this.size
    }

    // check for resizes
    if (this.x > window.innerWidth * ratio) {
      this.x = (Math.random() * (window.innerWidth * ratio - 50 - (this.size * 2))) + 50
    }
    if (this.y > window.innerHeight * ratio) {
      this.y = (Math.random() * (window.innerHeight * ratio - 50 - (this.size * 2))) + 50
    }



    particles.forEach(particle => {
      if (this === particle) return

      let distance = getDistance(this.x, this.y, particle.x, particle.y)

      if (distance - this.size - particle.size < 0) {
        resolveCollision(this, particle)
      }
    })

    this.y += this.velocity.y
    this.x += this.velocity.x
    this.draw(ctx)
  }
}

export class Particles {
  constructor(particlesNumber, ctx) {
    this.ctx = ctx
    this.ratio = getPixelRatio(ctx)
    this.particles = []
    // this.colours = [
    //   'rgba(251, 86, 7 , 1)',
    //   'rgba(255, 0, 110 , 1)',
    //   'rgba(131, 56, 236 , 1)',
    //   'rgba(58, 134, 255 , 1)',
    //   'rgba(255, 190, 11, 1)'
    // ]

    this.init(particlesNumber)
    // console.log(`${canvasHeight} ${canvasWidth}`)
  }

  init(particlesNumber) {
    this.particles.length = 0
    for (let i=0; i < particlesNumber; i++) {
      let size = (Math.random() * 35) + 15
      let x = (Math.random() * (window.innerWidth * this.ratio - 50 - (size * 2))) + 50
      let y = (Math.random() * (window.innerHeight * this.ratio - 50 - (size * 2))) + 50
      let directionX = (Math.random()) - 0.5
      let directionY = (Math.random()) - 0.5
      let color = colours[(Math.floor((Math.random() * 5)))]
      if (i !== 0) {
        for (let j=0; j < this.particles.length; j++) {
          if (getDistance(x, y, this.particles[j].x, this.particles[j].y) - size - this.particles[j].size < 0) {
            x = (Math.random() * (window.innerWidth * this.ratio - 50 - (size * 2))) + 50
            y = (Math.random() * (window.innerHeight * this.ratio - 50 - (size * 2))) + 50
            
            j = -1
          }
        }
      }
      this.particles.push(new Particle(x, y, directionX, directionY, size, color))
    }
  }

  update(mouseParticle) {
    this.particles.forEach(p => p.update(this.ctx, this.ratio, [...this.particles, mouseParticle]))
  }
}