import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  imports: [CommonModule],
})
export class TimerComponent {
  workTime: number = 25 * 60; // 25 minutes in seconds
  breakTime: number = 5 * 60; // 5 minutes in seconds
  currentTime: number = this.workTime; // Start with work time
  timerStatus: string = 'Work Time'; // Work or Break Time
  isRunning: boolean = false; // Timer state
  interval: any; // Reference to the interval

  // Format time in mm:ss
  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  }

  // Start the timer
  startTimer() {
    if (this.isRunning) return; // Prevent multiple intervals
    this.isRunning = true;
    this.interval = setInterval(() => {
      if (this.currentTime > 0) {
        this.currentTime--;
      } else {
        this.toggleTimer();
      }
    }, 1000);
  }

  // Pause the timer
  pauseTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
  }

  // Reset the timer
  resetTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
    this.currentTime = this.timerStatus === 'Work Time' ? this.workTime : this.breakTime;
  }

  // Toggle between Work and Break time
  toggleTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
    if (this.timerStatus === 'Work Time') {
      this.timerStatus = 'Break Time';
      this.currentTime = this.breakTime;
    } else {
      this.timerStatus = 'Work Time';
      this.currentTime = this.workTime;
    }
    this.startTimer(); // Automatically start the next session
  }
}
