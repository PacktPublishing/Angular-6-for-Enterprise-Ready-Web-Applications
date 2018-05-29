import { Component, OnInit } from '@angular/core'

interface IEvent {
  event: 'checkoutCompleted' | 'checkoutInitiated'
}
declare let dataLayer: IEvent[]

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
})
export class PosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  checkout(transaction) {
    dataLayer.push({
      event: 'checkoutInitiated',
    })

    setTimeout(() => {
      dataLayer.push({
        event: 'checkoutCompleted',
      })
    }, 500)
  }
}
