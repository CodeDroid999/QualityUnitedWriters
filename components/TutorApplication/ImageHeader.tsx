import Image from 'next/image';

const ImageHeader = () => {
  const title = '<h1 class="text-4xl font-bold">Background Info</h1>';
  const imageUrl = '/your-image-url.jpg';

  return (
    <div className="relative h-screen">
      <div className="relative h-full">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background Image"
        />
      </div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white"
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
    </div>
  );
};

export default ImageHeader;
