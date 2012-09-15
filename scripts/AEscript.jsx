{  //start script
	app.beginUndoGroup("foo");

	// create project if necessary
	var proj = app.project;
	if(!proj) proj = app.newProject();

	// create new comp named 'my comp'
	var compW = 1920; // comp width
	var compH = 1080; // comp height
	var compL = 100;  // comp length (seconds)
	var compRate = 60; // comp frame rate
	var compBG = [0/255,0/255,0/255] // comp background color
	var myItemCollection = app.project.items;
	var myComp = myItemCollection.addComp('my comp',compW,compH,1,compL,compRate);
	myComp.bgColor = compBG;

	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 330.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 370.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 300.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 310.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 320.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 330.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 340.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 340.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 350.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 350.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 360.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 370.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 380.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 260.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 270.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 280.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 290.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 300.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 310.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 350.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 360.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 370.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 370.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 380.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 380.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 390.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 240.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 250.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 250.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 300.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 370.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 380.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 390.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 400.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 240.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 240.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 270.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 280.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 290.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 300.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 300.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 310.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 320.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 340.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 350.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 390.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 410.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 230.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 260.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 290.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 330.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 330.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 340.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 350.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 360.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 390.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 400.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 410.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 230.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 260.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 290.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 370.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 400.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 410.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 230.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 260.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 290.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 360.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 370.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 400.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 410.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 230.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 260.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 270.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 280.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 290.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 290.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 300.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 360.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 390.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 400.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 410.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 230.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 290.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 350.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 360.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 390.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 400.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 410.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 230.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 290.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 350.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 390.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 400.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 230.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 290.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 300.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 330.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 340.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 350.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 390.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 400.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 400.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 230.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 240.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 300.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 380.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 390.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 400.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 240.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 240.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 300.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 330.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 380.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 380.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 380.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 390.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 390.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 240.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 240.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 250.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 310.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 370.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 370.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 380.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 380.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 240.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 260.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 270.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 280.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 310.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 360.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 370.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 370.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 400.0, 370.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 250.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 280.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 290.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 300.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 310.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 320.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 320.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 330.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 340.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 350.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 350.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 360.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 410.0, 370.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 330.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 330.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 340.0,490.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 420.0, 350.0,490.0]);
	myComp.layers.addCamera("Camera 1", [960,540]);

	app.endUndoGroup();
}  //end script
