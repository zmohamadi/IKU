import { forwardRef, useState } from 'react';

export const Select = forwardRef(function Input({ children, value = null, className = '', containerClassName = '', isFocused = false, ...props }, ref) {
    const [newVal, setNewVal] = useState(value)

    return (
        <div className={"form-group mb-4 " + containerClassName}>
            <label className='label mb-1'>{props.label} {props.required && <span className="require">*</span>}</label>
            {
                (props.onChange) ? <select
                    {...props}
                    className={'form-control w-100 py-2' + className}
                    defaultValue={newVal}
                    placeholder={props.placeholder || ''}
                    onChange={(event) => { props.onChange(event) }}
                >
                    <option selected value="" disabled>{props.disabled_option_text ?? 'choose ...'}</option>
                    {children}
                </select>

                    :
                    <select
                        {...props}
                        className={'form-control w-100' + className}
                        defaultValue={newVal}
                        placeholder={props.placeholder || ''}
                        onChange={(event) => setNewVal(event.target.value)}
                    >

                        <option selected value="" disabled>{props.disabled_option_text ?? 'choose ...'}</option>
                        {children}
                    </select>

            }
            {
                props.error && <p className={props.classNameError ? props.classNameError : 'text-danger'}>
                    {props.error}
                </p>
            }
        </div>
    );
});
