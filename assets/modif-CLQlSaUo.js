const e=`<section>
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
    <p><br /></p>
    <ol>
        <li>Third item</li>
        <li>Fourth item</li>
        <li>Fifth item</li>
    </ol>

    <h3>Case L-0019: Add new sublevel to existing item</h3>
    <ul>
        <li>First item</li>
        <li>Second item
            <ul>
                <li>New nested item</li>
            </ul>
        </li>
        <li>Third item</li>
    </ul>

    <h3>Case L-0020: Remove whole sublevel</h3>
    <ul>
        <li>First item</li>
        <li>Second item</li>
    </ul>

    <h3>Case L-0021: Add item to second/third level</h3>
    <ul>
        <li>First item
            <ul>
                <li>Nested item 1</li>
                <li>New nested item at second level</li>
                <li>Nested item 2
                    <ul>
                        <li>Deep nested item</li>
                        <li>New deep nested item at third level</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

    <h3>Case L-0022: Delete item from second/third level</h3>
    <ul>
        <li>First item
            <ul>
                <li>Nested item 1</li>
                <li>Nested item 3
                    <ul>
                        <li>Deep nested item 2</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

    <h3>Case L-0023: Promote item from second to first level</h3>
    <ol>
        <li>First item
            <ol>
                <li>Another nested item</li>
            </ol>
        </li>
        <li>Nested item to promote</li>
        <li>Second item</li>
    </ol>

    <h3>Case L-0024: Demote item from first to second level</h3>
    <ul>
        <li>First item
            <ul>
                <li>Item to demote</li>
            </ul>
        </li>
        <li>Third item</li>
    </ul>

    <h3>Case L-0025: Promote item from third to second level</h3>
    <ul>
        <li>First item
            <ul>
                <li>Second level item
                    <ul>
                        <li>Another third level item</li>
                    </ul>
                </li>
                <li>Third level item to promote</li>
            </ul>
        </li>
    </ul>

    <h3>Case L-0026: Demote item from second to third level</h3>
    <ol>
        <li>First item
            <ol>
                <li>Second level item 1
                    <ol>
                        <li>Second level item to demote</li>
                    </ol>
                </li>
                <li>Second level item 3</li>
            </ol>
        </li>
    </ol>

    <h3>Case L-0027: Converting between nested ordered and unordered lists</h3>
    <ul>
        <li>First item
            <ul>
                <li>Nested ordered item 1</li>
                <li>Nested ordered item 2</li>
            </ul>
        </li>
        <li>Second item</li>
    </ul>

    <h3>Case L-0028: Move item within same level</h3>
    <ul>
        <li>First item
            <ul>
                <li>Nested item 1</li>
                <li>Nested item 3</li>
                <li>Nested item 2</li>
            </ul>
        </li>
    </ul>

    <h3>Case L-0029: Move item to different level</h3>
    <ul>
        <li>First item
            <ul>
                <li>Another nested item</li>
            </ul>
        </li>
        <li>Second item</li>
        <li>Nested item to move</li>
    </ul>

    <h3>Case L-0030: Move whole sublevel to different parent</h3>
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item
            <ol>
                <li>Sublevel to move</li>
                <li>Another sublevel item</li>
            </ol>
        </li>
    </ol>

    <h3>Case L-0031: Edit text in nested item</h3>
    <ul>
        <li>First item
            <ul>
                <li>Edited text with <strong>formatting</strong></li>
                <li>Another nested item</li>
            </ul>
        </li>
    </ul>

    <h3>Case L-0032: Convert nested list to paragraphs</h3>
    <p>First item</p>
    <p>Nested item 1</p>
    <p>Nested item 2</p>
    <p>Second item</p>

    <h3>Case L-0033: Convert nested item to heading</h3>
    <ol>
        <li>First item
            <ol>
                <li>
                    <h2>Item to convert to heading</h2>
                </li>
                <li>Another nested item</li>
            </ol>
        </li>
        <li>Second item</li>
    </ol>

    <h3>Case L-0034: Convert nested item to paragraph</h3>
    <ul>
        <li>First item
            <ul>
                <p>Item to convert to paragraph</p>
                <li>Another nested item</li>
            </ul>
        </li>
        <li>Second item</li>
    </ul>

    <h3>Case  L-0035: Flatten nested list</h3>
    <ul>
        <li>First item</li>
        <li>Second level item 1</li>
        <li>Third level item</li>
        <li>Second level item 2</li>
        <li>Another first item</li>
    </ul>
</section>`;export{e as default};
