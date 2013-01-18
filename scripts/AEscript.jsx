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

		p.setValueAtTime(0, [ 50.0, 110.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 60.0, 110.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 70.0, 110.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 120.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 130.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 140.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 150.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 160.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 180.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 100.0, 110.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 100.0, 190.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 110.0, 110.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 110.0, 190.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 120.0, 110.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 120.0, 190.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 130.0, 110.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 190.0,60.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 160.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 170.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 180.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 200.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 210.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 200.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 210.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 220.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 240.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 250.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 500.0, 180.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 500.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 500.0, 200.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 510.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 520.0, 210.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 560.0, 250.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 570.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 580.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 590.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 600.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 600.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 610.0, 250.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 610.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 610.0, 270.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 610.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 610.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 610.0, 330.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 610.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 620.0, 250.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 620.0, 290.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 620.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 620.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 620.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 630.0, 240.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 630.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 630.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 630.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 640.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 640.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 640.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 640.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 640.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 650.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 650.0, 240.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 650.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 650.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 650.0, 340.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 650.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 660.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 660.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 660.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 660.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 660.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 670.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 670.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 670.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 670.0, 330.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 670.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 680.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 680.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 680.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 690.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 690.0, 240.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 690.0, 250.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 690.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 690.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 700.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 700.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 710.0, 260.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 710.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 720.0, 280.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 720.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 720.0, 360.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 730.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 730.0, 350.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 740.0, 300.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 740.0, 310.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 740.0, 320.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 740.0, 330.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 740.0, 340.0,0.0]);
	myComp.layers.addCamera("Camera 1", [960,540]);

	app.endUndoGroup();
}  //end script
