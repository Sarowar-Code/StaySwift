import Image from "next/image";

const Gallery = () => {
    return (
        <section className="container">
            <div className="grid grid-cols-2 imageshowCase">
                <Image
                    src="/images/1.png"
                    className="h-[400px]"
                    alt="Iamge1"
                    height={500}
                    width={300}
                />

                <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
                    <Image
                        src="/images/2.png"
                        alt="Image2"
                        height={300}
                        width={180}
                    />
                    <Image
                        src="/images/3.png"
                        alt="Image3"
                        height={300}
                        width={180}
                    />
                    <Image
                        src="/images/4.png"
                        alt="Image4"
                        height={300}
                        width={180}
                    />
                    <Image
                        src="/images/5.png"
                        alt="Image5"
                        height={300}
                        width={180}
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
