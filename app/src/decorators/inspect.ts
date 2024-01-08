export function inspect() {
  return function (
    target: any,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método ${property}`);
        console.log(`------ parâmetros: ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify}`)
        return retorno;
    };
    return descriptor;
  };
}
