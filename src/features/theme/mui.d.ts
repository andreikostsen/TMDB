import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      header: string;
      footer: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      header?: string;
      footer?: string;
    };
  }
}
