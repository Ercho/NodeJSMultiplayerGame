function Base(x, z, player, Mesh)
{
    this.x = x;
    this.z = z;
    this.player = player;
    this.health = 1000;
    this.destroyed = false;

    this.Output = Mesh.clone();
    this.Output.position.x = this.x;
    this.Output.position.z = this.z;
    this.Output.position.y = 128;
    
}