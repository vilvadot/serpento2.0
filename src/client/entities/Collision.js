class Collision {
  static check(a, b, x, y, bound = 30) {
    const xCollision = x - bound <= a && x + bound >= a;
    const yCollision = y - bound <= b && y + bound >= b;

    return xCollision && yCollision;
  }
}

export default Collision;
