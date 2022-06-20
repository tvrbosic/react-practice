import React, { useState } from 'react';
import Header from './Header';
import Route from './Route';
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
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                    label='Select a color'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    );
};

export default App;
