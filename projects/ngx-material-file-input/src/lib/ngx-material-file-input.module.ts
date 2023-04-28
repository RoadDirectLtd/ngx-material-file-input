import { FocusMonitor } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { FileInputComponent } from './file-input/file-input.component';
import { ByteFormatPipe } from './pipe/byte-format.pipe';

@NgModule({
  declarations: [FileInputComponent, ByteFormatPipe],
  providers: [FocusMonitor],
  exports: [FileInputComponent, ByteFormatPipe]
})
export class MaterialFileInputModule { }
