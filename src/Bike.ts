/**
 * Bike (4)
 * By: Noah McCaskill
 * Version: 1.0
 * Since:   2022-11-11
 */

import Vehicle from "./Vehicle";

class Bike extends Vehicle {
  private cadence = 0;

  // status
  status(): void {
    super.status();
    console.log(`    → Cadence: ${this.cadence}`);
  }

  // getter cadence
  getCadence(): number {
    return this.cadence;
  }

  // method for acceleration
  accel(appliedPower: number): void {
    this.cadence = this.cadence + appliedPower;
    super.setSpeed(this.cadence * 2);
  }

  // makes bel=l sound ding
  ringBell(): void {
    console.log("Ding ding!\n");
  }
}

export = Bike;
