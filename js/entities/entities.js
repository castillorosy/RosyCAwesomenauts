// because it is a class it is allowed to have both letters capital
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "player",
                width: 64,
                height: 64,
                spritewidth: "64",
                spriteheight: "64",
// the difference between spritewidth and spriteheight are
// passing the main information width and height are telling 
// the screen how much to preserve
                getShape: function() {
                    return(new me.Rect(0, 0, 64, 64)).toPolygon();
                }
            }]);
        this.body.setVelocity(5, 20);
//       this helps the animation to mmove the figure while walking
        this.renderable.addAnimation("idle", [78]);
        this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);

        //reach into the constructer of entity
    },
    update: function(delta) {
        if (me.input.isKeyPressed("right")) {
//        sets the position of my x by the velocity defined
//       setVelocity() and multiplying it by me.timer.tick.
//      me.timer.tick makes the movent look smooth
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            this.flipX(true);
            

        } else {
            this.body.vel.x = 0;
        }
        //this if statement will check whats wrong with the character
        if (this.body.vel.x !== 0) {
            if (!this.renderable.isCurrentAnimation("walk")) {
                this.renderable.setCurrentAnimation("walk");
            }
        }else{
                this.renderable.setCurrentAnimation("idle");
            }
        this.body.update(delta);
        this._super(me.Entity, "update", [delta]);
        return true;
    }
});