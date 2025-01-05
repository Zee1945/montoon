import PropTypes from 'prop-types';

const PrimaryButton = function PrimaryButton({
    className = '',
    disabled,
    processing,
    variant="primary",
    children,
    ...props
}){
    return (
        <button
            {...props}
            // className={
            //     `inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 ${
            //         disabled && 'opacity-25'
            //     } ` + className
            // }
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${
                    disabled && 'opacity-30'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

PrimaryButton.prototype = {
    type: PropTypes.oneOf(["button","submit","reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary","warning","danger","light-outline","white-outline"]),
    processing: PropTypes.bool,
    children: PropTypes.node,
}

export default PrimaryButton;
