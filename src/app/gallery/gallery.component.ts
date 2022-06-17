import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  allimages = [{
    'src' : 'assets/img1.jpeg'
}, {
    'src' : 'assets/img2.jpg'
}, {
    'src' : 'assets/img3.jpg'
},{
    'src' : 'assets/img4.jpg'
  }, {
    'src' : 'assets/img5.jpg'
}, {
    'src' : 'assets/img6.jpg'
},{
    'src' : 'assets/img7.jpeg'
  }, {
    'src' : 'assets/img8.jpeg'
}, {
    'src' : 'assets/img9.jpeg'
},{
    'src' : 'assets/img10.jpeg'
  }, {
    'src' : 'assets/img11.jpeg'
}, {
    'src' : 'assets/img12.jpeg'
},{
    'src' : 'assets/img13.jpeg'
  }, {
    'src' : 'assets/img14.jpeg'
}, {
    'src' : 'assets/img5.jpeg'
}];
  constructor() { }

  ngOnInit() {}

}