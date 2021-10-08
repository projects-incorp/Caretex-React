export default function Contact() {
  return (
    <>
      <p className="text-2xl font-semibold ml-4">Contact</p>
      <div className="h-full ml-4 ">
        <p className="p-2 mt-10 text-sm">Your Email</p>
        <input
          type="email"
          className="outline-none border-b-2 pl-2 p-1 w-10/12 border-black"
          placeholder="abc@xyz.com"
        ></input>
        <p className="p-2 mt-6 text-sm">Mobile Number</p>
        <input
          type="tel"
          className="outline-none border-b-2 pl-2 p-1 w-10/12 border-black"
          placeholder="2020202020"
        ></input>
        <p className="p-2 mt-6 text-sm">Location</p>
        <input
          type="text"
          className="outline-none border-b-2 pl-2 p-1 w-10/12 border-black"
          placeholder="Mumbai"
        ></input>
      </div>
    </>
  );
}
