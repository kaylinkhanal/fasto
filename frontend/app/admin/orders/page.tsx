import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { UserIdleChart } from "@/components/user-idle-chart"

export default function CreateOrders() {
  return (
    <div>
      
  <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
      hi
      </SheetContent>
    </Sheet>


    <UserIdleChart/>
    Oder section
    </div>

  
  )
}
