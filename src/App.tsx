import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { CATEGORIES, Category, VIDEOS } from "./dummy-data/home";
import { PageHeader } from "./layout/PageHeader";
import VideoGridItem from "./components/VideoGridItem";
import SideBar from "./layout/SideBar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    CATEGORIES[0]
  );

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <SideBar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {VIDEOS.map((video) => (
              <VideoGridItem
                // key={video.id}
                // id={video.id}
                // channel={video.channel}
                // title={video.title}
                // views={video.views}
                // duration={video.duration}
                // postedAt={video.postedAt}
                // thumbnailUrl={video.thumbnailUrl}
                // videoUrl={video.videoUrl}
                {...video}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
