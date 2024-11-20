import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@radix-ui/react-dialog";

interface ModalProps {
  triggerText: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ triggerText, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-600 text-white py-2 px-4 rounded">
          {triggerText}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white rounded shadow-lg p-6">
        {children}
        <DialogClose asChild>
          <button className="absolute top-2 right-2 text-gray-600">
            Close
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
