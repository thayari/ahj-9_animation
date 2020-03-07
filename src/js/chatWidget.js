export default class ChatWidget {
  constructor() {
    this.redButton = null;
    this.chatWindow = null;
  }

  createButton() {
    this.redButton = document.createElement('div');
    this.redButton.classList.add('red-button');
    document.body.append(this.redButton);
    this.addButtonListener();
  }

  createChatWindow() {
    this.chatWindow = document.createElement('div');
    this.chatWindow.classList.add('chat-window', 'chat-window_hide');
    this.chatWindow.innerHTML = `<button class="chat-window_close">×</button>
    <h2 class="chat-window_header">Напишите нам</h2>
    <textarea class="chat-window_input"></textarea>
    <button class="chat-window_button">Отправить</button>`;
    document.body.append(this.chatWindow);

    const close = this.chatWindow.querySelector('.chat-window_close');
    close.addEventListener('click', () => {
      this.chatWindow.classList.add('chat-window_hide');
      this.redButton.classList.remove('red-button_hide');
    });
  }

  addButtonListener() {
    this.redButton.addEventListener('click', () => {
      this.redButton.classList.add('red-button_hide');
      this.chatWindow.classList.remove('chat-window_hide');
    });
  }

  start() {
    this.createButton();
    this.createChatWindow();
  }
}
