const i=`<section>
    <h3>Case L-0001: Create list</h3>
    <ul>
        <li>New first item</li>
        <li>New second item</li>
        <li>New third item</li>
    </ul>

    <h3>Case L-0002: Delete list</h3>

    <h3>Case L-0003: Add new list item to ordered list</h3>
    <ol>
        <li>First item</li>
        <li>New item</li>
        <li>Second item</li>
    </ol>

    <h3>Case L-0004: Delete list item from ordered list</h3>
    <ol>
        <li>First item</li>
        <li>Third item</li>
    </ol>

    <h3>Case L-0005: Add new list item to unordered list</h3>
    <ul>
        <li>New item at the beginning</li>
        <li>First item</li>
        <li>Second item</li>
        <li>New item at the end</li>
    </ul>

    <h3>Case L-0006: Delete list item from unordered list</h3>
    <ul>
        <li>First item</li>
        <li>Fourth item</li>
    </ul>

    <h3>Case L-0007: Add prefix text to existing list item</h3>
    <ol>
        <li>Prefix: First item</li>
        <li>Second item</li>
    </ol>

    <h3>Case L-0008: Delete prefix text from existing list item</h3>
    <ul>
        <li>First item</li>
        <li>Second item</li>
    </ul>

    <h3>Case L-0009: Add some text to existing list item</h3>
    <ol>
        <li>First item with additional content</li>
        <li>Second item</li>
    </ol>

    <h3>Case L-0010: Delete some text from existing list item</h3>
    <ul>
        <li>First item</li>
        <li>Second item</li>
    </ul>

    <h3>Case L-0011: Convert whole list to paragraph</h3>
    <p>First item </p>
    <p>Second item</p>
    <p>Third item</p>

    <h3>Case L-0012: Converting between ordered to unordered list</h3>
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ul>

    <h3>Case L-0013: Convert list item (ordered list) to heading</h3>
    <ol>
        <li>First item</li>
        <li>
            <h2>Second item to be converted</h2>
        </li>
        <li>Third item</li>
    </ol>

    <h3>Case L-0014: Convert list item (unordered list) to heading</h3>
    <ul>
        <li>First item</li>
        <li>
            <h2>Second item to be converted</h2>
        </li>
        <li>Third item</li>
    </ul>

    <h3>Case L-0015: Convert list item to paragraph from ordered list</h3>
    <h4>First item converted</h4>
    <ol>
        <p>First item to be converted</з>
            <li>Second item</li>
            <li>Third item</li>
    </ol>
    <h4>Middle item converted</h4>
    <ol>
        <li>First item</li>
        <p>Second item to be converted</p>
        <li>Third item</li>
    </ol>
    <h4>Last item converted</h4>
    <ol>
        <li>First item</li>
        <p>Last item to be converted</li>
    </ol>

    <h3>Case L-0016: Convert list item to paragraph from unordered list</h3>
    <h4>First item converted</h4>
    <ul>
        <p>First item to be converted</p>
        <li>Second item</li>
        <li>Third item</li>
    </ul>
    <h4>Middle item converted</h4>
    <ul>
        <li>First item</li>
        <p>Second item to be converted</p>
        <li>Third item</li>
    </ul>
    <h4>Last item converted</h4>
    <ul>
        <li>First item</li>
        <p>Last item to be converted</p>
    </ul>

    <h3>Case L-0017: Moving item within list</h3>
    <ol>
        <li>First item</li>
        <li>Fourth item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>

    <h3>Case L-0018: Split list</h3>
    <ol>
        <li>First item</li>
        <li>Second item</li>
    </ol>
  <p><br/></p>
    <ol>
        <li>Third item</li>
        <li>Fourth item</li>
        <li>Fifth item</li>
    </ol>
</section>`;export{i as default};
