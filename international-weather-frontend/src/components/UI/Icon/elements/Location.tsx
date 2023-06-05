import { FC } from 'react';

import { IconProps } from '../Icon.types';

const Location: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 25 30" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m5.9688 12.75c0-3.6071 2.9241-6.5312 6.5312-6.5312 3.6071 0 6.5313 2.9241 6.5313 6.5312 0 3.6071-2.9242 6.5312-6.5313 6.5312-3.6071 0-6.5312-2.9241-6.5312-6.5312zm6.5312-4.4688c-2.468 0-4.4688 2.0008-4.4688 4.4688s2.0008 4.4688 4.4688 4.4688 4.4688-2.0008 4.4688-4.4688-2.0008-4.4688-4.4688-4.4688z"
      clipRule="evenodd"
      fill="#fff"
      fillRule="evenodd"
    />
    <path
      d="m0.846 11.178c0.4872-5.9106 5.4264-10.459 11.357-10.459h0.594c5.9306 0 10.87 4.5488 11.357 10.459 0.2617 3.175-0.719 6.3278-2.7357 8.7941l-6.5905 8.0599c-1.2031 1.4714-3.4525 1.4714-4.6556 0l-6.5905-8.0599c-2.0166-2.4663-2.9974-5.6191-2.7357-8.7941zm11.357-8.397c-4.8572 0-8.9024 3.7255-9.3015 8.5664-0.21782 2.6425 0.59844 5.2665 2.2768 7.3191l6.5904 8.06c0.3779 0.4621 1.0845 0.4621 1.4624 0l6.5904-8.06c1.6784-2.0526 2.4947-4.6766 2.2769-7.3191-0.399-4.8408-4.4443-8.5664-9.3015-8.5664h-0.594z"
      clipRule="evenodd"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

export default Location;