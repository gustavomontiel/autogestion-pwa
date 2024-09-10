import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function nroDocumentoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const documento = control.value?.toString() ?? '';
    const largo = documento?.length || 0;
    const errorResult = { customValid: { value: control.value } };

    if (![7, 8, 11].includes(largo)) {
      return errorResult;
    }

    if (largo === 11) {
      return esCuilValido(documento) ? null : errorResult;
    }

    return +documento > 1000000 && +documento < 100000000 ? null : errorResult;
  };
}

export function esCuilValido(cuil: string): boolean {
  if (cuil.length !== 11) {
    return false;
  }

  const [checkDigit, ...rest] = cuil.split('').map(Number).reverse();

  const total = rest.reduce(
    (acc, cur, index) => acc + cur * (2 + (index % 6)),
    0
  );

  const mod11 = 11 - (total % 11);

  if (mod11 === 11) {
    return checkDigit === 0;
  }

  if (mod11 === 10) {
    return false;
  }

  return checkDigit === mod11;
}
