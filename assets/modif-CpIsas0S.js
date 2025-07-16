const t=`<section>
  <h3>Case TBL-0001: Add new row to table:</h3>
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>London</td>
    </tr>
    <tr>
      <td>Mike</td>
      <td>28</td>
      <td>Tokyo</td>
    </tr>
  </table>

  <h3>Case TBL-0002: Delete row from table:</h3>
  <table>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
    <tr>
      <td>Laptop</td>
      <td>$999</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Keyboard</td>
      <td>$75</td>
      <td>30</td>
    </tr>
  </table>

  <h3>Case TBL-0003: Add new column to table:</h3>
  <table>
    <tr>
      <th>Student</th>
      <th>Math</th>
      <th>Science</th>
      <th>English</th>
    </tr>
    <tr>
      <td>Alice</td>
      <td>85</td>
      <td>92</td>
      <td>90</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>78</td>
      <td>88</td>
      <td>82</td>
    </tr>
  </table>

  <h3>Case TBL-0004: Delete column from table:</h3>
  <table>
    <tr>
      <th>Company</th>
      <th>Industry</th>
      <th>Employees</th>
    </tr>
    <tr>
      <td>Apple</td>
      <td>Technology</td>
      <td>154,000</td>
    </tr>
    <tr>
      <td>Microsoft</td>
      <td>Technology</td>
      <td>221,000</td>
    </tr>
  </table>

  <h3>Case TBL-0005: Edit cell content:</h3>
  <table>
    <tr>
      <th>Book</th>
      <th>Author</th>
      <th>Year</th>
    </tr>
    <tr>
      <td>1984</td>
      <td>George Orwell</td>
      <td>1949</td>
    </tr>
    <tr>
      <td>To Kill a Mockingbird</td>
      <td>Harper Lee</td>
      <td>1960</td>
    </tr>
  </table>

  <h3>Case TBL-0006: Merge cells horizontally:</h3>
  <table>
    <tr>
      <th>Quarter</th>
      <th>Sales</th>
      <th>Profit</th>
    </tr>
    <tr>
      <td>Q1</td>
      <td>$100K</td>
      <td>$25K</td>
    </tr>
    <tr>
      <td colspan="2">Q2 Summary</td>
      <td>$40K</td>
    </tr>
  </table>

  <h3>Case TBL-0007: Merge cells vertically:</h3>
  <table>
    <tr>
      <th>Department</th>
      <th>Employee</th>
      <th>Salary</th>
    </tr>
    <tr>
      <td rowspan="2">IT</td>
      <td>John Smith</td>
      <td>$75K</td>
    </tr>
    <tr>
      <td>Jane Doe</td>
      <td>$80K</td>
    </tr>
    <tr>
      <td>HR</td>
      <td>Bob Johnson</td>
      <td>$65K</td>
    </tr>
  </table>

  <h3>Case TBL-0008: Split merged cell:</h3>
  <table>
    <tr>
      <th>Category</th>
      <th>Type</th>
      <th>Items</th>
    </tr>
    <tr>
      <td>Electronics</td>
      <td>Phones</td>
      <td>Laptops</td>
    </tr>
    <tr>
      <td>Clothing</td>
      <td>Shirts</td>
      <td>Pants</td>
    </tr>
  </table>

  <h3>Case TBL-0009: Move row up/down:</h3>
  <table>
    <tr>
      <th>Priority</th>
      <th>Task</th>
      <th>Status</th>
    </tr>
    <tr>
      <td>Medium</td>
      <td>Update docs</td>
      <td>Pending</td>
    </tr>
    <tr>
      <td>High</td>
      <td>Fix bug</td>
      <td>In Progress</td>
    </tr>
    <tr>
      <td>Low</td>
      <td>Refactor code</td>
      <td>Not Started</td>
    </tr>
  </table>

  <h3>Case TBL-0010: Move column left/right:</h3>
  <table>
    <tr>
      <th>Name</th>
      <th>ID</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
    <tr>
      <td>Alice Johnson</td>
      <td>001</td>
      <td>alice@email.com</td>
      <td>555-1234</td>
    </tr>
    <tr>
      <td>Bob Smith</td>
      <td>002</td>
      <td>bob@email.com</td>
      <td>555-5678</td>
    </tr>
  </table>
</section>`;export{t as default};
