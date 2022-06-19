import React, { useState } from 'react';
import Translate from './Translate';
import Dropdown from './Dropdown';
import Search from './Search';
import Accordion from './Accordion';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JavaScript framework.',
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers.',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components.',
    },
];

const options = [
    {
        label: 'Red',
        value: 'red',
    },
    {
        label: 'Green',
        value: 'green',
    },
    {
        label: 'Blue',
        value: 'blue',
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className='ui container'>
            <Translate />
            <br />
            <br />
            <Dropdown
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                label='Select a Color'
            />
            <br />
            <br />
            <Search />
            <br />
            <br />
            <Accordion items={items} />
        </div>
    );
};

export default App;
