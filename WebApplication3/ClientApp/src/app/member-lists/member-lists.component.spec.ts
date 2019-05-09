/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MemberListsComponent } from './member-lists.component';

let component: MemberListsComponent;
let fixture: ComponentFixture<MemberListsComponent>;

describe('member-lists component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MemberListsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MemberListsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});