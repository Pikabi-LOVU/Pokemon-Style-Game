const canvas = document.querySelector("canvas");

//canvas size
//c for canvas context
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

//canvas color
c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

//loading image
const image = new Image();
image.src = "./img/Pellet Town.png";

//load player
const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

//to make sure image is loaded and shown first
//to make sure player images are loaded after the map

//------------------------//

class Sprite {
  constructor({ position, velocity, image}) {
    this.position = position
    this.image = image
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}


const background = new Sprite({
  position: {
    x: -736,
    y: -662,
  },
  image: image,
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

function animate () {
  window.requestAnimationFrame(animate)
background.draw()
  c.drawImage(
    playerImage,
    //앞에 4개가 cropping 좌표, 길이, 폭
    0,
    0,
    playerImage.width / 4, //cropped width
    playerImage.height, //cropped height

    //실제 보여질 캐릭터 이미지의 좌표, 길이, 폭
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4, //cropped width
    playerImage.height //cropped height
  )
  if (keys.w.pressed) {
    background.position.y = background.position.y + 3
  }
}
animate()

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case 'w': 
        keys.w.pressed = true
        break
        case 'a': 
        keys.a.pressed = true
        break
        case 's': 
        keys.s.pressed = true
        break
        case 'd': 
        keys.d.pressed = true
        break
    }
}
);

window.addEventListener("keyup", (e) => {
  switch (e.key) {
      case 'w': 
      keys.w.pressed = false
      break
      case 'a': 
      keys.a.pressed = false
      break
      case 's': 
      keys.s.pressed = false
      break
      case 'd': 
      keys.d.pressed = false
      break
  }
}
);