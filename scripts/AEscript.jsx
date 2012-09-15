{  //start script
	app.beginUndoGroup("foo");

	// create project if necessary
	var proj = app.project;
	if(!proj) proj = app.newProject();

	// create new comp named 'my comp'
	var compW = 1920; // comp width
	var compH = 1080; // comp height
	var compL = 100;  // comp length (seconds)
	var compRate = 24; // comp frame rate
	var compBG = [0/255,0/255,0/255] // comp background color
	var myItemCollection = app.project.items;
	var myComp = myItemCollection.addComp('my comp',compW,compH,1,compL,compRate);
	myComp.bgColor = compBG;

	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 330.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 370.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 380.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 380.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 380.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 380.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 370.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 380.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 370.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 330.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 350.0,0.0]);
	myComp.layers.addCamera("Camera 1", [960,540]);

	app.endUndoGroup();
}  //end script
