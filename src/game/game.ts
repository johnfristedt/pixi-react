import * as PIXI from 'pixi.js'
import sample from './sample.png'

function start(canvas: HTMLCanvasElement | null) {
  if (!canvas) return;

  const app = new PIXI.Application({ view: canvas, width: 640, height: 480 });

  const sprite = PIXI.Sprite.from(sample);
  app.stage.addChild(sprite);
}

const game = {
  start
};

export default game;