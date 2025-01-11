import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput = forwardRef(function TextInput(
    {
        type = 'text',
        className = '',
        defaultValue,
        variant = "primary",
        placeholder,
        isError =false,
        isFocused = false,
        onChange='',
        name, value, autoComplete, required, handleChange,
        ...props
    },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);
    function handleChange(e){
        const newValue = e.target.value;
        setValue(newValue);
    }
    return (
        <input
            {...props}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`
            }
            placeholder={placeholder}
            ref={localRef}
            required={required}
            onChange={onChange}
        />
    );
});

// Defining PropTypes for TextInput component
TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    isError: PropTypes.bool,
};



export default TextInput;
