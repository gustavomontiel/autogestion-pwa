export enum OpcionesFlujos {
  FLUJO_PAGOS = 'FLUJO_PAGOS',
  FLUJO_QR_FACTURA = 'FLUJO_QR_FACTURA',
  FLUJO_RECLAMOS = 'FLUJO_RECLAMOS'
}
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const RutasOpcionesFlujo: any = {
  HOME: 'home',
  INGRESAR_DOCUMENTO: 'ingresar-documento',

  // flujo pagos
  [OpcionesFlujos.FLUJO_PAGOS]: 'conexiones-deuda',
  COMPROBANTES_DEUDA: 'comprobantes-deuda',

  // flujo qr factura
  [OpcionesFlujos.FLUJO_QR_FACTURA]: 'conexiones-factura',
  COMPROBANTES_QR_FACTURA: 'comprobantes-qr-factura',
  QR_FACTURA: 'qr-factura',

  // flujo reclamos
  [OpcionesFlujos.FLUJO_RECLAMOS]: 'conexiones-reclamo',
  GENERAR_RECLAMO: 'generar-reclamo'
};
