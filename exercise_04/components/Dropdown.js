import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // Close dropdown on body click
    useEffect(() => {
        const onBodyClick = (e) => {
            // If any of the dropdown elements clicked, return (do not close dropdown)
            if (ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        };
        // If body clicked, close dropdown
        document.body.addEventListener('click', onBodyClick, { capture: true });
        // Clear event listener in cleanup function
        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div key={option.value} className='item' onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
