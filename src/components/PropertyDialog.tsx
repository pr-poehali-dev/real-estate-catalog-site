import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Property } from "./PropertyCard";

interface PropertyDialogProps {
  property: Property | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PropertyDialog = ({ property, open, onOpenChange }: PropertyDialogProps) => {
  if (!property) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{property.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
              {property.type}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Местоположение</div>
                    <div className="font-semibold">{property.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Icon name="Maximize2" size={20} className="text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Площадь</div>
                    <div className="font-semibold">{property.area} м²</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Icon name="Home" size={20} className="text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Комнат</div>
                    <div className="font-semibold">{property.rooms}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Icon name="Building2" size={20} className="text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Этаж</div>
                    <div className="font-semibold">{property.floor}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Особенности</h3>
              
              <div className="space-y-2 mb-6">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">Цена</div>
                <div className="text-4xl font-bold text-primary mb-4">
                  {property.price.toLocaleString('ru-RU')} ₽
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
