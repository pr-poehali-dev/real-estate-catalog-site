import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  area: number;
  rooms: number;
  floor: number;
  type: string;
  image: string;
  features: string[];
}

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in"
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {property.type}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Icon name="MapPin" size={16} />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Icon name="Maximize2" size={18} className="text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Площадь</div>
              <div className="font-semibold">{property.area} м²</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Home" size={18} className="text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Комнат</div>
              <div className="font-semibold">{property.rooms}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={18} className="text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Этаж</div>
              <div className="font-semibold">{property.floor}</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Цена</div>
            <div className="text-2xl font-bold text-primary">
              {property.price.toLocaleString('ru-RU')} ₽
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              className="p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Icon name="Heart" size={20} className="text-muted-foreground hover:text-primary" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
