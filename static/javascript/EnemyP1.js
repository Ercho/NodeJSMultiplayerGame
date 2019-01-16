function EnemyP1(x, z, player)
{
    this.x = x;
    this.z = z;
    this.player = player;
    this.dmg = 5;
    if (player)
        this.direction = 1;
    else
        this.direction = -1;

    this.attack = function ()
    {

    }

    this.move = function ()
    {

    }
}