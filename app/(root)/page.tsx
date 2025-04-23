import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {searchParams: Promise<{query: string}>}) {

  const query = (await searchParams)?.query;

  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1, image: "https://play-lh.googleusercontent.com/7oW_TFaC5yllHJK8nhxHLQRCvGDE8jYIAc2SWljYpR6hQlFTkbA6lNvER1ZK-doQnQ=w480-h960-rw",name:"yash" },
      _id: 1,
      description: "This is a description",
      image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots"
    }
  ];

  
  return (
   <>
    <section className="pink_container">
     <h1 className="heading">Pitch Your Startup <br /> Connect with People</h1>

      <p className="sub-heading !max-w-3xl">
Submit ideas, Vote of Pitches, and get Noticed in Virtual Competetions. 

      </p>
    <SearchForm query={query} />
    </section>
    
    <section className="section_container">
    <p className="text-30-bold">{query ? `Search Results for "${query}"` : "All Start Up"}</p>
    
    <ul className="mt-7 card_grid">

      {
        posts?.length > 0 ? posts.map((post: StartupPostType,index: number) => ( <StartupCard key={post?._id} post={post} /> ) ) : (<>
        <p className="no-results">No Startup found</p>
        </>)
      }
    </ul>
    
    </section>
   </>
  );
}
