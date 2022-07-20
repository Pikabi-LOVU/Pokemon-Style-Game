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
image.onload = () => {
  c.drawImage(image, -736, -662);
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
  );
};

//------------------------//

function animate () {
  window.requestAnimationFrame(animate)
}

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case 'w': 
        console.log('pressed w')
        break
        case 'a': 
        console.log('pressed a')
        break
        case 's': 
        console.log('pressed s')
        break
        case 'd': 
        console.log('pressed d')
        break
    }
    //1.49.51
}
);
