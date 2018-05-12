import React from "react";

import { Dropdown } from "./Dropdown";

export default props => (
  <div>
    <Dropdown>
      <Dropdown.Item selected={false} display="item 1" />
      <Dropdown.Item selected={true} display="item 2" />
      <Dropdown.Item selected={false} display="item 3" />
    </Dropdown>
  </div>
);
