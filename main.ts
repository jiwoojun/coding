scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(true)
})
let player2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 9 . 7 7 7 7 7 7 7 . . . . 
    . . . 9 9 7 7 7 7 7 7 7 7 7 . . 
    . . . 9 9 7 7 7 7 7 7 7 7 7 7 . 
    . . . 9 9 7 7 7 7 7 7 7 7 7 . . 
    . . . 9 . 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
player2.setVelocity(30, -50)
scene.cameraFollowSprite(player2)
tiles.placeOnRandomTile(player2, assets.tile`myTile4`)
game.onUpdateInterval(500, function () {
    if (controller.A.isPressed()) {
        player2.setVelocity(60, 100)
    } else {
        player2.setVelocity(60, -100)
    }
})
