"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Star, GitFork, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useExpandable } from "@/hooks/use-expandable";
import { cn } from "@/lib/utils";

interface Task {
  title: string;
  completed: boolean;
}

interface Contributor {
  name: string;
  avatar?: string;
}

interface ProjectStatusCardProps {
  title: string;
  progress: number;
  dueDate: string;
  contributors: Contributor[];
  tasks: Task[];
  githubStars?: number;
  openIssues?: number;
}

export function ProjectStatusCard({
  title,
  progress,
  dueDate,
  contributors,
  tasks,
  githubStars,
  openIssues,
}: ProjectStatusCardProps) {
  const { isExpanded, toggleExpand } = useExpandable(false);
  const completedTasks = tasks.filter((t) => t.completed).length;

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[#101010]">{title}</h3>
            <div className="mt-1 flex items-center gap-3 text-xs text-[#5E5E5E]">
              <span>Due {dueDate}</span>
              <span>·</span>
              <span>{completedTasks}/{tasks.length} tasks</span>
            </div>
          </div>
          <button
            onClick={toggleExpand}
            className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-[#101010]/5 transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#5E5E5E]"
            >
              <path d="M3 4.5l3 3 3-3" />
            </motion.svg>
          </button>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-[#5E5E5E] mb-1.5">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            <TooltipProvider>
              {contributors.slice(0, 3).map((contributor, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <Avatar className="border-2 border-white">
                      <AvatarFallback>
                        {contributor.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{contributor.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
            {contributors.length > 3 && (
              <Avatar className="border-2 border-white">
                <AvatarFallback>+{contributors.length - 3}</AvatarFallback>
              </Avatar>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-[#5E5E5E]">
            {githubStars !== undefined && (
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3" /> {githubStars}
              </span>
            )}
            {openIssues !== undefined && (
              <span className="flex items-center gap-1">
                <GitFork className="h-3 w-3" /> {openIssues}
              </span>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-2 border-t border-[#101010]/10 pt-4">
                {tasks.map((task, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    {task.completed ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                    ) : (
                      <Circle className="h-4 w-4 text-[#5E5E5E]/50 shrink-0" />
                    )}
                    <span
                      className={cn(
                        task.completed
                          ? "text-[#5E5E5E] line-through"
                          : "text-[#101010]"
                      )}
                    >
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
