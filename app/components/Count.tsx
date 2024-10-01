"use client";
import { useState } from "react";
import { Button } from "@/app/components/shadcn/button";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p className="mb-2 text-5xl font-bold">{count}</p>
      <Button
        onClick={handleClick}
        variant="secondary"
        className="font-semibold"
      >
        Count
      </Button>
    </div>
  );
};

export default Count;
