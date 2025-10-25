import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface PropertyFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  type: string;
  priceRange: string;
  rooms: string;
  search: string;
}

export const PropertyFilters = ({ onFilterChange }: PropertyFiltersProps) => {
  const handleChange = (key: keyof FilterState, value: string) => {
    const currentFilters = {
      type: (document.getElementById('type-select') as any)?.value || 'all',
      priceRange: (document.getElementById('price-select') as any)?.value || 'all',
      rooms: (document.getElementById('rooms-select') as any)?.value || 'all',
      search: (document.getElementById('search-input') as HTMLInputElement)?.value || ''
    };
    
    currentFilters[key] = value;
    onFilterChange(currentFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="search-input"
            placeholder="Поиск по названию..."
            className="pl-10"
            onChange={(e) => handleChange('search', e.target.value)}
          />
        </div>
        
        <Select onValueChange={(value) => handleChange('type', value)}>
          <SelectTrigger id="type-select">
            <SelectValue placeholder="Тип недвижимости" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все типы</SelectItem>
            <SelectItem value="Квартира">Квартира</SelectItem>
            <SelectItem value="Пентхаус">Пентхаус</SelectItem>
            <SelectItem value="Студия">Студия</SelectItem>
          </SelectContent>
        </Select>
        
        <Select onValueChange={(value) => handleChange('priceRange', value)}>
          <SelectTrigger id="price-select">
            <SelectValue placeholder="Цена" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Любая цена</SelectItem>
            <SelectItem value="0-5000000">До 5 млн ₽</SelectItem>
            <SelectItem value="5000000-10000000">5-10 млн ₽</SelectItem>
            <SelectItem value="10000000-999999999">От 10 млн ₽</SelectItem>
          </SelectContent>
        </Select>
        
        <Select onValueChange={(value) => handleChange('rooms', value)}>
          <SelectTrigger id="rooms-select">
            <SelectValue placeholder="Комнат" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Любое количество</SelectItem>
            <SelectItem value="1">1 комната</SelectItem>
            <SelectItem value="2">2 комнаты</SelectItem>
            <SelectItem value="3">3 комнаты</SelectItem>
            <SelectItem value="4">4+ комнат</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
