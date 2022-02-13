import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import Flash from "react-reveal/Flash";
import { ReactComponent as Sql } from "../../assets/svgs/sql.svg";

const AnimatedIcon = ({ styleClass, iconType, animDuration }) => {
  return (
    <Flash forever={true} duration={animDuration}>
      <Icon className={styleClass} icon={iconType} />
    </Flash>
  );
};

export default AnimatedIcon;
