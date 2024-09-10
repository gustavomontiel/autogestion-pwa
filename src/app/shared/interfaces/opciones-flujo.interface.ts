import { OpcionesFlujos } from '../const/rutas-opciones-flujo.const';
import { IntConexionesDeuda } from './conexiones-deuda.interface';
import { IntFacturasLink } from './facturas-link.interface';
import { IntFacturasPendiente } from './facturas-pendientes.interface';

export interface IntOpcionesFlujo {
  flujoSeleccionado: OpcionesFlujos | '';
  nroDocumento: string;
  flujoPagos: {
    conexionesDeuda: IntConexionesDeuda[];
    conexionSeleccionada?: IntConexionesDeuda;
    facturasPendientes: IntFacturasPendiente[];
    facturasSeleccionadas: IntFacturasPendiente[];
  };
  flujoQr: {
    conexionesQr: IntConexionesDeuda[];
    conexionQrSeleccionada?: IntConexionesDeuda;
    facturasQr: IntFacturasLink[];
    facturaQrSeleccionada?: IntFacturasLink;
  };
}
