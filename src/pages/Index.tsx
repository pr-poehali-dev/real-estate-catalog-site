import { useState } from "react";
import { PropertyCard, Property } from "@/components/PropertyCard";
import { PropertyFilters, FilterState } from "@/components/PropertyFilters";
import { PropertyDialog } from "@/components/PropertyDialog";
import Icon from "@/components/ui/icon";

const mockProperties: Property[] = [
  {
    id: 1,
    title: "Современная квартира в центре",
    price: 8500000,
    location: "ул. Тверская, 12",
    area: 75,
    rooms: 2,
    floor: 5,
    type: "Квартира",
    image: "https://cdn.poehali.dev/projects/545d9cd4-1b08-4f67-a34a-20cd923c291b/files/8dcea660-6986-42f4-a8e9-ea1af348bfbd.jpg",
    features: [
      "Панорамные окна",
      "Свежий ремонт",
      "Мебель включена",
      "Кондиционер",
      "Закрытая территория"
    ]
  },
  {
    id: 2,
    title: "Элитный пентхаус с видом",
    price: 15000000,
    location: "Кутузовский проспект, 25",
    area: 120,
    rooms: 3,
    floor: 15,
    type: "Пентхаус",
    image: "https://cdn.poehali.dev/projects/545d9cd4-1b08-4f67-a34a-20cd923c291b/files/21b0de5f-4225-48ff-98f4-858d47162382.jpg",
    features: [
      "Терраса 40 м²",
      "Дизайнерский ремонт",
      "Встроенная кухня",
      "2 санузла",
      "Подземный паркинг"
    ]
  },
  {
    id: 3,
    title: "Уютная студия для молодых",
    price: 4200000,
    location: "ул. Арбат, 8",
    area: 35,
    rooms: 1,
    floor: 3,
    type: "Студия",
    image: "https://cdn.poehali.dev/projects/545d9cd4-1b08-4f67-a34a-20cd923c291b/files/37a62008-26fd-4689-84e5-e068b9f4871a.jpg",
    features: [
      "Высокие потолки",
      "Новостройка",
      "Готова к заселению",
      "Консьерж",
      "Фитнес-зал в доме"
    ]
  },
  {
    id: 4,
    title: "Просторная 3-комнатная",
    price: 12000000,
    location: "Ленинский проспект, 45",
    area: 95,
    rooms: 3,
    floor: 8,
    type: "Квартира",
    image: "https://cdn.poehali.dev/projects/545d9cd4-1b08-4f67-a34a-20cd923c291b/files/8dcea660-6986-42f4-a8e9-ea1af348bfbd.jpg",
    features: [
      "Раздельные комнаты",
      "Гардеробная",
      "Два балкона",
      "Окна во двор",
      "Охраняемая парковка"
    ]
  },
  {
    id: 5,
    title: "Роскошный пентхаус премиум",
    price: 25000000,
    location: "Остоженка, 18",
    area: 180,
    rooms: 4,
    floor: 20,
    type: "Пентхаус",
    image: "https://cdn.poehali.dev/projects/545d9cd4-1b08-4f67-a34a-20cd923c291b/files/21b0de5f-4225-48ff-98f4-858d47162382.jpg",
    features: [
      "Круговой вид на город",
      "Мраморные полы",
      "Сауна и джакузи",
      "Винный погреб",
      "Консьерж-сервис 24/7"
    ]
  },
  {
    id: 6,
    title: "Компактная студия у метро",
    price: 3800000,
    location: "Новослободская, 5",
    area: 28,
    rooms: 1,
    floor: 2,
    type: "Студия",
    image: "https://cdn.poehali.dev/projects/545d9cd4-1b08-4f67-a34a-20cd923c291b/files/37a62008-26fd-4689-84e5-e068b9f4871a.jpg",
    features: [
      "5 минут от метро",
      "Функциональная планировка",
      "Окна на юг",
      "Низкие коммунальные",
      "Рядом парк"
    ]
  }
];

const Index = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setDialogOpen(true);
  };

  const handleFilterChange = (filters: FilterState) => {
    let filtered = mockProperties;

    if (filters.search) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.location.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.type && filters.type !== 'all') {
      filtered = filtered.filter(p => p.type === filters.type);
    }

    if (filters.priceRange && filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    if (filters.rooms && filters.rooms !== 'all') {
      const roomsNum = parseInt(filters.rooms);
      if (roomsNum === 4) {
        filtered = filtered.filter(p => p.rooms >= 4);
      } else {
        filtered = filtered.filter(p => p.rooms === roomsNum);
      }
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Building2" size={32} className="text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Elite Estate</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Каталог
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                О нас
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 text-foreground">
            Каталог недвижимости
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Премиальные объекты в лучших локациях города
          </p>
        </div>

        <PropertyFilters onFilterChange={handleFilterChange} />

        <div className="mb-6 text-muted-foreground">
          Найдено объектов: <span className="font-semibold text-foreground">{filteredProperties.length}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={() => handlePropertyClick(property)}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <Icon name="Home" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Ничего не найдено
            </h3>
            <p className="text-muted-foreground">
              Попробуйте изменить параметры поиска
            </p>
          </div>
        )}
      </main>

      <PropertyDialog
        property={selectedProperty}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <footer className="bg-foreground text-white mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Building2" size={28} className="text-primary" />
                <h3 className="text-2xl font-bold">Elite Estate</h3>
              </div>
              <p className="text-white/70">
                Премиальная недвижимость для комфортной жизни
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@eliteestate.ru</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Facebook" size={24} className="text-white/70 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={24} className="text-white/70 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-white/70 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>© 2024 Elite Estate. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
