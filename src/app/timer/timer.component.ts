import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  currentMode: string = 'pomodoro'; // Modes: pomodoro, short, long
  timeInSeconds: number = 25 * 60; // Default: 25 minutes
  displayTime: string = '25:00';
  isRunning: boolean = false;
  timer: any;

  // Task Information
  taskNumber: number = 1;
  taskName: string = 'jhu';

  // Set mode: Pomodoro, Short Break, Long Break
  setMode(mode: string) {
    this.currentMode = mode;
    this.isRunning = false;
    clearInterval(this.timer);

    if (mode === 'pomodoro') this.timeInSeconds = 25 * 60;
    else if (mode === 'short') this.timeInSeconds = 5 * 60;
    else if (mode === 'long') this.timeInSeconds = 15 * 60;

    this.updateDisplay();
  }

  // Toggle Timer Start/Pause
  toggleTimer() {
    if (this.isRunning) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        if (this.timeInSeconds > 0) {
          this.timeInSeconds--;
          this.updateDisplay();
        } else {
          clearInterval(this.timer);
          alert('Time is up!');
        }
      }, 1000);
    }
    this.isRunning = !this.isRunning;
  }

  // Update Timer Display
  updateDisplay() {
    const minutes = Math.floor(this.timeInSeconds / 60);
    const seconds = this.timeInSeconds % 60;
    this.displayTime = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }
}
