import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-fb-page',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.css']
})
export class FbComponent implements OnInit {
  width: number;
  height: number;
  plugin: SafeHtml;

  constructor(
    private el: ElementRef,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.width = 300;
    this.height = this.el.nativeElement.clientHeight;
    this.plugin = this.sanitizer.bypassSecurityTrustHtml(getPluginCode(this.width, this.height));
  }
}

function getPluginCode(width: number, height: number): string {
  return `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%E9%9D%99%E5%B2%A1%E7%9C%8C%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%82%B4%E3%83%AB%E3%83%95%E5%8D%94%E4%BC%9A-106178680734223%2F&tabs=timeline&width=${width}&height=${height}&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=false&appId=454435042148201"
    width="${width}"
    height="${height}"
    style="border:none;overflow:hidden"
    scrolling="no"
    frameborder="0"
    allowTransparency="true"
    allow="encrypted-media">
    </iframe>`;
}
