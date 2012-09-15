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

		p.setValueAtTime(0, [ 90.0, 100.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 110.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 120.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 130.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 140.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 150.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 90.0, 160.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 100.0, 80.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 100.0, 90.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 100.0, 160.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 100.0, 170.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 100.0, 180.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 110.0, 80.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 110.0, 180.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 110.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 120.0, 70.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 120.0, 80.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 120.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 120.0, 200.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 120.0, 210.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 130.0, 70.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 130.0, 210.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 130.0, 220.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 60.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 70.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 150.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 160.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 170.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 180.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 190.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 200.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 210.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 220.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 220.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 230.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 140.0, 240.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 60.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 130.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 140.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 150.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 220.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 240.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 250.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 260.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 270.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 150.0, 280.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 160.0, 60.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 160.0, 120.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 160.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 160.0, 280.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 160.0, 290.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 160.0, 300.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 170.0, 50.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 170.0, 110.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 170.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 170.0, 300.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 170.0, 310.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 170.0, 320.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 180.0, 50.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 180.0, 100.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 180.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 180.0, 320.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 50.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 90.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 100.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 190.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 200.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 210.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 220.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 230.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 240.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 250.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 260.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 190.0, 320.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 200.0, 50.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 200.0, 90.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 200.0, 180.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 200.0, 190.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 200.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 200.0, 270.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 200.0, 280.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 200.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 210.0, 50.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 210.0, 90.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 210.0, 170.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 210.0, 180.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 210.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 210.0, 280.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 210.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 210.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 50.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 80.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 170.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 220.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 50.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 80.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 170.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 230.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 50.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 80.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 160.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 170.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 240.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 50.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 60.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 80.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 160.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 250.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 60.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 70.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 80.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 160.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 220.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 230.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 260.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 70.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 80.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 80.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 90.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 150.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 160.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 220.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 270.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 80.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 90.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 100.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 110.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 150.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 210.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 220.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 280.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 80.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 110.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 120.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 130.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 140.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 150.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 150.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 190.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 200.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 290.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 80.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 150.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 160.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 170.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 180.0,0.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 300.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 90.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 150.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 310.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 90.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 150.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 320.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 100.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 150.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 320.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 330.0, 330.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 100.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 110.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 150.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 160.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 340.0, 320.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 110.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 120.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 160.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 170.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 280.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 290.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 350.0, 320.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 120.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 130.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 180.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 270.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 280.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 360.0, 310.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 130.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 140.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 190.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 200.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 210.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 240.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 250.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 260.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 270.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 370.0, 300.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 140.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 150.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 160.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 210.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 220.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 230.0,420.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 280.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 380.0, 290.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 160.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 170.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 180.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 190.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 200.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 210.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 220.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 230.0,630.0]);
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

		p.setValueAtTime(0, [ 390.0, 260.0,630.0]);
	var solid = myComp.layers.addSolid([1.0, 1.0, 0], "my square", 50, 50, 1);
	solid.threeDLayer=true;

	var p = solid.property("position");

		p.setValueAtTime(0, [ 390.0, 270.0,630.0]);
	myComp.layers.addCamera("Camera 1", [960,540]);

	app.endUndoGroup();
}  //end script
