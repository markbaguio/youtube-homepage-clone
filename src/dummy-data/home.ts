export interface Category {
  id: string;
  category: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "1",
    category: "All",
  },
  {
    id: "2",
    category: "JavaScript",
  },
  {
    id: "3",
    category: "TypeScript",
  },
  {
    id: "4",
    category: "Programming",
  },
  {
    id: "5",
    category: "TailwindCSS",
  },
  {
    id: "6",
    category: "Web Development",
  },
  {
    id: "7",
    category: "Delphi",
  },
  {
    id: "8",
    category: "Software Development",
  },
  {
    id: "9",
    category: "Next.js",
  },
  {
    id: "10",
    category: "Steve Wallis",
  },
  {
    id: "11",
    category: "Outdoor Boys",
  },
  {
    id: "12",
    category: "Frontend Web Development",
  },
  {
    id: "13",
    category: "Backend Web Development",
  },
  {
    id: "14",
    category: "Python",
  },
  {
    id: "15",
    category: "Java",
  },
  {
    id: "16",
    category: "Coding",
  },
  {
    id: "17",
    category: "MySQL",
  },
  {
    id: "18",
    category: "Flask",
  },
  {
    id: "19",
    category: "Git",
  },
];

export interface Channel {
  name: string;
  id: string;
  profileUrl: string;
}

export interface VideoProps {
  id: string;
  title: string;
  channel: Channel;
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}

export const VIDEOS: VideoProps[] = [
  {
    id: "1",
    title: "CSS Anchor Is The Best New CSS Feature Since Flexbox",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: 222536,
    // postedAt: new Date("2023-08-29"),
    postedAt: new Date(),
    duration: 938,
    thumbnailUrl: "https://i.ytimg.com/vi/B4Y9Ed4lLAI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "2",
    title: "NEW Way To Create Variables In JavaScript",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: 257136,
    postedAt: new Date("2023-08-22"),
    duration: 732,
    thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "3",
    title: "Front-end developer takes on a CSS battle",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: 1232300,
    postedAt: new Date("2023-10-05"),
    duration: 120,
    thumbnailUrl: "https://i.ytimg.com/vi/eYPyIq5Y3Rk/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "4",
    title: "Quick guide to CSS focus states",
    channel: {
      name: "Kevin Powell",
      id: "KevinPowell",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
    },
    views: 112,
    postedAt: new Date("2023-9-19"),
    duration: 4343,
    thumbnailUrl: "https://i.ytimg.com/vi/apdD69J4bEc/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "5",
    title: "I Cannot Believe React Made A Hook For This",
    channel: {
      name: "Web Dev Simplified",
      id: "WebDevSimplified",
      profileUrl:
        "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
    },
    views: 42345,
    postedAt: new Date("2023-03-02"),
    duration: 1000,
    thumbnailUrl: "https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "6",
    title: "I Got Laid Off...",
    channel: {
      name: "Caleb Curry",
      id: "CalebCurry",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
    },
    views: 10340,
    postedAt: new Date("2023-03-03"),
    duration: 54,
    thumbnailUrl: "https://i.ytimg.com/vi/i2JVQdLnkAY/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "7",
    title: "Tails OS in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: 10323340,
    postedAt: new Date("2023-08-09"),
    duration: 100,
    thumbnailUrl: "https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "8",
    title: "Zig in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: 20323340,
    postedAt: new Date("2023-09-09"),
    duration: 105,
    thumbnailUrl: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "9",
    title: "Bus Camping In The Rain",
    channel: {
      name: "Steve Wallis",
      id: "campingwithsteve",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_lxDevINPpiqaJJ0LnB4Ih1NXx-7tPu5KA0919KmPbXk4E=s68-c-k-c0x00ffffff-no-rj",
    },
    views: 2362629,
    postedAt: new Date("2022-05-20"),
    duration: 732,
    thumbnailUrl:
      "https://i.ytimg.com/vi/tFSldOXyE0k/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLBiqiRWSZdKqANK7hFcinlU_L0aWA",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "10",
    title:
      "3 Days in Arctic Survival Shelter - Solo Bushcraft Camping & Blacksmithing.",
    channel: {
      name: "Outdoor Boys",
      id: "OutdoorBoys",
      profileUrl:
        "https://yt3.ggpht.com/ytc/AIdro_kMwdFZd-Nl1trq6PgKkkqH58o9Lj0phbNoTaFTtNeoNg4=s68-c-k-c0x00ffffff-no-rj",
    },
    views: 2362629,
    postedAt: new Date("2022-05-20"),
    duration: 732,
    thumbnailUrl:
      "https://i.ytimg.com/vi/iys_pmJSp9M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBdy89SAuNY_LTPrP1mRvOlcJbnUQ",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];
