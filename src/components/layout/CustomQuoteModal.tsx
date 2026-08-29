import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomQuoteModal = ({ isOpen, onClose }: CustomQuoteModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "",
    dimensions: "",
    material: "",
    budget: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(t('customQuote.submitted'));
    setFormData({
      name: "",
      email: "",
      phone: "",
      productType: "",
      dimensions: "",
      material: "",
      budget: "",
      requirements: "",
    });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{t('customQuote.title')}</DialogTitle>
          <DialogDescription>{t('customQuote.description')}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{t('customQuote.name')}</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('customQuote.name')}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t('customQuote.email')}</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('customQuote.email')}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t('customQuote.phone')}</label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder={t('customQuote.phone')}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t('customQuote.productType')}</label>
            <Input
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              required
              placeholder="e.g., Sofa, Dining Table, Wardrobe"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{t('customQuote.dimensions')}</label>
              <Input
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                placeholder="e.g., 200cm x 90cm x 85cm"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t('customQuote.material')}</label>
              <Input
                name="material"
                value={formData.material}
                placeholder="e.g., Teak, Rosewood, Oak"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t('customQuote.budget')}</label>
            <Input
              name="budget"
              value={formData.budget}
              placeholder="e.g., ₹50,000 - ₹1,00,000"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">{t('customQuote.requirements')}</label>
            <Textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={4}
              placeholder="Describe any specific requirements, design preferences, or additional details..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              {t('customQuote.close')}
            </Button>
            <Button
              type="submit"
              variant="elegant"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : t('customQuote.submit')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
