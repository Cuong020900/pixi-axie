var app = new PIXI.Application(1000, 800, { backgroundColor: 0x111111 });
app.stage.interactive = true;
document.body.appendChild(app.view);

PIXI.loader.reset();
PIXI.loader
// .add('axie_atlas', "./axie_1000/axie.atlas")
// .add('axie_png', "./axie_1000/axie.png")
  .add("axie", "./axie_1000/axie.json", { crossOrigin: true })
  .load(onAssetsLoaded);

var spine;
var spineData;

function onAssetsLoaded(loader, res) {
  spine = app.stage.addChild(new PIXI.spine.Spine(res.axie.spineData));
  spine.position.set(app.renderer.width * 0.5, app.renderer.height);
  spine.state.setAnimation(0, "action/appear", true);
  spine.state.timeScale = 0.5;
}
