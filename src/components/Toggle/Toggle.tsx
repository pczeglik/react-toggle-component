import * as React from "react";
import { useCallback } from "react";

import { TOption } from ".";
import "./Toggle.css";

type OptionProps = {
  checked?: boolean;
  className: string;
  disabled?: boolean;
  id: string;
  onChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLLabelElement>
      | string
  ): void;
  optionName: string;
  text: string;
};

function Option(props: OptionProps) {
  const { optionName, className, checked, id, text, onChange, disabled } =
    props;

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLLabelElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        onChange(id);
      }
    },
    [onChange, id]
  );

  return (
    <>
      <input
        checked={checked}
        className={`${className}`}
        disabled={disabled}
        id={id}
        name={optionName}
        onChange={onChange}
        type="radio"
        value={id}
      />
      <label
        aria-disabled={disabled}
        htmlFor={id}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex={disabled ? -1 : 0}
      >
        {text}
      </label>
    </>
  );
}

type ToggleProps = {
  disabled?: boolean;
  name: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  options: TOption[];
};

export function Toggle(props: ToggleProps) {
  const { disabled, name, onChange, options } = props;

  return (
    <div className="toggle">
      {options.map((option, index) => (
        <Option
          {...option}
          checked={option.checked}
          className={index % 2 === 0 ? "option-a" : "option-b"}
          disabled={!!disabled}
          key={`option-${name}-${option.id}`}
          onChange={onChange}
          optionName={name}
        />
      ))}
      <div className="indicator"></div>
    </div>
  );
}
