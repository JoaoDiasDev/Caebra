import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const promoCode = "BLACKFRIDAY24";

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    alert("Promo code copied to clipboard!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <img
            src="/images/black-friday.webp"
            alt="Black Friday Promotion"
            className="rounded-md"
          />
        </DialogHeader>
        <DialogTitle>Exclusive Offer: 50% Off!</DialogTitle>
        <DialogDescription>
          Use the promo code below to enjoy 50% off on your next purchase.
        </DialogDescription>
        <div className="my-4">
          <Button
            variant="secondary"
            className="w-full text-xl"
            onClick={handleCopy}
          >
            {promoCode}
          </Button>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Copy the code and use it during checkout.
          </p>
        </div>
        <DialogFooter>
          <Button variant={"secondary"} className="w-full" onClick={onClose}>
            Continue Shopping
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
