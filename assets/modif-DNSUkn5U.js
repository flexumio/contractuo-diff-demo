const e=`<section>
  <h3>Case P-0001: Appending paragraph:</h3>
  <p>This is a new added paragraph with some text.</p>

  <h3>Case P-0002: Adding text:</h3>
  <p>This is a paragraph with new text.</p>

  <h3>Case P-0003: Deleting text:</h3>
  <p>This is a paragraph with some <strong>bold</strong> text.</p>

  <h3>Case P-0004: Converting paragraph to heading:</h3>
  <h2>This is a paragraph converted to heading.</h2>

  <h3>Case P-0005: Inline tags:</h3>
  <p>This is a paragraph with some <strong>bold</strong>, <em>italic</em>, <u>underlined</u> text
    and <sup>superscript</sup>.</p>

  <h3>Case P-0006: Editing text:</h3>
  <p>Paragraph with some text. There is new <strong>bold</strong> text.</p>

  <h3>Case P-0007: Removing paragraph</h3>

  <h3>Case P-0008: Converting to list item:</h3>
  <ol>
    <li>
      <p>This is a paragraph with some <strong>bold</strong> and <em>italic</em> text.</p>
    </li>
  </ol>

  <h3>Case P-0009: Structure changes:</h3>
  <p style="font-size: 20px; font-family: 'Times New Roman', Times, serif;">This is a paragraph with other
    font text and <span class="marker-pink">marker</span>.</p>
  <p style="text-align: center">Changed alignment to center</p>

  <h3>Case P-0010: Line indent:</h3>
  <p> &nbsp; &nbsp; &nbsp;This is a paragraph with some <strong>bold</strong> and <em>italic</em> text.</style=>

  <h3>Case P-0011: Whole paragraph indent:</h3>
  <p style="margin-left:80px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum.</p>

  <h3>Case P-0012: Special characters:</h3>
  <p>This is a paragraph with some text. ₥ € $ ₡</p>
</section>`;export{e as default};
