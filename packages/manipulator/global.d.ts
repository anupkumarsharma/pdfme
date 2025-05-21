declare module '@pdfme/converter' {
  export function pdf2img(
    pdf: ArrayBuffer | Uint8Array,
    options: { imageType: string },
  ): Promise<ArrayBuffer[]>;
}
