import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrFacturaPageRoutingModule } from './qr-factura-routing.module';

import { QrFacturaPage } from './qr-factura.page';
import { provideQRCode, QRCodeComponent, withAllowEmptyString, withColorDark, withColorLight, withCssClass, withElementType, withErrorCorrectionLevel, withImage, withImageHeight, withImageSrc, withImageWidth, withMargin, withSize, withVersion } from 'dfx-qrcode';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, QrFacturaPageRoutingModule, QRCodeComponent, SharedModule],
  declarations: [QrFacturaPage],
  providers: [
    provideQRCode(
      withAllowEmptyString(false),
      withColorDark('#000000'),
      withColorLight('#FFFFFF'),
      withCssClass('qrcode'),
      withElementType('img'),
      withErrorCorrectionLevel('L'),
      withMargin(4),
      withImage(withImageSrc('/assets/imgs/logo.png'), withImageWidth('40'), withImageHeight('40')),
      withVersion(-1),
      withSize(5),
    ),
  ],
})
export class QrFacturaPageModule {}
