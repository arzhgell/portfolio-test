import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconsGroupType = {
  icons: any[];
};

export function IconsGroup({ icons }: IconsGroupType) {
  return (
    <div className="flex gap-[24px] text-[36px] text-blue  ">
      {icons.map((icon) => {
        return (
          <FontAwesomeIcon
            icon={icon}
            className="hover:text-yellow transition-all cursor-pointer"
          />
        );
      })}{' '}
    </div>
  );
}
