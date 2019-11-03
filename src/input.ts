export enum Key {
  Q = 81,
  Z = 90,
  W = 87,
  A = 65,
  S = 83,
  D = 68,
  E = 69,
  J = 74,
  K = 75,
  LEFT = 37,
  UP = 38,
  RIGHT = 39,
  DOWN = 40,
  SHIFT = 16,
  SPACE = 32,
  COMMAND = 91,
}

export class Input {
  pressed = new Set<number>();

  constructor() {
    window.addEventListener('keyup', e => this.onKeyup(e));
    window.addEventListener('keydown', e => this.onKeydown(e));
  }

  public isPressed(key: Key) {
    return this.pressed.has(key);
  }

  private onKeyup(e: KeyboardEvent) {
    this.pressed.delete(e.keyCode);
  }

  private onKeydown(e: KeyboardEvent) {
    this.pressed.add(e.keyCode);
  }
}
