import React from "react";
import styled from "styled-components";

const FormInput = ({ handleChange, label, ...otherprops }) => (
  <Group>
    <Input onChange={handleChange} {...otherprops}  autoComplete="off" />
    {label ? (
      <Label
        className={`${
          otherprops.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </Label>
    ) : null}
  </Group>
);

export default FormInput;

const Group = styled.div`
  position: relative;
  margin: 40px 0;
`;

const Input = styled.input`
  background: none;
  background-color: white;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  color: black;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    top: -14px;
    font-size: 12px;
    color:  #4285f4;
  }
`;

const Label = styled.div`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    top: -14px;
    font-size: 12px;
    color:  #4285f4;
  }
`;
