
import { useState } from 'react';
import MinhNgocLottery from './MinhNgocLottery';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const LotteryRegions = () => {
  const [activeRegion, setActiveRegion] = useState<'mien-bac' | 'mien-trung' | 'mien-nam'>('mien-nam');

  return (
    <div className="w-full">
      <Tabs defaultValue="mien-nam" onValueChange={(value) => setActiveRegion(value as any)} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 w-full max-w-lg mx-auto">
          <TabsTrigger value="mien-bac">Miền Bắc</TabsTrigger>
          <TabsTrigger value="mien-trung">Miền Trung</TabsTrigger>
          <TabsTrigger value="mien-nam">Miền Nam</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mien-bac" className="w-full max-w-3xl mx-auto">
          <MinhNgocLottery region="mien-bac" />
        </TabsContent>
        
        <TabsContent value="mien-trung" className="w-full max-w-3xl mx-auto">
          <MinhNgocLottery region="mien-trung" />
        </TabsContent>
        
        <TabsContent value="mien-nam" className="w-full max-w-3xl mx-auto">
          <MinhNgocLottery region="mien-nam" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LotteryRegions;
