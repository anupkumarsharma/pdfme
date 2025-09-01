import { readFileSync } from 'fs';
import * as path from 'path';
import { Font, getDefaultFont } from '@pdfme/common';
import { pdf2img } from '@pdfme/converter';

const NotoSerifJPRegularData = readFileSync(
  // path.join(__dirname, `/assets/fonts/NotoSerifJP-Regular.otf`)
  path.join(__dirname, `/assets/fonts/NotoSerifJP-Regular.ttf`),
);
const NotoSansJPRegularData = readFileSync(
  // path.join(__dirname, `/assets/fonts/NotoSansJP-Regular.otf`)
  path.join(__dirname, `/assets/fonts/NotoSansJP-Regular.ttf`),
);
const GloriaHallelujahRegularData = readFileSync(
  path.join(__dirname, `/assets/fonts/GloriaHallelujah-Regular.ttf`),
);
const GreatVibesRegularData = readFileSync(
  path.join(__dirname, `/assets/fonts/GreatVibes-Regular.ttf`),
);
const JuliusSansOneRegularData = readFileSync(
  path.join(__dirname, `/assets/fonts/JuliusSansOne-Regular.ttf`),
);

const Roboto = readFileSync(path.join(__dirname, `/assets/fonts/Roboto-Bold.ttf`));
const RobotoItalic = readFileSync(path.join(__dirname, `/assets/fonts/hcKoSgxdnKlbH5dlTwKbow.ttf`));

export const getFont = (): Font => ({
  ...getDefaultFont(),
  'NotoSerifJP-Regular': { data: NotoSerifJPRegularData },
  'NotoSansJP-Regular': { data: NotoSansJPRegularData },
  'GloriaHallelujah-Regular': { data: GloriaHallelujahRegularData },
  'GreatVibes-Regular': { data: GreatVibesRegularData },
  'JuliusSansOne-Regular': { data: JuliusSansOneRegularData },
  NotoSerifJP: { data: NotoSerifJPRegularData },
  NotoSansJP: { data: NotoSansJPRegularData },
  RobotoBold: { data: Roboto },
  RobotoItalic: { data: RobotoItalic },
  'PinyonScript-Regular': {
    fallback: false,
    data: 'https://fonts.gstatic.com/s/pinyonscript/v22/6xKpdSJbL9-e9LuoeQiDRQR8aOLQO4bhiDY.ttf',
  },
});
export const pdfToImages = async (pdf: ArrayBuffer | Uint8Array): Promise<Buffer[]> => {
  let arrayBuffer: ArrayBuffer;
  if (pdf instanceof Uint8Array) {
    arrayBuffer = pdf.buffer.slice(pdf.byteOffset, pdf.byteOffset + pdf.byteLength) as ArrayBuffer;
  } else if (pdf instanceof SharedArrayBuffer) {
    arrayBuffer = new Uint8Array(pdf).buffer;
  } else {
    arrayBuffer = pdf;
  }
  const arrayBuffers = await pdf2img(arrayBuffer, {});
  return arrayBuffers.map((buf) => Buffer.from(new Uint8Array(buf)));
};
