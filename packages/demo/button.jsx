import React from 'react';

const Button = React.forwardRef((props ,ref) => {
    return <button {...props} ref={ref}>Hello</button>
});

export default Button;
