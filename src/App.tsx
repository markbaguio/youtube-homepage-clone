import { useState } from "react";
import { CategoryPills } from "./components/CategoryPills";
import { CATEGORIES, Category, VIDEOS } from "./dummy-data/home";
import { PageHeader } from "./layout/PageHeader";
import VideoGridItem from "./components/VideoGridItem";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    CATEGORIES[0]
  );

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto, 1fr] flex-grow-1 overflow-auto">
        <div>SideBar</div>
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
                key={video.id}
                id={video.id}
                channel={video.channel}
                title={video.title}
                views={video.views}
                duration={video.duration}
                postedAt={video.postedAt}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
              ></VideoGridItem>
            ))}
          </div>
        </div>
        {/**
         * grid-cols-[repeat(auto-fill, minmax(300px, 1fr))] this means that the column should not be less than 300px and if it gets to the point where it can add more columns it will add automatically.
         */}
      </div>
    </div>
  );
}

export default App;
