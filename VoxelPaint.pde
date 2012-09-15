import processing.opengl.*;
import java.awt.event.*;
 
int sW = 64;
int sH = 64;
int sD = 64;
int scaleFactor=10;
int dW = 1920;
int dH = 1080;
int fps = 60;
PVector offsetOrig = new PVector(0, 0, -1 * 20 * scaleFactor);
PVector offset = offsetOrig;
PVector loc = new PVector(0, 0, 0);
float offsetDelta = 10;
float drawOdds = 0.001;
boolean triggered=false;

Voxel[][][] voxel;

void setup() {
  Settings settings = new Settings("settings.txt");
  voxel = new Voxel[sW][sH][sD];
  size(sW*scaleFactor, sH*scaleFactor, OPENGL);
  addMouseWheelListener(new MouseWheelListener() { 
    public void mouseWheelMoved(MouseWheelEvent mwe) { 
      mouseWheel(mwe.getWheelRotation());
  }}); 
  initVolume();
  noCursor();
  frameRate(fps);
}

void draw() {
  controls();
  background(0);
  for (int i=0;i<voxel.length;i++) {
    for (int j=0;j<voxel[i].length;j++) {
      for (int k=0;k<voxel[i][j].length;k++) {
        voxel[i][j][k].selectMe=false;
        voxel[i][j][k].sameZ=false;
        voxel[int(loc.x)][int(loc.y)][int(loc.z)].selectMe=true;
        voxel[i][j][int(loc.z)].sameZ=true;
        voxel[i][j][k].update();
      }
    }
  }
  //println(triggered);
}

void posCheck(){
    if(loc.z>sD-1) loc.z=sD-1;
    if(loc.z<0) loc.z=0;
    if(loc.x>sW-1) loc.x=sW-1;
    if(loc.x<0) loc.x=0;
    if(loc.y>sH-1) loc.y=sH-1;
    if(loc.y<0) loc.y=0;
}

void initVolume(){
    for (int i=0;i<voxel.length;i++) {
    for (int j=0;j<voxel[i].length;j++) {
      for (int k=0;k<voxel[i][j].length;k++) {
        voxel[i][j][k] = new Voxel(i, j, k, scaleFactor);
      }
    }
  }
}


