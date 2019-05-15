
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user/user.component';
import { UserService } from '../../_services/user.service';

@Component({
    selector: 'app-member-lists',
    templateUrl: './member-lists.component.html',
    styleUrls: ['./member-lists.component.css']
})
/** member-lists component*/
export class MemberListsComponent implements OnInit{
  users: User[];
    /** member-lists ctor */
    constructor(private userService: UserService) {

  }

  ngOnInit() { }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
  }, error => {
  console.log('error loading users');
});
  }
}
