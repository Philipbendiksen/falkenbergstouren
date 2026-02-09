import Image from "next/image";

const Info = () => {
  return (
    <>
      <div className="text-3xl text-center mt-8">
        Information om Tour de Falkenberg 2025
      </div>

      <div className="mb-14 ml-14 mr-14 mt-4">
        <Image
          src="/images/Inbjudan jpg.1.jpeg"
          alt="Bada på Skrea Strand"
          width={800}
          height={600}
          className="w-full mt-6 md:w-2/4 m-auto h-auto rounded-lg shadow-lg object-cover object-center"
        />
      </div>
    </>
  );
};

export default Info;
