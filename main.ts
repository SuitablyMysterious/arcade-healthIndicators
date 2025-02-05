namespace SpriteKind {
    export const healthIndicators = SpriteKind.create()
}
function updateHealthIndicator () {
	
}
function makeHealthIndicator (player2: Sprite, hex2: string, offsetX: number, offsetY: number) {
    healthIndicatorSprite = textsprite.create("")
    healthIndicatorSprite.setFlag(SpriteFlag.AutoDestroy, false)
    sprites.setDataSprite(healthIndicatorSprite, "player", player2)
    sprites.setDataNumber(healthIndicatorSprite, "offsetX", offsetX)
    sprites.setDataNumber(healthIndicatorSprite, "offsety", offsetY)
    healthIndicatorSprite.setKind(SpriteKind.healthIndicators)
    healthIndicatorSprites.push(healthIndicatorSprite)
}
let healthIndicatorSprite: TextSprite = null
let healthIndicatorSprites: TextSprite[] = []
healthIndicatorSprites = []
