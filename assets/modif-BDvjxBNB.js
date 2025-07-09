const e=`<section>
    <h3>Case ML-0001: Add new sublevel to existing item</h3>
    <ul>
        <li>First item</li>
        <li>Second item
            <ul>
                <li>New nested item</li>
            </ul>
        </li>
        <li>Third item</li>
    </ul>

    <h3>Case ML-0002: Remove whole sublevel</h3>
    <ul>
        <li>First item</li>
        <li>Second item</li>
    </ul>

    <h3>Case ML-0003: Add item to second/third level</h3>
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

    <h3>Case ML-0004: Delete item from second/third level</h3>
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

    <h3>Case ML-0005: Promote item from second to first level</h3>
    <ol>
        <li>First item
            <ol>
                <li>Another nested item</li>
            </ol>
        </li>
        <li>Nested item to promote</li>
        <li>Second item</li>
    </ol>

    <h3>Case ML-0006: Demote item from first to second level</h3>
    <ul>
        <li>First item
            <ul>
                <li>Item to demote</li>
            </ul>
        </li>
        <li>Third item</li>
    </ul>

    <h3>Case ML-0007: Promote item from third to second level</h3>
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

    <h3>Case ML-0008: Demote item from second to third level</h3>
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

    <h3>Case ML-0009: Converting between nested ordered and unordered lists</h3>
    <ul>
        <li>First item
            <ul>
                <li>Nested ordered item 1</li>
                <li>Nested ordered item 2</li>
            </ul>
        </li>
        <li>Second item</li>
    </ul>

    <h3>Case ML-0010: Move item within same level</h3>
    <ul>
        <li>First item
            <ul>
                <li>Nested item 1</li>
                <li>Nested item 3</li>
                <li>Nested item 2</li>
            </ul>
        </li>
    </ul>

    <h3>Case ML-0011: Move item to different level</h3>
    <ul>
        <li>First item
            <ul>
                <li>Another nested item</li>
            </ul>
        </li>
        <li>Second item</li>
        <li>Nested item to move</li>
    </ul>

    <h3>Case ML-0012: Move whole sublevel to different parent</h3>
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

    <h3>Case ML-0013: Edit text in nested item</h3>
    <ul>
        <li>First item
            <ul>
                <li>Edited text with <strong>formatting</strong></li>
                <li>Another nested item</li>
            </ul>
        </li>
    </ul>

    <h3>Case ML-0014: Convert nested list to paragraphs</h3>
    <p>First item</p>
    <p>Nested item 1</p>
    <p>Nested item 2</p>
    <p>Second item</p>

    <h3>Case ML-0015: Convert nested item to heading</h3>
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

    <h3>Case ML-0016: Convert nested item to paragraph</h3>
    <ul>
        <li>First item
            <ul>
                <p>Item to convert to paragraph</p>
                <li>Another nested item</li>
            </ul>
        </li>
        <li>Second item</li>
    </ul>

    <h3>Case ML-0017: Flatten nested list</h3>
    <ul>
        <li>First item</li>
        <li>Second level item 1</li>
        <li>Third level item</li>
        <li>Second level item 2</li>
        <li>Another first item</li>
    </ul>
</section>`;export{e as default};
