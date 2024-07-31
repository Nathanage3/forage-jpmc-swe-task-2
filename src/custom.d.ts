// custom.d.ts
interface PerspectiveViewerElement extends HTMLElement {
    load: (table: any) => void;
    setAttribute: (name: string, value: string) => void;
  }
  
  // Ensure this file is included in your tsconfig.json
  // "files": ["custom.d.ts"]
  