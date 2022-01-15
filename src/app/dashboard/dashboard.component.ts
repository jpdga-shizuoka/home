import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private deviceService: DeviceDetectorService) {
  }

  get isPluginEnabled(): boolean {
    const device = this.deviceService.getDeviceInfo();
    return device.browser != 'Safari' || device.os != 'iOS';
  }
}
