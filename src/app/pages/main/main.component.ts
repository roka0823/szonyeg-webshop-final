import { Component, OnInit } from '@angular/core';
import {Rug} from "../../shared/model/Rug";
import {RugService} from "../../shared/services/rug.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  rugs: Rug[] = [];

  constructor(private rugService: RugService) {
    rugService.getAll().subscribe((rugs) => {
      this.rugs = rugs;

      if (this.rugs.length === 0) {
        rugService.createDefaultRugs();
      }
    })
  }

  ngOnInit(): void {
  }

  onAddToCart(rug: Rug) {
    rug.cartedCount += 1;
    this.rugService.update(rug);
  }

  onRemoveFromCart(rug: Rug) {
    rug.cartedCount -= 1;

    if (rug.cartedCount < 0) {
      rug.cartedCount = 0;
    }

    this.rugService.update(rug);
  }

  onDelete(id: string) {
    this.rugService.delete(id);
  }
}
