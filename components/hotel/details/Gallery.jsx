import Image from "next/image";

const Gallery = ({ gallery }) => {
    const newGallery = [...gallery];
    newGallery.shift();

    return (
        <section className="container">
            <div className="grid grid-cols-2 imageshowCase">
                <Image
                    src={gallery[0]}
                    className="h-[400px]"
                    alt="Iamge1"
                    height={400}
                    width={300}
                />

                <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
                    {newGallery.map((image) => (
                        <Image
                            key={image}
                            src={image}
                            alt="SubImage"
                            height={300}
                            width={180}
                            className="h-[400px]"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
