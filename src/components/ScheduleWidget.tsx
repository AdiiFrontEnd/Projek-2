import React from 'react';
import { ActivityScheduleItem } from '../types';
import { CheckCircle2, Clock, Calendar, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ScheduleWidgetProps {
  schedule: ActivityScheduleItem[];
  lang: 'ID' | 'EN';
}

export const ScheduleWidget: React.FC<ScheduleWidgetProps> = ({ schedule, lang }) => {
  return (
    <div className="h-full min-h-[300px] flex flex-col justify-between gap-2.5">
      {schedule.map((item, idx) => {
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className={`flex items-center justify-between p-4 sm:p-4 rounded-2xl sm:rounded-3xl shadow-lg transition-all ${item.bgClass}`}
          >
            <div className="flex items-center gap-3">
              {item.status === 'completed' && (
                <div className="w-7 h-7 rounded-full bg-[#0B0E14] text-[#FAFF00] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} />
                </div>
              )}
              {item.status === 'in-progress' && (
                <div className="w-7 h-7 rounded-full bg-white text-[#6084FF] flex items-center justify-center shrink-0 animate-spin">
                  <Clock size={16} />
                </div>
              )}
              {item.status === 'cancelled' && (
                <div className="w-7 h-7 rounded-full bg-[#ff0055] text-white flex items-center justify-center shrink-0">
                  <XCircle size={16} />
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono tracking-wider opacity-75 block uppercase">
                  {item.time}
                </span>
                <span className={`text-sm sm:text-base tracking-tight ${item.textClass}`}>
                  {item.title}
                </span>
              </div>
            </div>

            <span className="text-xs font-mono opacity-50 hidden sm:inline-block">
              #{item.id}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};
