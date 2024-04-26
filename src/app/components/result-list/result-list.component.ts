import { Component, LOCALE_ID, inject } from '@angular/core';
import { ResultListService } from '../../service/result-list.service';
import { AsyncPipe, CurrencyPipe, registerLocaleData } from '@angular/common';
import { MbpsPipe } from '../../pipes/mbps.pipe';
import localeFr from '@angular/common/locales/fr';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeFr);
@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [AsyncPipe, MbpsPipe, CurrencyPipe, OrderByPipe, FormsModule],
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.scss',
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr'
    }
  ]
})
export class ResultListComponent {

  resultListService = inject(ResultListService);

  resultDataList = this.resultListService.getResultList() || [];
  sortBy: string = 'name';

}
