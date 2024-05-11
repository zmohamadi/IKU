import { forwardRef, useEffect, useRef, useState } from 'react';

export const Input = forwardRef(function Input({ type = 'text', value = null, className = '',containerClassName = '', isFocused = false, ...props }, ref) {
    const [newVal, setNewVal] = useState(value)

    return (
        <div className={"form-group mb-3 " + containerClassName}>
            <label className='label mb-1'>{props.label} {props.required && <span className="require">*</span>}</label>

            {
                (props.onChange) ? <input
                    {...props}
                    type={type}
                    className={'form-control' + className}
                    defaultValue={newVal}
                    placeholder={props.placeholder || ''}
                    onChange={(event) => { props.onChange(event) }}
                /> :
                    <input
                        {...props}
                        type={type}
                        className={'form-control' + className}
                        defaultValue={newVal}
                        placeholder={props.placeholder || ''}
                        onChange={(event) => setNewVal(event.target.value)}
                    />

            }

            {
                props.noticLable && <p className={'text-secondary'}>
                    {props.noticLable}
                </p>
            }
            {
                props.error && <p className={props.classNameError ? props.classNameError : 'text-danger'}>
                    {props.error}
                </p>
            }
        </div>
    );
});