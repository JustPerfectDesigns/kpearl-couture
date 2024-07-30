import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const SingleCustomerData = ({ customer }) => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          View
        </DrawerTrigger>
        <DrawerContent className="flex flex-col justify-between items-center">
          <DrawerHeader>
            <DrawerTitle className="text-center">{customer?.name}</DrawerTitle>
            <DrawerDescription className="text-center">
              Email: {customer?.email}
            </DrawerDescription>
            <DrawerDescription className="text-center">
              Phone: {customer?.phone}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 flex flex-wrap justify-center items-center gap-2 md:gap-6">
            <p className="bg-slate-50 p-3 md:p-6 border rounded">
              Chest Measurement: {customer?.chest}
            </p>
            <p className="bg-slate-50 p-3 md:p-6 border rounded">
              Back Measurement: {customer?.back}
            </p>
            <p className="bg-slate-50 p-3 md:p-6 border rounded">
              Body Measurement: {customer?.body}
            </p>
            <p className="bg-slate-50 p-3 md:p-6 border rounded">
              Tummy Measurement: {customer?.tummy}
            </p>
            <p className="bg-slate-50 p-3 md:p-6 border rounded">
              Sleeve Measurement: {customer?.sleeve}
            </p>
            <p className="bg-slate-50 p-3 md:p-6 border rounded">
              Round Sleeve Measurement: {customer?.roundSleeve}
            </p>
            <p className="bg-slate-50 p-3 md:p-6 border rounded">
              Top Length Measurement: {customer?.topLength}
            </p>
            <p className="bg-slate-50 p-3 md:p-6 border rounded">
              Neck Measurement: {customer?.neck}
            </p>
            <p className="bg-slate-50 p-3 md:p-6 border rounded">
              Cap Measurement: {customer?.cap}
            </p>
            {/* Add more customer details as needed */}
          </div>
          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SingleCustomerData;
