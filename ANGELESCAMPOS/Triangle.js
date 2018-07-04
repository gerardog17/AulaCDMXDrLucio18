
 var console=require ("console")
 
-class Forma{
+class Forma
+{
 
 	constructor(id,x,y)
-{
-this.id=id
-this.mover(x,y)
+		{
+		this.id=id
+		this.mover(x,y)
+		}
+	mover(x,y)
+		{
+		this.x=x
+		this.y=y
+		}
	}
-class Triangle extends Forma{
 	constructor(id,x,y,ladoA, ladoB, ladoC)
-{
+	{
 	super(id,x,y)
 	this.lado=lado
 
+	}
