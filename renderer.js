class PomodoroTimer {
  constructor() {
    this.timerDisplay = document.getElementById("timer");
    this.durationInput = document.getElementById("durationInput");
    this.applyBtn = document.getElementById("applyBtn");
    this.startBtn = document.getElementById("startBtn");
    this.resetBtn = document.getElementById("resetBtn");

    this.timer = null;
    this.timeLeft = 25 * 60;
    this.isRunning = false;

    this.bindEvents();
    this.updateDisplay();
  }

  bindEvents() {
    this.startBtn.addEventListener("click", () => this.toggle());
    this.resetBtn.addEventListener("click", () => this.reset());
    this.applyBtn.addEventListener("click", () => this.applyDuration());
  }

  updateDisplay() {
    const minutes = Math.floor(this.timeLeft / 60).toString().padStart(2, "0");
    const seconds = (this.timeLeft % 60).toString().padStart(2, "0");
    this.timerDisplay.textContent = `${minutes}:${seconds}`;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateDisplay();
      } else {
        this.pause();
        this.showAlert("Udahan Bro! Santai dulu gak sih!");
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.timer);
    this.isRunning = false;
  }

  reset() {
    this.pause();
    this.timeLeft = this.getInputDuration() * 60;
    this.updateDisplay();
    this.startBtn.textContent = "Start";
  }

  applyDuration() {
    if (!this.isRunning) {
      this.timeLeft = this.getInputDuration() * 60;
      this.updateDisplay();
    }
  }

  toggle() {
    if (!this.isRunning && this.timeLeft < this.getInputDuration() * 60) {
      this.start();
      this.startBtn.textContent = "Pause";
    } else if (this.isRunning) {
      this.pause();
      this.startBtn.textContent = "Resume";
    } else {
      this.start();
      this.startBtn.textContent = "Pause";
    }
  }

  getInputDuration() {
    return parseInt(this.durationInput.value) || 25;
  }

  showAlert(message) {
    alert(message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PomodoroTimer();
});
