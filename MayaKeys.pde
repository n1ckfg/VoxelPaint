Data dataMaya;
String mayaFileName = "mayaScript";
String mayaFilePath = "scripts";
String mayaFileType = "py";

void mayaKeysMain() {
  mayaKeysBegin();
  for (int i=0;i<voxel.length;i++) {
    for (int j=0;j<voxel[i].length;j++) {
      for (int k=0;k<voxel[i][j].length;k++) {
        if(voxel[i][j][k].drawMe){
        dataMaya.add("polyCube()" + "\r");
        dataMaya.add("move(" + (voxel[i][j][k].p.x) + ", " + (voxel[i][j][k].p.y) + "," + (voxel[i][j][k].p.z) + ")" + "\r");
        dataMaya.add("setKeyframe()" + "\r");
        }
      }
    }
  }
  mayaKeysEnd();
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

void mayaKeysBegin() {
  dataMaya = new Data();
  dataMaya.beginSave();
  dataMaya.add("from maya.cmds import *" + "\r");
  dataMaya.add("from random import uniform as rnd" + "\r");
  dataMaya.add("#select(all=True)" + "\r");
  dataMaya.add("#delete()" + "\r");
  dataMaya.add("#playbackOptions(minTime=\"0\", maxTime=\"" + 100 + "\")" + "\r");
  dataMaya.add("#grav = gravity()" + "\r");  
  dataMaya.add("\r");
}

void mayaKeysEnd() {
  dataMaya.add("#floor = polyPlane(w=30,h=30)" + "\r");
  dataMaya.add("#rigidBody(passive=True)" + "\r");
  dataMaya.add("#move(0,0,0)" + "\r");
  dataMaya.endSave(mayaFilePath + "/" + mayaFileName + "." + mayaFileType);
}


