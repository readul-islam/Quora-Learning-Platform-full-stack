type TVideo = {
  title: string;
  videoUrl: string;
};

type TSyllabus = {
  week: number;
  topic: string;
  description: string;
  videos: Array<TVideo>;
};

type TStatus = "Open" | "Closed" | "In Progress";

type TCourse = {
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: TStatus;
  thumbnail: string;
  introUrl: string;
  preRequisites: Array<string>;
  syllabus: Array<TSyllabus>;
  totalReaction: number;
};
export { TCourse, TStatus, TSyllabus, TVideo };
