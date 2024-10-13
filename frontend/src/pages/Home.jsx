import Hometext from "../../components/Hometext"
import Homevid from "../../components/Homevid"

function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <Homevid/>
      {/* overview section */}
     <Hometext/>

     <div className="h-96 w-screen flex justify-center items-center gap-12 bg-blue-500 mt-64 ">
      <p>50+</p>
      <p>200k+</p>
      <p>25+</p>
      <p>50+</p>
      <p>50+</p>
     </div>
     


     <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">Competitions</h1>
      <p className="p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam dolorem facere sequi necessitatibus deserunt. Reprehenderit atque libero hic ullam voluptates? Numquam minima inventore Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi animi sequi expedita quis quaerat fuga est commodi. Alias aliquam eius enim dolorem eaque necessitatibus itaque reprehenderit asperiores totam. Ullam, eius? sapiente corrupti odit perspiciatis maiores ut?</p>

    <div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> <h2 className="text-2xl font-bold">CYBER SECURITY</h2>
      <hr />
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> <h2 className="text-2xl font-bold">artificial intelligence</h2>
      <hr />
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> <h2 className="text-2xl font-bold">Development and programming</h2>
      <hr />
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> <h2 className="text-2xl font-bold">Robotics & Electronics</h2>
      <hr />
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> <h2 className="text-2xl font-bold">Engineering Competitions</h2>
      <hr />
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> <h2 className="text-2xl font-bold">Business and Finance</h2>
      <hr />
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg> <h2 className="text-2xl font-bold">Graphics and Animations</h2>
      
      </div>
    </div>

     </div>


     <p className="mt-4 p-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum labore suscipit consectetur nobis aspernatur iure fugiat, ipsa culpa inventore nostrum facilis numquam vitae commodi ea! Id delectus velit nulla! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maxime, placeat vero error ipsum reprehenderit temporibus quaerat ducimus quidem dolorum aperiam quisquam mollitia libero voluptatem, nulla in id ab. Reiciendis.</p>

     <button className="bg-[#024CAA]">See All Competitions</button>
    </div>
  )
}

export default Home