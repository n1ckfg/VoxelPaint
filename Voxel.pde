class Voxel {
  PVector p;
  float s;
  boolean drawMe = false;
  boolean selectMe = false;

  Voxel(float _x, float _y, float _z, float _s) {
    p = new PVector(_x*scaleFactor, _y*scaleFactor, _z*scaleFactor);
    s = _s;
  }

  void update() {
    drawVoxel();
  }

  void drawVoxel() {
    if(selectMe||drawMe){
      pushMatrix();
      translate(p.x + offset.x, p.y + offset.y, p.z + offset.z);
      if (selectMe && !drawMe) {
        strokeWeight(2);
        stroke(0,255,0);
        fill(0, 255, 0, 100);
      }
      else if (!selectMe && drawMe){
        strokeWeight(2);
        stroke(255,0,0);
        fill(255, 0, 0, 100);
      }
      else if (selectMe && drawMe){
         strokeWeight(10);
         stroke(255,255,0);
         fill(255, 255, 0, 200);
      }
      box(s);
      popMatrix();
  }
  }
}

