import { useState } from "react";

import { Button } from "../../../components/MUI/Button";

import { AddTransaction } from "../AddTransaction";

export const Popover = ({ transactions, setTransactions }) => {
  const [popover, setPopover] = useState(false);

  const togglePopover = () => {
    setPopover(!popover);
  };

  return (
    <>
      <Button
        sx={{
          position: "fixed",
          bottom: "10px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "25%",
        }}
        variant="contained"
        onClick={togglePopover}
      >
        Add
      </Button>
      {popover && (
        <AddTransaction
          setPopover={setPopover}
          transactions={transactions}
          setTransactions={setTransactions}
        />
      )}
    </>
  );
};
