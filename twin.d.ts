import 'twin.macro';
import styledImport from 'styled-components';
import { css as cssImport } from 'styled-components';

// The css prop
import { CSSProp } from 'styled-components';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}

// The 'As' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      As?: string;
      css?: CSSProp;
    }
  }
}
