import { ProductItem } from '@/components/product-item';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/ui/select';

export default function CollectionPage() {
  return (
    <div>
      <div>
        <div className="mb-10 hidden w-full items-center justify-end gap-2 md:flex">
          <span className="text-xs tracking-[1px]">ORDENAR POR:</span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue
                placeholder="Mais relevantes"
                className="placeholder:tracking-[2px]"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 items-center justify-center gap-3 lg:grid-cols-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
