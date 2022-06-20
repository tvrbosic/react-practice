import React from "react";

const Link = ({href, className, children}) => {
    const onClick = (e) => { 
        // Functionallity: ctrl + click link to open in new tab
        // e.metaKey = Mac OS
        // e.ctrlKey = Windows OS
        if (e.metaKey || e.ctrlKey) {
            return;
        };

        e.preventDefault();
        window.history.pushState({},'', href);
        
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} href={href} className={className}>{children}</a>;
};

export default Link;