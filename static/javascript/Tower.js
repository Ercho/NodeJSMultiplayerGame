function Income(x, z, player)
{
    this.x = x;
    this.z = z;
    this.player = player;
    this.dmg = 5;

    this.upgrade = function ()
    {
        this.dmg+= 3;
    }

    this.attack = function ()
    {

    }
}