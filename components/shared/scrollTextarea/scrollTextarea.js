import React from 'react';
import { FormField } from '../../../styles/formcomponent.style';
import { TextAreaScroll } from './styled-scrollTextarea';
const ScrollTextArea = ({label, ...props}) => {
  return (
      <FormField>
        <p className='mb-2 font-medium text-[13px]'>{label}</p>
        <TextAreaScroll>
            <textarea
                className="textarea"
                id="textarea"
                name ="content"
                rows= "6"
                cols = "37"
                value = {props.value}
                onChange={props.onChange}
                placeholder= {props.placeholder ? props.placeholder : "Enter message"}
            >
            </textarea>
        </TextAreaScroll>
      </FormField>
  );
};

export default ScrollTextArea;