import {ImageSourcePropType} from 'react-native';

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  const value: ImageSourcePropType;
  export default value;
}
declare module '*.webp' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.lottie' {
  const value: ImageSourcePropType;
  export default value;
}
