import React from "react";

import { Dropdown, DropdownItem } from "./Dropdown";

export default props => (
  <div>
    <Dropdown>
      <DropdownItem selected={false} display="item 1" />
      <DropdownItem selected={true} display="item 2" />
      <DropdownItem selected={false} display="item 3" />
    </Dropdown>
  </div>
);
