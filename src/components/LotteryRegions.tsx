
import { useState } from 'react';
import MinhNgocLottery from './MinhNgocLottery';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LotteryRegions = () => {
  const [activeRegion, setActiveRegion] = useState<'mien-bac' | 'mien-trung' | 'mien-nam'>('mien-bac');

  const handleTabChange = (value: string) => {
    setActiveRegion(value as 'mien-bac' | 'mien-trung' | 'mien-nam');
  };

  return (
    <div className="w-full">
      <Tabs 
        defaultValue="mien-bac" 
        className="w-full mb-8"
        onValueChange={handleTabChange}
      >
        <div className="flex justify-center mb-4">
          <TabsList className="w-full max-w-2xl">
            <TabsTrigger 
              value="mien-bac" 
              className="flex-1 text-base py-3"
            >
              Miền Bắc
            </TabsTrigger>
            <TabsTrigger 
              value="mien-trung" 
              className="flex-1 text-base py-3"
            >
              Miền Trung
            </TabsTrigger>
            <TabsTrigger 
              value="mien-nam" 
              className="flex-1 text-base py-3"
            >
              Miền Nam
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="mien-bac">
          <div className="w-full max-w-3xl mx-auto">
            <MinhNgocLottery region="mien-bac" />
          </div>
        </TabsContent>
        
        <TabsContent value="mien-trung">
          <div className="w-full max-w-3xl mx-auto">
            <MinhNgocLottery region="mien-trung" />
          </div>
        </TabsContent>
        
        <TabsContent value="mien-nam">
          <div className="w-full max-w-3xl mx-auto">
            <MinhNgocLottery region="mien-nam" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LotteryRegions;
