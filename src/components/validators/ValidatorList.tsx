import React from "react";
import ValidatorProfile from "./ValidatorProfile";

interface Props {
  validators: any[];
}

export default function ValidatorList(props: Props) {
  const { validators } = props;
  return (
    <div>
      {validators.map((validator, i) => (
        <ValidatorProfile key={i} data={validator} />
      ))}
    </div>
  );
}
