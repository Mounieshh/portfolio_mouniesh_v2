import { JSX } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from './ui/card';

type SkillItemProps = {
  icon?: JSX.Element;
  skillName?: string;
};

type SkillProps = {
  cardName?: string;
  descNames?: SkillItemProps[];
};

type SkillValidProps = {
  items?: SkillProps[];
};

export const SkillCard = ({ items = [] }: SkillValidProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {items.map((item, idx) => (
        <Card key={idx} className="min-w-0">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">{item.cardName}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {item.descNames?.map((desc, i) => (
              <div key={i} className="flex items-center gap-2 text-sm sm:text-base">
                {desc.icon}
                <span>{desc.skillName}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}