import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

import { Users } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: Users;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //make signal
  // avatar = input.required<String> ();
  // name = input.required <String> () ;
  // select = output<string>();

  // imagePath = computed (()=>{
  //   return 'assets/users/' + this.avatar ();
  // })

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
