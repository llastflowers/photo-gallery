// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderCreatures from '../home/render-creatures.js';

const test = QUnit.test;

QUnit.module('Render Creature');

test('renders html from data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = /*html*/`
        <li>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" title="A unicorn and a narwhal nuzzling their horns">
            <h2>UniWhal</h2>
            <p>Horns: 1</p>
        </li>
        `;
    //Act 
    // Call the function you're testing and set the result to a const
    const html = renderCreatures();
    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(html, expected);
});
