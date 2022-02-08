interface ButtonProps {
  children: any;
  width: { base: string; md: string };
  height?: { base: string; md: string };
  height?: string;
  [x: string]: any;
}

interface CircleButtonProps {
  size?: { base: string; md: string };
  lastIndex: number;
  stateActive: number;
  setStateActive: any;
  onClick?: any;
  [x: string]: any;
}

interface SliderButtonProps {
  circleSize?: { base: string; md: string };
  stateActive: number;
  setStateActive: any;
  onClick?: any;
  DATA: any[];
  [x: string]: any;
}

interface TextProps {
  children: any;
  color: string;
  fontSize?: { base: string; md: string };
  [x: string]: any;
}

interface HeadlineTextProps {
  title: string;
  headLineFontSize?: { base: string; md: string };
  desc: string;
  spacing?: { base: string; md: string };
  titleColor: string;
  descColor: string;
  maxWidth?: { base: string; md: string };
  [x: string]: any;
}

interface ContainerProps {
  [x: string]: any;
}

interface ChakraModalProps {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
  [x: string]: any;
}
