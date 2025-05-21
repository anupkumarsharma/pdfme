declare module '@pdfme/converter' {
  export function pdf2img(
    pdfBuffer: ArrayBuffer,
    options?: { scale?: number },
  ): Promise<ArrayBuffer[]>;
  export function pdf2size(pdfBuffer: ArrayBuffer): Promise<{ width: number; height: number }[]>;
}
