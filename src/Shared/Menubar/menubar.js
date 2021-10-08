import React from "react";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListIcon from '@material-ui/icons/List';

function Menubar({ show }) {
  if (show) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="md:hidden pt-8 flex flex-col gap-y-6 text-xl text-accent-gray"
      >
          <a href="" className="p-4 mt-4 opacity-80"> <ListIcon /> Order </a>
              <a href="" className="p-4 mt-4 opacity-80"> <PersonIcon /> Login </a>
              <a href="" className="p-4 mt-4 opacity-80"> <PersonAddIcon /> Register </a>
      </motion.div>
    );
  } else {
    return <div></div>;
  }
}

export default Menubar;
