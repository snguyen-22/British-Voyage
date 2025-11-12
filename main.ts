namespace SpriteKind {
    export const colony1 = SpriteKind.create()
    export const made_colony = SpriteKind.create()
    export const colony2 = SpriteKind.create()
    export const colony3 = SpriteKind.create()
    export const colony4 = SpriteKind.create()
    export const colony5 = SpriteKind.create()
    export const colony6 = SpriteKind.create()
    export const largeenemy = SpriteKind.create()
    export const pirateprojectile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.colony6, function (sprite, otherSprite) {
    if (info.score() > 1000) {
        sprites.destroy(otherSprite, effects.warmRadial, 500)
        madecolony = sprites.create(img`
            77777777777777777777e2e22e2e77777777777777777777
            77777777777777777222eee22e2e22277777777777777777
            77777777777777222e22e2e22eee22e22277777777777777
            77777777777e22e22eeee2e22e2eeee22e22e77777777777
            77777777eeee22e22e22e2e22e2e22e22e22eeee77777777
            77777222e22e22eeee22e2e22e2e22eeee22e22e22277777
            77722eeee22e22e22e22eee22eee22e22e22e22eeee22777
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            7c66444444444c66e4e44e44e44ffffe66c44444444466c7
            77c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c77
            777c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c777
            7777644444444c66f4e44e44e44e44ee66c4444444467777
            7777764eee444c66f4e44e44e44e44ee66c444eee4677777
            7777776ccc666c66e4e44e44e44e44ee66c666ccc6777777
            `, SpriteKind.made_colony)
        tiles.placeOnTile(madecolony, tiles.getTileLocation(56, 41))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.colony5, function (sprite, otherSprite) {
    if (info.score() > 1000) {
        sprites.destroy(otherSprite, effects.warmRadial, 500)
        madecolony = sprites.create(img`
            77777777777777777777e2e22e2e77777777777777777777
            77777777777777777222eee22e2e22277777777777777777
            77777777777777222e22e2e22eee22e22277777777777777
            77777777777e22e22eeee2e22e2eeee22e22e77777777777
            77777777eeee22e22e22e2e22e2e22e22e22eeee77777777
            77777222e22e22eeee22e2e22e2e22eeee22e22e22277777
            77722eeee22e22e22e22eee22eee22e22e22e22eeee22777
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            7c66444444444c66e4e44e44e44ffffe66c44444444466c7
            77c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c77
            777c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c777
            7777644444444c66f4e44e44e44e44ee66c4444444467777
            7777764eee444c66f4e44e44e44e44ee66c444eee4677777
            7777776ccc666c66e4e44e44e44e44ee66c666ccc6777777
            `, SpriteKind.made_colony)
        tiles.placeOnTile(madecolony, tiles.getTileLocation(21, 55))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speed_bar.value == speed_bar.max) {
        controller.moveSprite(ship, 150, 150)
        speed_bar.value = 0
        pause(2000)
        controller.moveSprite(ship, 100, 100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.colony2, function (sprite, otherSprite) {
    if (info.score() > 1000) {
        sprites.destroy(otherSprite, effects.warmRadial, 500)
        madecolony = sprites.create(img`
            77777777777777777777e2e22e2e77777777777777777777
            77777777777777777222eee22e2e22277777777777777777
            77777777777777222e22e2e22eee22e22277777777777777
            77777777777e22e22eeee2e22e2eeee22e22e77777777777
            77777777eeee22e22e22e2e22e2e22e22e22eeee77777777
            77777222e22e22eeee22e2e22e2e22eeee22e22e22277777
            77722eeee22e22e22e22eee22eee22e22e22e22eeee22777
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            7c66444444444c66e4e44e44e44ffffe66c44444444466c7
            77c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c77
            777c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c777
            7777644444444c66f4e44e44e44e44ee66c4444444467777
            7777764eee444c66f4e44e44e44e44ee66c444eee4677777
            7777776ccc666c66e4e44e44e44e44ee66c666ccc6777777
            `, SpriteKind.made_colony)
        tiles.placeOnTile(madecolony, tiles.getTileLocation(87, 52))
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        cannon_ball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f f f f 1 f f . . . . . 
            . . . . f f f f f 1 f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f 1 f f f f f . . . . . 
            . . . . f f 1 f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 0, -150)
    } else if (controller.left.isPressed()) {
        cannon_ball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f f f f 1 f f . . . . . 
            . . . . f f f f f 1 f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f 1 f f f f f . . . . . 
            . . . . f f 1 f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, -150, 0)
    } else if (controller.right.isPressed()) {
        cannon_ball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f f f f 1 f f . . . . . 
            . . . . f f f f f 1 f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f 1 f f f f f . . . . . 
            . . . . f f 1 f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 150, 0)
    } else if (controller.down.isPressed()) {
        cannon_ball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f f f f 1 f f . . . . . 
            . . . . f f f f f 1 f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f 1 f f f f f . . . . . 
            . . . . f f 1 f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 0, 150)
    } else {
        cannon_ball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f f f f 1 f f . . . . . 
            . . . . f f f f f 1 f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f 1 f f f f f . . . . . 
            . . . . f f 1 f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, ship, 150, 0)
    }
    pause(500)
})
sprites.onCreated(SpriteKind.made_colony, function (colony) {
    info.changeScoreBy(-1000)
    colonypoints += 1
    number_of_colonies += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.colony1, function (sprite, otherSprite) {
    if (info.score() > 1000) {
        sprites.destroy(otherSprite, effects.warmRadial, 500)
        madecolony = sprites.create(img`
            77777777777777777777e2e22e2e77777777777777777777
            77777777777777777222eee22e2e22277777777777777777
            77777777777777222e22e2e22eee22e22277777777777777
            77777777777e22e22eeee2e22e2eeee22e22e77777777777
            77777777eeee22e22e22e2e22e2e22e22e22eeee77777777
            77777222e22e22eeee22e2e22e2e22eeee22e22e22277777
            77722eeee22e22e22e22eee22eee22e22e22e22eeee22777
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            7c66444444444c66e4e44e44e44ffffe66c44444444466c7
            77c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c77
            777c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c777
            7777644444444c66f4e44e44e44e44ee66c4444444467777
            7777764eee444c66f4e44e44e44e44ee66c444eee4677777
            7777776ccc666c66e4e44e44e44e44ee66c666ccc6777777
            `, SpriteKind.made_colony)
        tiles.placeOnTile(madecolony, tiles.getTileLocation(34, 77))
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.largeenemy, function (sprite, otherSprite) {
    sprites.destroy(cannon_ball)
    statusbar.value += -1
    if (enemy_health == 4) {
        enemy_health += -1
    } else if (enemy_health == 3) {
        enemy_health += -1
    } else {
        enemy_health = 3
    }
    if (enemy_health == 2) {
        sprites.destroy(otherSprite, effects.spray, 500)
        info.changeScoreBy(250)
        shooting = false
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Projectile, function (sprite, otherSprite) {
    pause(500)
    sprites.destroy(otherSprite, effects.spray, 10)
    sprites.destroy(sprite, effects.warmRadial, 500)
    pause(500)
    info.changeScoreBy(randint(300, 600))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.colony3, function (sprite, otherSprite) {
    if (info.score() > 1000) {
        sprites.destroy(otherSprite, effects.warmRadial, 500)
        madecolony = sprites.create(img`
            77777777777777777777e2e22e2e77777777777777777777
            77777777777777777222eee22e2e22277777777777777777
            77777777777777222e22e2e22eee22e22277777777777777
            77777777777e22e22eeee2e22e2eeee22e22e77777777777
            77777777eeee22e22e22e2e22e2e22e22e22eeee77777777
            77777222e22e22eeee22e2e22e2e22eeee22e22e22277777
            77722eeee22e22e22e22eee22eee22e22e22e22eeee22777
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            7c66444444444c66e4e44e44e44ffffe66c44444444466c7
            77c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c77
            777c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c777
            7777644444444c66f4e44e44e44e44ee66c4444444467777
            7777764eee444c66f4e44e44e44e44ee66c444eee4677777
            7777776ccc666c66e4e44e44e44e44ee66c666ccc6777777
            `, SpriteKind.made_colony)
        tiles.placeOnTile(madecolony, tiles.getTileLocation(89, 10))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.colony4, function (sprite, otherSprite) {
    if (info.score() > 1000) {
        sprites.destroy(otherSprite, effects.warmRadial, 500)
        madecolony = sprites.create(img`
            77777777777777777777e2e22e2e77777777777777777777
            77777777777777777222eee22e2e22277777777777777777
            77777777777777222e22e2e22eee22e22277777777777777
            77777777777e22e22eeee2e22e2eeee22e22e77777777777
            77777777eeee22e22e22e2e22e2e22e22e22eeee77777777
            77777222e22e22eeee22e2e22e2e22eeee22e22e22277777
            77722eeee22e22e22e22eee22eee22e22e22e22eeee22777
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            7c66444444444c66e4e44e44e44ffffe66c44444444466c7
            77c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c77
            777c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c777
            7777644444444c66f4e44e44e44e44ee66c4444444467777
            7777764eee444c66f4e44e44e44e44ee66c444eee4677777
            7777776ccc666c66e4e44e44e44e44ee66c666ccc6777777
            `, SpriteKind.made_colony)
        tiles.placeOnTile(madecolony, tiles.getTileLocation(46, 15))
    }
})
info.onScore(0, function () {
    game.setGameOverMessage(false, "YOU RAN OUT OF MONEY")
    game.gameOver(false)
})
function spawn_enemy () {
    if (sprites.allOfKind(SpriteKind.Enemy).length >= 15) {
        return
    } else {
        pirate = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . f f . . . . 
            . . . . . f f . . . f f f . . . 
            . . . . . f f . . . f f f f . . 
            . . . . . f f f . . f f f . . . 
            . . . . . . f f . . f 2 . . 2 . 
            . f 2 . 8 . f f . . 8 2 . 2 2 . 
            . . 2 2 . . . 2 . 8 . 2 2 2 8 8 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . 8 f 2 f 2 f 2 f 2 f 2 2 f 2 . 
            8 . . 2 2 2 2 2 2 2 2 2 f . 2 . 
            . 8 . . . . . . . . . . . . 2 . 
            . . . 8 8 . . 8 . 8 . . . . . . 
            . . . . . . . . . . 8 . 8 8 . 8 
            `, SpriteKind.Enemy)
        pirate.setPosition(randint(0, 100 * 16), randint(0, 100 * 16))
        while (pirate.overlapsWith(pirate)) {
            pirate.setPosition(0, randint(0, 100 * 16))
            pause(100)
        }
        pirate.setVelocity(randint(-50, 50), randint(-50, 50))
        pirate_chasing = false
        pirate.setBounceOnWall(true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    pause(500)
    sprites.destroy(otherSprite, effects.warmRadial, 500)
    pause(500)
    info.changeScoreBy(randint(300, 600))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.largeenemy, function (sprite, otherSprite) {
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 . . 2 2 . . . . 
        . . . . . 2 2 . . . 2 2 2 . . . 
        . . . . . 2 2 . . . 2 2 2 2 . . 
        . . . . . 2 2 2 . . 2 2 2 . . . 
        . . . . . . 2 2 . . 2 2 . . 2 . 
        . 2 2 . 8 . 2 2 . . 8 2 . 2 2 . 
        . . 2 2 . . . 2 . 8 . 2 2 2 8 8 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 8 2 2 f 2 f 2 f 2 f 2 2 2 2 . 
        8 . . 2 2 2 2 2 2 2 2 2 2 . 2 . 
        . 8 . . . . . . . . . . . . 2 . 
        . . . 8 8 . . 8 . 8 . . . . . . 
        . . . . . . . . . . 8 . 8 8 . 8 
        `)
    pause(200)
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . 1 1 . . . . 
        . . . . . 1 1 . . . 1 1 1 . . . 
        . . . . . 1 1 . . . 1 1 1 1 . . 
        . . . . . 1 1 1 . . 1 1 1 . . . 
        . . . . . . 1 1 . . 1 e . . e . 
        . e e . 8 . 1 1 . . 8 e . e e . 
        . . e e . . . e . 8 . e e e 8 8 
        . . e e e e e e e e e e e e . . 
        . 8 e e f e f e f e f e e e e . 
        8 . . e e e e e e e e e e . e . 
        . 8 . . . . . . . . . . . . e . 
        . . . 8 8 . . 8 . 8 . . . . . . 
        . . . . . . . . . . 8 . 8 8 . 8 
        `)
    pause(300)
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(-1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pirateprojectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(-500)
    controller.moveSprite(ship, 75, 75)
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 . . 2 2 . . . . 
        . . . . . 2 2 . . . 2 2 2 . . . 
        . . . . . 2 2 . . . 2 2 2 2 . . 
        . . . . . 2 2 2 . . 2 2 2 . . . 
        . . . . . . 2 2 . . 2 2 . . 2 . 
        . 2 2 . 8 . 2 2 . . 8 2 . 2 2 . 
        . . 2 2 . . . 2 . 8 . 2 2 2 8 8 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 8 2 2 f 2 f 2 f 2 f 2 2 2 2 . 
        8 . . 2 2 2 2 2 2 2 2 2 2 . 2 . 
        . 8 . . . . . . . . . . . . 2 . 
        . . . 8 8 . . 8 . 8 . . . . . . 
        . . . . . . . . . . 8 . 8 8 . 8 
        `)
    pause(200)
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . 1 1 . . . . 
        . . . . . 1 1 . . . 1 1 1 . . . 
        . . . . . 1 1 . . . 1 1 1 1 . . 
        . . . . . 1 1 1 . . 1 1 1 . . . 
        . . . . . . 1 1 . . 1 e . . e . 
        . e e . 8 . 1 1 . . 8 e . e e . 
        . . e e . . . e . 8 . e e e 8 8 
        . . e e e e e e e e e e e e . . 
        . 8 e e f e f e f e f e e e e . 
        8 . . e e e e e e e e e e . e . 
        . 8 . . . . . . . . . . . . e . 
        . . . 8 8 . . 8 . 8 . . . . . . 
        . . . . . . . . . . 8 . 8 8 . 8 
        `)
    pause(1800)
    controller.moveSprite(ship, 100, 100)
})
function Spawn_Ship () {
    if (sprites.allOfKind(SpriteKind.Food).length >= 40) {
        return
    } else {
        new_ship = sprites.create(img`
            ................................
            ................................
            ................................
            ......e.e.....e.e......1........
            ......eee.....eee......11.......
            .......11......11......111......
            ......11......11.......1111...88
            .....11e......11....88811111....
            .....11e.....111.8888...111.....
            .....11e888..111.....ee..e......
            ...8.811..555.11.....e...e......
            .ee....11.555..11..eeeeeeee.....
            .eee...e.55555.e...eeeeeeee.....
            .8eee..e.55555.e..eeeeeeee......
            ..eeeeeeeeeeeeeeeeeeeeeee.......
            8..eeeeeeeeeeeeeeeeeeeeee.......
            8..eeefefefeefeefeefefeee.......
            8...eeeeeeeeeeeeeeeeeeeee.......
            .8...eeefefeefeefeeefeee........
            .88...eeeeeeeeeeeeeeeee.........
            ..88...eeeeeeeeeeeeee...........
            ...............8................
            ................................
            ......88...88....88.............
            ...................88888........
            .......................88.88..8.
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.Food)
        new_ship.setPosition(randint(0, 100 * 16), randint(0, 100 * 16))
        while (new_ship.overlapsWith(ship)) {
            new_ship.setPosition(randint(0, 100 * 16), randint(0, 100 * 16))
            pause(100)
        }
        new_ship.setVelocity(randint(-20, 20), randint(-20, 20))
        new_ship.setBounceOnWall(true)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    sprites.destroy(cannon_ball)
    info.changeScoreBy(50)
})
function big_enemy () {
    if (sprites.allOfKind(SpriteKind.Enemy).length >= 10) {
        return
    } else {
        large_pirate = sprites.create(img`
            ................................
            ................................
            ................................
            ......f.f.....f.f......f........
            ......fff.....fff......ff.......
            .......ff......ff......fff......
            ......ff......ff.......ffff...88
            .....ff2......ff....888fffff....
            .....ff2.....fff.8888...fff.....
            .....ff2888..fff.....22..2......
            ...8.8ff......ff.....2...2......
            .f2....ff......ff..22222222.....
            .f22...2.......2...2222222f.....
            .8222..2.......2..2222222f......
            ..22222222222222222222222.......
            8..f222222222222222222222.......
            8..f22f2f2f22f22f22f2f22f.......
            8...f2222222222222222222f.......
            .8...222f2f22f22f222f22f........
            .88...f2222222222222222.........
            ..88...ff2222222222ff...........
            ...............8................
            ................................
            ......88...88....88.............
            ...................88888........
            .......................88.88..8.
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.largeenemy)
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        enemy_health = 4
        statusbar.attachToSprite(large_pirate)
        statusbar.max = 2
        statusbar.value = 2
        statusbar.setBarBorder(1, 12)
        large_pirate.setPosition(randint(0, 100 * 16), randint(0, 100 * 16))
        while (large_pirate.overlapsWith(ship)) {
            large_pirate.setPosition(randint(0, 100 * 16), randint(0, 100 * 16))
            pause(100)
        }
        large_pirate.setVelocity(randint(-30, 30), randint(-30, 30))
        pirate_chasing = false
        large_pirate.setBounceOnWall(true)
        shooting = false
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 . . 2 2 . . . . 
        . . . . . 2 2 . . . 2 2 2 . . . 
        . . . . . 2 2 . . . 2 2 2 2 . . 
        . . . . . 2 2 2 . . 2 2 2 . . . 
        . . . . . . 2 2 . . 2 2 . . 2 . 
        . 2 2 . 8 . 2 2 . . 8 2 . 2 2 . 
        . . 2 2 . . . 2 . 8 . 2 2 2 8 8 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 8 2 2 f 2 f 2 f 2 f 2 2 2 2 . 
        8 . . 2 2 2 2 2 2 2 2 2 2 . 2 . 
        . 8 . . . . . . . . . . . . 2 . 
        . . . 8 8 . . 8 . 8 . . . . . . 
        . . . . . . . . . . 8 . 8 8 . 8 
        `)
    sprites.destroy(otherSprite, effects.spray, 200)
    info.changeScoreBy(-400)
    pause(200)
    ship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . 1 1 . . . . 
        . . . . . 1 1 . . . 1 1 1 . . . 
        . . . . . 1 1 . . . 1 1 1 1 . . 
        . . . . . 1 1 1 . . 1 1 1 . . . 
        . . . . . . 1 1 . . 1 e . . e . 
        . e e . 8 . 1 1 . . 8 e . e e . 
        . . e e . . . e . 8 . e e e 8 8 
        . . e e e e e e e e e e e e . . 
        . 8 e e f e f e f e f e e e e . 
        8 . . e e e e e e e e e e . e . 
        . 8 . . . . . . . . . . . . e . 
        . . . 8 8 . . 8 . 8 . . . . . . 
        . . . . . . . . . . 8 . 8 8 . 8 
        `)
})
let pirate_projectile: Sprite = null
let dy = 0
let dx = 0
let large_pirate: Sprite = null
let new_ship: Sprite = null
let pirate: Sprite = null
let enemy_health = 0
let statusbar: StatusBarSprite = null
let cannon_ball: Sprite = null
let madecolony: Sprite = null
let myMinimap = 0
let speed_bar: StatusBarSprite = null
let shooting = false
let pirate_chasing = false
let ship: Sprite = null
game.splash("press e to dash", "press space to shoot")
game.splash("touch the white tiles to create colonies", "colonies generate gold")
game.splash("The queen has funded your expedition")
game.splash("reach a score of 10000 to win", "fight off British privateers")
game.splash("capture trade ships for gold", "establish trading posts for 1000 gold")
tiles.setCurrentTilemap(tilemap`level1`)
ship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 . . 1 1 . . . . 
    . . . . . 1 1 . . . 1 1 1 . . . 
    . . . . . 1 1 . . . 1 1 1 1 . . 
    . . . . . 1 1 1 . . 1 1 1 . . . 
    . . . . . . 1 1 . . 1 e . . e . 
    . e e . 8 . 1 1 . . 8 e . e e . 
    . . e e . . . e . 8 . e e e 8 8 
    . . e e e e e e e e e e e e . . 
    . 8 e e f e f e f e f e e e e . 
    8 . . e e e e e e e e e e . e . 
    . 8 . . . . . . . . . . . . e . 
    . . . 8 8 . . 8 . 8 . . . . . . 
    . . . . . . . . . . 8 . 8 8 . 8 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(ship, assets.tile`myTile0`)
scene.cameraFollowSprite(ship)
controller.moveSprite(ship, 100, 100)
info.setScore(1500)
let possible_colony1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . c . c 1 1 1 1 1 1 1 1 c . c . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . 1 b 1 1 1 1 1 1 1 1 b 1 . . 
    . . 1 1 b b b b b b b b 1 1 . . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . . c c c c c c c c c c . . . 
    . c . . . . . . . . . . . . c . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.colony1)
tiles.placeOnTile(possible_colony1, tiles.getTileLocation(34, 77))
let possible_colony2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . c . c 1 1 1 1 1 1 1 1 c . c . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . 1 b 1 1 1 1 1 1 1 1 b 1 . . 
    . . 1 1 b b b b b b b b 1 1 . . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . . c c c c c c c c c c . . . 
    . c . . . . . . . . . . . . c . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.colony2)
tiles.placeOnTile(possible_colony2, tiles.getTileLocation(87, 52))
let possible_colony3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . c . c 1 1 1 1 1 1 1 1 c . c . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . 1 b 1 1 1 1 1 1 1 1 b 1 . . 
    . . 1 1 b b b b b b b b 1 1 . . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . . c c c c c c c c c c . . . 
    . c . . . . . . . . . . . . c . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.colony3)
tiles.placeOnTile(possible_colony3, tiles.getTileLocation(89, 10))
let possible_colony4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . c . c 1 1 1 1 1 1 1 1 c . c . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . 1 b 1 1 1 1 1 1 1 1 b 1 . . 
    . . 1 1 b b b b b b b b 1 1 . . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . . c c c c c c c c c c . . . 
    . c . . . . . . . . . . . . c . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.colony4)
tiles.placeOnTile(possible_colony4, tiles.getTileLocation(46, 15))
let possible_colony5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . c . c 1 1 1 1 1 1 1 1 c . c . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . 1 b 1 1 1 1 1 1 1 1 b 1 . . 
    . . 1 1 b b b b b b b b 1 1 . . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . . c c c c c c c c c c . . . 
    . c . . . . . . . . . . . . c . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.colony5)
tiles.placeOnTile(possible_colony5, tiles.getTileLocation(21, 55))
let possible_colony6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . c . c 1 1 1 1 1 1 1 1 c . c . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . b 1 1 1 1 1 1 1 1 1 1 b . . 
    . . 1 b 1 1 1 1 1 1 1 1 b 1 . . 
    . . 1 1 b b b b b b b b 1 1 . . 
    . . c 1 1 1 1 1 1 1 1 1 1 c . . 
    . . . c c c c c c c c c c . . . 
    . c . . . . . . . . . . . . c . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.colony6)
tiles.placeOnTile(possible_colony6, tiles.getTileLocation(56, 41))
let colonypoints = 0
for (let index = 0; index < 6; index++) {
    Spawn_Ship()
}
let bigpirate_chasing = false
pirate_chasing = false
shooting = false
let statusbar2 = statusbars.create(80, 10, StatusBarKind.Health)
statusbar2.value = 0
statusbar2.max = 10000
statusbar2.setColor(8, 1)
statusbar2.positionDirection(CollisionDirection.Top)
statusbar2.setBarBorder(1, 15)
speed_bar = statusbars.create(35, 7.5, StatusBarKind.Energy)
speed_bar.setLabel("SPEED")
speed_bar.max = 100
speed_bar.value = 100
speed_bar.setColor(5, 1)
speed_bar.positionDirection(CollisionDirection.Bottom)
speed_bar.setBarBorder(1, 15)
myMinimap = myMinimap
let number_of_colonies = 0
let show_text = false
game.onUpdate(function () {
    if (info.score() > 10000) {
        if (number_of_colonies < 6) {
            if (show_text == false) {
                game.showLongText("build all 6 trading posts to win", DialogLayout.Bottom)
                show_text = true
            }
        } else {
            game.setGameOverMessage(true, "YOU HAVE MADE A PROFITABLE EXPEDITION")
            game.gameOver(true)
        }
    }
})
game.onUpdate(function () {
    pause(1)
    if (dx < 100 && dy < 100) {
        pirate_chasing = true
    }
    if (pirate_chasing == true) {
        pirate.follow(ship, 65)
    }
})
game.onUpdate(function () {
    pause(1)
    if (dx < 100 && dy < 100) {
        bigpirate_chasing = true
    }
    if (bigpirate_chasing == true) {
        large_pirate.follow(ship, 55)
    }
})
game.onUpdateInterval(2500, function () {
    let ship_dy = 0
    let ship_dx = 0
    pause(1)
    if (ship_dx < 75 && ship_dy < 75) {
        shooting = true
    } else {
        shooting = false
    }
    if (shooting == true) {
        pirate_projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . f 2 2 2 f 2 f . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, large_pirate, (ship.x - large_pirate.x) * 1.65, (ship.y - large_pirate.y) * 1.65)
        pirate_projectile.setKind(SpriteKind.pirateprojectile)
    }
})
forever(function () {
    info.changeScoreBy(-2)
    statusbar2.value = info.score()
    pause(175)
    if (statusbar2.value < 0) {
        statusbar2.value = 0
    }
})
forever(function () {
    Spawn_Ship()
    pause(1500)
})
forever(function () {
    spawn_enemy()
    pause(3500 / (info.score() / 3250))
})
forever(function () {
    big_enemy()
    pause(22500 / (info.score() / 2750))
})
game.onUpdateInterval(100, function () {
    info.changeScoreBy(colonypoints * 2)
    speed_bar.value += 1
})
