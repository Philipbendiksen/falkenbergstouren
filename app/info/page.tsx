import Image from "next/image";

const Info = () => {
  return (
    <>
      <div className="text-3xl text-center mt-8">
        Information om Tour de Falkenberg 2025
      </div>

      <div className="m-14">
        <Image
          src="/images/Reklamblad.jpg"
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
