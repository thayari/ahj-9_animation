export default class Like {
  constructor() {
    this.likeButton = null;
  }

  createButton() {
    this.likeButton = document.createElement('button');
    this.likeButton.classList.add('like-button');
    this.likeButton.textContent = 'Like';
    document.body.append(this.likeButton);
    this.addButtonListener();
  }

  createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    this.likeButton.append(heart);

    heart.style.animationName = Like.randomTrajectory();

    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }

  static randomTrajectory() {
    const rand = Math.floor(1 + Math.random() * 4);
    return `opacity, moveup, move${rand}`;
  }

  addButtonListener() {
    this.likeButton.addEventListener('click', () => {
      this.createHeart();
    });
  }

  start() {
    this.createButton();
  }
}
