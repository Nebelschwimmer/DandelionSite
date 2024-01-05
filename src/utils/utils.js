// Options for TS PARTICLES

export const options = {
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#dbb658",
      animation: {
        enable: true,
        speed: 3,
        sync: true
      }
    },
    shape: {
      type: "image",
      options: {
        image: {
          src:
            "https://abrakadabra.fun/uploads/posts/2022-03/1646385123_26-abrakadabra-fun-p-par-na-prozrachnom-fone-41.png",
          width: 456,
          height: 456
        }
      }
    },
    opacity: {
      value: 0.035,
      random: false,
      animation: {
        enable: true,
        speed: 0.01,
        minimumValue: 0,
        sync: false
      }
    },
    size: {
      value: 394,
      random: { enable: true, minimumValue: 102 },
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    links: {
      enable: false,
      distance:500,
      color: "#dbb658",
      opacity: 0.6,
      width: 1
    },
    life: {
      duration: {
        value: 120
      },
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: -0.1
      },
      speed: 1,
      direction: "top",
      random: false,
      straight: false,
      outModes: {
        default: "destroy",
        bottom: "none"
      },
      attract: {
        enable: true,
        distance: 50,
        rotate: {
          x:500,
          y: 1200
        }
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true
    }
  },
  detectRetina: true,
  background: {
    color: "#000000",
    opacity:0.01
  },
  emitters: {
    direction: "top",
    rate: {
      quantity: 10,
      delay: 0.5
    },
    size: {
      width: 100,
      height: 30
    },
    position: {
      x: 50,
      y: 130
    }
  }
};

