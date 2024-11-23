import { Component, inject, input, viewChild,  AfterViewInit, ElementRef, OnDestroy} from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  //providers: [ModalService], injecting service specifically for this component.
})
export class ModalComponent implements AfterViewInit, OnDestroy{
  modal = inject(ModalService);

  id = input.required<string>();
  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('baseDialog');

  ngAfterViewInit(): void {
    this.modal.register(this.id(), this.dialog().nativeElement);
  }

  ngOnDestroy(): void {
      this.modal.unregister(this.id()); 
  }
}
