function Plane(x, z, type, Mesh)
{
    this.x = x;
    this.z = z;


    this.Output = Mesh.clone();
    this.Output.position.x = this.x;
    this.Output.position.z = this.z;
    this.Output.position.y = 0;
    this.Output.rotateX(Math.PI / 2);
}