import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import { NAV_ITEMS } from "../../../config/navigation";

export const MobileMenu = ({
                             open,
                             onClose,
                           }: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <List sx={{ width: 250 }}>
        {NAV_ITEMS.map((item) => (
          <ListItemButton
            key={item.to}
            component={NavLink}
            to={item.to}
            onClick={onClose}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};
