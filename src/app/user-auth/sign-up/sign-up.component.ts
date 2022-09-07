import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Explane input onChange Text";

  displayVal = '';

  getValue(val: string) {
    console.log(val);
    this.displayVal = val;
  };

  count = 0;
  counter(type: string) {

    // type === 'add' ?
    //   this.count++
    //   : this.count--

    if (type === 'add') {
      this.count++
    } else if (type === 'minus') {
      this.count > 0 && this.count--
    } else {
      null
    }
  };


  show = true;
  textShow = 'yes';

  isShowDivIf = false;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }

  color = 'red';

  Users = ['Anil', 'Bhaker', 'Sam', 'Pater', 'Burce'];
  UsersDetails = [
    { name: 'Anil', email: 'anil@gmail.com', phone: 9384787843, socialAccounts: ['facebook', ' instagram', 'gmail'] },
    { name: 'Bhaker', email: 'bhaker@gmail.com', phone: 7984787843, socialAccounts: ['facebook', ' instagram', 'gmail'] },
    { name: 'Sam', email: 'sam@gmail.com', phone: 8684787843, socialAccounts: ['facebook', ' instagram', 'gmail'] },
    { name: 'Pater', email: 'pater@gmail.com', phone: 9084787843, socialAccounts: ['facebook', ' instagram', 'gmail'] },
  ];

  styleColor = '#fff';
  bgColor = 'blueviolet';
  styleTitle = "Style Binding";

  updateColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var bgColor = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      bgColor += letters[Math.floor(Math.random() * 12) + 1];
    }

    this.styleColor = color;
    this.bgColor = bgColor;

    return { color, bgColor }

  };
}
