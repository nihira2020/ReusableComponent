import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headername="Contact"

  statusdata = [{
    user: "Rakhesh",
    date: "12/03/2022 8:30 AM",
    desc: 'The ticket 1234 is Opened',
    borderclass: 'border-primary',
    color: 'blue'
  },
  {
    user: "Admin User",
    date: "12/03/2022 9:20 AM",
    desc: 'Changed Status into In Progress',
    borderclass: 'border-warning',
    color: 'orange'
  },
  {
    user: "Admin User",
    date: "12/03/2022 9:30 AM",
    desc: 'Commented Please provide model & Serial ID',
    borderclass: 'border-primary',
    color: 'blue'
  },
  {
    user: "Rakhesh",
    date: "12/03/2022 10:30 AM",
    desc: 'Replied model: M3 Serial ID : 3344',
    borderclass: 'border-primary',
    color: 'blue'
  },
  {
    user: "Admin User",
    date: "12/03/2022 11:30 AM",
    desc: 'Changed status : resolved',
    borderclass: 'border-success',
    color: 'green'
  },
  {
    user: "Rakhesh",
    date: "12/03/2022 11:40 AM",
    desc: 'Commented Thanks for the support , issue resolved',
    borderclass: 'border-primary',
    color: 'blue'
  },
  {
    user: "Admin User",
    date: "12/03/2022 11:50 AM",
    desc: 'Changed status : Closed',
    borderclass: 'border-danger',
    color: 'red'
  },
  ]


}
