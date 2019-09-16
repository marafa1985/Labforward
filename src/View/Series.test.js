import React from 'react';
import ReactDOM from 'react-dom';
import { act,Simulate } from 'react-dom/test-utils';
import Series from './Series';

describe('Test add new Series', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('Simualte add new Series', () => {
        // Test first render and componentDidMount
        act(() => {
            ReactDOM.render(<Series />, container);
        });
        const button = container.querySelector('button');
        const inputText = container.querySelector('input');
        inputText.value ="new Series Value";
        Simulate.change(inputText);
        expect(inputText.value).toBe('new Series Value');

        // Test second render and componentDidUpdate
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        const serialheader = container.querySelector('.acc-title');
        expect(serialheader.innerHTML).toContain('new Series Value');
    });
});
