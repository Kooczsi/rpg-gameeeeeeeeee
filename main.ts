namespace SpriteKind {
    export const rain = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hotdog == 1) {
        animation.runImageAnimation(
        Guy,
        [img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 4 5 7 7 7 7 7 7 7 7 7 7 7 f 
            f 4 4 2 5 f 7 7 f 7 7 7 7 7 7 f 
            f 7 4 4 2 5 f f 7 7 7 7 7 7 7 f 
            f 7 7 4 4 2 5 7 7 7 7 7 7 7 7 f 
            . f 7 7 4 4 4 7 7 7 7 7 7 7 f . 
            . f 7 7 7 4 7 7 7 7 7 7 7 7 f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 4 5 7 7 7 7 7 7 7 7 7 7 f 
            f 7 4 4 2 5 7 7 7 7 7 7 7 7 7 f 
            f 7 7 4 4 2 5 7 f 7 7 7 7 7 7 f 
            f 7 7 7 4 4 2 5 7 7 7 7 7 7 7 f 
            f 7 7 7 7 4 4 4 7 7 7 7 7 7 7 f 
            . f 7 7 7 7 4 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 5 7 7 7 7 7 7 7 7 7 7 f 
            f 7 4 4 2 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 4 2 5 7 f 7 7 7 7 7 7 f 
            f 7 7 7 4 7 2 5 7 7 7 7 7 7 7 f 
            f 7 7 7 7 4 4 7 7 7 7 7 7 7 7 f 
            . f 7 7 7 7 4 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 5 7 7 7 7 7 7 7 7 7 7 f 
            f 7 4 7 2 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 4 2 7 7 f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 f 5 7 7 7 7 7 7 7 f 
            f 7 7 7 7 4 7 7 7 7 7 7 7 7 7 f 
            . f 7 7 7 7 4 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 4 f 7 7 f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 f f 7 7 7 7 7 7 7 f 
            f 7 7 7 7 4 7 7 7 7 7 7 7 7 7 f 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 f 7 7 f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 f f 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `],
        250,
        false
        )
        hotdog = 0
    } else if (boba == 1) {
        animation.runImageAnimation(
        Guy,
        [img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c c c 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c 7 7 f 7 7 f 7 7 7 7 7 7 f 
            b d d d d 7 f f 7 7 7 7 7 7 7 f 
            b d d d d 7 7 7 7 7 7 7 7 7 7 f 
            b d d d d 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c c c 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c 7 7 f 7 7 f 7 7 7 7 7 7 f 
            c b b b b 7 f f 7 7 7 7 7 7 7 f 
            b d d d d 7 7 7 7 7 7 7 7 7 7 f 
            b d d d d 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c c c 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c 7 7 f 7 7 f 7 7 7 7 7 7 f 
            c b b b b 7 f f 7 7 7 7 7 7 7 f 
            c b b b b 7 7 7 7 7 7 7 7 7 7 f 
            b d d d d 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c c c 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c 7 7 f 7 7 f 7 7 7 7 7 7 f 
            c b b b b 7 f f 7 7 7 7 7 7 7 f 
            c b b b b 7 7 7 7 7 7 7 7 7 7 f 
            c b b b b 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c c c 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c 7 7 f 7 7 f 7 7 7 7 7 7 f 
            c b b b b 7 f f 7 7 7 7 7 7 7 f 
            c b b b b 7 7 7 7 7 7 7 7 7 7 f 
            c b b b b 7 7 7 7 7 7 7 7 7 f . 
            . c b b 7 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c c c 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c 7 7 f 7 7 f 7 7 7 7 7 7 f 
            c b b b b 7 f f 7 7 7 7 7 7 7 f 
            c b b b b 7 7 7 7 7 7 7 7 7 7 f 
            c b b b b 7 7 7 7 7 7 7 7 7 f . 
            . c b b 7 7 7 7 7 7 7 7 7 7 f . 
            . c b b 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `,img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 f 7 7 f 7 7 7 7 7 7 f 
            f 7 7 7 7 7 f f 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `],
        250,
        false
        )
        boba = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (hotdog == 0) {
        Guy.setImage(img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c c c 7 7 7 7 7 7 7 7 7 7 f 
            f 7 c 7 7 f 7 7 f 7 7 7 7 7 7 f 
            b d d d d 7 f f 7 7 7 7 7 7 7 f 
            b d d d d 7 7 7 7 7 7 7 7 7 7 f 
            b d d d d 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 7 7 f . 
            . b d d 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `)
        boba = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (boba == 0) {
        Guy.setImage(img`
            . . . . f f f f f f f f . . . . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
            f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
            f 7 4 5 7 7 7 7 7 7 7 7 7 7 7 f 
            f 4 4 2 5 f 7 7 f 7 7 7 7 7 7 f 
            f 7 4 4 2 5 f f 7 7 7 7 7 7 7 f 
            f 7 7 4 4 2 5 7 7 7 7 7 7 7 7 f 
            . f 7 7 4 4 4 7 7 7 7 7 7 7 f . 
            . f 7 7 7 4 7 7 7 7 7 7 7 7 f . 
            . . f f 7 7 7 7 7 7 7 7 f f . . 
            . . . . f f f f f f f f . . . . 
            `)
        hotdog = 1
    }
})
let boba = 0
let hotdog = 0
let Guy: Sprite = null
Guy = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 f 7 7 7 f 
    f 7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 f 7 7 f 7 7 7 7 7 7 f 
    f 7 7 7 7 7 f f 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f f 7 7 7 7 7 7 7 7 f f . . 
    . . . . f f f f f f f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Guy)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Guy, assets.tile`myTile`)
effects.starField.startScreenEffect()
forever(function () {
    controller.moveSprite(Guy, 100, 100)
})
